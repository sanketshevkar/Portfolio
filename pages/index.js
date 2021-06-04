import { Flex, WrapItem, Container, Wrap } from '@chakra-ui/react';
import Head from 'next/head';
import _ from 'lodash';
import Assets from '../components/About/Assets';
import Description from '../components/About/Description';


function index(){
  return (
    <Flex>
      <Head>
        <title>Sanket Shevkar</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="https://i.imgur.com/r84NYEK.png" />
      </Head>
      <Wrap>
        <WrapItem><Container><Assets /></Container></WrapItem>
        <WrapItem><Container maxW="container.md"><Description /></Container></WrapItem>
      </Wrap>
    </Flex>
  )
}

export default index
