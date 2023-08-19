import Car from "./Car.tsx"
import { Container, SimpleGrid } from "@chakra-ui/react"
import carImage from "./assets/LightningMcQueen.webp"

export default function Cars() {
  const image = {
    url: carImage,
    alt: "A picture of Lightning McQueen used as a placeholder for the car",
  }

  const cars = [
    {
      image,
      make: "Nissan",
      model: "xTrail",
    },
    {
      image,
      make: "Honda",
      model: "Jazz",
    },
    {
      image,
      make: "Toyota",
      model: "Corola",
    },
  ]

  return (
    <Container>
      <SimpleGrid minChildWidth="220px" spacing={5} padding={5}>
        {cars.map((car) => (
          <Car {...car} />
        ))}
      </SimpleGrid>
    </Container>
  )
}
