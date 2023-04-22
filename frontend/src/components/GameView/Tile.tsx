import React from "react"
import { Box, Stack } from "@mui/material"

export type TileProps = {
  color: string,
  text: number,
  currentXPos?: number,
  currentYPos?: number,
  slideToXPos?: number,
  slideToYPos?: number,
}

export const Tile = () => {

  return (
    <Box
      sx={{
        width: "106.25px",
        height: "106.25px",
        borderRadius: "3px",
        backgroundColor: "#eee4da59"
      }}>   
    </Box>
  )

}

export const TileRow = () => {
  return (
    <Stack
      direction="row"
      gap="15px">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </Stack>
  )
};

export default TileRow;