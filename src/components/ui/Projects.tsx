import { ArrowDownRight } from "lucide-react";

const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen bg-background text-primary-foreground flex justify-center items-center flex-col sticky top-0">
      <h1 className="text-9xl uppercase font-bold">
        <sup>My</sup>Projects
      </h1>
      <a
        href=""
        className="py-5 text-2xl flex items-center group hover:gap-2 transition-all ease-in-out duration-300"
      >
        <ArrowDownRight
          size={30}
          className="group-hover:-rotate-45 transition-all ease-in-out duration-300"
        />
        EXPLORE NOW
      </a>
    </div>
  );
};

export default Projects;
