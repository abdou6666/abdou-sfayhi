import { FC } from 'react';

interface StackProps {
    technologies: string[]
}

const Stack: FC<StackProps> = ({ technologies }) => {
    let content;

    content = technologies.map((technology, index) => {
        return (
            <p key={index} className='p-1 rounded-lg bg-red-950 text-white text-xs px-2 mt-2 w-fit '>
                {technology}
            </p>
        )
    })
    return (
        <div className='flex justify-center items-center gap-2 w-full h-fit '>
            {content}
        </div>
    )
}

export default Stack