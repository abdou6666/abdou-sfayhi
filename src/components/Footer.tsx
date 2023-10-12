import React from 'react';
import { MailIcon } from 'lucide-react';

export default function Footer() {
    return (
        <footer className='mt-16'>
            <nav className="w-screen h-7 p-5 bg-gray-200 overflow-y-hidden flex justify-between items-center fixed bottom-0 left-0">
                <ul className="flex justify-start items-center text-sm bg-gray-200  mr-5 w-full">
                    <li className="mr-3 text-cyan-700 flex items-center justify-center text-center m-auto w-full">
                        <MailIcon />
                        <span className='ml-3 hover:underline'>
                            abdousfayhi12@gmail.com{' '} |
                        </span>
                        <span className='ml-2 hover:underline'>
                            sfayhi.abderrahmen@eprit.tn {' '} |
                        </span>
                        <span className='ml-2 hover:underline'>
                            +216 22 224 618 {' '} |
                        </span>
                        <span className='ml-3 self-end'>
                            &copy; {new Date().getFullYear()}
                        </span>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
