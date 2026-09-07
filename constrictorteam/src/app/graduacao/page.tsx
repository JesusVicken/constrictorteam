'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Calendar,
    Clock,
    MapPin,
    Navigation,
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize2,
    Award,
    Trophy,
    Share2,
    ExternalLink,
    ChevronRight,
    X,
    ZoomIn,
    Sparkles
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

// --- DADOS DO EVENTO OFICIAL 2026 ---
const EVENTO_2026 = {
    titulo: "GRADUAÇÃO 2026",
    subtitulo: "CONSTRICTOR TEAM",
    slogan: "Mais que uma faixa. Uma história de evolução.",
    descricao: "Um momento para celebrar a dedicação, a disciplina e toda a caminhada construída no tatame.",
    dataTexto: "28 de Novembro de 2026",
    dataISO: "2026-11-28T16:00:00-03:00",
    horario: "16h00 (16 horas)",
    local: "Centro de Treinamento Constrictor Team – Espaço Mestre Armando Wriedt",
    acesso: "Acesso pelo Estacionamento 08 – Parque da Cidade, Brasília - DF",
    traje: "Kimono Oficial Constrictor Team",
    chamada: "Esperamos todos vocês para celebrar esse momento especial! 🥋🏆",
    imagemDesktop: "/graduacao2026/imagemcardPrincipal.jpeg",
    imagemMobile: "/graduacao2026/imagemparamobile.jpeg",
    videoPromo: "/graduacao2026/videoPromograduacao.mp4"
}

// Links Rápidos
const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Graduação 2026 - Constrictor Team')}&dates=20261128T190000Z/20261128T230000Z&details=${encodeURIComponent('Mais que uma faixa. Uma história de evolução.\n\nUm momento para celebrar a dedicação, a disciplina e toda a caminhada construída no tatame.\n\nLocal: Centro de Treinamento Constrictor Team – Espaço Mestre Armando Wriedt (Acesso pelo Estacionamento 08 – Parque da Cidade)')}&location=${encodeURIComponent('Centro de Treinamento Constrictor Team – Espaço Mestre Armando Wriedt, Estacionamento 08 Parque da Cidade, Brasília - DF')}`

const googleMapsUrl = 'https://www.google.com/maps/place/Constrictor+Team/@-15.8087543,-47.917081,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3b896d8b3de5:0x54ddfa28bf4248bb!8m2!3d-15.8087543!4d-47.9170703!16s%2Fg%2F11fr0ltn_8?entry=ttu'
const wazeUrl = 'https://waze.com/ul?ll=-15.8087543,-47.9170703&navigate=yes'
const whatsappUrl = 'https://wa.me/5561991627171?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Gradua%C3%A7%C3%A3o%202026%20da%20Constrictor%20Team.'

// Fotos históricas de graduações anteriores
const fotosHistoricas = [
    { src: '/galeria/graduacao/grade1.jpeg', alt: 'Momento histórico da Graduação Constrictor Team' },
    { src: '/galeria/graduacao/grade2.jpeg', alt: 'Reconhecimento e entrega de faixas' },
    { src: '/galeria/graduacao/grade3.jpeg', alt: 'Tatame reunido na celebração' },
    { src: '/galeria/graduacao/grade4.jpeg', alt: 'Conquistas da equipe no tatame' },
    { src: '/galeria/graduacao/grade5.jpeg', alt: 'União da família Constrictor Team' },
    { src: '/galeria/graduacao/grade6.jpeg', alt: 'Graduação de faixas pretas e alunos' },
    { src: '/galeria/graduacao/grade7.jpeg', alt: 'Gerações formadas no tatame' },
    { src: '/galeria/graduacao/grade8.jpeg', alt: 'Celebração de dedicação e disciplina' },
    { src: '/galeria/graduacao/grade9.jpeg', alt: 'Mestres e professores reunidos' },
    { src: '/galeria/graduacao/grade10.jpeg', alt: 'Tradição e respeito às nossas raízes' },
    { src: '/galeria/graduacao/grade11.jpeg', alt: 'Superação de cada guerreiro' },
    { src: '/galeria/graduacao/grade12.jpeg', alt: 'Legado vivo da Constrictor Team' }
]

