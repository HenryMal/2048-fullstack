import React from "react"
import { Stack } from "@mui/material"
import { TileRow, Tile }  from "./Tile"

const Grid = () => {

  return (
    <Stack
      direction="column"
      display="flex"
      gap="15px"
      justifyContent="center">
      <TileRow />
      <TileRow />
      <TileRow />
      <TileRow />
    </Stack>
  )
  
}

export default Grid