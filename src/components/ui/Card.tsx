import { Github } from "lucide-react";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
  techStack: { name: string; icon: JSX.Element }[];
  repoUrl: string;
  index: number; // Tambahkan index untuk menghitung top langsung
}

const Card = ({
  title,
  imageUrl,
  description,
  techStack,
  repoUrl,
  index
}: CardProps) => {
  const topOffset = 20 + index * 2

  return (
    <div
      className="card flex flex-col justify-center items-center aspect-video w-[70vw] backdrop-blur-2xl bg-white/20 rounded-lg shadow-lg z-10 p-6"
      style={{ top: `${topOffset}%`, position: "sticky" }}
    >
      <h1 className="text-3xl font-bold text-foreground uppercase mb-4">
        {title}
      </h1>
      <div className="flex flex-1 w-full gap-4">
        <div className="w-1/2 overflow-hidden rounded-lg bg-gray-200">
          <img
            src={imageUrl}
            alt="Card image"
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="w-1/2 p-4 rounded-lg shadow-md flex flex-col justify-between">
          <p className="text-base text-gray-700 mb-4">{description}</p>
          <div className="flex flex-wrap gap-3 mb-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-primary-foreground px-2 py-2 rounded"
              >
                {tech.icon}
                <span className="text-sm text-background font-medium">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground font-semibold hover:underline"
          >
            <Github className="w-5 h-5" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
