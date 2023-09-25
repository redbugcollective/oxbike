"use client"

import { Box, Flex, useColorModeValue, Stack } from "@chakra-ui/react"
import ColourModeSwitcher from "./ColorModeSwitcher.tsx"

export default function Navbar() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Panga Carsharing</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <ColourModeSwitcher />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
