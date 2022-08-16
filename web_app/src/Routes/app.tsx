import * as React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider, theme } from "@chakra-ui/react"

import '../Assets/Styles/app.css'
import Content from '../Routes/content'

export const App = () => (
  <ChakraProvider theme={theme}>
    <>
      <Router>
        <Content />
      </Router>
    </>
  </ChakraProvider>
)
