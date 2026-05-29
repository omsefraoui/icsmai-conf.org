"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ChevronLeft, ChevronRight, Images, Play } from "lucide-react"
import Image from "next/image"

const editions = [
  { year: "ICSMAI 2024", slug: "2024" },
  { year: "ICSMAI 2025", slug: "2025" },
]

type MediaItem =
  | { type: "photo"; src: string; alt: string }
  | { type: "video"; src: string; poster: string; alt: string }

// For YouTube/Vimeo, use an embed URL as src:
//   YouTube: "https://www.youtube.com/embed/VIDEO_ID"
//   Vimeo:   "https://player.vimeo.com/video/VIDEO_ID"
// For local video files, use: "/videos/gallery/2025/highlight.mp4"
const media: Record<string, MediaItem[]> = {
  "2024": [
    { type: "photo",  src: "/images/gallery/image9.jpg", alt: "Opening ceremony 2024" },
      ],
  "2025": [
    { type: "photo",  src: "/images/gallery/image1.jpg", alt: "Saidia Plage" },
    { type: "photo",  src: "/images/gallery/image2.jpg", alt: "Marina Saidia" },
    { type: "video",  src: "/images/gallery/Highlight2.mp4", poster: "/images/gallery/video-poster1.jpg", alt: "Conference highlights 2025" },
    { type: "photo",  src: "/images/gallery/image3.jpg", alt: "Gala dinner 2025" },
    { type: "photo",  src: "/images/gallery/image4.jpg", alt: "Saidia " },
    { type: "photo",  src: "/images/gallery/image5.jpg", alt: "Radisson Saidia" },
    { type: "photo",  src: "/images/gallery/image6.jpg", alt: "Golf Saidia" },
    { type: "photo",  src: "/images/gallery/image7.jpg", alt: "Plage Saidia" },
    { type: "photo",  src: "/images/gallery/image8.jpg", alt: "Saidia" },
    { type: "photo",  src: "/images/gallery/image9.jpg", alt: "Gala dinner 2025" },
    { type: "photo",  src: "/images/gallery/image10.jpg", alt: "Gala dinner 2025" },
    { type: "photo",  src: "/images/gallery/image11.jpg", alt: "Gala dinner 2025" },
  ],
}

export default function Gallery() {
  const [activeEdition, setActiveEdition] = useState("2025")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const currentMedia = media[activeEdition] ?? []

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goPrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + currentMedia.length) % currentMedia.length)
  }

  const goNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % currentMedia.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goPrev()
    if (e.key === "ArrowRight") goNext()
    if (e.key === "Escape") closeLightbox()
  }

  const activeItem = lightboxIndex !== null ? currentMedia[lightboxIndex] : null

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Gallery
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Conference Highlights
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Relive the moments from our previous editions held in Saidia, Morocco.
          </p>
        </motion.div>

        {/* Edition tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {editions.map((ed) => (
            <button
              key={ed.slug}
              onClick={() => setActiveEdition(ed.slug)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeEdition === ed.slug
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {ed.year}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={activeEdition}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 max-h-[180px] overflow-hidden"
        >
          {currentMedia.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "col-span-2 aspect-[3/2]" : "aspect-square"
              }`}
              onClick={() => openLightbox(index)}
            >
              {/* Thumbnail */}
              <Image
                src={item.type === "video" ? item.poster : item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
                {item.type === "video" ? (
                  /* Video: play button always visible, brighter on hover */
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 group-hover:bg-white/30 transition-all duration-300">
                    <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                  </div>
                ) : (
                  <Images className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </div>

              {/* Video badge */}
              {item.type === "video" && (
                <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
                  Video
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Close"
              >
                <X className="h-7 w-7" />
              </button>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Previous"
              >
                <ChevronLeft className="h-9 w-9" />
              </button>

              {/* Content */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
              >
                {activeItem.type === "video" ? (
                  // Video — YouTube/Vimeo embed iframe, or native <video> for local files
                  activeItem.src.includes("youtube.com") || activeItem.src.includes("vimeo.com") ? (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={`${activeItem.src}?autoplay=1`}
                        title={activeItem.alt}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  ) : (
                    <video
                      src={activeItem.src}
                      poster={activeItem.poster}
                      controls
                      autoPlay
                      className="w-full rounded-lg max-h-[80vh]"
                    />
                  )
                ) : (
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={activeItem.src}
                      alt={activeItem.alt}
                      fill
                      className="object-contain rounded-lg"
                      sizes="100vw"
                      priority
                    />
                  </div>
                )}

                {/* Caption */}
                <p className="text-center text-white/60 text-sm mt-3">{activeItem.alt}</p>
              </motion.div>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); goNext() }}
                className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Next"
              >
                <ChevronRight className="h-9 w-9" />
              </button>

              {/* Counter */}
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
                {lightboxIndex + 1} / {currentMedia.length}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
