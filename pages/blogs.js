import Head from 'next/head';
import { Stack } from '@chakra-ui/react';
import Card from '../components/Blog/Card';
import data from '../data.json';

function blogs() {
    return (
        <Stack>
            <Head>
                <title>Blogs</title>
                <meta property="og:title" content="My page title" key="title" />
                <link rel="icon" href="https://i.imgur.com/r84NYEK.png" />
            </Head>
            <Stack margin="2rem" spacing={8}>
                {data.blogsList.map((blog)=><Card blog={blog} />)}
            </Stack>
        </Stack>
    )
}

export default blogs
