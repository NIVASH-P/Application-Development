import OpenAIApi from 'openai';


const API_KEY = 'AIzaSyDtfZank2YsuIa33qUNgKwG0rjVY0jIzbY';

const openai = new OpenAIApi({
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true
});


export async function sendmessagetoopenAi(message)
{
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        prompt:message,
        temperature:0.9,
        max_tokens:256,
        top_p:1,
        frequency_penalty:0,
        presence_penalty:0
    })

    return response.data.choices[0].text;
}