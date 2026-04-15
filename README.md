# Getting Started with the Angular Smart TextArea Component

## Repository Description
A quick-start project that demonstrates how to create and configure the Syncfusion Angular Smart TextArea component with AI service integration capabilities, supporting both Azure OpenAI and Gemini models.

## Overview
This repository provides a practical guide for implementing the Syncfusion Angular Smart TextArea component in Angular applications with AI-powered features.

## Features
- **AI-Powered Text Completion**: Intelligent text suggestions and completion
- **Azure OpenAI Integration**: Configure Azure OpenAI service for AI functionality
- **Gemini Model Support**: Support for Google's Gemini model with Vercel AI SDK
- **Multi-Model Support**: Flexible configuration for different AI models

## Project Prerequisites
Ensure you have the following tools installed:
- [Visual Studio Code](https://code.visualstudio.com/download)
- [NodeJS](https://nodejs.org/en/download)
- Angular CLI
- AI Model API Key (Azure OpenAI or Google Gemini)

## Configuring AI Services

This project uses Azure OpenAI or Google's Gemini model. Navigate to `./src/app/ai-model.ts` and replace placeholders with your credentials:

```javascript
const azure = createAzure({
    resourceName: 'YOUR_RESOURCE_NAME',
    apiKey: 'YOUR_API_KEY',
});
const aiModel = azure('YOUR_MODEL_NAME');
```

Azure endpoint format: `https://{resource_name}.openai.azure.com/`

For more details, see the [Vercel AI SDK documentation](https://sdk.vercel.ai/providers/ai-sdk-providers/azure).

## Installation and Setup
1. Clone the repository: `git clone <repository-url>`
2. Navigate to project directory
3. Install packages using `npm install`

## How to Run This Application
To run this application:
1. Clone the repository: `git clone <repository-url>`
2. Configure credentials in `./src/app/ai-model.ts`
3. Run `npm install` then `ng serve`

## Documentation and Resources
For comprehensive information about the Angular Smart TextArea component:
- **Documentation**: https://ej2.syncfusion.com/angular/documentation/smart-textarea/getting-started
- **Live Demo**: https://ej2.syncfusion.com/angular/demos/#/fluent2/ai-smart-textarea/default
