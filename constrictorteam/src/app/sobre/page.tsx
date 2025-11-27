'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import {
    FacebookLogo,
    InstagramLogo,
    YoutubeLogo,
    WhatsappLogo,
    MapPin,
    Envelope,
    Phone,
    CaretLeft,
    CaretRight,
    Trophy,
    Users,
    Sword,
    GraduationCap,
    Shield
} from '@phosphor-icons/react/dist/ssr'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence, PanInfo, useInView, animate } from 'framer-motion'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

// --- Componente de Contagem (Novo) ---
const CounterItem = ({ value, suffix }: { value: number, suffix: string }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    useEffect(() => {
        if (isInView && ref.current) {
            const node = ref.current
            const controls = animate(0, value, {
                duration: 2.5, // Duração da contagem em segundos
                ease: "easeOut",
                onUpdate: (latest) => {
                    // Atualiza o texto diretamente no DOM para performance
                    node.textContent = Math.floor(latest) + suffix
                }
            })
            return () => controls.stop()
        }
    }, [isInView, value, suffix])

    return <span ref={ref}>0{suffix}</span>
}

export default function SobrePage() {
    const [isMobile, setIsMobile] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const logoRef = useRef<HTMLDivElement>(null)

    const whatsappNumber = '6191627171'
    const whatsappMessage = 'Olá, gostaria de mais informações sobre a Constrictor Team.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    const mestreImages = [
        '/mestre1.jpg', '/mestre2.jpg', '/mestre3.jpg', '/mestre4.jpg',
        '/mestre5.jpg', '/mestre6.jpg', '/mestre7.jpg', '/mestre8.jpg',
        '/mestre9.jpg', '/mestre10.jpg', '/mestre11.jpg', '/mestre12.jpg',
        '/mestre13.jpg', '/mestre14.jpg', '/mestre15.jpg', '/mestre16.jpg',
        '/mestre17.jpg', '/mestre18.jpg', '/mestre19.jpg', '/mestre20.jpg', '/mestre21.jpg', '/mestre22.jpg', '/mestre23.jpg'
    ]

    // Dados refatorados para separar Valor Numérico do Sufixo
    const achievements = [
        { icon: Trophy, value: 30, suffix: '+', text: 'Anos de Tradição' },
        { icon: Users, value: 1000, suffix: '+', text: 'Alunos Formados' },
        { icon: Sword, value: 50, suffix: '+', text: 'Atletas Profissionais' },
        { icon: GraduationCap, value: 6, suffix: 'º', text: 'Grau Faixa Preta' }
    ]

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        AOS.init({ duration: 800, once: true, offset: 50 })
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // GSAP Animations
    useEffect(() => {
        if (typeof window === 'undefined') return
        const ctx = gsap.context(() => {
            if (logoRef.current) {
                gsap.fromTo(logoRef.current,
                    { scale: 0.8, opacity: 0, y: 50 },
                    { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "back.out(1.7)", delay: 0.3 }
                )
            }
        })
        return () => ctx.revert()
    }, [])

    // Carousel functions
    const nextImage = useCallback(() => {
        setCurrentImageIndex((prev) =>
            prev === mestreImages.length - 1 ? 0 : prev + 1
        )
    }, [mestreImages.length])

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? mestreImages.length - 1 : prev - 1
        )
    }, [mestreImages.length])

    const goToImage = useCallback((index: number) => {
        setCurrentImageIndex(index)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            nextImage()
        }, 5000)
        return () => clearInterval(interval)
    }, [nextImage])

    const handlePanEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const swipeThreshold = 50
        if (info.offset.x > swipeThreshold) {
            prevImage()
        } else if (info.offset.x < -swipeThreshold) {
            nextImage()
        }
    }

    const carouselVariants = {
        enter: { opacity: 0, x: 100 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    }

    return (
        <div className="bg-black text-white min-h-screen overflow-hidden">
            {/* Custom Scrollbar Styles */}
            <style jsx global>{`
                /* Hide default scrollbar */
                ::-webkit-scrollbar {
                    width: 8px;
                }
                
                ::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                }
                
                ::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 4px;
                    transition: all 0.3s ease;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.5);
                }
                
                /* Firefox */
                * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.05);
                }
                
                /* Smooth scrolling */
                html {
                    scroll-behavior: smooth;
                }
            `}</style>

            {/* Hero Section com Vídeo */}
            <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/bgcobra2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

                <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    {/* Main Logo */}
                    <motion.div
                        ref={logoRef}
                        className="mb-8 lg:mb-16"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="flex justify-center mb-6 lg:mb-8">
                            <div className="relative">
                                <Image
                                    src="/logo.png"
                                    alt="Constrictor Team"
                                    width={isMobile ? 300 : 500}
                                    height={isMobile ? 90 : 150}
                                    priority
                                    className="drop-shadow-2xl filter brightness-110"
                                    style={{
                                        filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-pulse"></div>
                            </div>
                        </div>

                        {/* Gradiente Line */}
                        <div className="w-32 h-1 bg-white mx-auto rounded-full mt-6 shadow-lg shadow-white/30"></div>

                        {/* Subtitle */}
                        <motion.p
                            className="text-gray-300 mt-8 text-lg lg:text-xl max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            Uma linhagem de excelência em Jiu-Jitsu Brasileiro, MMA e artes marciais.
                            <br className="hidden sm:block" />
                            Tradição que forma campeões dentro e fora dos tatames.
                        </motion.p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        <a
                            href={whatsappLink}
                            className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25 min-w-[200px] justify-center"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <WhatsappLogo className="w-6 h-6" />
                            <span>Vamos treinar!?</span>
                        </a>
                        <button
                            onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 min-w-[200px] justify-center"
                        >
                            <span>Conheça Nossa História</span>
                        </button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-white/80 text-sm font-light tracking-wider">DESCUBRA MAIS</span>
                        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                            <motion.div
                                className="w-1 h-3 bg-white rounded-full mt-2"
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Stats Section com Contagem Animada */}
            <section className="relative py-16 bg-gradient-to-r from-gray-900 to-black border-y border-white/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                className="text-center group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                                    <achievement.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 tabular-nums">
                                    <CounterItem value={achievement.value} suffix={achievement.suffix} />
                                </div>
                                <div className="text-gray-300 font-medium text-sm lg:text-base">
                                    {achievement.text}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* História Section */}
            <section id="historia" className="relative py-20 lg:py-32 overflow-hidden bg-black">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center mb-16 lg:mb-24"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Nossa História
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-lg shadow-white/30"></div>
                        <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto mt-6">
                            Uma jornada de décadas dedicadas à excelência nas artes marciais
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
                        {/* Mestre Ataíde - Biografia Completa */}
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20 group-hover:border-white/50 transition-all duration-500 h-full shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <GraduationCap className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                        Mestre Ataíde Ludgero Júnior
                                    </h3>
                                </div>

                                <div className="space-y-6 text-gray-300 leading-relaxed text-justify">
                                    <p className="text-lg font-semibold text-white border-l-4 border-white pl-4 py-1">
                                        6° Grau de Jiu-Jitsu • Registro CBJJ/IBJJF 5.680
                                    </p>

                                    <p>
                                        As artes marciais entraram na vida de <strong className="text-white">Ataíde Ludgero Júnior</strong> aos
                                        <strong className="text-white"> quatro anos de idade</strong>, quando começou a treinar judô na
                                        delegacia de polícia de seu pai. Ao longo das <strong className="text-white">duas décadas seguintes</strong>,
                                        dedicou-se intensamente ao esporte, conquistando a <strong className="text-white">faixa preta</strong> enquanto
                                        treinava e competia na prestigiada <strong className="text-white">Academia de Judô Miura</strong>.
                                    </p>

                                    <p>
                                        Durante seus anos de formação, Ataíde expandiu seu repertório de artes marciais
                                        <strong className="text-white"> treinando capoeira com o Mestre Amendoim (Grupo Senzala)</strong> e
                                        aprimorando suas habilidades de luta em pé na <strong className="text-white">Associação Pepe</strong>, onde
                                        também treinou <strong className="text-white">kickboxing e taekwondo</strong>.
                                    </p>

                                    <p>
                                        Na adolescência, seu interesse se voltou para o <strong className="text-white">grappling e as finalizações</strong>,
                                        levando-o a treinar <strong className="text-white">luta livre com Júlio "Pudim" César</strong> e seu irmão
                                        <strong className="text-white"> Sandro "Bala"</strong>. Aos <strong className="text-white">17 anos</strong>,
                                        Ataíde conheceu <strong className="text-white">José Carneiro Vasconcelos, também conhecido como "Popó"</strong>,
                                        que desempenhou um papel <strong className="text-white">fundamental em sua trajetória no jiu-jitsu</strong>.
                                    </p>

                                    <p>
                                        Juntos, eles buscaram instrução com o <strong className="text-white">Grão-Mestre Armando Wriedt</strong>,
                                        <strong className="text-white"> faixa vermelha sob a tutela de Hélio Gracie</strong>. Sob a orientação de
                                        Armando Wriedt, Ataíde dedicou-se ao <strong className="text-white">Jiu-Jitsu Brasileiro pelos dez anos seguintes</strong>,
                                        aprimorando suas habilidades e aprofundando seu conhecimento da arte.
                                    </p>

                                    <p>
                                        Seu trabalho árduo e comprometimento foram finalmente reconhecidos quando
                                        <strong className="text-white"> Wriedt lhe concedeu a faixa preta</strong>. Quando Ataíde decidiu formar
                                        sua própria equipe, escolheu o nome <strong className="text-white">"Constrictor Team"</strong>,
                                        inspirado em sua <strong className="text-white">formação profissional como biólogo especializado em herpetologia</strong>
                                        (o estudo de répteis).
                                    </p>

                                    <p>
                                        Baseando-se em seu conhecimento sobre jiboias, ele desenvolveu um
                                        <strong className="text-white"> estilo único de Jiu-Jitsu</strong> que enfatizava o
                                        <strong className="text-white"> controle rígido e a pressão sufocante</strong>, espelhando a maneira
                                        como as serpentes subjugam suas presas sem o uso de veneno.
                                    </p>

                                    <p>
                                        Em <strong className="text-white">2007</strong>, Ataíde enfrentou um incidente que mudou sua vida
                                        ao lidar com um jacaré em um zoológico local, resultando na
                                        <strong className="text-white"> perda de vários dedos de uma das mãos</strong>. Apesar dessa adversidade,
                                        ele continuou sua carreira como <strong className="text-white">treinador e instrutor no mais alto nível</strong>,
                                        formando campeões mundiais de Jiu-Jitsu Brasileiro e MMA.
                                    </p>

                                    <p className="text-lg font-semibold text-white border-l-4 border-white pl-4 py-1">
                                        Hoje, Ataíde Ludgero Júnior detém a faixa preta de 6º grau em Jiu-Jitsu Brasileiro,
                                        um reconhecimento de sua dedicação de décadas ao domínio, ensino e promoção da arte.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Constrictor Team - História Completa */}
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/20 group-hover:border-white/50 transition-all duration-500 h-full shadow-2xl">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                        <Shield className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                        A Constrictor Team
                                    </h3>
                                </div>

                                <div className="space-y-6 text-gray-300 leading-relaxed text-justify">
                                    <p>
                                        A <strong className="text-white">Constrictor Team</strong> é uma
                                        <strong className="text-white"> equipe familiar de Jiu-Jitsu Brasileiro, MMA, Luta Livre e Judô</strong>,
                                        liderada pelo <strong className="text-white">Mestre Ataíde Ludgero Junior</strong> e seus filhos,
                                        <strong className="text-white"> Ian Lucas Ludgero (faixa preta 3º grau) e Kim Ludgero</strong>.
                                        Com raízes que remontam ao <strong className="text-white">Grão-Mestre Armando Wriedt</strong>,
                                        a equipe carrega um <strong className="text-white">legado profundo e uma linhagem direta com Hélio Gracie</strong>.
                                    </p>

                                    <p>
                                        Originalmente fundada como <strong className="text-white">Ataíde Junior Top Team</strong>, o grupo
                                        focava em <strong className="text-white">dominar torneios de Jiu-Jitsu</strong>, competindo
                                        ocasionalmente em <strong className="text-white">Vale-Tudo</strong> (precursor do MMA moderno).
                                        Durante esse período, a eficácia de um <strong className="text-white">estilo único de Jiu-Jitsu</strong>,
                                        posteriormente conhecido como <strong className="text-white">Constrictor Jiu-Jitsu</strong>, foi demonstrada
                                        e refinada.
                                    </p>

                                    <p>
                                        Esse <strong className="text-white">estilo distinto</strong> foi desenvolvido pelo
                                        <strong className="text-white"> Mestre Ataíde Junior</strong>, inspirado por sua
                                        <strong className="text-white"> formação como biólogo</strong>. O sistema enfatiza
                                        <strong className="text-white"> pressão, controle e estratégia</strong> — comprovadamente eficazes
                                        no Jiu-Jitsu, MMA e outras artes marciais de luta agarrada. A abordagem técnica da Constrictor Team
                                        é comparável à precisão mortal de uma serpente constritora.
                                    </p>

                                    <p>
                                        Com a <strong className="text-white">evolução do MMA</strong>, a equipe abraçou essa mudança.
                                        Em <strong className="text-white">2003</strong>, o grupo foi renomeado para
                                        <strong className="text-white"> Constrictor Team</strong>. Em
                                        <strong className="text-white"> 2005</strong>, a equipe ganhou
                                        <strong className="text-white"> reconhecimento internacional</strong> quando
                                        <strong className="text-white"> Rani Yahya</strong> conquistou a vitória no Japão com um
                                        <strong className="text-white"> estrangulamento Norte-Sul</strong>, uma técnica característica
                                        do Jiu-Jitsu Constrictor.
                                    </p>

                                    <p>
                                        Hoje, a <strong className="text-white">Constrictor Team</strong> é representada por
                                        <strong className="text-white"> atletas de nível mundial</strong> em organizações como o
                                        <strong className="text-white"> UFC, ONE Championship e Shooto Brasil</strong>. Nomes notáveis
                                        incluem <strong className="text-white">Rani Yahya, Renato Moicano, Paulo Thiago, Francisco Trinaldo,
                                            Luigi Vendramini e Adriano Moraes</strong>.
                                    </p>

                                    <p>
                                        Para além de formar campeões, a Constrictor Team se baseia em
                                        <strong className="text-white"> disciplina, respeito e integridade</strong>. Juntamente com o
                                        Jiu-Jitsu Brasileiro, a equipe incorpora técnicas de
                                        <strong className="text-white"> Luta Livre e Judô</strong>, oferecendo uma
                                        <strong className="text-white"> abordagem abrangente e completa</strong> das artes marciais.
                                    </p>

                                    <p>
                                        A <strong className="text-white">Constrictor Team Austrália</strong>, liderada pelo
                                        <strong className="text-white"> faixa preta de terceiro grau Ian Ludgero</strong>, mantém esse
                                        legado, garantindo que as <strong className="text-white">tradições e os valores da equipe</strong>
                                        sejam perpetuados em <strong className="text-white">escala internacional</strong>.
                                    </p>

                                    <p className="text-lg font-semibold text-white border-l-4 border-white pl-4 py-1">
                                        Mais do que uma equipe de artes marciais, a Constrictor Team é uma família que há décadas
                                        forma não apenas grandes atletas, mas principalmente grandes seres humanos.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16 lg:mb-24"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Galeria do Mestre Ataíde Jr. e da Constrictor Team
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
                            Momentos marcantes da trajetória do Mestre Ataíde Jr. - 6° Grau Faixa Preta
                        </p>
                    </motion.div>

                    {/* Carousel Container */}
                    <motion.div
                        className="relative max-w-6xl mx-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    className="absolute inset-0"
                                    variants={carouselVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.5 }}
                                    onPanEnd={handlePanEnd}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.1}
                                >
                                    <Image
                                        src={mestreImages[currentImageIndex]}
                                        alt={`Mestre Ataíde Jr. - Imagem ${currentImageIndex + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={currentImageIndex === 0}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                        quality={90}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50"></div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/50"
                                aria-label="Imagem anterior"
                            >
                                <CaretLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/50"
                                aria-label="Próxima imagem"
                            >
                                <CaretRight className="w-6 h-6 text-white" />
                            </button>

                            {/* Counter */}
                            <div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                                <span className="text-white font-semibold text-sm">
                                    {currentImageIndex + 1} / {mestreImages.length}
                                </span>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex justify-center gap-3 mt-8 overflow-x-auto py-4 px-4">
                            {mestreImages.map((image, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentImageIndex
                                        ? 'border-white scale-110 shadow-lg shadow-white/25'
                                        : 'border-gray-600 hover:border-gray-400'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="relative py-20 lg:py-32 bg-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center mb-16 lg:mb-24"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Faça Parte Desta História
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg lg:text-xl max-w-2xl mx-auto">
                            Junte-se à família Constrictor Team e comece sua jornada nas artes marciais
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Info Card */}
                        <motion.div
                            className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/50 transition-all duration-500 group shadow-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-center mb-6">
                                <Image
                                    src="/logo1234.png"
                                    alt="Constrictor Team"
                                    width={200}
                                    height={60}
                                    className="mx-auto mb-4 opacity-90"
                                />
                                <p className="text-gray-400 text-sm">
                                    Três décadas formando campeões e transformando vidas através das artes marciais
                                </p>
                            </div>
                            <a
                                href={whatsappLink}
                                className="w-full bg-white hover:bg-gray-200 text-black px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsappLogo className="w-6 h-6" />
                                Faça parte da Constrictor Team
                            </a>
                        </motion.div>

                        {/* Contact Details */}
                        <motion.div
                            className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/50 transition-all duration-500 shadow-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-white">Contatos</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: Envelope, label: 'Email', value: 'contato@constrictorteam.com' },
                                    { icon: Phone, label: 'Telefone', value: '(61) 99162-7171' },
                                    { icon: MapPin, label: 'Localização', value: 'Brasília - DF' }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400">{item.label}</p>
                                            <p className="text-white font-medium">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Social Media */}
                        <motion.div
                            className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/50 transition-all duration-500 shadow-2xl"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-semibold mb-6 text-white">Redes Sociais</h3>
                            <p className="text-gray-400 mb-6">
                                Acompanhe a Constrictor Team e fique por dentro de treinos, eventos e novidades
                            </p>
                            <div className="flex justify-center gap-4">
                                {[
                                    { icon: FacebookLogo, href: 'https://www.facebook.com/constrictorteam', color: 'bg-gray-800 hover:bg-gray-700' },
                                    { icon: InstagramLogo, href: 'https://www.instagram.com/constrictorteam/', color: 'bg-gray-800 hover:bg-gray-700' },
                                    { icon: YoutubeLogo, href: 'https://www.youtube.com/@constrictorteam', color: 'bg-gray-800 hover:bg-gray-700' }
                                ].map((social, index) => (
                                    <motion.a
                                        key={social.href}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-14 h-14 ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <social.icon className="w-6 h-6 text-white" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}