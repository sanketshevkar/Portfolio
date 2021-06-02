import { useState } from 'react'
import Link from 'next/link';
import navStyles from '../styles/Navbar.module.css';
import { Button, useColorMode, Icon } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin, FaTwitterSquare, FaDev, FaDiscord } from "react-icons/fa";

function Navbar() {
    const [mode, setMode] = useState("light");
    const { toggleColorMode } = useColorMode();
    const onClickModeHandler = () =>{
        toggleColorMode();
        if(mode==="light"){
            setMode("dark");
        }else{
            setMode("light");
        }
    }
    return (
        <nav className={navStyles.nav}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/experience">Experience</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                </ul>
                <ul className={navStyles.social}>
                    <li><Link href="/blogs"><Icon w={6} h={6} as={FaGithub} /></Link></li>
                    <li><Link href="/blogs"><Icon w={6} h={6} as={FaLinkedin} /></Link></li>
                    <li><Link href="/blogs"><Icon w={6} h={6} as={FaTwitterSquare} /></Link></li>
                    <li><Link href="/blogs"><Icon w={6} h={6} as={FaDev} /></Link></li>
                    <li><Link href="/blogs"><Icon w={6} h={6} as={FaDiscord} /></Link></li>
                    <li><Button onClick={onClickModeHandler}>{mode==="light"?<SunIcon />:<MoonIcon />}</Button></li>
                </ul>
        </nav>
    )
}

export default Navbar
