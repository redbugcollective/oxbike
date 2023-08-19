import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
// import { KeyPair } from "shirokuma"
import { InitWasm } from "./p2panda/InitWasm.tsx"

// const keyPair = new KeyPair()
// console.log(keyPair.publicKey())

ReactDOM.createRoot(document.getElementById("root")!).render(
  <InitWasm>
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </InitWasm>
)
