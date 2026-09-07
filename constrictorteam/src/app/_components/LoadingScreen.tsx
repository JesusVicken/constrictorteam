'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        // Simula progresso do carregamento de forma mais rápida e fluida
        const duration = 1800 // ms total
        const interval = 25 // ms por tick
        const steps = duration / interval
        let current = 0

        const timer = setInterval(() => {
            current++
            // Curva de progresso suave (easeInOutQuad)
            const t = current / steps
            const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            setProgress(Math.min(Math.round(eased * 100), 100))

            if (current >= steps) {
                clearInterval(timer)
                setProgress(100)
                setTimeout(() => setIsComplete(true), 300)
                setTimeout(() => setIsHidden(true), 1200)
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
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-zinc-950 transition-all duration-800 ease-[cubic-bezier(0.76,0,0.24,1)]
                ${isComplete ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100'}
            `}
        >
            {/* Fundo com iluminação radial suave para garantir claridade e presença visual */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_rgba(20,20,20,0.85)_60%,_#000000_100%)] pointer-events-none" />

            {/* Vídeo de fundo bem nítido e visível */}
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-50 contrast-125 brightness-110 scale-105"
                src="/bgcobra.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay balanceado que valoriza o vídeo mantendo a legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/75 pointer-events-none" />

            {/* Halo de luz central para destacar a identidade */}
            <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-white/10 blur-[80px] pointer-events-none" />

            {/* Conteúdo Central */}
            <div className="relative z-10 flex flex-col items-center gap-8 px-6 max-w-sm w-full">

                {/* Logo com máxima nitidez e brilho desde o primeiro instante */}
                <div className="transition-all duration-700 ease-out transform scale-100 opacity-100">
                    <Image
                        src="/logo.png"
                        alt="Constrictor Team"
                        width={280}
                        height={90}
                        priority
                        className="drop-shadow-[0_0_35px_rgba(255,255,255,0.5)] brightness-125 max-w-[230px] sm:max-w-[280px] h-auto"
                    />
                </div>

                {/* Linha decorativa iluminada com traço nítido */}
                <div
                    className="h-[2px] bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-200 ease-out shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                    style={{ width: `${Math.max(80, Math.min(progress * 2.8, 240))}px` }}
                />

                {/* Barra de Progresso Nítida e Iluminada */}
                <div className="flex flex-col items-center gap-3 w-full">
                    <div className="w-full h-[4px] bg-white/20 border border-white/30 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
                        <div
                            className="h-full bg-gradient-to-r from-white via-zinc-100 to-white rounded-full transition-all duration-100 ease-linear shadow-[0_0_16px_rgba(255,255,255,1)]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Porcentagem e Status Claros */}
                    <div className="flex items-center justify-between w-full">
                        <span className="text-white text-xs font-mono uppercase tracking-[0.25em] font-bold">
                            Carregando
                        </span>
                        <span className="text-white text-sm font-mono font-black tabular-nums tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                            {progress}%
                        </span>
                    </div>
                </div>
            </div>

            {/* Detalhe decorativo no rodapé nítido */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 w-full px-4">
                <div className="w-[1px] h-8 bg-gradient-to-b from-white/70 to-transparent" />
                <span className="text-white/85 text-[11px] font-mono uppercase tracking-[0.35em] text-center font-bold drop-shadow-md">
                    Constrictor Team • Instituto Vida Suave
                </span>
            </div>
        </div>
    )
}
