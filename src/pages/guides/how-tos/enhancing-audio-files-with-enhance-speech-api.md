---
title: Enhancing Audio Files with the Enhance Speech API
description: This how-to guides you through the process of integrating the Firefly Services APIs in PowerAutomate.
---

# Enhancing Audio Files with the Enhance Speech API

The Enhance Speech API, part of Adobe Audio Services, enables rich workflow automation around audio post-production.
This guide will demonstrate how to run the Enhance Speech model for your audio assets.
To accomplish this, we'll walk you through how to create and upload data for an audio `Asset`, create a `SpeechEnhancement` and download its data when ready.

## Prerequisites

To complete this tutorial, you will need:

* Firefly API credentials. If you don't have them yet, first visit the Firefly Services [Getting Started](../../../guides/get-started.md) guide to obtain a `client_id` and `client_secret`.
* An HTTP client, like [Postman](https://www.postman.com/).

Before getting started, we strongly encourage you to explore [Enhance Speech within Adobe Podcast][esqa-link]. The audio enhancement technology that backs this API is the same as the one available on the web, so exploring there will allow you to develop an intuition for how Enhance Speech works, without writing any code!

## Concepts

Before we dive into the API, it will be helpful to level-set on the following concepts:

1. `Asset`: An `Asset` represents a file that contains audio that can be processed by Enhance Speech. Currently, the Enhance Speech API only support audio-only files like MP3 files. However, we might support other files that contain audio (like video files), in the future.
2. `SpeechEnhancement`: A `SpeechEnhancement` represents an `Asset` that has been enhanced at a particular strength. As you can enhance an `Asset` at multiple strengths, it possible to have many `SpeechEnhancement`s for a given `Asset`.

[esqa-link]:https://podcast.adobe.com/enhance

## Enhance Speech API Walkthrough

### Step 0: Obtain a valid access token

Ensure you have reference to a valid access token. See the [Authentication Guide](../concepts/authentication/index.md) for details on how to obtain
such a token.

### Step 1: Create an asset

Before we can run the Enhance Speech model on our assets, we need to register a new asset with Adobe.
To accomplish this, we use the `POST /audio_services/v1/assets` endpoint.
This endpoint requires, as a JSON request body, the following information:

* `filename`:
    * Description: A filename (with extension) of the asset. We use this filename when naming the final speech enhancement.
    * Example: "earhart-aviation.mp3"
* `byte_size`:
    * Description: The number of bytes of the asset.
    * Example: 59400
* `checksum`
    * Description: The MD5 checksum of the asset.
    * Example: "AWzJTRSXGy5JsL+Phh/cFA=="
* `content_type`
    * Description: The content type of the asset.
    * Example: "audio/mpeg"

We use the `byte_size`, `checksum` and `content_type` to enable secure and verifiable direct uploads of your asset our object store.

Putting this all together. Using the curl HTTP client, we can create an asset:

```sh
curl --location 'https://firefly-api-enterprise-stage.adobe.io/audio_services/v1/assets' \
--header 'x-api-key: {CLIENT_ID}' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--data '{
    "filename": "earhart-for-dub.mp3",
    "byte_size": 59400,
    "checksum": "AWzJTRSXGy5JsL+Phh/cFA==",
    "content_type": "audio/mpeg"

}'
```

If all goes well, we'll get a `201 Created` response, with a payload like the following:

```json
{
    "id": "3445d7a0-2513-4606-b37b-bff0034c0214",
    "filename": "earhart-aviation.mp3",
    "upload_url": "https://phonos-recordings-staging.s3-accelerate.amazonaws.com/Assets/3445d7a0-2513-4606-b37b-bff0034c0214?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAS2MU72M7ACPXX764%2F20240409%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240409T213836Z&X-Amz-Expires=43200&X-Amz-Security-Token=FwoGZXIvYXdzEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDMyjVxJyIRosE7smGSLJAWqfi8jqgkF0iiCYFU1nq3xAzNalFsrmbNnJRpWZvOSjGREvQftcLr%2FVgG9rjuz1cskXD3H8umxVLOS6oVmjHdt0wmaRtx5C6ZvGp8tW7BL%2F0hsuuU%2FmmG0n8QmmuQjA%2BfeaRkwR6Fgw85SryaPZUxzXhX9Y2BypyeBDX1H5JTPUYpZA0fAu1g9nYncsIjbNgnBJvr5e42gBnJZQSyAeeE3dA%2BK9btul5QapF5of4JTHXngkhLSBm819JD9iXRjRiUAUfoofGYfDhiiw5NawBjItFfJCqsABzKqETJ6q87zlAHajnVODPJgGowODSXrrqNd%2BTnV%2B73UXZTYKNukt&X-Amz-SignedHeaders=content-length%3Bcontent-md5%3Bcontent-type%3Bhost&X-Amz-Signature=45bad70aa97e89bf6120a7a0ec22b0dfc4771060922c50e1ec5c876f13252c49",
    "status": "waiting_for_upload",
    "created_at": "2024-04-09T21:38:36.872Z",
    "updated_at": "2024-04-09T21:38:36.872Z",
    "byte_size": 59400,
    "content_type": "audio/mpeg",
    "checksum": "AWzJTRSXGy5JsL+Phh/cFA=="
}
```

As we can see in the API response, the `status` of this `Asset` is `waiting_for_upload`, which indicates we can't use it to create `SpeechEnhancement`s for it until upload data for it.

In the event that request parameters are structurally or semantically invalid, we'll get a `422` response. See the API specification for details.

#### Checksum Computation

An MD5 checksum is standard way to construct the equivalent of a human fingerprint for a file. If two files have the same MD5 checksum, then they almost certaintly are the same file. Critically, a MD5 checksum is *not* a credential and does not need to be treated as such, it only serves as a way to easily check identity.

For the sake of example, we'll use the CLI tools `openssl` and `base64` to demonstrate how to compute the MD5 checksum for a file:

```sh
$ openssl dgst -md5 -binary /Users/dlevenson/Documents/earhart-aviation.mp3 | base64
```

There are language-specific libraries for computing the MD5 checksum. For instance, in Python, you can compose `hashlib` and `base64` to compute the checksum.

```python
import hashlib
import base64

# Path to your file
file_path = 'path/to/your/asset`

# Open the file in binary mode and read its contents
with open(file_path, 'rb') as file:
    file_contents = file.read()

# Calculate the MD5 hash of the file
md5_hash = hashlib.md5(file_contents).digest()

# Encode the MD5 hash in base64
base64_encoded_hash = base64.b64encode(md5_hash)

# Convert bytes to string for display or use
base64_encoded_hash_str = base64_encoded_hash.decode('utf-8')
```

### Step 2: Upload data for the asset

In order to create `SpeechEnhancement`s for the `Asset`, the `Asset`'s `status` must be `ready_for_processing`. To do this, we need to upload valid data to the
object store using the `upload_url` included in the response to `POST /audio_services/v1/assets`.

### Step 3: Create a speech enhancement

### Step 4: Poll to learn when the speech enhancement is complete

### Step 5: Download the speech enhancement

