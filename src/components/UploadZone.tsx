import { useCallback, useState } from "react";
import { Upload, Image, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface UploadZoneProps {
  onUpload: (file: File) => void;
  isLoading?: boolean;
}

const UploadZone = ({ onUpload, isLoading = false }: UploadZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const files = Array.from(e.dataTransfer.files);
      const imageFile = files.find((file) =>
        file.type.startsWith("image/")
      );

      if (imageFile) {
        setUploadedFile(imageFile);
        onUpload(imageFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file (JPEG, PNG, etc.)",
          variant: "destructive",
        });
      }
    },
    [onUpload, toast]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setUploadedFile(files[0]);
      onUpload(files[0]);
    }
  };

  return (
    <div className="w-full">
      <motion.div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        animate={{
          borderColor: isDragging ? "hsl(var(--primary))" : "hsl(var(--border))",
          scale: isDragging ? 1.02 : 1,
        }}
        className={`relative glass rounded-xl border-2 border-dashed transition-all ${
          isDragging ? "shadow-glow" : ""
        }`}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept="image/*"
          onChange={handleFileInput}
          disabled={isLoading}
        />

        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center p-12 cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <Loader2 className="w-16 h-16 text-primary animate-spin" />
                <p className="text-lg font-medium text-primary">
                  Analyzing satellite data...
                </p>
              </motion.div>
            ) : uploadedFile ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col items-center gap-4"
              >
                <CheckCircle2 className="w-16 h-16 text-primary" />
                <p className="text-lg font-medium text-primary">
                  {uploadedFile.name}
                </p>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setUploadedFile(null);
                  }}
                  variant="outline"
                >
                  Upload Another
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="upload"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <div className="p-4 rounded-full bg-primary/10">
                  {isDragging ? (
                    <Upload className="w-12 h-12 text-primary animate-bounce" />
                  ) : (
                    <Image className="w-12 h-12 text-primary" />
                  )}
                </div>
                <div>
                  <p className="text-xl font-semibold text-foreground mb-2">
                    Drop your satellite patch here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or click to browse files
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <span className="px-3 py-1 rounded-full bg-secondary text-xs text-secondary-foreground">
                    JPEG
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-xs text-secondary-foreground">
                    PNG
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-xs text-secondary-foreground">
                    TIFF
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </label>
      </motion.div>
    </div>
  );
};

export default UploadZone;
