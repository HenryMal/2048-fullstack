import React from 'react'
import { Box, Stack } from '@mui/material'
import Board from './Board'
import { TileProps, Tile } from './Tile'

const Game = () => {
  const tiles: TileProps[] = [
    {
      "color": "#eee4da",
      "text": 4,
      "currentPos": [15, 15]
    },

    {
      "color": "#eee4da",
      "text": 2,
      "currentPos": [106.25 + 30, 15]
    },
    

  ];

  return (
    <Stack
      
      sx={{ position: "relative"}}>

      <Board />

      {tiles.map((tile, index) => {
          return (
            <Tile
            key={index}
            color={tile.color}
            text={tile.text}
            currentPos={tile.currentPos}
            />  
          )
        })
      }


    </Stack>
  )
}

export default Game