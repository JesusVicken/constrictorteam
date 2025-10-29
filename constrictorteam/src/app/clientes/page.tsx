'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SectionTitle } from '../_components/section-title'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface Cliente {
    id: number
    nome: string
    logo: string
    isResidencial?: boolean
}

const CLIENTES: Cliente[] = [


    {
        id: 1,
        nome: "Windsor Hotéis ",
        logo: "/windsor.png"
    },
    {
        id: 2,
        nome: "Embaixada Britânica Brasília",
        logo: "/embaixada.png"
    },
    {
        id: 3,
        nome: "Max Pharma",
        logo: "/max.webp"
    },
    {
        id: 4,
        nome: "Body Tech",
        logo: "/bt.png"
    },
    {
        id: 5,
        nome: "Rede Sarah",
        logo: "/sarah.png"
    },
    {
        id: 6,
        nome: "JR Ribeiro",
        logo: "/apoio5.png"
    },
    {
        id: 7,
        nome: "OPS Soluções Arquitetônicas",
        logo: "/apoio6.jpg"
    },
    {
        id: 8,
        nome: "STR Estrutura Metálicas",
        logo: "/apoio2.jpeg",
        isResidencial: true
    },
    {
        id: 9,
        nome: "Prime Cidade",
        logo: "/apoio1.png"
    },
    {
        id: 10,
        nome: "STRUTTURA",
        logo: "/apoio3.jpeg"
    },
    {
        id: 11,
        nome: "ALF Arquitetura & Design",
        logo: "/apoio4.jpg"
    },

    {
        id: 12,
        nome: "Condomínios Residenciais e Casas de Alto Padrão",
        logo: "/condominio.jpg",
        isResidencial: true
    },
    {
        id: 13,
        nome: "Tecna Construtora",
        logo: "/tecna.preto.png"
    }
]

export default function Clientes() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        })
    }, [])

    return (
        <section
            className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-b from-background to-muted/10"
            data-aos="fade-up"
        >
            <div className="container px-4 sm:px-6 mx-auto">
                <div
                    className="max-w-4xl mx-auto text-center mb-16"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <SectionTitle
                        title="Nossos Clientes"
                        className="mb-6"
                    />
                </div>

                {/* Desktop - Grid */}
                <div
                    className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    {CLIENTES.map((cliente, index) => (
                        <ClienteCard
                            key={cliente.id}
                            cliente={cliente}
                            data-aos-delay={200 + (index * 50)}
                        />
                    ))}
                </div>

                {/* Mobile - Carrossel */}
                <div
                    className="md:hidden max-w-2xl mx-auto px-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1.1}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        loop={true}
                        className="pb-12"
                        breakpoints={{
                            400: {
                                slidesPerView: 1.3
                            }
                        }}
                    >
                        {CLIENTES.map((cliente) => (
                            <SwiperSlide key={cliente.id}>
                                <div className="px-2 py-4">
                                    <ClienteCard
                                        cliente={cliente}
                                        mobile
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

function ClienteCard({ cliente, mobile = false, ...props }: { cliente: Cliente, mobile?: boolean, [key: string]: any }) {
    return (
        <div
            className="group perspective-1000 h-full"
            data-aos="fade-up"
            {...props}
        >
            <Card className="h-full transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:shadow-primary/10 border border-muted/30 hover:border-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <CardHeader className="pb-0 px-4 pt-4">
                    <div className={`relative w-full ${mobile ? 'h-40' : 'h-36'} transition-transform duration-300 group-hover:scale-95`}>
                        <Image
                            src={cliente.logo}
                            alt={`Logo ${cliente.nome}`}
                            fill
                            className="object-contain p-2"
                            sizes={mobile ? "100vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                            quality={90}
                            priority={cliente.id <= 5}
                        />
                    </div>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-2 text-center">
                    {cliente.isResidencial && (
                        <p className="text-xs text-muted-foreground mb-1">Também trabalhamos com</p>
                    )}
                    <CardTitle className="text-base font-medium text-foreground/90 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {cliente.nome}
                    </CardTitle>
                </CardContent>
            </Card>
        </div>
    )
}