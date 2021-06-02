import Link from 'next/link';
import navStyles from '../styles/Navbar.module.css';
import { Button, useColorMode } from '@chakra-ui/react';

function Navbar() {
    const { toggleColorMode } = useColorMode();
    return (
        <nav className={navStyles.nav}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/experience">Experience</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                </ul>
                <ul className={navStyles.social}>
                    <li><Link href="/blogs">Github</Link></li>
                    <li><Link href="/blogs">LinkedIn</Link></li>
                    <li><Link href="/blogs">Twitter</Link></li>
                    <li><Link href="/blogs">Dev</Link></li>
                    <li><Link href="/blogs">Discord</Link></li>
                    <li><Button onClick={toggleColorMode}>color</Button></li>
                </ul>
        </nav>
    )
}

export default Navbar
