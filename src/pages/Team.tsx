import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";

const Team = () => {
  const teamMembers = [
    {
      name: "Protyoya Datta",
      role: "ML Specialist",
      email: "protyoya@forestguard.ai",
    },
    {
      name: "Niyati Jain",
      role: "Remote Sensing + Dataset Lead",
      email: "niyati@forestguard.ai",
    },
    {
      name: "Raghav Verma",
      role: "Frontend & UI/UX Developer",
      email: "raghav@forestguard.ai",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate experts combining machine learning, remote sensing, and design to 
              protect our planet's forests
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto text-center glass rounded-xl p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We're dedicated to leveraging cutting-edge artificial intelligence and satellite 
              technology to monitor, detect, and help prevent deforestation worldwide. Our goal 
              is to provide accessible, accurate, and real-time insights that empower 
              conservation efforts and policy decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By combining expertise in machine learning, remote sensing, and user experience 
              design, we're building tools that make environmental monitoring more effective 
              and actionable for researchers, organizations, and governments globally.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
