import React from 'react';
import { useState } from 'react';
import { Stack, Box, ThemeProvider } from '@mui/material';
import MenuButton from '../components/Buttons/MenuButton';
import ScanPage from './Scan';
import SearchPage from './SearchPage';
import CameraButton from '../components/Buttons/CameraButton';
import theme from '../themes/theme';
import NavBar from '../components/NavBar/Navbar';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { AlignHorizontalCenter } from '@mui/icons-material';
import MainCameraButton from '../components/Buttons/MainCameraButton';
const API_KEY = "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"; // this needs to become an environment variable



const Home = () => {
  const [ScanState, setScanState] = useState(false);
  const [SearchState, setSearchState] = useState(false);
  const [searchList, setSearchList] = useState<string[]>([]);


  // API to chat GPT
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
      stop: [" "]
    };

    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
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
    // onClick={callOpenAIAPI}
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack>
  
        {ScanState && <ScanPage ingredientsList="Jesse's bread preferences are a terror to our society as he likes raisin bread..." />}
        {SearchState && <SearchPage searchlist={searchList} />} 
        
        <Box       sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
          <MainCameraButton />
          {isGlutenFree !== "" && (
            <h3>
              Are The ingredients Gluten-free? {isGlutenFree}
            </h3>
          )}
        </Box >
        <Box   sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
          <NavBar />
        </Box>
      </Stack>
    </ThemeProvider>
    );
};

export default Home;
