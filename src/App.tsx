import { Box } from "@chakra-ui/react"
import Cars from "./Cars.tsx"
import Navbar from "./Navbar.tsx"
import { usePanda } from "./p2panda/hooks/usePanda"

function App() {
  const { publicKey } = usePanda()

  return (
    <Box>
      <Navbar />
      <Cars />
    </Box>
  )
}

export default App
