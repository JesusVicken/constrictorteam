

'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Users, Navigation, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Evento {
    id: number
    titulo: string
    data: string
    horario: string
    local: string
    traje: string
    descricao: string
    imagem: string
    video?: string
    tipo: 'faixa-preta' | 'graduacao'
    destaque?: boolean
}

const EVENTOS: Evento[] = [
    {
        id: 1,
        titulo: "Encontro Histórico de Faixas Pretas",
        data: "29 de novembro de 2025",
        horario: "11h da manhã",
        local: "Centro de Treinamento Constrictor Team",
        traje: "Kimono branco",
        descricao: "Um marco de legado, honra e irmandade. Será um dia de união, confraternização e presença de grandes autoridades do esporte e de Brasília. Evento exclusivo e restrito a faixas pretas Constrictor Team.",
        imagem: "/graduacao.jpeg",
        tipo: 'faixa-preta',
        destaque: true
    },
    {
        id: 2,
        titulo: "Graduação dos Alunos do Professor Breno Gusmão",
        data: "15 de novembro de 2025",
        horario: "10h da manhã",
        local: "Centro de Treinamento Constrictor Team",
        traje: "Kimono completo",
        descricao: "Momento de celebração, reconhecimento e superação, que marca mais um passo na jornada de cada guerreiro dentro do tatame. Mais do que trocar de faixa, é o momento de honrar o esforço, a disciplina e a evolução.",
        imagem: "/graduacaoBreno.jpeg",
        video: "/graduacaoBreno.mp4",
        tipo: 'graduacao'
    }
]

// Componente Badge customizado
function CustomBadge({
    children,
    variant = 'default',
    className = ''
}: {
    children: React.ReactNode
    variant?: 'default' | 'outline'
    className?: string
}) {
    const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors"

    const variants = {
        default: "bg-white text-black border border-gray-300",
        outline: "border border-white text-white bg-transparent"
    }

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </span>
    )
}

