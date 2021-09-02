import { Flex, WrapItem, Container, Wrap, Text } from '@chakra-ui/react';
import ExternalLinkIcon from '@chakra-ui/icons';
import Head from 'next/head';
import Link from 'next/link';
import _ from 'lodash';
import Assets from '../components/About/Assets';
import Description from '../components/About/Description';
import Form from '../components/About/Form';


function index(){
  return (
    <Flex>
      <Head>
        <title>Sanket Shevkar</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="https://i.imgur.com/r84NYEK.png" />
      </Head>
      {/* <Wrap>
        <WrapItem><Container><Assets /></Container></WrapItem>
        <WrapItem><Container maxW="container.md"><Description /><Form /></Container></WrapItem>
      </Wrap> */}
    </Flex>
  )
}

export default index
