import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ProjectGalleryProps = {
  images: string[];
  alt: string;
  heightClassName?: string;
};

const clampIndex = (idx: number, length: number) => {
  if (length <= 0) return 0;
  return (idx + length) % length;
};

const ProjectGallery = ({ images, alt, heightClassName }: ProjectGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isHovered || images.length <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => clampIndex(prev + 1, images.length));
    }, 2000);

    return () => window.clearInterval(id);
  }, [isHovered, images.length]);

  useEffect(() => {
    if (activeIndex >= images.length) setActiveIndex(0);
  }, [activeIndex, images.length]);

  const prev = () => setActiveIndex((prevIdx) => clampIndex(prevIdx - 1, images.length));
  const next = () => setActiveIndex((prevIdx) => clampIndex(prevIdx + 1, images.length));

  if (!images.length) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div
        className={`relative group w-full overflow-hidden ${heightClassName ?? "h-64"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <button
              key={`${src}-${idx}`}
              type="button"
              className="min-w-full h-full"
              onClick={() => setIsOpen(true)}
              aria-label="Open image"
            >
              <img src={src} alt={alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur border border-border rounded-full p-2 shadow"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur border border-border rounded-full p-2 shadow"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        <div className="absolute bottom-3 left-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <DialogTrigger asChild>
            <Button
              type="button"
              size="sm"
              variant="secondary"
              className="h-8 px-3"
              onClick={(e) => e.stopPropagation()}
            >
              <Images className="h-4 w-4 mr-2" />
              Open album
            </Button>
          </DialogTrigger>
          <div className="text-xs text-muted-foreground bg-background/70 backdrop-blur border border-border rounded-full px-2 py-1">
            {activeIndex + 1}/{images.length}
          </div>
        </div>
      </div>

      <DialogContent className="max-w-5xl">
        <div className="space-y-4">
          <div className="relative w-full bg-muted rounded-lg overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
            <img
              src={images[activeIndex]}
              alt={alt}
              className="w-full h-full object-contain"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border border-border rounded-full p-2 shadow"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border border-border rounded-full p-2 shadow"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
            {images.map((src, idx) => (
              <button
                key={`${src}-thumb-${idx}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`relative overflow-hidden rounded-md border ${
                  idx === activeIndex ? "border-primary" : "border-border"
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <img src={src} alt={`${alt} ${idx + 1}`} className="h-16 w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectGallery;
