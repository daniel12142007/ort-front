import axios from 'axios';

export const api = {
    sendMessageToOpenAI: async (apiKey: string, userMessage: string, messages: Array<{ role: string; content: string }>) => {
        return axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                // model: 'chatgpt-4o-latest',
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    ...messages,
                    { role: 'user', content: userMessage },
                ],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        );
    },
};
