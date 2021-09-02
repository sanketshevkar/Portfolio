import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import _ from 'lodash';


function index(){
  return (
    <Flex>
      <Head>
        <title>Sanket Shevkar</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="https://i.imgur.com/r84NYEK.png" />
      </Head>
    </Flex>
  )
}

export default index
