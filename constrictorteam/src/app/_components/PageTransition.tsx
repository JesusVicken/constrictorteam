'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition() {
    const pathname = usePathname()
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [showVideo, setShowVideo] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const prevPathRef = useRef(pathname)

    useEffect(() => {
        // Ignora a primeira renderização (carregamento inicial)
        if (prevPathRef.current === pathname) return

        prevPathRef.current = pathname
        setIsTransitioning(true)
        setShowVideo(true)

        // Toca o vídeo
        const video = videoRef.current
        if (video) {
            video.currentTime = 0
            video.play().catch(() => {
                // Se autoplay falhar, fecha a transição
                setIsTransitioning(false)
                setTimeout(() => setShowVideo(false), 500)
            })
        }
    }, [pathname])

    const handleVideoEnd = () => {
        setIsTransitioning(false)
        setTimeout(() => setShowVideo(false), 800)
    }

    if (!showVideo) return null

    return (
        <div
            className={`fixed inset-0 z-[9998] flex items-center justify-center bg-black transition-opacity duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
                ${isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
        >
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/preloading.mp4"
                muted
                playsInline
                onEnded={handleVideoEnd}
            />
        </div>
    )
}
