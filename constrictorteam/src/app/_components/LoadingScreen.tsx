'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        // Simula progresso do carregamento
        const duration = 2800 // ms total
        const interval = 30 // ms por tick
        const steps = duration / interval
        let current = 0

        const timer = setInterval(() => {
            current++
            // Curva de progresso que acelera e desacelera (easeInOutQuad)
            const t = current / steps
            const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            setProgress(Math.min(Math.round(eased * 100), 100))

            if (current >= steps) {
                clearInterval(timer)
                setProgress(100)
                // Pequena pausa antes de transicionar
                setTimeout(() => setIsComplete(true), 400)
                // Remove do DOM após a animação de saída
                setTimeout(() => setIsHidden(true), 1600)
            }
        }, interval)

        // Bloqueia scroll enquanto carrega
        document.body.style.overflow = 'hidden'
        return () => {
            clearInterval(timer)
            document.body.style.overflow = ''
        }
    }, [])

    if (isHidden) return null

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-all duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]
                ${isComplete ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100'}
            `}
        >
            {/* Vídeo de fundo com blur */}
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-15 blur-sm scale-110"
                src="/bgcobra.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Gradiente sobre o vídeo */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black pointer-events-none"></div>

            {/* Conteúdo Central */}
            <div className="relative z-10 flex flex-col items-center gap-10">

                {/* Logo com animação de entrada */}
                <div
                    className={`transition-all duration-1000 ease-out
                        ${progress > 5 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
                    `}
                >
                    <Image
                        src="/logo.png"
                        alt="Constrictor Team"
                        width={280}
                        height={90}
                        priority
                        className="drop-shadow-[0_0_40px_rgba(255,255,255,0.25)] brightness-110"
                    />
                </div>

                {/* Linha decorativa */}
                <div
                    className="h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-1000 ease-out"
                    style={{ width: `${Math.min(progress * 2.5, 200)}px` }}
                ></div>

                {/* Barra de Progresso Minimalista */}
                <div className="flex flex-col items-center gap-4 w-[260px]">
                    <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-white/60 via-white to-white/60 rounded-full transition-all duration-100 ease-linear shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    {/* Porcentagem + Texto */}
                    <div className="flex items-center justify-between w-full">
                        <span className="text-white/30 text-[10px] font-mono uppercase tracking-[0.3em]">
                            Carregando
                        </span>
                        <span className="text-white/60 text-xs font-mono tabular-nums tracking-widest">
                            {progress}%
                        </span>
                    </div>
                </div>
            </div>

            {/* Detalhe decorativo no rodapé */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <div className={`w-[1px] bg-white/20 transition-all duration-[2000ms] ease-out ${progress > 10 ? 'h-12' : 'h-0'}`}></div>
                <span className={`text-white/20 text-[9px] font-mono uppercase tracking-[0.4em] transition-opacity duration-1000 ${progress > 30 ? 'opacity-100' : 'opacity-0'}`}>
                    Instituto Vida Suave
                </span>
            </div>
        </div>
    )
}
