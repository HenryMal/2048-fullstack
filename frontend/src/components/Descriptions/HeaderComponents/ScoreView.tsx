import React from 'react'
import { Box, Typography } from "@mui/material"

export type TileProps = {
  title: string,
  score: number,
}

const ScoreView = () => {

  return (
      <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        height: "max-content",
        width: "max-content",
        px: "25px",
        my: "10px",
        backgroundColor: "#bbada0",
        borderRadius: "3px",
      }}>
        <Typography
        fontSize="13px"
        fontWeight="bold"
        display="flex"
        justifyContent="center"
        sx={{
          width: "max-content",
          backgroundClip: "text",
          color: "#eee4da",
        }}
        >
          SCORE
        </Typography>
        <Typography
        fontSize="25px"
        fontWeight="bold"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "max-content",
          backgroundClip: "text",
          color: "#FFFFFF",
        }}
        >
          69420
        </Typography>
    </Box>
  )
}

export default ScoreView