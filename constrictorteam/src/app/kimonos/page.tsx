'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

const colecoes = [
    {
        title: 'Camisas Oficiais',
        description: 'Garanta a sua e fortaleça a identidade da nossa equipe! Encomendas abertas até 05/07/2026.',
        link: 'https://chat.whatsapp.com/EdqlulmAqXs30J6rawjA9I?s=cl&p=i&mlu=4',
        images: ['/uniforme/novacolecao.jpeg']
    },
    {
        title: 'Kimono Constrictor',
        description: 'A armadura tradicional da nossa equipe.',
        link: 'https://chat.whatsapp.com/KWgV64rjTWjCIabCKjljMK?s=cl&p=i&mlu=4',
        images: ['/uniforme/colecao1.jpeg']
    },
    {
        title: 'Kimonos Exclusivos',
        description: 'Design e cortes premium para máxima performance.',
        link: 'https://chat.whatsapp.com/DOfgR3WfZMmLBo74PPFk4o?s=cl&p=i&mlu=4',
        images: ['/uniforme/colecao2.jpeg', '/uniforme/colecao3.jpeg']
    },
    {
        title: 'Linha Rash Guard',
        description: 'Alta tecnologia de compressão para treinos No-Gi e Submission.',
        link: 'https://chat.whatsapp.com/EM0l7hWJZWv8zwJOVGVe9v?s=cl&p=i&mlu=4',
        images: [
            '/uniforme/rash/rash1.jpeg',
            '/uniforme/rash/rash2.jpeg',
            '/uniforme/rash/rash3.jpeg',
            '/uniforme/rash/rash4.jpeg',
        ]
    },
    {
        title: 'Linha Kids',
        description: 'Desenvolvido para os futuros campeões. Conforto e durabilidade.',
        link: 'https://chat.whatsapp.com/CHJhtgR8RqcIJvdM2yjE1t?s=cl&p=i&mlu=4',
        images: [
            '/uniforme/colecao4.jpeg',
            '/uniforme/rash/kids/rashkids1.jpeg',
            '/uniforme/rash/kids/rashkids2.jpeg',
            '/uniforme/rash/kids/rashkids3.jpeg',
            '/uniforme/rash/kids/rashkids4.jpeg',
        ]
    },
    {
        title: 'Séries Especiais',
        description: 'Edições limitadas e equipamentos de alto rendimento.',
        link: 'https://chat.whatsapp.com/Gs1uW3hprRE9Y7BMFA7yhE?s=cl&p=i&mlu=4',
        images: [
            '/uniforme/colecao9.jpeg',
            '/uniforme/colecao5.jpeg',
            '/uniforme/colecao6.jpeg',
            '/uniforme/colecao7.jpeg',
            '/uniforme/colecao11.jpeg'
        ]
    }
]

const renderImages = (images: string[]) => {
    if (images.length === 1) {
        return (
            <div className="w-full h-[50vh] md:h-[65vh] relative">
                <Image src={images[0]} alt="Uniforme" fill className="object-cover object-top" />
            </div>
        )
    }
    if (images.length === 2) {
        return (
            <div className="w-full h-[50vh] md:h-[65vh] flex gap-1">
                {images.map((img, i) => (
                    <div key={i} className="relative flex-1 h-full">
                        <Image src={img} alt="Uniforme" fill className="object-cover object-top" />
                    </div>
                ))}
            </div>
        )
    }
    if (images.length === 4) {
        return (
            <div className="w-full h-[50vh] md:h-[65vh] flex gap-1">
                {images.map((img, i) => (
                    <div key={i} className="relative flex-1 h-full">
                        <Image src={img} alt="Uniforme" fill className="object-cover object-top" />
                    </div>
                ))}
            </div>
        )
    }
    if (images.length >= 5) {
        return (
            <div className="w-full h-[50vh] md:h-[65vh] flex gap-1">
                {/* Imagem Principal */}
                <div className="relative flex-[2] h-full">
                    <Image src={images[0]} alt="Uniforme Principal" fill className="object-cover object-top" />
                </div>
                {/* Coluna 2 */}
                <div className="flex-1 flex flex-col gap-1 h-full">
                    <div className="relative flex-1">
                        <Image src={images[1]} alt="Uniforme 2" fill className="object-cover object-top" />
                    </div>
                    <div className="relative flex-1">
                        <Image src={images[2]} alt="Uniforme 3" fill className="object-cover object-top" />
                    </div>
                </div>
                {/* Coluna 3 (Escondida no mobile se ficar muito apertado, mas flexível no desktop) */}
                <div className="flex-1 hidden sm:flex flex-col gap-1 h-full">
                    <div className="relative flex-1">
                        <Image src={images[3]} alt="Uniforme 4" fill className="object-cover object-top" />
                    </div>
                    <div className="relative flex-1">
                        <Image src={images[4]} alt="Uniforme 5" fill className="object-cover object-top" />
                    </div>
                </div>
            </div>
        )
    }
}

export default function KimonosPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            
            {/* Header Section */}
            <section className="pt-32 pb-16 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                    Kimonos <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                        & Uniformes
                    </span>
                </h1>
                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                    A armadura oficial da Constrictor Team. Todas as fotos da mesma linha estão juntas em um único cartão, basta clicar para garantir o seu no grupo oficial.
                </p>
            </section>

            {/* Coleções Bento Box */}
            <section className="px-4 sm:px-6 lg:px-12 pb-32 max-w-[1400px] mx-auto flex flex-col gap-12 lg:gap-16">
                {colecoes.map((colecao, index) => (
                    <div 
                        key={index} 
                        className="group relative bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden flex flex-col shadow-2xl transition-all duration-500 hover:border-white/30"
                    >
                        {/* Mosaico de Imagens (Bento Layout) */}
                        {renderImages(colecao.images)}
                        
                        {/* Rodapé do Card */}
                        <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 bg-gradient-to-t from-black to-zinc-950">
                            <div className="max-w-xl">
                                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
                                    {colecao.title}
                                </h2>
                                <p className="text-gray-400 text-lg">
                                    {colecao.description}
                                </p>
                            </div>
                            
                            <Link 
                                href={colecao.link} 
                                target="_blank" 
                                className="w-full md:w-auto flex justify-center items-center gap-3 bg-white text-black font-black uppercase tracking-widest px-8 py-5 md:py-4 rounded-full hover:bg-yellow-500 transition-colors shrink-0"
                            >
                                <MessageCircle size={22} />
                                Acessar Grupo
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    )
}
