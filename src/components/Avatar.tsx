import Image from 'next/image'
import AvatarImg from '../../public/avatar.png'
import MyPicture from '../../public/picture.jpeg'

const Avatar = ({ }) => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 py-5'>
            {/* <div> */}
            {/* <Image src={AvatarImg} alt="abdou picture" className='w-20 h-20 inline-block rounded-full  z-20' /> */}
            <Image src={MyPicture} className='w-24 h-24 inline-block rounded-full border-2border-black' alt='my picture' />

            {/* </div> */}
            <h1 className='font-semibold py-2'>Abdou</h1>
            <h1 className='text-gray-500 capitalize'>Software Engineer</h1>
        </div>
    )
}

export default Avatar