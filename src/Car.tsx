"use client"

import { Box, Image } from "@chakra-ui/react"
import carImage from "./assets/LightningMcQueen.webp"

export default function Car() {
  const property = {
    imageUrl: carImage,
    imageAlt:
      "A picture of Lightning McQueen used as a placeholder for the car",
    make: "Nissan",
    model: "xTrail",
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.make} {property.model}
        </Box>
      </Box>
    </Box>
  )
}
