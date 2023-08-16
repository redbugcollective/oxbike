import './App.css'
import { ColorModeSwitcher } from "./ColorModeSwitcher.tsx"
import { Box, Container } from "@chakra-ui/react"
import Car from "./Car.tsx"

function App() {
  return (
    <Container>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Car />
    </Container>
  )
}

export default App



