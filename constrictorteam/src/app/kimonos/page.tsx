'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ShoppingBag, MessageCircle, ShieldCheck, Truck } from 'lucide-react'

const colecoes = [
    {
        title: 'Camisas Oficiais Constrictor Team',
        description: 'Garanta a sua e fortaleça a identidade da nossa equipe! Encomendas abertas até 05/07/2026. Feitas com tecido premium.',
        link: 'https://chat.whatsapp.com/EdqlulmAqXs30J6rawjA9I?s=cl&p=i&mlu=4',
        images: ['/uniforme/novacolecao.jpeg']
    },
    {
        title: 'Agasalho Oficial Constrictor Team',
        description: 'Represente a equipe com muito estilo. Material premium, confortável e durável.',
        link: 'https://chat.whatsapp.com/KWgV64rjTWjCIabCKjljMK?s=cl&p=i&mlu=4',
        images: ['/uniforme/colecao1.jpeg']
    },
    {
        title: 'Kimono Oficial Constrictor Team – Série Competição',
        description: 'A armadura definitiva para quem vive no topo do pódio. Design agressivo e trançado ultra resistente.',
        link: 'https://chat.whatsapp.com/FfctFTc2xJc1agGyjMpRAB?s=cl&p=i&mlu=4',
        images: ['/uniforme/colecao2.jpeg']
    },
    {
        title: 'Kimono Oficial Old School – Azul Marinho',
        description: 'O resgate da nossa tradição. Edição clássica com a essência purista do Jiu-Jitsu.',
        link: 'https://chat.whatsapp.com/DOfgR3WfZMmLBo74PPFk4o?s=cl&p=i&mlu=4',
        images: ['/uniforme/colecao3.jpeg']
    },
    {
        title: 'Rashguards Oficiais Constrictor Team',
        description: 'Alta tecnologia de compressão para treinos No-Gi. Consulte a tabela de medidas na galeria de imagens.',
        link: 'https://chat.whatsapp.com/EM0l7hWJZWv8zwJOVGVe9v?s=cl&p=i&mlu=4',
        images: [
            '/uniforme/rash/rash1.jpeg',
            '/uniforme/rash/rash2.jpeg',
            '/uniforme/rash/rash3.jpeg',
            '/uniforme/rash/rash4.jpeg',
            '/uniforme/colecao4.jpeg'
        ]
    },
    {
        title: 'RASHGUARD KIDS OFICIAL CONSTRICTOR TEAM',
        description: 'O conforto e a proteção que as crianças precisam no tatame. Consulte a tabela de medidas na galeria.',
        link: 'https://chat.whatsapp.com/CHJhtgR8RqcIJvdM2yjE1t?s=cl&p=i&mlu=4',
        images: [
            '/uniforme/rash/kids/rashkids1.jpeg',
            '/uniforme/rash/kids/rashkids2.jpeg',
            '/uniforme/rash/kids/rashkids3.jpeg',
            '/uniforme/rash/kids/rashkids4.jpeg',
            '/uniforme/colecao4.jpeg'
        ]
    },
    {
        title: 'LANÇAMENTO OFICIAL – KIMONO SÉRIE KIDS EQUIPE CONSTRICTOR TEAM',
        description: 'A armadura perfeita para os pequenos guerreiros. Qualidade de kimono adulto para formar os futuros campeões.',
        link: 'https://chat.whatsapp.com/Gs1uW3hprRE9Y7BMFA7yhE?s=cl&p=i&mlu=4',
        images: [
            '/uniforme/colecao10.jpeg',
            '/uniforme/colecao9.jpeg',
            '/uniforme/colecao5.jpeg',
            '/uniforme/colecao6.jpeg',
            '/uniforme/colecao7.jpeg',
            '/uniforme/colecao11.jpeg'
        ]
    }
]

// Componente Interativo de Galeria de Produto
const ProductGallery = ({ images, title }: { images: string[], title: string }) => {
    const [activeImage, setActiveImage] = useState(0)

    if (images.length === 1) {
        return (
            <div className="w-full aspect-[3/4] md:aspect-[4/5] relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
                <Image src={images[0]} alt={title} fill className="object-cover object-top" />
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="w-full aspect-[3/4] md:aspect-[4/5] relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl">
                <Image 
                    src={images[activeImage]} 
                    alt={`${title} - Imagem Principal`} 
                    fill 
                    className="object-cover object-top transition-opacity duration-500" 
                    priority
                />
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 hide-scroll-bar">
                {images.map((img, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setActiveImage(idx)}
                        className={`relative w-20 h-24 md:w-24 md:h-28 shrink-0 rounded-xl overflow-hidden transition-all duration-300
                            ${activeImage === idx 
                                ? 'border-2 border-yellow-500 opacity-100 shadow-[0_0_15px_rgba(234,179,8,0.3)]' 
                                : 'border border-white/10 opacity-50 hover:opacity-100'
                            }`}
                    >
                        <Image src={img} alt={`${title} Miniatura ${idx + 1}`} fill className="object-cover object-top" />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default function LojaKimonosPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
            
            {/* Header / Hero da Loja */}
            <section className="pt-32 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center border-b border-white/10 mb-16">
                <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                    Loja Oficial
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                    KIMONOS E <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        RASH GUARD
                    </span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                    A armadura oficial da nossa equipe. Escolha seu modelo, confira os detalhes na galeria e faça seu pedido de forma rápida e direta via WhatsApp.
                </p>
            </section>

            {/* Listagem de Produtos E-commerce Style */}
            <section className="px-4 sm:px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto flex flex-col gap-24 lg:gap-32">
                {colecoes.map((produto, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
                    >
                        {/* Esquerda: Galeria de Imagens do Produto */}
                        <div className="w-full lg:w-1/2">
                            <ProductGallery images={produto.images} title={produto.title} />
                        </div>
                        
                        {/* Direita: Informações do Produto (Estilo E-commerce) */}
                        <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:sticky lg:top-32">
                            
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                    Oficial
                                </span>
                                <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest">
                                    Disponível para Encomenda
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white">
                                {produto.title}
                            </h2>
                            
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {produto.description}
                            </p>

                            <div className="flex flex-col gap-4 mb-10">
                                <div className="flex items-center gap-4 text-gray-400">
                                    <ShieldCheck className="text-yellow-500" size={24} />
                                    <span>Produto Oficial Constrictor Team</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-400">
                                    <Truck className="text-yellow-500" size={24} />
                                    <span>Entrega a combinar no CT</span>
                                </div>
                            </div>

                            {/* Botão de Compra */}
                            <Link 
                                href={produto.link} 
                                target="_blank" 
                                className="group relative w-full flex justify-center items-center gap-3 bg-yellow-500 text-black font-black uppercase tracking-widest px-8 py-5 md:py-6 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 shadow-[0_10px_40px_rgba(234,179,8,0.2)]"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <ShoppingBag size={24} className="relative z-10" />
                                <span className="relative z-10 text-lg">Comprar Agora</span>
                            </Link>

                            <p className="text-center text-xs text-gray-500 mt-4">
                                Você será redirecionado para o nosso grupo de vendas no WhatsApp.
                            </p>

                        </div>
                    </div>
                ))}
            </section>

            {/* CSS inline para o scroll horizontal */}
            <style dangerouslySetInnerHTML={{__html: `
                .hide-scroll-bar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scroll-bar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </div>
    )
}
