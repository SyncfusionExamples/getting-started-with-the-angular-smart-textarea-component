# Getting Started with the Angular Smart TextArea Component 
A quick-start project that contains code to create and configure the Syncfusion Angular Smart TextArea component. This project also contains code to configure a few of the component's basic features.
 
Refer to the following documentation to learn about the Angular Smart TextArea component:

https://ej2.syncfusion.com/angular/documentation/smart-textarea/getting-started

Check out this online example of the Angular Smart TextArea Component:

https://ej2.syncfusion.com/angular/demos/#/fluent2/ai-smart-textarea/default 

Make sure that you have the latest versions of NodeJS and Visual Studio Code in your machine before starting to work on this project.

### Configuring AI Services

This project utilizes AI services to enhance component functionality. The Azure OpenAI service has been configured for this demo, but the Gemini model with the Vercel SDK can also be used.

To set up the AI services, navigate to `./src/app/ai-model.ts` and replace the placeholders with your actual credentials:

```
const azure = createAzure({
    resourceName: 'YOUR_RESOURCE_NAME',
    apiKey: 'YOUR_API_KEY',
});
const aiModel = azure('YOUR_MODEL_NAME');
// for gemini model
const google = createGoogleGenerativeAI({
    baseURL: "https://generativelanguage.googleapis.com/v1beta",
    apiKey: "API_KEY"
});
const aiModel = google('YOUR_MODEL_NAME');
```

Your Azure endpoint should resemble: `https://{resource_name}.openai.azure.com/`

For more information on Azure OpenAI configuration, consult the [Vercel AI SDK documentation](https://sdk.vercel.ai/providers/ai-sdk-providers/azure).

### How to run this application?
To run this application, you need to clone the `getting-started-with-the-angular-smart-textarea-component` repository and then open it in Visual Studio Code. Now, simply install all the necessary angular packages into your current project using the `npm install` command and run your project using the `ng serve` command.
