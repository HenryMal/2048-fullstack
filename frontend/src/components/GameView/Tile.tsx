import React, { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"

export type TileProps = {
  color?: string,
  text?: number,
  currentPos?: [number, number],
  slideToPos?: [number, number],
}

export const Tile = ({color = "#eee4da59", text, currentPos, slideToPos}: TileProps) => {

  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        width: "106.25px",
        height: "106.25px",
        borderRadius: "3px",
        backgroundColor: color,
        position: (currentPos == null) ? "relative" : "absolute",
        top: (currentPos == null) ? 0 : currentPos[1],
        left: (currentPos == null) ? 0 : currentPos[0],
      }}>

        <Typography
          variant="h3"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "max-content",
            backgroundClip: "text",
            backgroundColor: "#776e65",
            WebkitTextFillColor: "transparent",
          }}
        >
          {text}
        </Typography>    
    </Box>
  )

}

export const TileRow = () => {
  return (
    <Stack direction="row" gap="15px">
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </Stack>
  )
};

export default TileRow;