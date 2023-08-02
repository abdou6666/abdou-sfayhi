import Link from "next/link"
import { FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="w-screen h-7 p-5 bg-gray-200 overflow-y-hidden flex justify-between items-center">
            <ul className="flex justify-start items-center text-sm bg-gray-200  mr-5">
                <li className="mr-3 text-cyan-700 hover:underline">
                    <Link href="http://github.com/abdou6666" target="_blank">
                        <GithubIcon />
                    </Link>
                </li>
                <li className="mr-3 text-cyan-700 hover:underline">
                    <Link href="https://www.linkedin.com/in/abderrahmen-sfayhi/" target="_blank">
                        <LinkedinIcon />
                    </Link>
                </li>
                <li className="mr-3 text-cyan-700 hover:underline">
                    <Link href="https://twitter.com/DeathKnighEuw" target="_blank">
                        <TwitterIcon />
                    </Link>
                </li>
                <li className="mr-3 text-cyan-700 hover:underline">
                    <Link href="https://www.facebook.com/sfayhi.abdou/" target="_blank">
                        <FacebookIcon />
                    </Link>
                </li>
            </ul>
            <ul className="flex justify-end items-center text-sm bg-gray-200 ">
                <li className="mr-3 text-cyan-700 hover:underline"><Link href="/">Home</Link></li>
                <li className="mr-3 text-cyan-700 hover:underline"><Link href="projects">More Projects</Link></li>
                {/* <li className="mr-3 text-cyan-700 hover:underline"><Link href="projects">Contact Me</Link></li> */}
                <li className="mr-3 text-cyan-700 hover:underline"><Link href="about-me">About Me</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar