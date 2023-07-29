import { GithubIcon, Link2Icon } from 'lucide-react';
import Link from "next/link";
import Card from './Card';
import Description from './Description';
import Stack from './Stack';
interface ProjectProps {

}

const Project = ({ }) => {
    return (
        <div className='mt-5'>
            <Card className='hover:brightness-95'>
                <div className="flex flex-col justify-around items-start">

                    <div className="flex items-center justify-between w-full h-full">
                        <Link href="project/123" className='hover:text-zinc-700 cursor-pointer'>
                            <h1 className='font-bold text-2xl '>PetHub</h1>
                        </Link>
                        <div className="flex justify-end">

                            <Link href="http://pethub.com" className='hover:text-cyan-700 mr-2'>
                                <Link2Icon />
                            </Link>

                            <Link href="http://github.com/abdou6666" target='_blank' className='hover:text-cyan-700'>
                                <GithubIcon className='font-bold text-2xl' />
                            </Link>
                        </div>
                    </div>
                    <Description>A scuffed clone of facebook.</Description>
                    <div className='self-end'>
                        <Stack technologies={['React', 'Express.js', 'Node.js', 'MongoDb']} />
                    </div>

                </div>
            </Card>
        </div>
    )
}

export default Project