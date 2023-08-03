import Image from 'next/image'
// import AvatarImg from '../../public/avatar.png'
// import IMG1 from '../../public/img_1.jpg'
import IMG2 from '../../public/img_2.jpg'
// import IMG3 from '../../public/img_3.jpg'
// import IMG4 from '../../public/img_4.jpg'
// import IMG5 from '../../public/pic.png'

const Avatar = ({ }) => {
    return (
        <div className='flex flex-col justify-center items-center mt-10 py-5'>
            {/* <div> */}
            <Image src={IMG2} alt="abdou picture" className='w-28 h-28 inline-block rounded-full z-20 shadow-sm' />
            {/* <Image src={MyPicture} className='w-24 h-24 inline-block rounded-full border-2border-black' alt='my picture' /> */}

            {/* </div> */}
            <h1 className='font-semibold py-2'>Abdou</h1>
            <h1 className='text-gray-500 capitalize'>Software Engineer</h1>
        </div>
    )
}

export default Avatar