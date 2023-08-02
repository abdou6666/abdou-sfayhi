import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const Card = ({ children, className }: { children: ReactNode, className?: string }) => {
    const classes = twMerge('w-fit h-fit px-5 py-3 bg-gray-200 shadow-md rounded-md', className);

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Card