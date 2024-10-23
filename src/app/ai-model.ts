import { generateText } from "ai"
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { createAzure } from '@ai-sdk/azure';
import { createOpenAI } from '@ai-sdk/openai';

const google = createGoogleGenerativeAI({
    baseURL: "BASE_URL",
    apiKey: "API_KEY"
});

const aiModel = google('MODEL_NAME');

const azure = createAzure({
    resourceName: 'RESOURCE_NAME',
    apiKey: 'API_KEY',
});
//const aiModel = azure('MODEL_NAME');
const groq = createOpenAI({
    baseURL: 'BASE_URL',
    apiKey: 'API_KEY',
});
//const aiModel = openai('MODEL_NAME');
 
export async function getAzureChatAIRequest(options: any) {
    try {
        const result = await generateText({
            model: aiModel,
            messages: options.messages,
            topP: options.topP,
            temperature: options.temperature,
            maxTokens: options.maxTokens,
            frequencyPenalty: options.frequencyPenalty,
            presencePenalty: options.presencePenalty,
            stopSequences: options.stopSequences
        });
        return result.text;
    } catch (err) {
        console.error("Error occurred:", err);
        return null;
    }
}