import { GithubIcon, Link2Icon } from 'lucide-react';
import Link from "next/link";
import Card from './Card';
import Description from './Description';
import Stack from './Stack';
type ProjectType = {
    id: number;
    title: string;
    description: string;
    technologies: string[]
    githubLink: string;
    hostedLink?: string;
}
const Project = ({ project }: { project: ProjectType }) => {
    return (
        // <div className='mt-5 mr-4 w-max-64 h-max-34 hover:brightness-95'>
        <Card className='mt-5 mr-4 w-92 h-60 hover:brightness-95 w-1/2 '>
            <div className="flex flex-col justify-around items-start w-full h-full">
                <div className="flex items-center justify-between w-full h-full">

                    <Link href={`project/${project.id}`} className='hover:text-zinc-700 cursor-pointer'>
                        <h1 className='font-bold text-2xl '>{project.title}</h1>
                    </Link>

                    <div className="flex justify-end">
                        {
                            project.hostedLink ? (
                                <Link href={project.hostedLink} className='hover:text-cyan-700 mr-2'>
                                    <Link2Icon />
                                </Link>
                            ) :
                                null
                        }

                        <Link href={project.githubLink} target='_blank' className='hover:text-cyan-700'>
                            <GithubIcon className='font-bold text-2xl' />
                        </Link>
                    </div>
                </div>

                <Description className='w-[80%]'>{project.description}</Description>
                <div className='self-end w-full h-fit '>
                    <Stack technologies={project.technologies} />
                </div>

            </div>
        </Card>
        // </div>
    )
}

export default Project