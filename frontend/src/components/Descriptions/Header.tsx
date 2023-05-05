import { Typography, Stack, Box } from '@mui/material'
import ScoreView from './HeaderComponents/ScoreView'
import React from 'react'

const Header = () => {

  return (
    <>
      <Typography
      variant="h1"
      fontWeight="bold"
      sx={{
        width: "max-content",
        backgroundClip: "text",
        backgroundColor: "#776e65",
        WebkitTextFillColor: "transparent",
      }}
       >
      2048
      </Typography>
      
      {/* All of this below can be duplicated. make score components, wrap it, put that shit in here.*/}
      <ScoreView />
    </>
  )
}

export default Header