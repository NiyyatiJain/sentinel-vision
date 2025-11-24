import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Satellite, TrendingDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Earth3D from "@/components/Earth3D";
import GlassCard from "@/components/GlassCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-dark" />
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 rounded-full glass border border-primary/20"
              >
                <span className="text-sm text-primary font-medium">
                  Powered by Sentinel-2 Satellite Imagery
                </span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Protecting Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Forests
                </span>{" "}
                with AI
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl">
                Advanced machine learning technology detecting deforestation in real-time 
                using NDVI analysis and multi-spectral satellite data.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/detection">
                    Upload Satellite Patch
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/model">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Content - 3D Earth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-[500px] relative"
            >
              <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-3xl" />
              <Earth3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Advanced Detection{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Technology
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our ML model analyzes satellite imagery using cutting-edge techniques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard glow>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Satellite className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Sentinel-2 Analysis</h3>
                <p className="text-muted-foreground">
                  Multi-spectral band analysis (B2, B3, B4, B8, B11) for comprehensive 
                  vegetation health assessment.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard glow>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <TrendingDown className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">NDVI Monitoring</h3>
                <p className="text-muted-foreground">
                  Real-time Normalized Difference Vegetation Index calculations to 
                  detect vegetation loss patterns.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <GlassCard glow>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Global Coverage</h3>
                <p className="text-muted-foreground">
                  Interactive map visualization showing deforestation hotspots 
                  worldwide with real-time updates.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard className="text-center py-16 px-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-glow opacity-20" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Detect Deforestation?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Upload your satellite patch and get instant AI-powered analysis
                </p>
                <Button asChild size="lg" className="group">
                  <Link to="/detection">
                    Start Detection
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
