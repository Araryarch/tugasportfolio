import { Instagram, Linkedin, Github, Gitlab } from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen w-full bg-background flex items-center justify-center text-primary-foreground">
      <div className="flex space-x-5">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Gitlab size={24} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
