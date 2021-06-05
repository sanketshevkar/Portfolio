import Link from 'next/link';
import { Box, useColorModeValue, Heading, Text, Button, Flex } from '@chakra-ui/react';
import Badges from './Badges';

function Card(props) {
    const boxBackground = useColorModeValue("gray.300", "black");
    const textColor = useColorModeValue("gray.700", "gray.500");

    return (
            <Box margin="2rem" shadow="md" display="inline-block" w={300} h={250} bgColor={boxBackground} borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Heading margin="10px">{props.project.name}</Heading>
                <Text color={textColor} margin="10px" fontSize="sm">
                 {props.project.description}
                </Text>
                <Flex>
                    <Badges stack={props.project.stack}>Tech</Badges>
                </Flex>
                <Flex margin="10px">
                    <Button marginRight="1rem" colorScheme="green">
                        <Link href={`${props.project.github}`} External>Github</Link>
                    </Button>
                    <Button colorScheme="red">
                        <Link href={`${props.project.website}`} External>Website</Link>
                    </Button>
                </Flex>
            </Box>
    )
}

export default Card
