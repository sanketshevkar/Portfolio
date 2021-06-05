import Head from 'next/head';
import { Flex, Wrap, WrapItem } from '@chakra-ui/layout';
import Card from '../components/Project/Card';
import data from '../data.json';

function projects() {
    return (
        <Flex>
            <Head>
                <title>Projects</title>
                <meta property="og:title" content="My page title" key="title" />
                <link rel="icon" href="https://i.imgur.com/r84NYEK.png" />
            </Head>
            <Wrap justify="center">
                {data.projectsList.map((project, index)=><WrapItem><Card key={index} project={project}/></WrapItem>)}
            </Wrap>
        </Flex>
    )
}

export default projects
