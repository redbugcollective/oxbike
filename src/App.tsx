import { Box } from "@chakra-ui/react";
import Car from "./Car.tsx";
import Cars from "./Cars.tsx";
import Navbar from "./Navbar.tsx";

function App() {
  return (
    <Box>
      <Navbar />
      <Cars />
    </Box>
  );
}

export default App;
