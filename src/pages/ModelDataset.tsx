import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Satellite, Database, LineChart, Cloud, Image, Zap } from "lucide-react";

const ModelDataset = () => {
  const bands = [
    { name: "Band 2 (Blue)", wavelength: "490 nm", use: "Water body detection, atmospheric correction" },
    { name: "Band 3 (Green)", wavelength: "560 nm", use: "Vegetation discrimination, peak reflectance" },
    { name: "Band 4 (Red)", wavelength: "665 nm", use: "Chlorophyll absorption, vegetation classification" },
    { name: "Band 8 (NIR)", wavelength: "842 nm", use: "Vegetation health, biomass estimation" },
    { name: "Band 11 (SWIR)", wavelength: "1610 nm", use: "Moisture content, burned area detection" },
  ];

  const preprocessingSteps = [
    { icon: Cloud, title: "Cloud Masking", description: "Automated cloud and shadow detection and removal using QA bands" },
    { icon: Image, title: "Image Resizing", description: "Standardization to 256x256 pixels for consistent model input" },
    { icon: Zap, title: "Normalization", description: "Pixel value scaling to [0, 1] range for optimal model performance" },
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
              Model & Dataset{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Overview
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dive into our machine learning architecture and Sentinel-2 satellite data processing pipeline
            </p>
          </motion.div>

          {/* Sentinel-2 Bands */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <GlassCard>
              <div className="flex items-center gap-3 mb-6">
                <Satellite className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Sentinel-2 Spectral Bands</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                Our model utilizes five key spectral bands from the Sentinel-2 satellite constellation, 
                each providing unique insights into vegetation health and land cover changes.
              </p>
              
              <div className="grid gap-4">
                {bands.map((band, index) => (
                  <motion.div
                    key={band.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-lg bg-secondary/50 border border-primary/10"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-1">{band.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">Wavelength: {band.wavelength}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground">{band.use}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.section>

          {/* NDVI Formula */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <GlassCard glow>
              <div className="flex items-center gap-3 mb-6">
                <LineChart className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">NDVI & Vegetation Index</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">NDVI Formula</h3>
                  <div className="p-6 rounded-lg bg-background/50 border border-primary/20 font-mono text-center">
                    <p className="text-2xl">
                      NDVI = <span className="text-primary">(NIR - Red)</span> / <span className="text-primary">(NIR + Red)</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Interpretation</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <p className="font-semibold mb-2">NDVI &lt; 0.2</p>
                      <p className="text-sm text-muted-foreground">Bare soil, rock, water - potential deforestation</p>
                    </div>
                    <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <p className="font-semibold mb-2">0.2 ≤ NDVI ≤ 0.5</p>
                      <p className="text-sm text-muted-foreground">Sparse vegetation, grasslands - monitoring required</p>
                    </div>
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <p className="font-semibold mb-2">NDVI &gt; 0.5</p>
                      <p className="text-sm text-muted-foreground">Dense vegetation, healthy forests - normal</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.section>

          {/* Data Preprocessing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <GlassCard>
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Data Preprocessing Pipeline</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {preprocessingSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.section>

          {/* Model Architecture */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <GlassCard glow>
              <h2 className="text-3xl font-bold mb-6 text-center">Model Architecture</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-lg bg-background/50 border border-primary/20">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Convolutional Neural Network (CNN)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Input: 256x256x5 (5 spectral bands)</li>
                    <li>• 4 Convolutional layers with ReLU activation</li>
                    <li>• Batch normalization and max pooling</li>
                    <li>• Fully connected layers with dropout (0.5)</li>
                    <li>• Output: Binary classification (Deforested / Not Deforested)</li>
                    <li>• Optimizer: Adam with learning rate 0.001</li>
                    <li>• Loss function: Binary cross-entropy</li>
                  </ul>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
                    <h4 className="font-semibold mb-2 text-primary">Training Dataset</h4>
                    <p className="text-sm text-muted-foreground">50,000+ labeled satellite patches from global deforestation hotspots</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
                    <h4 className="font-semibold mb-2 text-primary">Model Performance</h4>
                    <p className="text-sm text-muted-foreground">Accuracy: 94.2% | Precision: 92.8% | Recall: 95.1%</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ModelDataset;
