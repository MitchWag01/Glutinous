
export const sendTextToGPT = async (text: string) => {
    const apiKey ="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"; // Replace with your GPT API key
    const url = 'https://api.openai.com/v1/completions';

    try {
      const prompt = `Is ${text} gluten-free, Yes or No?`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: [" "]
        })
      });

      const data = await response.json();
      const generatedText = data.choices[0].text;

      return generatedText;
    } catch (error) {
      console.error('Error:', error);
      return '';
    }
  };