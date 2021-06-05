import { useState } from 'react'
import Link from 'next/link';
import { Button, useColorMode, Icon, Avatar } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { FaGithub, FaLinkedin, FaTwitterSquare, FaDev, FaDiscord } from "react-icons/fa";

function Navbar() {
    const [navState, setNavState] = useState("topnav");
    const [mode, setMode] = useState("light");
    const { toggleColorMode } = useColorMode();

    const onClickModeHandler = () =>{
        toggleColorMode();
        if(mode==="dark"){
            setMode("light");
        }else{
            setMode("dark");
        }
    }

    const onClickNavHandler = () =>{
        if (navState === "topnav"){
            setNavState("topnav responsive");
        }else{
            setNavState("topnav");
        }
    }

    return (
      <nav className={`${navState}`}>
        <ul>
          <li><Link href="/"><Avatar name="Sanket Shevkar" src="https://i.imgur.com/Lbt8FzG.png" /></Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li className="icon" onClick={onClickNavHandler}><Button>&#9776;</Button></li>
        </ul>
        <ul className="social">
          <li className="socialIcon"><Link href="/blogs"><Icon w={6} h={6} as={FaGithub} /></Link></li>
          <li className="socialIcon"><Link href="/blogs"><Icon w={6} h={6} as={FaLinkedin} /></Link></li>
          <li className="socialIcon"><Link href="/blogs"><Icon w={6} h={6} as={FaTwitterSquare} /></Link></li>
          <li><Link href="/blogs"><Icon w={6} h={6} as={FaDev} /></Link></li>
          <li><Link href="/blogs"><Icon w={6} h={6} as={FaDiscord} /></Link></li>
          <li className="socialIcon"><Button onClick={onClickModeHandler}>{mode==="light"?<MoonIcon />:<SunIcon />}</Button></li>
        </ul>
      </nav>
    )
}

export default Navbar