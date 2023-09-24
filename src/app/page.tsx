import Header from "@/components/Header";
import Project from "@/components/Project";

const projects = [
  {
    id: 1,
    title: 'pethub',
    description: 'A social app media',
    technologies: ['React', 'Express.js', 'MongoDB', 'Node.js', 'Mongoose', 'SocketIO'],
    githubLink: 'https://github.com/pethub-org/pethub-esprit',
    hostedLink: 'https://pethub-front.vercel.app/'
  },
  {
    id: 2,
    title: 'Breadit',
    description: 'A reddit clone',
    technologies: ['Next.js', 'Typescript', 'Tailwindcss', 'Reddis', 'MySQL', 'Prisma', 'NextAuth'],
    githubLink: 'https://github.com/abdou6666/redit_clone',
    hostedLink: 'https://redidt-clone.vercel.app/'
  },
  {
    id: 3,
    title: 'Video Streaming',
    description: 'A video streaming app sends data via chunks',
    technologies: ['Next.js', 'Express.js', 'Tailwindcss'],
    githubLink: 'http://github.com/abdou6666/video-streaming',
    hostedLink: 'http://vercel.com'
  },
  {
    id: 4,
    title: 'ScholarSys',
    description: 'Back-end api for managing Highschool system',
    technologies: ['Express.js', 'Tailwindcss', 'PostgreSQL', 'Sequelize'],
    githubLink: 'https://github.com/abdou6666/scholarsys',
  },
  {
    id: 5,
    title: 'SpringBoot API',
    description: 'Back-end api for managing Highschool system',
    technologies: ['Java', 'SpringBoot', 'Spring Data JPA', 'MySQL', 'Spring Security'],
    githubLink: 'https://github.com/abdou6666/springEsprit',
  },
  {
    id: 6,
    title: 'Angular Project Consuming SpringBoot API',
    description: 'front-end for SpringBoot api',
    technologies: ['Angular'],
    githubLink: 'https://github.com/abdou6666/angularEsprit',
  },
  {
    id: 7,
    title: 'Authentication System JWT',
    description: 'Complexe authentication system using JWT (access token , refresh token, httpOnly Cookie)',
    technologies: ['Express.js', 'Node.js', 'JWT'],
    githubLink: 'https://github.com/abdou6666/jwt_auth',
  },
  {
    id: 8,
    title: 'Arena (e-sports)',
    description: 'This project conssists of 3 projects (Web app, Desktop app, Mobile app)',
    technologies: ['Symfony 4.4', 'Java 8', 'JavaFx', 'Codenameone', 'MySQL'],
    githubLink: 'https://github.com/GermanMachines',
  },
  // {
  //   id: 9,
  //   title: 'Restaurant',
  //   description: 'This project conssists of 3 projects (Web site, Desktop app, Mobile app)',
  //   technologies: ['Next.js', 'Tailwindcss', 'PostgreSQL'],
  //   githubLink: 'https://github.com/abdou6666/restaurant-next',
  // },
  {
    id: 10,
    title: 'Nestjs CRUD Api',
    description: 'Project where i tried to learn basics of nestjs',
    technologies: ['Nestjs', 'MySQL', 'TypeORM'],
    githubLink: 'https://github.com/abdou6666/nestjs',
  },
];

let content = projects.map((project, index) => {
  if (index % 2 === 0) {
    return null;
  }
  return (
    <>
      <div className="flex justify-around items-center w-full h-full">
        <Project project={project} key={project.id} />
        {projects[index + 1] && <Project project={projects[index + 1]} />}
      </div>
    </>
  );
});

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full">
      <div className="w-1/2 h-full flex flex-col justify-around ">
        <Header />
        <div className="flex flex-col justify-around items-center w-full m-auto">
          {content}
        </div>
      </div>
    </div>
  );
}
