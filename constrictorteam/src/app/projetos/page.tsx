'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ArrowLeft,
    X,
    ZoomIn,
    Eye,
    Shield,
    Users,
    Sparkles,
    CheckCircle2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react'

// --- Ícone do WhatsApp ---
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
)

// --- Componente de Efeito de Digitação (Typewriter) ---
function TypewriterText({ text }: { text: string }) {
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(100)

    useEffect(() => {
        let timer: NodeJS.Timeout
        const handleType = () => {
            const fullText = text
            setDisplayedText(
                isDeleting
                    ? fullText.substring(0, displayedText.length - 1)
                    : fullText.substring(0, displayedText.length + 1)
            )

            setTypingSpeed(isDeleting ? 50 : 110)

            if (!isDeleting && displayedText === fullText) {
                timer = setTimeout(() => setIsDeleting(true), 3000)
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setTypingSpeed(350)
            }
        }

        timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [displayedText, isDeleting, loopNum, text, typingSpeed])

    return (
        <span className="inline-flex items-center text-white font-black">
            <span>{displayedText}</span>
            <span className="inline-block w-[3px] h-[0.9em] bg-white ml-1.5 animate-pulse" />
        </span>
    )
}

const projectPhotos = [
    {
        id: 1,
        src: '/projeto1.jpeg',
        alt: 'Aliança Constrictor Team, OneSight e Rotary Club',
        caption: 'Aliança Oficial com OneSight EssilorLuxottica Foundation & Rotary Club Taguatinga Oeste',
        tag: 'Parceria Institucional'
    },
    {
        id: 2,
        src: '/projeto2.jpeg',
        alt: 'Ação Visão - Triagem Oftalmológica',
        caption: 'Ação Visão: Triagem oftalmológica e exames para os alunos',
        tag: 'Núcleo Recanto & Riacho'
    },
    {
        id: 3,
        src: '/projeto3.jpeg',
        alt: 'Atendimento e Exames de Visão',
        caption: 'Avaliação clínica e saúde visual para crianças e jovens',
        tag: 'Saúde & Inclusão'
    },
    {
        id: 4,
        src: '/projeto4.jpeg',
        alt: 'Jiu-Jitsu e Transformação Social',
        caption: 'Constrictor Team formando campeões no esporte e cidadãos para a vida',
        tag: 'Formação Cidadã'
    },
    {
        id: 5,
        src: '/projeto5.jpeg',
        alt: 'Ação Social em Campo',
        caption: 'Equipe, professores e voluntários unidos na entrega de oportunidades',
        tag: 'Ação Comunitária'
    },
]

export default function ProjetosPage() {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

    const whatsappNumber = '5561991627171'
    const whatsappMessage = encodeURIComponent(
        'Olá! Vim pelo site e gostaria de saber mais sobre os Projetos Sociais da Constrictor Team.'
    )
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    useEffect(() => {
        if (selectedPhotoIndex !== null) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [selectedPhotoIndex])

    const handleNextPhoto = () => {
        if (selectedPhotoIndex === null) return
        setSelectedPhotoIndex((selectedPhotoIndex + 1) % projectPhotos.length)
    }

    const handlePrevPhoto = () => {
        if (selectedPhotoIndex === null) return
        setSelectedPhotoIndex(
            (selectedPhotoIndex - 1 + projectPhotos.length) % projectPhotos.length
        )
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative overflow-x-hidden">
            {/* Background com foto do Dojo e textura */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/ct2.webp"
                    alt="Background Constrictor Dojo"
                    fill
                    className="object-cover opacity-20 scale-105"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black" />
            </div>

            <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl relative z-10">

                {/* --- HEADER DE NAVEGAÇÃO --- */}
                <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                    <Link
                        href="/"
                        className="self-start md:self-center group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium px-5 py-2.5 rounded-full border border-white/10 bg-zinc-950/80 backdrop-blur-md hover:border-white/30 shadow-lg"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Voltar ao Início</span>
                    </Link>

                    <div className="flex items-center gap-4 self-end md:self-center">
                        <div className="text-right">
                            <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold block">
                                Responsabilidade Social & Cidadania
                            </span>
                            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
                                Projetos Sociais
                            </h1>
                        </div>
                    </div>
                </div>

                {/* --- HERO BANNER DA PÁGINA --- */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-white/10 p-8 md:p-14 mb-16 shadow-2xl"
                >
                    {/* Background Hero */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/ct1.webp"
                            alt="Constrictor Team Dojo"
                            fill
                            className="object-cover opacity-20"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs md:text-sm font-semibold uppercase tracking-widest backdrop-blur-md">
                            <Shield size={14} className="text-white" />
                            Constrictor Team Social
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight uppercase text-white leading-[1.05]">
                            Jiu-Jitsu Que Transforma o Presente, <br className="hidden sm:inline" />
                            <TypewriterText text="OLHOS QUE ENXERGAM O FUTURO" />
                        </h2>

                        <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
                            Acreditamos que o esporte transforma vidas, mas ele se torna ainda mais poderoso quando caminha ao lado da <strong>educação, da saúde e da solidariedade</strong>.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 pt-2">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-4 bg-white text-black font-extrabold rounded-full transition-all duration-300 hover:bg-zinc-200 hover:scale-105 uppercase tracking-wider text-xs sm:text-sm shadow-xl"
                            >
                                <WhatsAppIcon />
                                Fazer Parceria / Apoiar
                            </a>
                        </div>
                    </div>
                </motion.section>

                {/* --- GALERIA COMPLETA DE TODAS AS 5 FOTOS DO PROJETO --- */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 space-y-6"
                >
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
                        <div>
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">
                                Registros Oficiais
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                                Galeria dos Projetos Sociais
                            </h3>
                        </div>
                        <span className="text-xs text-zinc-400 font-medium">
                            5 Fotos Oficiais • Clique para ampliar
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {projectPhotos.map((photo, index) => (
                            <motion.div
                                key={photo.id}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => setSelectedPhotoIndex(index)}
                                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-xl cursor-zoom-in"
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 20vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

                                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                                    {photo.tag}
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white border border-white/30 shadow-2xl">
                                        <ZoomIn size={20} />
                                    </div>
                                </div>

                                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium leading-snug">
                                    {photo.caption}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* --- PROJETO 1: ALIANÇA ONESIGHT & ROTARY --- */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-xl"
                >
                    <div className="lg:col-span-5 relative">
                        <div
                            onClick={() => setSelectedPhotoIndex(0)}
                            className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group cursor-zoom-in bg-zinc-900"
                        >
                            <Image
                                src="/projeto1.jpeg"
                                alt="Aliança Constrictor Team, OneSight e Rotary Club"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                                <span className="text-xs font-bold bg-white text-black px-3 py-1 rounded-full uppercase tracking-wider">
                                    Aliança Oficial
                                </span>
                                <span className="text-xs flex items-center gap-1 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <ZoomIn size={14} /> Ampliar
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-widest bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                            <Sparkles size={14} /> Aliança Oficial
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white leading-tight">
                            Uma Grande Aliança em Favor dos Nossos Projetos Sociais
                        </h3>

                        <p className="text-zinc-300 leading-relaxed text-justify">
                            É com grande honra e alegria que a <strong>Constrictor Team</strong> anuncia uma importante aliança em favor dos nossos projetos sociais. A partir desta parceria, nossos núcleos sociais passarão a contar com o apoio da <strong>OneSight EssilorLuxottica Foundation</strong> e do <strong>Rotary Club Taguatinga Oeste</strong>, duas instituições reconhecidas pelo compromisso com a transformação de vidas por meio da saúde, da inclusão e da ação social.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="bg-zinc-900/80 border border-white/10 p-5 rounded-2xl space-y-2">
                                <div className="flex items-center gap-2 text-white font-bold text-sm">
                                    <Eye size={18} className="text-zinc-300" />
                                    OneSight EssilorLuxottica
                                </div>
                                <p className="text-zinc-400 text-xs leading-relaxed">
                                    Organização sem fins lucrativos presente em mais de 140 países dedicada à missão de erradicar a baixa visão não corrigida com exames e doação de óculos.
                                </p>
                            </div>

                            <div className="bg-zinc-900/80 border border-white/10 p-5 rounded-2xl space-y-2">
                                <div className="flex items-center gap-2 text-white font-bold text-sm">
                                    <Shield size={18} className="text-zinc-300" />
                                    Rotary Club Taguatinga Oeste
                                </div>
                                <p className="text-zinc-400 text-xs leading-relaxed">
                                    Rede global humanitária fortalecendo o <strong>Projeto Visão</strong>, beneficiando o Distrito Federal e Entorno com iniciativas voltadas à saúde visual.
                                </p>
                            </div>
                        </div>

                        <p className="text-zinc-300 leading-relaxed text-justify">
                            Essa união permitirá que crianças e jovens atendidos pelos núcleos sociais da Constrictor Team tenham acesso a <strong>consultas oftalmológicas gratuitas e à doação de óculos de correção visual</strong>, ampliando as oportunidades de desenvolvimento, aprendizagem e qualidade de vida.
                        </p>

                        <div className="border-l-2 border-white pl-4 py-2 bg-white/5 rounded-r-lg text-zinc-300 text-sm font-medium italic">
                            &quot;Constrictor Team: Formando campeões no esporte e cidadãos para a vida.&quot;
                        </div>
                    </div>
                </motion.section>

                {/* --- PROJETO 2: AÇÃO VISÃO (RECANTO DAS EMAS & RIACHO FUNDO) --- */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 space-y-8"
                >
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                            Ação em Campo
                        </span>
                        <h3 className="text-3xl sm:text-4xl font-black uppercase text-white">
                            AÇÃO VISÃO — Olhos Que Enxergam o Futuro
                        </h3>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                            Núcleo Social Recanto das Emas e Riacho Fundo receberam a primeira etapa da Ação Visão, com triagem oftalmológica e exames para os alunos.
                        </p>
                    </div>

                    {/* Texto Detalhado e Agradecimentos */}
                    <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
                        <div className="prose prose-invert max-w-none text-zinc-300 space-y-4 text-justify">
                            <p className="text-base sm:text-lg leading-relaxed">
                                Nossa missão vai muito além do tatame. É sobre <strong>cuidar, educar, transformar e criar oportunidades</strong> para o futuro das nossas crianças e jovens.
                            </p>
                            <p className="leading-relaxed">
                                O <strong>Núcleo Social Recanto das Emas e Riacho Fundo</strong> recebeu a primeira etapa da <strong>Ação Visão</strong>, com a realização da triagem oftalmológica dos nossos alunos. Os alunos que apresentaram necessidade serão encaminhados para exames oftalmológicos e, posteriormente, aqueles que tiverem indicação receberão óculos com lentes corretivas.
                            </p>
                        </div>

                        {/* Grade de Reconhecimento e Agradecimentos */}
                        <div className="border-t border-white/10 pt-8">
                            <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white mb-6 flex items-center gap-2">
                                <Users className="text-zinc-300" size={20} />
                                Agradecimentos Especiais e Parceiros Envolvidos
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-4 space-y-2">
                                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                                        <CheckCircle2 size={16} className="text-zinc-300" />
                                        Dadi Gomes
                                    </div>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        Representando o Rotary Club Taguatinga Oeste e a OneSight EssilorLuxottica Foundation. Dedicação e articulação de grande importância para o alcance do projeto.
                                    </p>
                                </div>

                                <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-4 space-y-2">
                                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                                        <CheckCircle2 size={16} className="text-zinc-300" />
                                        Professor Eron
                                    </div>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        Coordenação do Núcleo Social Recanto das Emas e Riacho Fundo, pelo compromisso, dedicação e cuidado contínuo com os alunos.
                                    </p>
                                </div>

                                <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-4 space-y-2">
                                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                                        <CheckCircle2 size={16} className="text-zinc-300" />
                                        Guto Ferreira
                                    </div>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        Organização estratégica da ação, articulação e conexão entre os parceiros e a Constrictor Team.
                                    </p>
                                </div>

                                <div className="bg-zinc-900/90 border border-white/10 rounded-2xl p-4 space-y-2">
                                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                                        <CheckCircle2 size={16} className="text-zinc-300" />
                                        Mestre Ataíde Jr.
                                    </div>
                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                        Liderança da Constrictor Team, por acreditar que o Jiu-Jitsu pode ultrapassar os limites do tatame e contribuir para a transformação social.
                                    </p>
                                </div>
                            </div>

                            {/* Lista de Entidades Parceiras */}
                            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 pt-4 border-t border-white/10 justify-center">
                                <span className="bg-zinc-900 text-zinc-300 text-xs px-4 py-1.5 rounded-full border border-white/10">
                                    1. OneSight EssilorLuxottica Foundation
                                </span>
                                <span className="bg-zinc-900 text-zinc-300 text-xs px-4 py-1.5 rounded-full border border-white/10">
                                    2. Rotary Club Taguatinga Oeste
                                </span>
                                <span className="bg-zinc-900 text-zinc-300 text-xs px-4 py-1.5 rounded-full border border-white/10">
                                    3. Projeto Visão
                                </span>
                                <span className="bg-zinc-900 text-zinc-300 text-xs px-4 py-1.5 rounded-full border border-white/10">
                                    4. Constrictor Team
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* --- PROJETO 3: AÇÃO NÚCLEO DE SOBRADINHO --- */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 bg-zinc-950 border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl"
                >
                    <div className="max-w-4xl mx-auto space-y-6">
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-widest bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                            <Sparkles size={14} /> Núcleo Sobradinho
                        </div>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white">
                            Ação Social Núcleo Sobradinho: Cuidar é Transformar
                        </h3>

                        <p className="text-zinc-300 leading-relaxed text-justify text-base md:text-lg">
                            Levamos nossa ação social ao <strong>Núcleo de Sobradinho</strong>, unindo jiu-jítsu, saúde, cuidado e transformação. Em parceria com a equipe da <strong>OneSight</strong> e o <strong>Instituto Vida Suave</strong>, proporcionamos aos nossos alunos uma importante ação de cuidado com a visão, porque acreditamos que cuidar de uma criança é também ajudá-la a enxergar um futuro cheio de possibilidades.
                        </p>

                        <p className="text-zinc-300 leading-relaxed text-justify">
                            Nosso agradecimento especial a todos os parceiros, profissionais, professores, voluntários e famílias que fizeram parte deste dia tão importante. Juntos, levamos visão, cuidado e esperança para quem mais precisa.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            <span className="text-xs bg-zinc-900 text-zinc-400 px-3 py-1 rounded-md border border-white/10">#ConstrictorTeam</span>
                            <span className="text-xs bg-zinc-900 text-zinc-400 px-3 py-1 rounded-md border border-white/10">#NúcleoSobradinho</span>
                            <span className="text-xs bg-zinc-900 text-zinc-400 px-3 py-1 rounded-md border border-white/10">#AçãoSocial</span>
                            <span className="text-xs bg-zinc-900 text-zinc-400 px-3 py-1 rounded-md border border-white/10">#CuidarÉTransformar</span>
                            <span className="text-xs bg-zinc-900 text-zinc-400 px-3 py-1 rounded-md border border-white/10">#VisãoParaOFuturo</span>
                            <span className="text-xs bg-zinc-900 text-zinc-400 px-3 py-1 rounded-md border border-white/10">#InstitutoVidaSuave</span>
                        </div>
                    </div>
                </motion.section>

                {/* --- SEÇÃO DE CAPTAÇÃO / PARCERIA --- */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center bg-zinc-950 border border-white/20 rounded-3xl p-8 sm:p-12 shadow-2xl"
                >
                    <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-white mb-4">
                        Quer Apoiar ou Fazer Parceria com Nossos Projetos Sociais?
                    </h3>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                        Seja uma empresa parceira, voluntário ou apoiador do esporte e da saúde visual para nossas crianças e jovens. Fale diretamente com nossa equipe.
                    </p>

                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-extrabold rounded-full transition-all duration-300 hover:bg-zinc-200 hover:scale-105 uppercase tracking-wide text-xs sm:text-sm shadow-2xl"
                    >
                        <WhatsAppIcon />
                        Conversar no WhatsApp
                    </a>
                </motion.section>

                {/* --- LIGHTBOX MODAL --- */}
                <AnimatePresence>
                    {selectedPhotoIndex !== null && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedPhotoIndex(null)}
                                className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
                            />

                            {/* Modal Container */}
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-zinc-950 border border-white/20 flex flex-col z-10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Botão Fechar */}
                                <button
                                    onClick={() => setSelectedPhotoIndex(null)}
                                    className="absolute top-4 right-4 z-50 p-2.5 bg-black/70 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/20"
                                    aria-label="Fechar modal"
                                >
                                    <X size={20} />
                                </button>

                                {/* Botões Anterior / Próximo */}
                                <button
                                    onClick={handlePrevPhoto}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/70 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/20"
                                    aria-label="Foto anterior"
                                >
                                    <ChevronLeft size={22} />
                                </button>

                                <button
                                    onClick={handleNextPhoto}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/70 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/20"
                                    aria-label="Próxima foto"
                                >
                                    <ChevronRight size={22} />
                                </button>

                                {/* Foto em alta resolução */}
                                <div className="relative w-full h-[65vh] md:h-[75vh] bg-black flex items-center justify-center">
                                    <Image
                                        src={projectPhotos[selectedPhotoIndex].src}
                                        alt={projectPhotos[selectedPhotoIndex].alt}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* Rodapé com Legenda */}
                                <div className="p-4 sm:p-6 bg-zinc-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <div>
                                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                                            {projectPhotos[selectedPhotoIndex].tag}
                                        </span>
                                        <p className="text-white text-sm md:text-base font-semibold">
                                            {projectPhotos[selectedPhotoIndex].caption}
                                        </p>
                                    </div>

                                    <div className="text-xs text-zinc-500 shrink-0">
                                        Foto {selectedPhotoIndex + 1} de {projectPhotos.length}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </main>
    )
}
