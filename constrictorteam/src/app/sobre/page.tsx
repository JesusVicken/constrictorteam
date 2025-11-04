'use client'

import { useEffect, useRef, useState, useCallback } from 'react' // Importa useCallback
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
} from '@phosphor-icons/react/dist/ssr'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// NOVOS IMPORTS
import { motion, AnimatePresence, PanInfo } from 'framer-motion'

// Registrar o plugin do GSAP
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
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
        '/mestre17.jpg', '/mestre18.jpg', '/mestre19.jpg'
    ]

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        AOS.init({ duration: 800, once: true, offset: 50 })
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // GSAP Animations - OTIMIZADO
    useEffect(() => {
        if (typeof window === 'undefined') return
        const ctx = gsap.context(() => {
            // ANIMAÇÃO DO LOGO (MANTIDA)
            if (logoRef.current) {
                gsap.fromTo(logoRef.current,
                    { scale: 0.8, opacity: 0, y: 50 },
                    { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "back.out(1.7)", delay: 0.3 }
                )
            }
            // ANIMAÇÃO FLUTUANTE (MANTIDA)
            gsap.to(".floating-image", {
                y: -20, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.2
            })
        })
        return () => ctx.revert()
    }, [])

    // --- FUNÇÕES DO CARROSSEL OTIMIZADAS ---
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

    // Auto-rotate carousel - OTIMIZADO
    useEffect(() => {
        const interval = setInterval(() => {
            nextImage()
        }, 5000)
        return () => clearInterval(interval)
    }, [nextImage])

    // --- NOVA FUNÇÃO PARA SWIPE (MOBILE UX) ---
    const handlePanEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const swipeThreshold = 50
        if (info.offset.x > swipeThreshold) {
            prevImage()
        } else if (info.offset.x < -swipeThreshold) {
            nextImage()
        }
    }

    // --- VARIAÇÕES DE ANIMAÇÃO PARA O FRAMER-MOTION ---
    const carouselVariants = {
        enter: { opacity: 0, scale: 1.05 },
        center: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
    }

    return (
        <div className="bg-black text-white">
            {/* Seção principal com vídeo de fundo (AGORA SÓ COM O LOGO) */}
            <section className="relative w-full min-h-screen flex items-center justify-center py-20 lg:py-0 overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/bgcobra2.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
                <div className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 text-white">
                    {/* Logo da Constrictor Team */}
                    <div
                        ref={logoRef}
                        className="text-center mb-8 lg:mb-12"
                        data-aos="fade-down"
                    >
                        <div className="flex justify-center mb-4 lg:mb-6">
                            <div className="relative transform hover:scale-105 transition-transform duration-700 ease-out">
                                <Image
                                    src="/logo.png"
                                    alt="Constrictor Team"
                                    width={400}
                                    height={120}
                                    priority
                                    className="drop-shadow-2xl filter brightness-110"
                                    style={{
                                        filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-pulse"></div>
                            </div>
                        </div>
                        <div className="w-32 h-1 bg-yellow-500 mx-auto rounded-full mt-4 shadow-lg shadow-yellow-500/30"></div>
                    </div>

                    {/* --- BLOCO DE TEXTO REMOVIDO DAQUI ---
                      O texto introdutório foi movido para a nova seção de "História" abaixo
                      para um impacto visual mais limpo no Hero.
                    */}

                    {/* CTA Mobile */}
                    {isMobile && (
                        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50" data-aos="zoom-in" data-aos-delay="500">
                            <a
                                href={whatsappLink}
                                className="bg-green-600 hover:bg-green-700 px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 hover:scale-105"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <WhatsappLogo className="w-6 h-6" />
                                <span>Fale Conosco</span>
                            </a>
                        </div>
                    )}
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce" data-aos="fade-up" data-aos-delay="600">
                    <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-yellow-500 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* --- 
            --- NOVA SEÇÃO DE HISTÓRIA E BIOGRAFIA ---
            ---
            */}
            <section
                className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Nossa História
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Conheça a trajetória do Mestre e a fundação da equipe.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Bloco 1: Biografia do Mestre */}
                        <div
                            className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 lg:p-10 border border-white/10 hover:border-yellow-500/30 transition-all duration-500"
                            data-aos="fade-right"
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                Mestre Ataíde Ludgero Júnior
                            </h3>
                            <div className="space-y-5 text-gray-300 leading-relaxed text-base lg:text-lg">
                                <p>
                                    As artes marciais entraram na vida de Ataíde Ludgero Júnior aos quatro anos de idade, quando começou a treinar judô na delegacia de polícia de seu pai. Ao longo das duas décadas seguintes, dedicou-se ao esporte, conquistando a faixa preta enquanto treinava e competia na prestigiada Academia de Judô Miura.
                                </p>
                                <p>
                                    Durante seus anos de formação, Ataíde expandiu seu repertório de artes marciais treinando capoeira com o Mestre Amendoim (Grupo Senzala) e aprimorando suas habilidades de luta em pé na Associação Pepe, onde também treinou kickboxing e taekwondo.
                                </p>
                                <p>
                                    Na adolescência, seu interesse se voltou para o grappling e as finalizações, levando-o a treinar luta livre com Júlio "Pudim" César e seu irmão Sandro "Bala". Aos 17 anos, Ataíde conheceu José Carneiro Vasconcelos, também conhecido como "Popó", que desempenhou um papel fundamental em sua trajetória no jiu-jitsu. Juntos, eles buscaram instrução com o Grão-Mestre Armando Wriedt, faixa vermelha sob a tutela de Hélio Gracie.
                                </p>
                                <p>
                                    Sob a orientação de Armando Wriedt, Ataíde dedicou-se ao Jiu-Jitsu Brasileiro pelos dez anos seguintes, aprimorando suas habilidades e aprofundando seu conhecimento da arte. Seu trabalho árduo e comprometimento foram finalmente reconhecidos quando Wriedt lhe concedeu a faixa preta.
                                </p>
                                <p>
                                    Quando Ataíde decidiu formar sua própria equipe, escolheu o nome "Constrictor Team", inspirado em sua formação profissional como biólogo especializado em herpetologia (o estudo de répteis). Baseando-se em seu conhecimento sobre jiboias, ele desenvolveu um estilo único de Jiu-Jitsu que enfatizava o controle rígido e a pressão sufocante, espelhando a maneira como as serpentes subjugam suas presas sem o uso de veneno.
                                </p>
                                <p>
                                    Em 2007, Ataíde enfrentou um incidente que mudou sua vida ao lidar com um jacaré em um zoológico local, resultando na perda de vários dedos de uma das mãos. Apesar dessa adversidade, ele continuou sua carreira como treinador e instrutor no mais alto nível.
                                </p>
                                <p>
                                    Hoje, Ataíde Ludgero Júnior detém a faixa preta de 6º grau em Jiu-Jitsu Brasileiro, um reconhecimento de sua dedicação de décadas ao domínio, ensino e promoção da arte.
                                </p>
                            </div>
                        </div>

                        {/* Bloco 2: História da Equipe */}
                        <div
                            className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 lg:p-10 border border-white/10 hover:border-yellow-500/30 transition-all duration-500"
                            data-aos="fade-left"
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                A História da Constrictor Team
                            </h3>
                            <div className="space-y-5 text-gray-300 leading-relaxed text-base lg:text-lg">
                                <p>
                                    A Constrictor Team é uma equipe familiar de Jiu-Jitsu Brasileiro, MMA, Luta Livre e Judô, liderada pelo Mestre Ataíde Ludgero Junior e seus filhos, Ian Lucas Ludgero (faixa preta 3º grau) e Kim Ludgero. Com raízes que remontam ao Grão-Mestre Armando Wriedt, a equipe carrega um legado profundo.
                                </p>
                                <p>
                                    Originalmente fundada como Ataíde Junior Top Team, o grupo focava em dominar torneios de Jiu-Jitsu, competindo ocasionalmente em Vale-Tudo (precursor do MMA moderno). Durante esse período, a eficácia de um estilo único de Jiu-Jitsu, posteriormente conhecido como Constrictor Jiu-Jitsu, foi demonstrada.
                                </p>
                                <p>
                                    Esse estilo distinto foi desenvolvido pelo Mestre Ataíde Junior, inspirado por sua formação como biólogo. O sistema enfatiza <strong className="text-yellow-400">pressão, controle e estratégia</strong> — comprovadamente eficazes no Jiu-Jitsu, MMA e outras artes marciais de luta agarrada.
                                </p>
                                <p>
                                    Com a evolução do MMA, a equipe abraçou essa mudança. Em 2003, o grupo foi renomeado para Constrictor Team. Em 2005, a equipe ganhou reconhecimento internacional quando Rani Yahya conquistou a vitória no Japão com um estrangulamento Norte-Sul, uma técnica característica do Jiu-Jitsu Constrictor.
                                </p>
                                <p>
                                    Hoje, a Constrictor Team é representada por atletas de nível mundial em organizações como o UFC, ONE Championship e Shooto Brasil. Nomes notáveis incluem Rani Yahya, Renato Moicano, Paulo Thiago, Francisco Trinaldo, Luigi Vendramini e Adriano Moraes.
                                </p>
                                <p>
                                    Para além de formar campeões, a Constrictor Team se baseia em <strong className="text-yellow-400">disciplina, respeito e integridade</strong>. Juntamente com o Jiu-Jitsu Brasileiro, a equipe incorpora técnicas de Luta Livre e Judô, oferecendo uma abordagem abrangente.
                                </p>
                                <p>
                                    A Constrictor Team Austrália, liderada pelo faixa preta de terceiro grau Ian Ludgero, mantém esse legado, garantindo que as tradições e os valores da equipe sejam perpetuados em escala internacional.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* --- FIM DA NOVA SEÇÃO --- */}


            {/* Seção do Carrossel de Imagens do Mestre (Sem alterações) */}
            <section
                className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            Mestre Ataíde Jr. em Ação
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Momentos marcantes da trajetória do nosso Mestre
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative max-w-6xl mx-auto" data-aos="zoom-in">
                        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={currentImageIndex}
                                    className="absolute inset-0"
                                    variants={carouselVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        opacity: { duration: 0.5, ease: 'easeInOut' },
                                        scale: { duration: 0.5, ease: 'easeInOut' }
                                    }}
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
                                        quality={80}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border hover:border-yellow-500/50"
                                aria-label="Imagem anterior"
                            >
                                <CaretLeft className="w-6 h-6 text-yellow-500" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border hover:border-yellow-500/50"
                                aria-label="Próxima imagem"
                            >
                                <CaretRight className="w-6 h-6 text-yellow-500" />
                            </button>

                            {/* Image Counter */}
                            <div className="absolute top-6 right-6 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-500/30">
                                <span className="text-yellow-500 font-bold text-sm">
                                    {currentImageIndex + 1} / {mestreImages.length}
                                </span>
                            </div>

                            {/* Image Title */}
                            <div className="absolute bottom-6 left-6 z-20 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-yellow-500/30">
                                <h3 className="text-white font-semibold text-lg">
                                    Mestre Ataíde Jr.
                                </h3>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex justify-center gap-3 mt-6 lg:mt-8 overflow-x-auto py-4">
                            {mestreImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToImage(index)}
                                    className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-110 ${index === currentImageIndex
                                        ? 'border-yellow-500 scale-110 shadow-lg shadow-yellow-500/25'
                                        : 'border-gray-600 hover:border-yellow-400'
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Floating Elements (Mantidos) */}
                <div className="absolute top-20 left-10 w-8 h-8 bg-yellow-500/20 rounded-full floating-image"></div>
                <div className="absolute bottom-40 right-16 w-6 h-6 bg-yellow-500/30 rounded-full floating-image" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/3 right-20 w-4 h-4 bg-yellow-500/40 rounded-full floating-image" style={{ animationDelay: '2s' }}></div>
            </section>

            {/* Contato e Redes Sociais (Sem alterações) */}
            <section className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
                    <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Entre em Contato
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Pronto para começar sua jornada nas artes marciais?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
                        {/* Sobre */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500"
                            data-aos="fade-up"
                        >
                            <div className="flex flex-col items-center text-center mb-6">
                                <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src="/logo1234.png"
                                        alt="Logo Constrictor Team"
                                        width={200}
                                        height={70}
                                        priority
                                        className="drop-shadow-lg"
                                    />
                                </div>
                                <p className="text-gray-300 mb-6 text-sm lg:text-base">
                                    Excelência em Jiu-Jitsu Brasileiro e artes marciais com a liderança do Mestre Ataíde Jr.
                                </p>
                            </div>
                            {!isMobile && (
                                <a
                                    href={whatsappLink}
                                    className="w-full bg-green-600 hover:bg-green-700 px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <WhatsappLogo className="w-6 h-6" />
                                    Contato via WhatsApp
                                </a>
                            )}
                        </div>

                        {/* Contatos */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-center lg:text-left">Contatos</h3>
                            <div className="space-y-4 lg:space-y-5">
                                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300">
                                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                        <Envelope className="text-yellow-500 w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Email</p>
                                        <p className="text-white font-medium">contato@constrictorteam.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300">
                                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                                        <Phone className="text-yellow-500 w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Telefone</p>
                                        <p className="text-white font-medium">(61) 99162-7171</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-300">
                                    <div className="flex-shrink-0 w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center mt-1">
                                        <MapPin className="text-yellow-500 w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Localização</p>
                                        <p className="text-white font-medium">Brasília - DF</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-500"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-center lg:text-left">Redes Sociais</h3>
                            <p className="mb-6 text-gray-300 text-center lg:text-left">
                                Siga a Constrictor Team para acompanhar treinos, eventos e novidades
                            </p>
                            <div className="flex justify-center lg:justify-start gap-4 lg:gap-6">
                                <a
                                    href="https://www.facebook.com/constrictorteam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
                                    aria-label="Facebook"
                                >
                                    <FacebookLogo className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                                </a>
                                <a
                                    href="https://www.instagram.com/constrictorteam/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/25"
                                    aria-label="Instagram"
                                >
                                    <InstagramLogo className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@constrictorteam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 lg:w-14 lg:h-14 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/25"
                                    aria-label="YouTube"
                                >
                                    <YoutubeLogo className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}