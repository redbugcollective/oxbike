import Car from "./Car.tsx"
import { Container, SimpleGrid } from "@chakra-ui/react"

export default function Cars() {
  return (
    <Container>
      <SimpleGrid minChildWidth="220px" spacing={5} padding={5}>
        <Car />
        <Car />
      </SimpleGrid>
    </Container>
  )
}
