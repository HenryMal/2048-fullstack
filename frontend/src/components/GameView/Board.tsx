import React from "react"
import { Box } from "@mui/material"
import Grid from "./Grid"

const Board = () => {

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        width: '500px',
        height: '500px',
        backgroundColor: '#bbada0',
        borderRadius: '6px',
        position: 'absolute',
      }}>
      <Grid />
    </Box>
  )
}

export default Board