import { Box, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';
import theme from '../themes/theme';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';


interface SearchProp {
  searchlist: string[];
}

const SearchPage: React.FC<SearchProp> = ({ searchlist }) => {
  const [searchText, setSearchText] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [printresult, setResult]= useState('')
  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchText.trim() !== '') {
      // Call the GPT API with searchText
      const generatedText = await sendTextToGPT(searchText);


      setResult('')
      // Log the generated text
      console.log(generatedText);

      // Add searchText to the searchlist array
      searchlist.push(searchText);
      


      // Store the GPT response
      setGptResponse(generatedText);

      // Show the pop-up
      setShowPopup(true);
      setResult(searchText)
      // Clear the searchText
      setSearchText('');
    }
  };

  const sendTextToGPT = async (text: string) => {
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

  const handleClosePopup = () => {
    // Hide the pop-up
    setShowPopup(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'centered', bgcolor: 'primary.main', borderRadius: '10px', height: '80px' }}>
          <SearchRounded sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: '35px' }} />
          <TextField
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleKeyDown}
            id="input-with-sx"
            label="Search ingredient here"
            variant="standard"
           
            sx={{
              color: 'black',
              '& .MuiInputBase-root': {
                height: '60px', // Increase the height
                padding: '10px', // Increase the padding
                width: '175px'
              },
            }}
          />
        </Box>
      </Box>

      <Dialog open={showPopup} onClose={handleClosePopup} maxWidth="md" fullWidth>
        <DialogTitle>Is it Gluten Free?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Result of "{printresult}":
            <br />
            {gptResponse}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup}>Close</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  )
}

export default SearchPage;