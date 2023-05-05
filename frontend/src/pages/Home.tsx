import React from "react"
import { Stack, Typography } from "@mui/material"
import Board from "../components/GameView/Board"
import Game from "../components/GameView/Game"
import Header from '../components/Descriptions/Header'

const Home = () => {

  return (  
    <>
      <Header />
      <Game />
    </>

  )

}

export default Home
