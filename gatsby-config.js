/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/firefly-api/',
  siteMetadata: {
    pages: [
      {
        title: 'Overview',
        path: '/'
      },
      {
        title: 'Guides',
        path: '/guides/'
      },
    ],
    subPages: [
      {
        title: 'Quickstart',
        path: '/guides/',
      },
      {
        title: 'Concepts',
        path: '/guides/concepts/',
        pages: [
          {
            title: 'Get Credentials',
            path: '/guides/concepts/create-credentials/'
          },
          {
            title: 'Authentication',
            path: '/guides/concepts/authentication/'
          },
          {
            title: 'Image Model Styles',
            path: '/guides/concepts/styles/'
          },
          {
            title: 'Rate limits',
            path: '/guides/concepts/rate-limits/'
          }
        ]
        },
        {
          title: 'How-Tos',
          path: '/guides/how-tos/create-your-first-ff-application.md',
          pages:[
            {
              title: 'Create Your First Firefly API Implementation',
              path: '/guides/how-tos/create-your-first-ff-application.md'
            }
          ]
        },
      {
        title: 'API Reference',
        path: '/guides/api/upload_image',
        pages: [
          {
            title: "Upload Image",
            path: "/guides/api/upload_image/"
          },
          {
            title: "Text to Image",
            path: "/guides/api/image_generation/"
          },
          {
            title: "Generative Expand",
            path: "/guides/api/generative_expand/"
          },
          {
            title: "Generative Fill",
            path: "/guides/api/generative_fill/"
          }
        ]
      },
      {
        title: 'Release Notes',
        path: '/guides/release-notes/',
      },
      {
        title: 'Help',
        path: '/guides/help/best-practices/',
        pages:[
          {
            title: 'Best Practices',
            path: '/guides/help/best-practices/'
          },
          {
            title: 'Troubleshooting',
            path: '/guides/help/troubleshooting'
          }
        ]
      }     
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};