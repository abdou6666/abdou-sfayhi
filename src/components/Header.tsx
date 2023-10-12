import Link from 'next/link';
import Avatar from './Avatar';



const Header = () => {
    return (
        <header className='p-5'>
            <Avatar />
            <div className='mt-10'>

                <h1 className="font-bold text-2xl">Hey there👋</h1>

                <br />
                <p>
                    I am <span className='font-semibold text-lg capitalize'>Abderrahmen Sfayhi.</span> I am a Computer Science Student, currently in my last year of studies {' '}
                    <Link href="http://esprit.tn" target='_blank' className='text-cyan-700 hover:underline font-medium'>@ESPRIT</Link> {' '}
                    pursuing Software Engineering degree.I am actually in my final year, I am eagerly looking forward to take on new challenges and work on entrepise level projects. <span className='text-cyan-700 cursor-pointer'>More...</span>
                </p>

                <br />
                <p>
                    I have been dabbling in web developement among other things in computer science world.
                    Here are some cool projects, I have worked on in my free time and made the cut.
                </p>
                <br />
                <p>
                    Currently I am doing an internship migrating a web application from WordPress to Next.js 13 and I will be adding cool features such as Real Time Communucation using WebSockets and WebRTC.
                </p>
            </div>
        </header>
    );
};

export default Header;