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

### Step 2: Upload data for the asset

### Step 3: Create a speech enhancement

### Step 4: Poll to learn when the speech enhancement is complete

### Step 5: Download the speech enhancement