// --- COMPONENTE DE CONTAGEM REGRESSIVA ---
function CountdownTimer({ targetDate }: { targetDate: string }) {
    const [timeLeft, setTimeLeft] = useState<{
        days: number
        hours: number
        minutes: number
        seconds: number
    }>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const target = new Date(targetDate).getTime()

        const updateCountdown = () => {
            const now = new Date().getTime()
            const difference = target - now

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            setTimeLeft({ days, hours, minutes, seconds })
        }

        updateCountdown()
        const interval = setInterval(updateCountdown, 1000)
        return () => clearInterval(interval)
    }, [targetDate])

    if (!mounted) return null

    const timeUnits = [
        { label: 'DIAS', value: timeLeft.days },
        { label: 'HORAS', value: timeLeft.hours },
        { label: 'MINUTOS', value: timeLeft.minutes },
        { label: 'SEGUNDOS', value: timeLeft.seconds }
    ]

    return (
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto my-6 sm:my-8">
            {timeUnits.map((item, index) => (
                <div
                    key={index}
                    className="relative group bg-zinc-900/90 border border-zinc-700/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center backdrop-blur-md shadow-lg shadow-black/60 transition-transform duration-300 hover:scale-105"
                >
                    <div className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-mono tracking-tight">
                        {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-zinc-400 mt-1 tracking-widest uppercase">
                        {item.label}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-b-xl" />
                </div>
            ))}
        </div>
    )
}

