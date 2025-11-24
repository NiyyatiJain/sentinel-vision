import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UploadZone from "@/components/UploadZone";
import GlassCard from "@/components/GlassCard";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface PredictionResult {
  isDeforested: boolean;
  confidence: number;
  ndvi: number;
  details: string;
}

const Detection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleUpload = async (file: File) => {
    setIsLoading(true);
    setResult(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Mock prediction result
    const mockResult: PredictionResult = {
      isDeforested: Math.random() > 0.5,
      confidence: Math.random() * 30 + 70, // 70-100%
      ndvi: Math.random() * 0.5 + 0.2, // 0.2-0.7
      details: "Analysis based on multi-spectral band comparison and NDVI calculation",
    };

    setResult(mockResult);
    setIsLoading(false);
  };

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
              Deforestation{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Detection
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Upload a satellite patch to analyze vegetation health and detect potential deforestation
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Upload Zone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <UploadZone onUpload={handleUpload} isLoading={isLoading} />
            </motion.div>

            {/* Results */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <GlassCard glow className="space-y-6">
                    {/* Status */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {result.isDeforested ? (
                          <div className="p-3 rounded-full bg-red-500/10">
                            <XCircle className="w-8 h-8 text-red-500" />
                          </div>
                        ) : (
                          <div className="p-3 rounded-full bg-green-500/10">
                            <CheckCircle className="w-8 h-8 text-green-500" />
                          </div>
                        )}
                        <div>
                          <h2 className="text-2xl font-bold">
                            {result.isDeforested ? "Deforestation Detected" : "No Deforestation"}
                          </h2>
                          <p className="text-sm text-muted-foreground">{result.details}</p>
                        </div>
                      </div>
                    </div>

                    {/* Confidence Score */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Confidence Score</span>
                        <span className="text-2xl font-bold text-primary">
                          {result.confidence.toFixed(1)}%
                        </span>
                      </div>
                      <Progress value={result.confidence} className="h-3" />
                    </div>

                    {/* NDVI Value */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">NDVI Value</span>
                        <span className="text-2xl font-bold text-primary">
                          {result.ndvi.toFixed(3)}
                        </span>
                      </div>
                      <Progress 
                        value={result.ndvi * 100} 
                        className="h-3"
                      />
                      <p className="text-xs text-muted-foreground">
                        {result.ndvi < 0.2
                          ? "Low vegetation - potential deforestation"
                          : result.ndvi < 0.5
                          ? "Moderate vegetation - monitoring recommended"
                          : "Healthy vegetation - normal"}
                      </p>
                    </div>

                    {/* Visualization Panel */}
                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-primary" />
                          Before Analysis
                        </h3>
                        <div className="aspect-square bg-background/50 rounded-lg flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Original Patch</span>
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-secondary/50 border border-primary/10">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-primary" />
                          After Analysis
                        </h3>
                        <div className="aspect-square bg-background/50 rounded-lg flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">NDVI Overlay</span>
                        </div>
                      </div>
                    </div>

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary/10">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">5</p>
                        <p className="text-xs text-muted-foreground">Spectral Bands</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">256x256</p>
                        <p className="text-xs text-muted-foreground">Resolution</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">&lt;3s</p>
                        <p className="text-xs text-muted-foreground">Processing Time</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Info Cards */}
            {!result && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <GlassCard hover={false}>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Supported Formats</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• JPEG / JPG images</li>
                    <li>• PNG images</li>
                    <li>• TIFF / GeoTIFF files</li>
                    <li>• Max file size: 10 MB</li>
                  </ul>
                </GlassCard>

                <GlassCard hover={false}>
                  <h3 className="text-lg font-semibold mb-3 text-primary">How It Works</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Upload satellite imagery patch</li>
                    <li>• AI analyzes spectral bands</li>
                    <li>• NDVI calculation performed</li>
                    <li>• Get instant deforestation prediction</li>
                  </ul>
                </GlassCard>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Detection;
