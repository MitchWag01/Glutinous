import React, { useState } from 'react';
import { Button, Stack } from '@mui/material';
import Home from './pages/Home';

const API_KEY = "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"; // Replace with your actual API key

const App = () => {
  const [ingredients, setIngredients] = useState("");
  const [isGlutenFree, setIsGlutenFree] = useState("");

  async function callOpenAIAPI() {
    console.log("Calling API");

    const prompt = `Is ${ingredients} gluten-free, Yes or No?`;

    const APIBody = {
      model: "text-davinci-003",
      prompt,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"]
    };

    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify(APIBody)
      });

      const data = await response.json();
      console.log(data);

      if (data.choices && data.choices.length > 0) {
        const generatedText = data.choices[0].text.trim();
        setIsGlutenFree(generatedText);
      } else {
        setIsGlutenFree("No response from the API");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsGlutenFree("API call failed");
    }
  }

  return (
    <Stack className="bgImage">
      <Home />
      <textarea
        onChange={(e) => setIngredients(e.target.value)}
        placeholder='Enter Your Ingredients List'
        cols={75}
        rows={10}
      />
      <Button onClick={callOpenAIAPI}>
        SCAN
      </Button>
      {isGlutenFree !== "" && (
        <h3>This food {isGlutenFree} gluten-free</h3>
      )}
    </Stack>
  );
};

export default App;