// --- COMPONENTE DE VÍDEO BANNER HERO (AUTOPLAY LOOP) ---
function VideoHeroBanner({ src, poster }: { src: string; poster?: string }) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true
            videoRef.current.play().catch(() => {
                // Auto-play was prevented by browser policy, handled gracefully
            })
        }
    }, [])

    const togglePlay = () => {
        if (!videoRef.current) return
        if (isPlaying) {
            videoRef.current.pause()
            setIsPlaying(false)
        } else {
            videoRef.current.play()
            setIsPlaying(true)
        }
    }

    const handleFullScreen = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (!videoRef.current) return
        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen()
        }
    }

    return (
        <div
            className="relative w-full max-w-5xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] my-6 sm:my-8 group cursor-pointer"
            onClick={togglePlay}
        >
            <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden">
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

                {/* Badge Superior */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex items-center gap-2 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-[11px] sm:text-xs font-semibold text-white uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Teaser Oficial 2026
                    </span>
                </div>

                {/* Informações e Controles Inferiores */}
                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 right-3 sm:right-5 flex items-end justify-between z-10">
                    <div className="text-left pointer-events-none pr-2">
                        <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-zinc-300">
                            28 de Novembro de 2026 • 16h
                        </div>
                        <div className="text-base sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                            GRADUAÇÃO CONSTRICTOR TEAM
                        </div>
                    </div>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            onClick={togglePlay}
                            className="p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all"
                            aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                        >
                            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </button>
                        <button
                            type="button"
                            onClick={handleFullScreen}
                            className="p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all"
                            aria-label="Tela cheia"
                        >
                            <Maximize2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function GraduacaoPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 80
        })
    }, [])

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [selectedImage])

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Graduação 2026 - Constrictor Team',
                    text: 'Mais que uma faixa. Uma história de evolução. Graduação Constrictor Team 2026!',
                    url: window.location.href
                })
            } catch (err) {
                console.log('Compartilhamento cancelado')
            }
        } else {
            navigator.clipboard.writeText(window.location.href)
            alert('Link copiado para a área de transferência!')
        }
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative overflow-x-hidden">
            {/* Background Texture & Glow */}
            <div className="fixed inset-0 -z-10 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-12 sm:pt-20 pb-8 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs sm:text-sm font-medium text-zinc-200 mb-6 shadow-sm">
                        <Award className="w-4 h-4 text-white" />
                        <span>Evento Oficial Constrictor Team</span>
                    </div>

                    {/* Título Principal */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-3">
                        {EVENTO_2026.titulo}
                    </h1>
                    <div className="text-xl sm:text-3xl md:text-4xl font-light text-zinc-400 tracking-widest uppercase mb-6">
                        {EVENTO_2026.subtitulo}
                    </div>

                    {/* Slogan & Descrição */}
                    <div className="relative inline-block my-2">
                        <p className="text-lg sm:text-2xl md:text-3xl font-serif italic text-white/95 max-w-3xl mx-auto leading-relaxed">
                            "{EVENTO_2026.slogan}"
                        </p>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mt-4 leading-relaxed">
                        {EVENTO_2026.descricao}
                    </p>

                    {/* --- VÍDEO BANNER NO INÍCIO DA SEÇÃO COM AUTOPLAY --- */}
                    <VideoHeroBanner
                        src={EVENTO_2026.videoPromo}
                        poster={EVENTO_2026.imagemDesktop}
                    />

                    {/* Contagem Regressiva */}
                    <CountdownTimer targetDate={EVENTO_2026.dataISO} />

                    {/* Botões de Ação do Topo */}
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
                        <a
                            href={googleCalendarUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10"
                        >
                            <Calendar className="w-4 h-4" />
                            Adicionar à Agenda
                        </a>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white font-semibold text-sm hover:bg-zinc-800 transition-all"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Dúvidas no WhatsApp
                        </a>

                        <button
                            type="button"
                            onClick={handleShare}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-600 text-zinc-300 hover:text-white font-medium text-sm transition-all"
                        >
                            <Share2 className="w-4 h-4" />
                            Compartilhar
                        </button>
                    </div>
                </div>
            </section>

            {/* --- CARDS PRINCIPAIS: FLYER & DETALHES --- */}
            <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Flyer Oficial (Desktop & Mobile) */}
                    <div className="lg:col-span-6 space-y-4" data-aos="fade-right">
                        <div className="flex items-center justify-between px-1">
                            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-white" />
                                Convite Oficial
                            </h2>
                            <span className="text-xs text-zinc-400 font-mono">Toque para ampliar</span>
                        </div>

                        {/* Versão Desktop */}
                        <div
                            className="hidden sm:block relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group cursor-pointer"
                            onClick={() => setSelectedImage(EVENTO_2026.imagemDesktop)}
                        >
                            <div className="relative aspect-[4/5] w-full">
                                <Image
                                    src={EVENTO_2026.imagemDesktop}
                                    alt="Graduação 2026 Constrictor Team - Flyer Oficial"
                                    fill
                                    priority
                                    className="object-contain bg-zinc-950 transition-transform duration-500 group-hover:scale-[1.02]"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-bold tracking-wide shadow-xl">
                                    <ZoomIn className="w-4 h-4" />
                                    Ver em Alta Resolução
                                </span>
                            </div>
                        </div>

                        {/* Versão Mobile */}
                        <div
                            className="block sm:hidden relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group cursor-pointer"
                            onClick={() => setSelectedImage(EVENTO_2026.imagemMobile)}
                        >
                            <div className="relative aspect-[4/5] w-full">
                                <Image
                                    src={EVENTO_2026.imagemMobile}
                                    alt="Graduação 2026 Constrictor Team - Mobile"
                                    fill
                                    priority
                                    className="object-contain bg-zinc-950"
                                    sizes="100vw"
                                />
                            </div>
                            <div className="absolute bottom-3 right-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-medium">
                                    <ZoomIn className="w-3.5 h-3.5" />
                                    Ampliar
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Detalhes Oficiais & Convocação */}
                    <div className="lg:col-span-6 space-y-6" data-aos="fade-left">
                        {/* Card de Informações Sintetizadas */}
                        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6 shadow-2xl">
                            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                                <h3 className="text-xl font-bold text-white tracking-wide">
                                    Informações Oficiais
                                </h3>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-zinc-300">
                                    28/11/2026
                                </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="flex items-start gap-3.5">
                                    <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white flex-shrink-0">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Data</div>
                                        <div className="text-base font-bold text-white">{EVENTO_2026.dataTexto}</div>
                                        <div className="text-xs text-zinc-400">Sábado</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white flex-shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Horário</div>
                                        <div className="text-base font-bold text-white">{EVENTO_2026.horario}</div>
                                        <div className="text-xs text-zinc-400">Início pontual</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-zinc-800/80 space-y-4">
                                <div className="flex items-start gap-3.5">
                                    <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white flex-shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">Local</div>
                                        <div className="text-base font-bold text-white leading-tight">
                                            {EVENTO_2026.local}
                                        </div>
                                        <div className="text-xs text-zinc-300 mt-2 font-medium bg-zinc-800/80 p-2.5 rounded-lg border border-zinc-700/50">
                                            🚗 {EVENTO_2026.acesso}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-zinc-800 text-center">
                                <p className="text-base font-bold text-white">
                                    {EVENTO_2026.chamada}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                <a
                                    href={googleCalendarUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all text-center shadow-lg"
                                >
                                    <Calendar className="w-4 h-4" />
                                    Salvar na Agenda
                                </a>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold text-xs uppercase tracking-wider transition-all text-center"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Falar no WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- SEÇÃO DE LOCALIZAÇÃO & COMO CHEGAR --- */}
            <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto" data-aos="fade-up">
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
                        <Navigation className="w-3.5 h-3.5 text-white" />
                        Guia de Acesso
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Como Chegar ao Tatame
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-400 mt-2">
                        Centro de Treinamento Constrictor Team – Espaço Mestre Armando Wriedt
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Google Maps Iframe */}
                    <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl min-h-[350px] sm:min-h-[420px] bg-zinc-950 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.484708310938!2d-47.917081!3d-15.8087543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b896d8b3de5%3A0x54ddfa28bf4248bb!2sConstrictor%20Team!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização do Centro de Treinamento Constrictor Team"
                            className="w-full h-full min-h-[350px]"
                        />
                    </div>

                    {/* Instruções e Apps de Navegação */}
                    <div className="lg:col-span-5 bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
                        <div className="space-y-5">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-white" />
                                Ponto de Referência e Acesso
                            </h3>

                            <div className="space-y-4 text-sm text-zinc-300">
                                <div className="p-3.5 rounded-xl bg-zinc-800/60 border border-zinc-700/60">
                                    <div className="font-semibold text-white mb-1">📍 Entrada Principal:</div>
                                    <p className="text-zinc-300">
                                        Entrada direta pelo <strong>Estacionamento 08 do Parque da Cidade</strong>.
                                    </p>
                                </div>

                                <div className="p-3.5 rounded-xl bg-zinc-800/60 border border-zinc-700/60">
                                    <div className="font-semibold text-white mb-1">🚗 Estacionamento:</div>
                                    <p className="text-zinc-300">
                                        Amplo estacionamento gratuito no local com fácil circulação.
                                    </p>
                                </div>

                                <div className="p-3.5 rounded-xl bg-zinc-800/60 border border-zinc-700/60">
                                    <div className="font-semibold text-white mb-1">🥋 Traje Recomendado:</div>
                                    <p className="text-zinc-300">
                                        Kimono oficial Constrictor Team para todos os graduandos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Botões de Navegação Direta */}
                        <div className="pt-6 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all text-center"
                            >
                                <Navigation className="w-4 h-4" />
                                Abrir no Maps
                            </a>

                            <a
                                href={wazeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-bold text-sm transition-all text-center"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Abrir no Waze
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MEMÓRIAS & HISTÓRIA: GALERIA DE GRADUAÇÕES --- */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto border-t border-zinc-900" data-aos="fade-up">
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
                        <Trophy className="w-3.5 h-3.5 text-white" />
                        Tradição & Conquistas
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Memórias das Nossas Graduações
                    </h2>
                    <p className="text-sm sm:text-base text-zinc-400 mt-2">
                        Cada faixa representa incontáveis horas de treino, suor, respeito e superação.
                    </p>
                </div>

                {/* Grid de Fotos Históricas */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                    {fotosHistoricas.map((foto, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800/80 bg-zinc-900 group cursor-pointer shadow-md"
                            onClick={() => setSelectedImage(foto.src)}
                            data-aos="fade-up"
                            data-aos-delay={(idx % 4) * 100}
                        >
                            <Image
                                src={foto.src}
                                alt={foto.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/galeria"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-white text-zinc-200 hover:text-white font-medium text-sm transition-all"
                    >
                        Ver Toda a Galeria de Fotos
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* --- BANNER FINAL DE CONVOCAÇÃO --- */}
            <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto" data-aos="zoom-in">
                <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute -right-20 -top-20 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-black text-xs font-extrabold uppercase tracking-wider mb-2">
                            🥋 Convocação Geral
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                            28 de Novembro de 2026 • 16h
                        </h3>

                        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                            {EVENTO_2026.chamada}
                        </p>

                        <div className="pt-4 flex flex-wrap justify-center gap-4">
                            <a
                                href={googleCalendarUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl"
                            >
                                Salvar na Minha Agenda
                            </a>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white font-bold text-sm transition-all"
                            >
                                Confirmar Presença
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MODAL DE LIGHTBOX / ZOOM DA IMAGEM --- */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full h-[85vh]">
                                <Image
                                    src={selectedImage}
                                    alt="Imagem Ampliada - Graduação 2026"
                                    fill
                                    className="object-contain"
                                    quality={100}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}