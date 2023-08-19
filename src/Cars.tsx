import Car from "./Car.tsx"
import { Container, SimpleGrid } from "@chakra-ui/react"

export default function Cars() {
  const cars = [
    {
      image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Nissan_X-Trail_IV_IMG001.jpg/1920px-Nissan_X-Trail_IV_IMG001.jpg",
        alt: "A grey nissan xtrail",
      },
      make: "Nissan",
      model: "xTrail",
    },
    {
      image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/2014_Honda_Jazz_VX_20221008.jpg/640px-2014_Honda_Jazz_VX_20221008.jpg",
        alt: "A blue honda jazz",
      },
      make: "Honda",
      model: "Jazz",
    },
    {
      image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/2019_Toyota_Corolla_Altis_%28front%29.jpg/1920px-2019_Toyota_Corolla_Altis_%28front%29.jpg",
        alt: "A white toyota corola",
      },
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
