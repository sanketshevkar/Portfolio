import React from 'react';
import { Heading, Text, useColorModeValue } from '@chakra-ui/react';

function Description() {
    const formBackground = useColorModeValue("gray.600", "gray.400");
    return (
        <div style={{marginBottom: "2rem"}}>
            <Heading as="h1" size="2xl" marginBottom="2rem">Hey, I'm Sanket Shevkar</Heading>
            <Text fontSize="md" color={formBackground} lineHeight="2">
               I'm a student and a developer. I'm passionate 
               about <b>Open-Source</b> and <b>Javascript</b>. I'm working
               as a student developer at the <b>Accord Project</b>.
               Apart from software development, I'm watching 
               <b> The Office</b> 7th time, I love cycling and I'm crazy 
               about <b>Porche 911's</b> (!VW Beetle).
            </Text>
        </div>
    )
}

export default Description
