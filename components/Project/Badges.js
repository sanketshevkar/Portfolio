import { Badge, Flex } from '@chakra-ui/react';

function Badges(props) {
    return (
        <Flex margin="5px 0px 3px 10px">
            {props.stack.map((badge, index)=>
            <Badge key={index} borderRadius="full" margin="3px" px="2" colorScheme={badge.color}>
                {badge.tech}
            </Badge>)}
        </Flex>
    )
}

export default Badges
