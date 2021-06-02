import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'


function index(){
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex>
      Hello World
    </Flex>
  )
}

export default index
