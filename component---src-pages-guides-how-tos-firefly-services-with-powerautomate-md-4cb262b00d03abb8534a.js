"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[612],{73306:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return h}});var i=a(58168),n=a(80045),s=(a(88763),a(15680)),o=a(83407);const l=["components"],p={},r=(d="InlineAlert",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)});var d;const m={_frontmatter:p},c=o.A;function h(e){let{components:t}=e,a=(0,n.A)(e,l);return(0,s.mdx)(c,(0,i.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"integrating-firefly-services-with-microsoft-power-automate"},"Integrating Firefly Services with Microsoft Power Automate"),(0,s.mdx)("p",null,"Microsoft's ",(0,s.mdx)("a",{parentName:"p",href:"https://make.powerautomate.com"},"Power Automate")," is a powerful no-code solution that lets developers and non-developers alike create flexible workflows to automate processing using multiple different services. Firefly Services can be employed in the Power Automate platform and in this article, we'll walk you through the process of creating a sample workflow. Keep in mind that Power Automate is incredibly flexible and the example shown here is just one possible use of the platform."),(0,s.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.mdx)("p",null,"To complete this tutorial, you will need:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Firefly API credentials. If you don't have them yet, first visit the ",(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/firefly-services/docs/guides/get-started/"},"Firefly Services Getting Started guide")," to obtain a ",(0,s.mdx)("inlineCode",{parentName:"li"},"client_id")," and ",(0,s.mdx)("inlineCode",{parentName:"li"},"client_secret"),"."),(0,s.mdx)("li",{parentName:"ul"},"An account with Microsoft and access to Power Automate. ")),(0,s.mdx)("h2",{id:"workflow"},"Workflow"),(0,s.mdx)("p",null,"Our workflow will use the Firefly API to generate images. The steps involved are:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Reading a set of prompts from a Microsoft list."),(0,s.mdx)("li",{parentName:"ul"},"Sending each prompt to Firefly."),(0,s.mdx)("li",{parentName:"ul"},"Take the result and send an email.")),(0,s.mdx)("p",null,"For simplicity's sake, this flow will be manually triggered, but certainly, but you could create a dynamically triggered workflow."),(0,s.mdx)("h2",{id:"step-1-defining-our-prompts"},"Step 1: Defining our prompts"),(0,s.mdx)("p",null,"As described earlier, we will use Microsoft List to define our prompts. We created a new list, named it ",(0,s.mdx)("em",{parentName:"p"},"Prompts"),", and added two simple values in the first column."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"694px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/55ee63870a458b3de43194916dde0a1e/5530d/shot1.webp 320w","/firefly-api-docs/static/55ee63870a458b3de43194916dde0a1e/0c8fb/shot1.webp 640w","/firefly-api-docs/static/55ee63870a458b3de43194916dde0a1e/a23a1/shot1.webp 694w"],sizes:"(max-width: 694px) 100vw, 694px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/55ee63870a458b3de43194916dde0a1e/dd4a7/shot1.png 320w","/firefly-api-docs/static/55ee63870a458b3de43194916dde0a1e/0f09e/shot1.png 640w","/firefly-api-docs/static/55ee63870a458b3de43194916dde0a1e/91652/shot1.png 694w"],sizes:"(max-width: 694px) 100vw, 694px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/firefly-api-docs/static/55ee63870a458b3de43194916dde0a1e/91652/shot1.png",alt:"Microsoft List with two prompts",title:"Microsoft List with two prompts",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"step-2-create-the-flow"},"Step 2: Create the flow"),(0,s.mdx)("p",null,"Next, create a new ",(0,s.mdx)("em",{parentName:"p"},"Instant")," Power Automate flow. This will let us test as needed without being tied to any automatic process. Everything demonstrated in this article absolutely ",(0,s.mdx)("em",{parentName:"p"},"could")," run in that scenario. "),(0,s.mdx)("h2",{id:"step-3-read-our-list"},"Step 3: Read our list"),(0,s.mdx)("p",null,'PowerAutomate has steps that automatically integrate with Lists, so the next step will be to add the "Get items" action from Sharepoint. This will require you to configure the Sharepoint site hosting and select the list. '),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"624px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.18749999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/ea847dd31ff3b800aa4b8efa0ee37d32/5530d/shot2.webp 320w","/firefly-api-docs/static/ea847dd31ff3b800aa4b8efa0ee37d32/5f6bc/shot2.webp 624w"],sizes:"(max-width: 624px) 100vw, 624px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/ea847dd31ff3b800aa4b8efa0ee37d32/dd4a7/shot2.png 320w","/firefly-api-docs/static/ea847dd31ff3b800aa4b8efa0ee37d32/08d47/shot2.png 624w"],sizes:"(max-width: 624px) 100vw, 624px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/firefly-api-docs/static/ea847dd31ff3b800aa4b8efa0ee37d32/08d47/shot2.png",alt:"Step configured to read list values",title:"Step configured to read list values",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Note that we've renamed the action to ",(0,s.mdx)("em",{parentName:"p"},"Get Prompts"),"."),(0,s.mdx)("h2",{id:"step-4-define-variables"},"Step 4: Define Variables"),(0,s.mdx)("p",null,"The following two actions are optional but help us out later in the flow. Create two actions to initialize variables. We're going to create two string values to store our Firefly authentication. The first one should use these values:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Name: ",(0,s.mdx)("inlineCode",{parentName:"li"},"FIREFLY_CLIENT_ID")),(0,s.mdx)("li",{parentName:"ul"},"Type: ",(0,s.mdx)("inlineCode",{parentName:"li"},"String")),(0,s.mdx)("li",{parentName:"ul"},"Value: ",(0,s.mdx)("inlineCode",{parentName:"li"},"Your client id"))),(0,s.mdx)("p",null,"Name this step, ",(0,s.mdx)("em",{parentName:"p"},"Set Firefly Client ID"),"."),(0,s.mdx)("p",null,"The next one will use these values:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Name: ",(0,s.mdx)("inlineCode",{parentName:"li"},"FIREFLY_CLIENT_SECRET")),(0,s.mdx)("li",{parentName:"ul"},"Type: ",(0,s.mdx)("inlineCode",{parentName:"li"},"String")),(0,s.mdx)("li",{parentName:"ul"},"Value: ",(0,s.mdx)("inlineCode",{parentName:"li"},"Your client secret"))),(0,s.mdx)("p",null,"Name this step, ",(0,s.mdx)("em",{parentName:"p"},"Set Firefly Client Secret"),"."),(0,s.mdx)("p",null,"At this point, your flow should look like this:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"259px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"177.992277992278%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/ec85be9d4eca2c4aa569b5ee0580b3ec/5a68b/shot3.webp 259w"],sizes:"(max-width: 259px) 100vw, 259px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/ec85be9d4eca2c4aa569b5ee0580b3ec/8b5e5/shot3.png 259w"],sizes:"(max-width: 259px) 100vw, 259px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/firefly-api-docs/static/ec85be9d4eca2c4aa569b5ee0580b3ec/8b5e5/shot3.png",alt:"The flow, so far",title:"The flow, so far",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"step-6-exchange-credentials"},"Step 6: Exchange Credentials"),(0,s.mdx)("p",null,"The next step will use the HTTP action to exchange our credentials for an access token. Add a new step, HTTP, and use the following URI:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"https://ims-na1.adobelogin.com/ims/token/v3?grant_type=client_credentials&client_id=@{variables('FIREFLY_CLIENT_ID')}&client_secret=@{variables('FIREFLY_CLIENT_SECRET')}&scope=openid,AdobeID,firefly_enterprise,firefly_api,ff_apis\n")),(0,s.mdx)(r,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"As soon as you enter that value, the two ",(0,s.mdx)("inlineCode",{parentName:"p"},"variables")," section will change to reference the two earlier steps we defined. Set the method to POST and name the action, ",(0,s.mdx)("em",{parentName:"p"},"Get Access Token"),"."),(0,s.mdx)("p",null,"Follow this with a ",(0,s.mdx)("em",{parentName:"p"},"Parse JSON")," step. The content value will point to the body of the previous step. The schema will be the following:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "object",\n    "properties": {\n        "access_token": {\n            "type": "string"\n        },\n        "token_type": {\n            "type": "string"\n        },\n        "expires_in": {\n            "type": "integer"\n        }\n    }\n}\n')),(0,s.mdx)("p",null,'This was created by using the "Use sample payload to generate schema" support in the step and by passing in a previous authentication result. '),(0,s.mdx)("p",null,"The net result of these two steps is to get an access token for Firefly calls and parse the result so Power Automate can make use of it. "),(0,s.mdx)("h2",{id:"step-6-initialize-image-string"},"Step 6: Initialize Image String"),(0,s.mdx)("p",null,"Before we start using the API, we need to define a variable, ",(0,s.mdx)("em",{parentName:"p"},"images"),", that we'll use for our results. Add a new step to initialize a variable with these values:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"name: ",(0,s.mdx)("inlineCode",{parentName:"li"},"images")),(0,s.mdx)("li",{parentName:"ul"},"type: ",(0,s.mdx)("inlineCode",{parentName:"li"},"String")),(0,s.mdx)("li",{parentName:"ul"},"value: ",(0,s.mdx)("inlineCode",{parentName:"li"},"Leave blank"))),(0,s.mdx)("p",null,'Name this step, "Initialize Image String".'),(0,s.mdx)("p",null,"At this point, your flow should look like this:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"256px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"303.90625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/60d71e9bccfb1a394a173bd8e42212d0/4fae8/shot4.webp 256w"],sizes:"(max-width: 256px) 100vw, 256px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/60d71e9bccfb1a394a173bd8e42212d0/e3135/shot4.png 256w"],sizes:"(max-width: 256px) 100vw, 256px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/firefly-api-docs/static/60d71e9bccfb1a394a173bd8e42212d0/e3135/shot4.png",alt:"The flow, so far",title:"The flow, so far",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("h2",{id:"step-7-beginning-the-loop"},"Step 7: Beginning the Loop"),(0,s.mdx)("p",null,"OOur workflow will generate results for each prompt and email them, so now we add a new action, ",(0,s.mdx)("em",{parentName:"p"},"Apply to each")," (found in the ",(0,s.mdx)("em",{parentName:"p"},"Control")," section when adding a new action). You will be prompted to select an output to drive the looping. If you remember, we read in our Microsoft List value in the beginning, so choose that:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"750px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/49f7c4c096b7890f1be213b363a77d8e/5530d/shot5.webp 320w","/firefly-api-docs/static/49f7c4c096b7890f1be213b363a77d8e/0c8fb/shot5.webp 640w","/firefly-api-docs/static/49f7c4c096b7890f1be213b363a77d8e/3ea8a/shot5.webp 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/49f7c4c096b7890f1be213b363a77d8e/dd4a7/shot5.png 320w","/firefly-api-docs/static/49f7c4c096b7890f1be213b363a77d8e/0f09e/shot5.png 640w","/firefly-api-docs/static/49f7c4c096b7890f1be213b363a77d8e/e9985/shot5.png 750w"],sizes:"(max-width: 750px) 100vw, 750px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/firefly-api-docs/static/49f7c4c096b7890f1be213b363a77d8e/e9985/shot5.png",alt:"Defining the loop variable",title:"Defining the loop variable",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"All of the next steps will be defined inside this loop. "),(0,s.mdx)("h2",{id:"step-8-resetting-the-images-variable"},"Step 8: Resetting the Images Variable"),(0,s.mdx)("p",null,"In step six, we created an image variable named ",(0,s.mdx)("inlineCode",{parentName:"p"},"images"),". The point of this variable is to hold the results from Firefly so that it can be emailed. We need to reset this value for each prompt to an empty string. So, the first step inside our ",(0,s.mdx)("em",{parentName:"p"},"Apply to each")," loop is a ",(0,s.mdx)("em",{parentName:"p"},"Set the variable value")," action. It sets the variable, ",(0,s.mdx)("inlineCode",{parentName:"p"},"images"),", to null. "),(0,s.mdx)("p",null,"You can do this by entering: ",(0,s.mdx)("inlineCode",{parentName:"p"},"@{null}")),(0,s.mdx)("h2",{id:"step-9-calling-fireflys-text-to-image-api"},"Step 9: Calling Firefly's Text-to-Image API"),(0,s.mdx)("p",null,"We'll add another HTTP action that will call the ",(0,s.mdx)("a",{parentName:"p",href:"../api/image_generation/"},"Text-to-Image")," API. This API call requires a few parameters, including the prompt and number of desired images if you want more than one. "),(0,s.mdx)("p",null,"Begin by setting the URI to the API endpoint, as specified in the documentation: ",(0,s.mdx)("inlineCode",{parentName:"p"},"https://firefly-api.adobe.io/v2/images/generate"),". "),(0,s.mdx)("p",null,"Next, set the method to ",(0,s.mdx)("inlineCode",{parentName:"p"},"POST"),". "),(0,s.mdx)("p",null,"To access the API, two credentials must be sent in the headers. Begin by specifying an ",(0,s.mdx)("inlineCode",{parentName:"p"},"Authorization")," header which will use the access token gotten earlier. This can be used by inputting this value: ",(0,s.mdx)("inlineCode",{parentName:"p"},"Bearer @{body('Parse_JSON')?['access_token']}"),". Next, the header ",(0,s.mdx)("inlineCode",{parentName:"p"},"X-Api-Key")," should be set with the Firefly Client ID specified earlier: ",(0,s.mdx)("inlineCode",{parentName:"p"},"@{variables('FIREFLY_CLIENT_ID')}")),(0,s.mdx)("p",null,"The last thing required is the actual body of the request. The number of images and size will be hard coded, with the prompt being dynamic based on the loop value:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "n": 4,\n  "prompt": "@{items(\'Apply_to_each\')?[\'Title\']}",\n  "size": {\n    "width": "1024",\n    "height": "1024"\n  }\n}\n')),(0,s.mdx)("p",null,"You should follow this step with a Parse JSON action again. Add that step and name it ",(0,s.mdx)("em",{parentName:"p"},"Parse Firefly Result JSON"),". Point it to the body of the previous step and use this schema:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "object",\n    "properties": {\n        "version": {\n            "type": "string"\n        },\n        "size": {\n            "type": "object",\n            "properties": {\n                "width": {\n                    "type": "integer"\n                },\n                "height": {\n                    "type": "integer"\n                }\n            }\n        },\n        "predictedContentClass": {\n            "type": "string"\n        },\n        "outputs": {\n            "type": "array",\n            "items": {\n                "type": "object",\n                "properties": {\n                    "seed": {\n                        "type": "integer"\n                    },\n                    "image": {\n                        "type": "object",\n                        "properties": {\n                            "id": {\n                                "type": "string"\n                            },\n                            "presignedUrl": {\n                                "type": "string"\n                            }\n                        }\n                    }\n                },\n                "required": [\n                    "seed",\n                    "image"\n                ]\n            }\n        }\n    }\n}\n')),(0,s.mdx)("p",null,"As before, the net result of these two steps is to make an HTTP call and parse the result into usable data. "),(0,s.mdx)("h2",{id:"step-10-defining-image-html"},"Step 10: Defining Image HTML"),(0,s.mdx)("p",null,'The next step will be twofold. We want to create a string variable for email that will include all the results from the Firefly call, but we want to define this in HTML. To do this, create another "Apply to each" step. This will use the output from the previous step that parsed the JSON result of the Firefly call: ',(0,s.mdx)("inlineCode",{parentName:"p"},"@{body('Parse_Firefly_Result_JSON')?['outputs']}")," Notice we're explicitly using the ",(0,s.mdx)("inlineCode",{parentName:"p"},"outputs")," portion of the result which will contain one object per image result. "),(0,s.mdx)("p",null,"Within this loop, add an ",(0,s.mdx)("em",{parentName:"p"},"Append to String variable")," step. The variable will be ",(0,s.mdx)("inlineCode",{parentName:"p"},"images"),", and the value, this little bit of complex logic: "),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"@{concat('<img src=\"',items('For_each')?['image']['presignedUrl'],'\">')}\n")),(0,s.mdx)("p",null,"This value uses the ",(0,s.mdx)("inlineCode",{parentName:"p"},"contact")," function to join three strings:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"First, the beginning of an HTML image tag."),(0,s.mdx)("li",{parentName:"ul"},"Then, the current image from the ",(0,s.mdx)("inlineCode",{parentName:"li"},"outputs")," loop, specifying the ",(0,s.mdx)("inlineCode",{parentName:"li"},"presignedUrl")," value."),(0,s.mdx)("li",{parentName:"ul"},"A closing bracket.")),(0,s.mdx)("h2",{id:"step-11-email-the-result"},"Step 11: Email the Result"),(0,s.mdx)("p",null,"The final step will handle emailing the result. You want to ensure it's in the loop for our prompts but ",(0,s.mdx)("em",{parentName:"p"},"not")," the previous loop that iterated over the image results. "),(0,s.mdx)("p",null,"For the ",(0,s.mdx)("inlineCode",{parentName:"p"},"To")," field, specify your email and pick anything appropriate for the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Subject"),". "),(0,s.mdx)("p",null,"The body should contain the prompt and our ",(0,s.mdx)("inlineCode",{parentName:"p"},"images")," variable:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"Here are your generated images for the prompt, @{items('Apply_to_each')?['Title']}\n\n@{variables('images')}\n")),(0,s.mdx)("h2",{id:"results"},"Results"),(0,s.mdx)("p",null,"With the flow complete, we can save and test it. As it processes, it will fire off one email as each prompt is done. The images are somewhat large, so the screenshot below only shows one, but the additional results are directly beneath it:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"650px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"108.43750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/7fd87fb4d3bfd89ec59cd67f03a27ee4/5530d/shot6.webp 320w","/firefly-api-docs/static/7fd87fb4d3bfd89ec59cd67f03a27ee4/0c8fb/shot6.webp 640w","/firefly-api-docs/static/7fd87fb4d3bfd89ec59cd67f03a27ee4/309d5/shot6.webp 650w"],sizes:"(max-width: 650px) 100vw, 650px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/firefly-api-docs/static/7fd87fb4d3bfd89ec59cd67f03a27ee4/dd4a7/shot6.png 320w","/firefly-api-docs/static/7fd87fb4d3bfd89ec59cd67f03a27ee4/0f09e/shot6.png 640w","/firefly-api-docs/static/7fd87fb4d3bfd89ec59cd67f03a27ee4/663f3/shot6.png 650w"],sizes:"(max-width: 650px) 100vw, 650px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/firefly-api-docs/static/7fd87fb4d3bfd89ec59cd67f03a27ee4/663f3/shot6.png",alt:"Email example",title:"Email example",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-how-tos-firefly-services-with-powerautomate-md-4cb262b00d03abb8534a.js.map