import { Stack, Typography } from '@mui/material'
import React from 'react'

interface ScanProp {
    ingredientsList: string
}

const ScanPage: React.FC<ScanProp> = ({ingredientsList}) => {
    return (
        <Stack>
                  <Typography variant="h6">We will have to figure out the actual Scanning later</Typography>
      <Typography>Ingredients: {ingredientsList}</Typography>
        </Stack>    
    )
}

export default ScanPage;