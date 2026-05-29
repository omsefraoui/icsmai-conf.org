"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react"
import Image from "next/image"

const editions = [
  { year: "ICSMAI 2024", slug: "2024" },
  { year: "ICSMAI 2025", slug: "2025" },
]

// Replace src values with your actual image paths under /public/images/gallery/
const photos: Record<string, { src: string; alt: string }[]> = {
  "2024": [
    { src: "/images/gallery/2024/01.jpg", alt: "Opening ceremony 2024" },
    { src: "/images/gallery/2024/02.jpg", alt: "Keynote session 2024" },
    { src: "/images/gallery/2024/03.jpg", alt: "Panel discussion 2024" },
    { src: "/images/gallery/2024/04.jpg", alt: "Poster session 2024" },
    { src: "/images/gallery/2024/05.jpg", alt: "Networking lunch 2024" },
    { src: "/images/gallery/2024/06.jpg", alt: "Award ceremony 2024" },
    { src: "/images/gallery/2024/07.jpg", alt: "Workshop session 2024" },
    { src: "/images/gallery/2024/08.jpg", alt: "Gala dinner 2024" },
    { src: "/images/gallery/2024/09.jpg", alt: "Saidia venue 2024" },
  ],
  "2025": [
    { src: "/images/gallery/2025/01.jpg", alt: "Opening ceremony 2025" },
    { src: "/images/gallery/2025/02.jpg", alt: "Keynote session 2025" },
    { src: "/images/gallery/2025/03.jpg", alt: "Panel discussion 2025" },
    { src: "/images/gallery/2025/04.jpg", alt: "Poster session 2025" },
    { src: "/images/gallery/2025/05.jpg", alt: "Networking lunch 2025" },
    { src: "/images/gallery/2025/06.jpg", alt: "Award ceremony 2025" },
    { src: "/images/gallery/2025/07.jpg", alt: "Workshop session 2025" },
    { src: "/images/gallery/2025/08.jpg", alt: "Gala dinner 2025" },
    { src: "/images/gallery/2025/09.jpg", alt: "Saidia venue 2025" },
  ],
}

export default function Gallery() {
  const [activeEdition, setActiveEdition] = useState("2025")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const currentPhotos = photos[activeEdition] ?? []

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goPrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + currentPhotos.length) % currentPhotos.length)
  }

  const goNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % currentPhotos.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goPrev()
    if (e.key === "ArrowRight") goNext()
    if (e.key === "Escape") closeLightbox()
  }

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
            Photo Gallery
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4"
        >
          {currentPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"
              }`}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <Images className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Close lightbox"
              >
                <X className="h-7 w-7" />
              </button>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrev() }}
                className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-9 w-9" />
              </button>

              {/* Image */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-4xl aspect-[4/3]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={currentPhotos[lightboxIndex].src}
                  alt={currentPhotos[lightboxIndex].alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); goNext() }}
                className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="h-9 w-9" />
              </button>

              {/* Counter */}
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                {lightboxIndex + 1} / {currentPhotos.length}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
