import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'


const Description = ({ children, className }: { className?: string, children: ReactNode }) => {
    const classes = twMerge('text-gray-500 text-md ', className)
    return <p className={classes}>{children}</p>
}

export default Description