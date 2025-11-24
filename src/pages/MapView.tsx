import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MapVisualization from "@/components/MapVisualization";
import GlassCard from "@/components/GlassCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const MapView = () => {
  const deforestationData = [
    { region: "Amazon", area: 4200, year: "2024" },
    { region: "Congo", area: 2800, year: "2024" },
    { region: "Borneo", area: 1900, year: "2024" },
    { region: "SE Asia", area: 1500, year: "2024" },
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
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Global Deforestation{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Map
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time visualization of detected deforestation hotspots worldwide
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="h-[600px] rounded-xl overflow-hidden">
              <MapVisualization />
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Chart */}
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Deforestation by Region (km²)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deforestationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="region" 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: '12px' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="area" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>

            {/* Key Stats */}
            <GlassCard>
              <h3 className="text-2xl font-bold mb-6 text-primary">Key Statistics</h3>
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
                  <p className="text-3xl font-bold text-primary mb-1">10,400 km²</p>
                  <p className="text-sm text-muted-foreground">Total Area Detected (2024)</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
                  <p className="text-3xl font-bold text-primary mb-1">152</p>
                  <p className="text-sm text-muted-foreground">Active Monitoring Sites</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
                  <p className="text-3xl font-bold text-primary mb-1">94.2%</p>
                  <p className="text-sm text-muted-foreground">Detection Accuracy</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MapView;
