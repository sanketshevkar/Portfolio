import { Flex, Box, Heading, Text, Button, Link, useColorModeValue } from '@chakra-ui/react';

function Card(props) {
  const boxBackground = useColorModeValue("gray.300", "black");
  const textColor = useColorModeValue("gray.700", "gray.500");
    return(
      <Flex>
        <Box margin="auto" bgColor={boxBackground} shadow="md" maxWidth="800px" minheight="210px" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Heading margin="10px">{props.blog.topic}</Heading>
          <Text margin="10px" fontSize="sm" as="i"><b>{props.blog.date}</b></Text>
          <Text color={textColor} margin="10px" fontSize="md">
            {props.blog.description}
          </Text>
          <Button margin="10px" colorScheme="green">
            <Link href={props.blog.link} External>Read More</Link>
          </Button>
        </Box>
      </Flex>
    )
}

export default Card
