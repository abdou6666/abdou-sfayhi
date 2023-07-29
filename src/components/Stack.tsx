import { FC } from 'react';

interface StackProps {
    technologies: string[]
}

const Stack: FC<StackProps> = ({ technologies }) => {
    let content;

    content = ['React', 'Express.js', 'Node.js', 'MongoDb'].map((technology, index) => {
        return (
            <div key={index} className='w-fit h-fit p-1 rounded-lg bg-red-950 text-white text-xs px-2 mt-2 '>
                {technology}
            </div>
        )
    })
    return (
        <div className='flex justify-center items-center gap-2 '>
            {content}
        </div>
    )
}

export default Stack