import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import GlassCard from "./GlassCard";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

const TeamCard = ({ name, role, image, email, linkedin, github }: TeamCardProps) => {
  return (
    <GlassCard className="text-center">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mb-4 mx-auto w-32 h-32 rounded-full bg-gradient-primary p-1"
      >
        <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold text-primary">
          {image ? (
            <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
      </motion.div>
      
      <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
      <p className="text-primary font-medium mb-4">{role}</p>
      
      <div className="flex justify-center gap-3">
        {email && (
          <a
            href={`mailto:${email}`}
            className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
            aria-label={`Email ${name}`}
          >
            <Mail className="w-4 h-4 text-primary" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
            aria-label={`${name}'s LinkedIn`}
          >
            <Linkedin className="w-4 h-4 text-primary" />
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
            aria-label={`${name}'s GitHub`}
          >
            <Github className="w-4 h-4 text-primary" />
          </a>
        )}
      </div>
    </GlassCard>
  );
};

export default TeamCard;
