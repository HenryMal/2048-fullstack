import React from "react"
import { Box } from "@mui/material"
import Grid from "./Grid"
import { Tile } from "./Tile"

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
      }}>
      <Grid />
      
      {/* this shit we need to have another higher component higer then set this shit */}
      {/* <Tile sx={{
        position: '300px'
        ,
      }}/> */}
    </Box>
  )
}

export default Board