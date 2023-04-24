import React from "react"
import { Stack } from "@mui/material"
import { TileRow, Tile }  from "./Tile"

const Grid = () => {

  return (
    <Stack
      display="flex"
      justifyContent="center"
      gap="15px">
      <TileRow />
      <TileRow />
      <TileRow />
      <TileRow />
    </Stack>
  )
  
}

export default Grid