// Componente de Video Player
function VideoPlayer({ src, poster, className = '' }: { src: string, poster: string, className?: string }) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [showControls, setShowControls] = useState(false)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleVideoEnd = () => {
        setIsPlaying(false)
    }

    return (
        <div
            className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-black ${className}`}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-full object-cover"
                loop={false}
                muted={false}
                onEnded={handleVideoEnd}
                onClick={togglePlay}
            />

            {/* Overlay de controle */}
            <div
                className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}
                onClick={togglePlay}
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <button
                        className={`p-4 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/30 ${showControls || !isPlaying ? 'scale-100' : 'scale-0'}`}
                        onClick={togglePlay}
                    >
                        {isPlaying ? (
                            <Pause className="w-8 h-8 text-white" />
                        ) : (
                            <Play className="w-8 h-8 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Badge de vídeo */}
            <div className="absolute top-2 left-2">
                <CustomBadge className="bg-red-600 text-white border-none">
                    🎥 Vídeo
                </CustomBadge>
            </div>
        </div>
    )
}

export default function Graduacao2025() {
    const [activeEvent, setActiveEvent] = useState(0)
    const [swiperInstance, setSwiperInstance] = useState<any>(null)

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        })
    }, [])

    const nextSlide = () => {
        if (swiperInstance) {
            swiperInstance.slideNext()
        }
    }

    const prevSlide = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev()
        }
    }

    return (
        <section
            className="w-full py-12 md:py-20 lg:py-28 bg-black relative overflow-hidden"
            data-aos="fade-up"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px]" />
            </div>

            <div className="container px-4 sm:px-6 mx-auto relative z-10">
                {/* Header Section */}
                <div
                    className="max-w-6xl mx-auto text-center mb-12 md:mb-16"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <CustomBadge
                        className="mb-4 md:mb-6 px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        🥋 Evento Oficial 2025
                    </CustomBadge>

                    {/* Logo */}
                    <div className="flex justify-center mb-6 md:mb-8" data-aos="fade-up" data-aos-delay="200">
                        <div className="relative w-48 h-24 md:w-64 md:h-32 lg:w-80 lg:h-40">
                            <Image
                                src="/logo1234.png"
                                alt="Constrictor Team"
                                fill
                                className="object-contain"
                                priority
                                quality={100}
                            />
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
                        GRADUAÇÃO
                        <span className="block text-xl md:text-4xl lg:text-5xl text-gray-300 mt-1 md:mt-2">
                            2025
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
                        Celebrando o legado, honra e irmandade da nossa família
                    </p>
                </div>

                {/* Hero Image */}
                <div
                    className="max-w-6xl mx-auto mb-12 md:mb-16 rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <div className="relative aspect-[4/3] md:aspect-[21/9]">
                        <Image
                            src="/constrictor2.png"
                            alt="Constrictor Team 2025 - Graduação Oficial"
                            fill
                            className="object-contain bg-black"
                            priority
                            quality={90}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        {/* Texto apenas para desktop */}
                        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 hidden md:block">
                            <h2 className="text-xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                                CONVITE OFICIAL
                            </h2>
                            <p className="text-sm md:text-xl text-gray-300">
                                Encontro Histórico de Faixas Pretas Constrictor Team 2025
                            </p>
                        </div>
                    </div>
                </div>

                {/* Events Section Header */}
                <div
                    className="max-w-6xl mx-auto mb-8 md:mb-12 text-center"
                    data-aos="fade-up"
                    data-aos-delay="250"
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                        Eventos da Graduação
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg">
                        Dois momentos especiais para celebrar nossa evolução
                    </p>
                    <div className="flex justify-center items-center gap-4 mt-4 md:mt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                            <span className="text-xs md:text-sm text-gray-300">Encontro Faixas Pretas</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                            <span className="text-xs md:text-sm text-gray-300">Graduação Alunos</span>
                        </div>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="max-w-6xl mx-auto">
                    {/* Desktop - Grid Layout */}
                    <div
                        className="hidden lg:grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        {EVENTOS.map((evento, index) => (
                            <EventoCard
                                key={evento.id}
                                evento={evento}
                                data-aos-delay={300 + (index * 100)}
                            />
                        ))}
                    </div>

                    {/* Mobile & Tablet - Carousel com controles */}
                    <div
                        className="lg:hidden max-w-2xl mx-auto relative"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="flex items-center justify-between mb-4 px-2">
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            <span className="text-white text-sm font-medium">
                                {activeEvent + 1} / {EVENTOS.length}
                            </span>
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={16}
                            slidesPerView={1}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                                el: '.custom-pagination'
                            }}
                            loop={true}
                            className="pb-12"
                            onSwiper={setSwiperInstance}
                            onSlideChange={(swiper) => setActiveEvent(swiper.realIndex)}
                        >
                            {EVENTOS.map((evento) => (
                                <SwiperSlide key={evento.id}>
                                    <div className="px-1 py-2">
                                        <EventoCard evento={evento} mobile />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Paginação customizada */}
                        <div className="custom-pagination flex justify-center gap-2 mt-4" />
                    </div>
                </div>

                {/* Location Section */}
                <div
                    className="max-w-6xl mx-auto mt-12 md:mt-16"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <div className="text-center mb-6 md:mb-8">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
                            📍 Localização
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
                            Centro de Treinamento Constrictor Team
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {/* Map */}
                        <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl h-80 md:h-96 lg:h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.484708310938!2d-47.917081!3d-15.8087543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b896d8b3de5%3A0x54ddfa28bf4248bb!2sConstrictor%20Team!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização do Centro de Treinamento Constrictor Team"
                                className="min-h-[320px] md:min-h-[400px] lg:min-h-[500px]"
                            />
                        </div>

                        {/* Location Info */}
                        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-4 md:mb-6">
                                <div className="p-2 md:p-3 bg-white rounded-full">
                                    <Navigation className="w-5 h-5 md:w-6 md:h-6 text-black" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-white">Como Chegar</h3>
                            </div>

                            <div className="space-y-3 md:space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold text-white mb-1 md:mb-2 text-sm md:text-base">📍 Endereço:</h4>
                                    <p className="text-base md:text-lg">Unnamed Road - Srps, SHCS</p>
                                    <p className="text-base md:text-lg">Brasília - DF, 70390-100</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white mb-1 md:mb-2 text-sm md:text-base">🚗 Estacionamento:</h4>
                                    <p className="text-sm md:text-base">Ampla área disponível</p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white mb-1 md:mb-2 text-sm md:text-base">🚌 Transporte:</h4>
                                    <p className="text-sm md:text-base">Fácil acesso por ônibus</p>
                                </div>
                            </div>

                            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700">
                                <Button
                                    className="w-full bg-white text-black hover:bg-gray-200 py-2 md:py-3 text-base md:text-lg font-semibold border border-gray-300"
                                    onClick={() => window.open('https://www.google.com/maps/place/Constrictor+Team/@-15.8087543,-47.917081,17z/data=!3m1!4b1!4m6!3m5!1s0x935a3b896d8b3de5:0x54ddfa28bf4248bb!8m2!3d-15.8087543!4d-47.9170703!16s%2Fg%2F11fr0ltn_8?entry=ttu', '_blank')}
                                >
                                    <Navigation className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                                    Abrir no Maps
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Images */}
                <div
                    className="max-w-6xl mx-auto mt-12 md:mt-16"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <div className="text-center mb-6 md:mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                            Galeria
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base">
                            Momentos especiais da nossa trajetória
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                        <div className="text-center">
                            <div className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl mb-3 md:mb-4">
                                <Image
                                    src="/graduacaobg.jpeg"
                                    alt="Graduação Constrictor Team 2025"
                                    fill
                                    className="object-contain bg-black hover:scale-105 transition-transform duration-500"
                                    quality={90}
                                />
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm">Momento especial da graduação</p>
                        </div>
                        <div className="text-center">
                            <div className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl mb-3 md:mb-4">
                                <Image
                                    src="/graduacao2.jpeg"
                                    alt="Encontro de Faixas Pretas Constrictor Team"
                                    fill
                                    className="object-contain bg-black hover:scale-105 transition-transform duration-500"
                                    quality={90}
                                />
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm">Encontro de faixas pretas</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div
                    className="max-w-4xl mx-auto text-center mt-12 md:mt-16"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                            Venha Fazer Parte Desta História
                        </h3>
                        <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-6 max-w-2xl mx-auto">
                            Um momento reservado apenas àqueles que carregam o grau máximo de comprometimento
                            e lealdade à nossa família.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-black hover:bg-gray-200 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold border border-gray-300"
                            >
                                Confirmar Presença
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-black hover:bg-white/10 px-6 md:px-8 py-2 md:py-3 text-base md:text-lg"
                            >
                                Mais Informações
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function EventoCard({ evento, mobile = false, ...props }: { evento: Evento, mobile?: boolean, [key: string]: any }) {
    return (
        <div
            className="group h-full"
            data-aos="fade-up"
            {...props}
        >
            <Card className="h-full transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 md:group-hover:-translate-y-2 border border-gray-700 bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm overflow-hidden">
                {/* Header with Badge */}
                <CardHeader className="pb-3 md:pb-4 relative">
                    {evento.destaque && (
                        <CustomBadge className="absolute -top-2 md:-top-3 left-3 md:left-4 px-2 py-0.5 md:px-3 md:py-1 text-xs">
                            EVENTO PRINCIPAL
                        </CustomBadge>
                    )}

                    {/* Container de Mídia - Imagem ou Vídeo */}
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3 md:mb-4 mt-1 md:mt-2 bg-black">
                        {evento.video ? (
                            <VideoPlayer
                                src={evento.video}
                                poster={evento.imagem}
                                className="group-hover:scale-105 transition-transform duration-500"
                            />
                        ) : (
                            <>
                                <Image
                                    src={evento.imagem}
                                    alt={evento.titulo}
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                    quality={90}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </>
                        )}

                        <CustomBadge className={`absolute top-2 md:top-3 right-2 md:right-3 ${evento.tipo === 'faixa-preta'
                            ? 'bg-white text-black'
                            : 'bg-white text-black border border-gray-300'
                            }`}>
                            {evento.tipo === 'faixa-preta' ? '🥋 Faixa Preta' : '📜 Graduação'}
                        </CustomBadge>
                    </div>

                    <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-gray-300 transition-colors duration-300 text-center px-2">
                        {evento.titulo}
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 md:space-y-4 px-3 md:px-6 pb-4 md:pb-6">
                    {/* Event Details */}
                    <div className="space-y-2 md:space-y-3">
                        <div className="flex items-center gap-2 md:gap-3 text-gray-300">
                            <Calendar className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
                            <span className="font-medium text-sm md:text-base">{evento.data}</span>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 text-gray-300">
                            <Clock className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
                            <span className="font-medium text-sm md:text-base">{evento.horario}</span>
                        </div>

                        <div className="flex items-start gap-2 md:gap-3 text-gray-300">
                            <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0 mt-0.5" />
                            <span className="font-medium text-sm md:text-base">{evento.local}</span>
                        </div>

                        <div className="flex items-center gap-2 md:gap-3 text-gray-300">
                            <Users className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
                            <span className="font-medium text-sm md:text-base">{evento.traje}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="pt-1 md:pt-2">
                        <p className="text-gray-400 leading-relaxed text-xs md:text-sm lg:text-base">
                            {evento.descricao}
                        </p>
                    </div>

                    {/* Exclusive Badge for Faixa Preta Event */}
                    {evento.tipo === 'faixa-preta' && (
                        <div className="pt-1 md:pt-2">
                            <CustomBadge variant="outline" className="text-xs">
                                ⚠️ Exclusivo faixas pretas
                            </CustomBadge>
                        </div>
                    )}

                    {/* Quote */}
                    {evento.tipo === 'graduacao' && (
                        <div className="pt-1 md:pt-2 border-t border-gray-700">
                            <blockquote className="text-xs md:text-sm text-gray-300 italic text-center">
                                "A força não vem apenas do corpo, mas da mente e do espírito de quem nunca desiste."
                            </blockquote>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}