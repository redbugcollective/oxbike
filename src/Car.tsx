"use client"

import { Box, Image } from "@chakra-ui/react"

interface ImageProps {
  url: string
  alt: string
}

interface CarProps {
  image: ImageProps
  make: string
  model: string
}

export default function Car(props: CarProps) {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={props.image.url} alt={props.image.alt} />

      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {props.make} {props.model}
        </Box>
      </Box>
    </Box>
  )
}
