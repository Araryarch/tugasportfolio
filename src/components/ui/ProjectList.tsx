import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiVuedotjs,
  SiExpress,
  SiPostgresql
} from "react-icons/si";
import Card from "./Card";

const ProjectList = () => {
  const projects = [
    {
      title: "Project One",
      imageUrl: "https://dummyimage.com/600x400/000/fff",
      description: "Description of Project One.",
      techStack: [
        { name: "React", icon: <SiReact className="text-blue-500 w-6 h-6" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-teal-500 w-6 h-6" />
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600 w-6 h-6" />
        }
      ],
      repoUrl: "https://github.com/user/project-one"
    },
    {
      title: "Project Two",
      imageUrl: "https://dummyimage.com/600x400/111/eee",
      description: "Description of Project Two.",
      techStack: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black w-6 h-6" />
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-green-500 w-6 h-6" />
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600 w-6 h-6" />
        }
      ],
      repoUrl: "https://github.com/user/project-two"
    },
    {
      title: "Project Three",
      imageUrl: "https://dummyimage.com/600x400/222/ddd",
      description: "Description of Project Three.",
      techStack: [
        {
          name: "Vue",
          icon: <SiVuedotjs className="text-green-500 w-6 h-6" />
        },
        {
          name: "Express",
          icon: <SiExpress className="text-gray-700 w-6 h-6" />
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-700 w-6 h-6" />
        }
      ],
      repoUrl: "https://github.com/user/project-three"
    }
  ];

  return (
    <div className="h-[300vh] w-full bg-background text-primary-foreground flex justify-center items-center mt-[50vh] flex-col gap-64 relative">
      {projects.map((project, index) => (
        <Card
          key={index}
          index={index}
          title={project.title}
          imageUrl={project.imageUrl}
          description={project.description}
          techStack={project.techStack}
          repoUrl={project.repoUrl}
        />
      ))}
    </div>
  );
};

export default ProjectList;
