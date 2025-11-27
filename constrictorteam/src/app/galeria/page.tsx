'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight, Trophy, Award, Filter, MessageCircle } from 'lucide-react'

// --- Tipos ---
interface GalleryImage {
    id: number
    src: string
    alt: string
    category: 'graduacao' | 'competicoes'
    title: string
    description: string
}

interface Categoria {
    id: string
    name: string
    icon: React.ReactNode
    count: number
}

// --- CONFIGURAÇÃO DOS BANNERS ---
const BANNER_GERAL_SRC = "/backg.png" // Novo banner para "Todas"
const BANNER_GRADUACAO_SRC = "/galeria/graduacao/grade20.jpeg"
const BANNER_COMPETICOES_SRC = "/galeria/competicoes/competicaoPage.jpeg"

// --- DADOS ---

// Lista Exclusiva de Graduação
const IMAGENS_GRADUACAO: GalleryImage[] = [
    { id: 1, src: '/galeria/graduacao/grade1.jpeg', alt: 'Graduação - Foto 1', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 2, src: '/galeria/graduacao/grade2.jpeg', alt: 'Graduação - Foto 2', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 3, src: '/galeria/graduacao/grade3.jpeg', alt: 'Graduação - Foto 3', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 4, src: '/galeria/graduacao/grade4.jpeg', alt: 'Graduação - Foto 4', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 5, src: '/galeria/graduacao/grade5.jpeg', alt: 'Graduação - Foto 5', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 6, src: '/galeria/graduacao/grade6.jpeg', alt: 'Graduação - Foto 6', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 7, src: '/galeria/graduacao/grade7.jpeg', alt: 'Graduação - Foto 7', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 8, src: '/galeria/graduacao/grade8.jpeg', alt: 'Graduação - Foto 8', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 9, src: '/galeria/graduacao/grade9.jpeg', alt: 'Graduação - Foto 9', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 10, src: '/galeria/graduacao/grade10.jpeg', alt: 'Graduação - Foto 10', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 12, src: '/galeria/graduacao/grade12.jpeg', alt: 'Graduação - Foto 12', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 13, src: '/galeria/graduacao/grade13.jpeg', alt: 'Graduação - Foto 13', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 14, src: '/galeria/graduacao/grade14.jpeg', alt: 'Graduação - Foto 14', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 15, src: '/galeria/graduacao/grade15.jpeg', alt: 'Graduação - Foto 15', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 18, src: '/galeria/graduacao/grade18.jpeg', alt: 'Graduação - Foto 18', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 19, src: '/galeria/graduacao/grade19.jpeg', alt: 'Graduação - Foto 19', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 20, src: '/galeria/graduacao/grade20.jpeg', alt: 'Graduação - Foto 20', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 21, src: '/galeria/graduacao/grade21.jpeg', alt: 'Graduação - Foto 21', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 22, src: '/galeria/graduacao/grade22.jpeg', alt: 'Graduação - Foto 22', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 23, src: '/galeria/graduacao/grade23.jpeg', alt: 'Graduação - Foto 23', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 24, src: '/galeria/graduacao/grade24.jpeg', alt: 'Graduação - Foto 24', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 25, src: '/galeria/graduacao/grade25.jpeg', alt: 'Graduação - Foto 25', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 26, src: '/galeria/graduacao/grade26.jpeg', alt: 'Graduação - Foto 26', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 27, src: '/galeria/graduacao/grade27.jpeg', alt: 'Graduação - Foto 27', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 28, src: '/galeria/graduacao/grade28.jpeg', alt: 'Graduação - Foto 28', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 29, src: '/galeria/graduacao/grade29.jpeg', alt: 'Graduação - Foto 29', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 30, src: '/galeria/graduacao/grade30.jpeg', alt: 'Graduação - Foto 30', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
    { id: 31, src: '/galeria/graduacao/grade31.jpeg', alt: 'Graduação - Foto 31', category: 'graduacao', title: 'Graduação Sensei Breno', description: 'Momento especial da graduação' },
]

// Lista Exclusiva de Competições
const IMAGENS_COMPETICOES: GalleryImage[] = [
    { id: 32, src: '/galeria/competicoes/comp1.jpeg', alt: 'Competição - Foto 1', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 33, src: '/galeria/competicoes/comp2.jpeg', alt: 'Competição - Foto 2', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 34, src: '/galeria/competicoes/comp3.jpeg', alt: 'Competição - Foto 3', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 35, src: '/galeria/competicoes/comp4.jpeg', alt: 'Competição - Foto 4', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 36, src: '/galeria/competicoes/comp5.jpeg', alt: 'Competição - Foto 5', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 37, src: '/galeria/competicoes/comp6.jpeg', alt: 'Competição - Foto 6', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 38, src: '/galeria/competicoes/comp7.jpeg', alt: 'Competição - Foto 7', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 39, src: '/galeria/competicoes/comp8.jpeg', alt: 'Competição - Foto 8', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 40, src: '/galeria/competicoes/comp9.jpeg', alt: 'Competição - Foto 9', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 41, src: '/galeria/competicoes/comp10.jpeg', alt: 'Competição - Foto 10', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 42, src: '/galeria/competicoes/comp11.jpeg', alt: 'Competição - Foto 11', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 43, src: '/galeria/competicoes/comp12.jpeg', alt: 'Competição - Foto 12', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 44, src: '/galeria/competicoes/comp13.jpeg', alt: 'Competição - Foto 13', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 45, src: '/galeria/competicoes/comp14.jpeg', alt: 'Competição - Foto 14', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 46, src: '/galeria/competicoes/comp15.jpeg', alt: 'Competição - Foto 15', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 47, src: '/galeria/competicoes/comp16.jpeg', alt: 'Competição - Foto 16', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
    { id: 48, src: '/galeria/competicoes/comp17.jpeg', alt: 'Competição - Foto 17', category: 'competicoes', title: 'Campeonato 2024', description: 'Nossos atletas em ação' },
]

const ALL_IMAGES = [...IMAGENS_GRADUACAO, ...IMAGENS_COMPETICOES]

export default function Galeria() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all')
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [mounted, setMounted] = useState<boolean>(false)

    // Configuração do WhatsApp
    const whatsappNumber = "55619991627171"
    const whatsappMessage = encodeURIComponent("Olá! Vi as fotos na galeria do site e gostaria de agendar um treino experimental.")
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    const categories: Categoria[] = [
        {
            id: 'all',
            name: 'Todas as Fotos',
            icon: <Filter className="w-4 h-4" />,
            count: ALL_IMAGES.length
        },
        {
            id: 'graduacao',
            name: 'Graduação Sensei Breno',
            icon: <Award className="w-4 h-4" />,
            count: IMAGENS_GRADUACAO.length
        },
        {
            id: 'competicoes',
            name: 'Competições',
            icon: <Trophy className="w-4 h-4" />,
            count: IMAGENS_COMPETICOES.length
        }
    ]

    useEffect(() => {
        setMounted(true)
    }, [])

    // --- LÓGICA DO BANNER DINÂMICO ---
    const getBannerContent = () => {
        switch (selectedCategory) {
            case 'graduacao':
                return {
                    src: BANNER_GRADUACAO_SRC,
                    title: 'Cerimônias de Graduação Breno Gusmão',
                    desc: 'Celebrando a evolução técnica, o esforço e o espírito marcial de cada aluno.'
                }
            case 'competicoes':
                return {
                    src: BANNER_COMPETICOES_SRC,
                    title: 'Competições',
                    desc: 'A adrenalina, a técnica e a garra da Constrictor Team nos tatames pelo Brasil.'
                }
            default: // Caso 'all'
                return {
                    src: BANNER_GERAL_SRC,
                    title: 'Galeria Constrictor Team',
                    desc: 'Um acervo completo da nossa história, dos treinos aos pódios.'
                }
        }
    }

    const bannerContent = getBannerContent()

    const filteredImages = selectedCategory === 'all'
        ? ALL_IMAGES
        : selectedCategory === 'graduacao'
            ? IMAGENS_GRADUACAO
            : IMAGENS_COMPETICOES

    const currentImageIndex = selectedImage !== null
        ? ALL_IMAGES.findIndex(img => img.id === selectedImage)
        : -1

    const nextImage = (): void => {
        if (selectedImage !== null && currentImageIndex < ALL_IMAGES.length - 1) {
            const nextIndex = (currentImageIndex + 1) % ALL_IMAGES.length
            setSelectedImage(ALL_IMAGES[nextIndex].id)
        }
    }

    const prevImage = (): void => {
        if (selectedImage !== null) {
            const prevIndex = (currentImageIndex - 1 + ALL_IMAGES.length) % ALL_IMAGES.length
            setSelectedImage(ALL_IMAGES[prevIndex].id)
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent): void => {
        if (e.key === 'Escape') setSelectedImage(null)
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') prevImage()
    }

    if (!mounted) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
                </div>
            </div>
        )
    }

    return (
        <section className="min-h-screen bg-black text-white">
            {/* 1. Banner Hero Principal (Global) */}
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                    src="/ct2.webp"
                    alt="Constrictor Team - Nossa Galeria"
                    fill
                    className="object-cover brightness-75"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                        <div className="mb-4 flex justify-center">
                            <Image
                                src="/constrictor-team.jpg"
                                alt="Constrictor Team Logo"
                                width={300}
                                height={100}
                                className="h-16 w-auto object-contain"
                                priority
                            />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Nossa Galeria</h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                            Momentos que marcam nossa história no Jiu-Jitsu
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* 2. Botões de Filtro */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category: Categoria) => (
                        <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            className={`flex items-center gap-2 transition-all duration-300 text-sm md:text-base border-2 ${selectedCategory === category.id
                                ? 'bg-white text-black hover:bg-gray-100 border-white shadow-lg'
                                : 'bg-transparent text-white hover:bg-gray-900 border-gray-600'
                                }`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.icon}
                            <span className="whitespace-nowrap">{category.name}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${selectedCategory === category.id
                                ? 'bg-black text-white'
                                : 'bg-gray-700 text-gray-300'
                                }`}>
                                {category.count}
                            </span>
                        </Button>
                    ))}
                </div>

                {/* 3. Banner Dinâmico (Agora aparece para TODAS as categorias) */}
                <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-12 shadow-2xl border border-gray-800 transition-all duration-500 animate-in fade-in zoom-in-95">
                    <Image
                        key={selectedCategory} // Key força animação ao trocar
                        src={bannerContent.src}
                        alt={bannerContent.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay com texto descritivo */}
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 uppercase tracking-wide">
                            {bannerContent.title}
                        </h2>
                        <p className="text-gray-200 text-sm md:text-lg max-w-2xl font-light">
                            {bannerContent.desc}
                        </p>
                    </div>
                </div>

                {/* 4. Grid de Imagens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="group relative bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-800 flex flex-col"
                            onClick={() => setSelectedImage(image.id)}
                        >
                            <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gray-800">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute top-3 left-3 z-10">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium shadow-sm ${image.category === 'graduacao'
                                        ? 'bg-white text-black'
                                        : 'bg-green-600 text-white'
                                        }`}>
                                        {image.category === 'graduacao' ? 'Graduação' : 'Competição'}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center z-20">
                                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white text-center p-4">
                                        <div className="w-12 h-1 bg-white mx-auto mb-3"></div>
                                        <p className="text-sm font-semibold tracking-wider uppercase">Ver Foto</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-t border-gray-800 mt-auto">
                                <h4 className="text-white font-medium text-sm truncate">{image.title}</h4>
                                <p className="text-gray-400 text-xs truncate">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 5. Modal / Lightbox */}
                {selectedImage !== null && (
                    <div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                        onKeyDown={handleKeyDown}
                        tabIndex={0}
                    >
                        <div className="relative max-w-6xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full border border-gray-600" onClick={() => setSelectedImage(null)}>
                                <X className="w-6 h-6" />
                            </Button>
                            <Button variant="ghost" size="icon" className="absolute left-2 md:left-4 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full border border-gray-600" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                                <ChevronLeft className="w-8 h-8" />
                            </Button>
                            <Button variant="ghost" size="icon" className="absolute right-2 md:right-4 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full border border-gray-600" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                                <ChevronRight className="w-8 h-8" />
                            </Button>

                            <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
                                {(() => {
                                    const activeImage = ALL_IMAGES.find(img => img.id === selectedImage)
                                    if (!activeImage) return null

                                    return (
                                        <>
                                            <Image
                                                src={activeImage.src}
                                                alt={activeImage.alt}
                                                width={1200}
                                                height={800}
                                                className="object-contain max-w-full max-h-full rounded-lg"
                                                priority
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-12 pb-6 px-6 text-white rounded-b-lg">
                                                <h3 className="text-xl font-bold mb-1">{activeImage.title}</h3>
                                                <p className="text-gray-300 mb-2">{activeImage.description}</p>
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${activeImage.category === 'graduacao' ? 'bg-white text-black' : 'bg-green-600 text-white'}`}>
                                                    {activeImage.category === 'graduacao' ? 'Graduação Sensei Breno Gusmão' : 'Competições e Campeonatos'}
                                                </span>
                                            </div>
                                        </>
                                    )
                                })()}
                            </div>
                            <div className="absolute top-4 left-4 z-20 bg-black/50 text-white px-4 py-2 rounded-full text-sm border border-gray-600">
                                {currentImageIndex + 1} / {ALL_IMAGES.length}
                            </div>
                        </div>
                    </div>
                )}

                {/* 6. Call to Action */}
                <div className="text-center bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-800 mt-12">
                    <div className="mb-6 flex justify-center">
                        <Image src="/constrictor-team.jpg" alt="Constrictor Team Logo" width={250} height={80} className="h-14 w-auto object-contain" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Faça Parte Dessa História</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Sua foto pode estar aqui na próxima! Venha treinar na Constrictor Team e participe das nossas graduações e competições.
                    </p>

                    <div className="flex justify-center">
                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <Button
                                size="lg"
                                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 h-14 rounded-full shadow-lg shadow-green-900/20 hover:scale-105 transition-all duration-300 gap-2"
                            >
                                <MessageCircle className="w-6 h-6" />
                                Começar a Treinar e Ver Horários
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}