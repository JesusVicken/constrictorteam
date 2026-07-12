'use client'

import { useEffect, useRef, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Play, Clock, Users, Target } from '@phosphor-icons/react/dist/ssr'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const scheduleData = [
    {
        day: 'Segunda, Quarta e Sexta',
        classes: [
            { time: '11:30 - 12:40', activity: 'LUTA LIVRE', instructor: 'MESTRE ATAIDE' },
            { time: '12:40 - 13:40', activity: 'JIU JITSU', instructor: 'MESTRE ATAIDE' },
            { time: '19:30 - 21:00', activity: 'JIU JITSU', instructor: 'BRENO' },
        ],
    },
    {
        day: 'Segunda, Quarta e Sexta (Treino Kids)',
        classes: [
            { time: '18:30 - 19:30', activity: 'JIU JITSU', instructor: 'BRENO' },
        ],
    },
    {
        day: 'Terça e Quinta',
        classes: [
            { time: '12:30 - 13:30', activity: 'JIU JITSU', instructor: 'RODRIGO AMARAL (CARRANCA)' },
            { time: '13:30 - 14:30', activity: 'MUAY THAI', instructor: 'YGOR MORATO' },
            { time: '19:30 - 21:00', activity: 'JIU JITSU', instructor: 'CARRANCA' },
        ],
    },
    {
        day: 'Sábado',
        classes: [
            { time: '8:30 - 10:00', activity: 'OLD SCHOOL JIU JITSU', instructor: null },
            { time: '10:00 - 11:00', activity: 'YOGA', instructor: 'JOANA ALVES' },
            { time: '11:00 - 12:30', activity: 'OPEN MAT JIU-JITSU', instructor: null },
            { time: '12:30 - 13:30', activity: 'MUAY THAI', instructor: 'TREINADOR TOCO' },
        ],
    },
]

export default function HorariosPage() {
    const [isMobile, setIsMobile] = useState(false)
    const scheduleRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)

        AOS.init({ duration: 800, once: true, offset: 50 })

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        if (!scheduleRef.current || isMobile) return

        const ctx = gsap.context(() => {
            gsap.to('.schedule-card', {
                y: -10,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: 0.1,
            })

            gsap.fromTo(
                '.schedule-card',
                { scale: 0.9, opacity: 0.7 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: scheduleRef.current,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: 1,
                    },
                }
            )
        }, scheduleRef)

        return () => ctx.revert()
    }, [isMobile])

    return (
        <>
            {/* HERO COM IMAGEM */}
            <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
                <Image
                    src="/grade.png"
                    alt="Horários de treino Constrictor Team"
                    fill
                    priority
                    className="object-cover opacity-70 brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

                <div className="relative z-10 text-center text-white px-6 md:px-10 max-w-6xl mx-auto">
                    <div className="mb-8" data-aos="fade-down">
                        <div className="w-20 h-1 bg-white mx-auto rounded-full mb-6"></div>
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tight leading-tight bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent">
                            Horários de Treino
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl text-gray-300 font-medium uppercase tracking-widest">
                            Constrictor Team
                        </p>
                    </div>

                    <p
                        className="text-sm sm:text-base lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Confira nossa grade completa de treinos. Aulas para todos os níveis do iniciante ao faixa preta, incluindo turmas kids e treinos Open Mat.
                    </p>

                    <div
                        className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6 max-w-4xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        {[
                            { icon: Clock, value: '19', label: 'Aulas Semanais' },
                            { icon: Users, value: '4', label: 'Instrutores' },
                            { icon: Target, value: '5', label: 'Modalidades' },
                            { icon: Play, value: '7', label: 'Dias/Semana' },
                        ].map(({ icon: Icon, value, label }) => (
                            <div key={label} className="text-center group">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 border border-white/5 group-hover:bg-white/20 transition-all duration-300">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{value}</p>
                                <p className="text-xs sm:text-sm text-gray-300">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GRADE DE HORÁRIOS */}
            <section
                ref={scheduleRef}
                className="relative py-10 sm:py-16 lg:py-32 bg-black overflow-hidden"
            >
                {/* Imagem de Fundo Awwwards Style */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="/ataide.jpg"
                        alt="Background Mestre Ataide"
                        fill
                        className="object-cover opacity-40 grayscale mix-blend-screen scale-105"
                    />
                    {/* Gradientes para mesclar a imagem com o fundo preto sem bordas duras */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Grade de Horários
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Escolha o horário ideal para sua rotina e evolua com a gente.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16 lg:mb-20">
                        {scheduleData.map((dayGroup, index) => (
                            <div
                                key={dayGroup.day}
                                className="schedule-card bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-white/30 shadow-2xl hover:shadow-white/5 transition-all duration-500"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-white" />
                                    </div>
                                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                                        {dayGroup.day}
                                    </h2>
                                </div>

                                <ul className="space-y-4">
                                    {dayGroup.classes.map((classe, classIndex) => (
                                        <li
                                            key={classe.time + classe.activity}
                                            className="flex justify-between items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20"
                                            data-aos="fade-in"
                                            data-aos-delay={(index * 100) + (classIndex * 50)}
                                        >
                                            <div className="flex-1">
                                                <span className="block text-base sm:text-lg font-bold text-white mb-1">
                                                    {classe.time}
                                                </span>
                                                <span
                                                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                                                        ${classe.activity.includes('JIU JITSU')
                                                            ? 'bg-white text-black'
                                                            : 'bg-transparent text-white border border-white/30'
                                                        }`}
                                                >
                                                    {classe.activity}
                                                </span>
                                            </div>

                                            <div className="text-right">
                                                {classe.instructor ? (
                                                    <div>
                                                        <p className="font-semibold text-white text-sm lg:text-base">
                                                            {classe.instructor}
                                                        </p>
                                                        <p className="text-xs text-gray-400 mt-1 uppercase tracking-widest font-medium">
                                                            Instrutor
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <p className="font-semibold text-gray-400 text-sm lg:text-base">
                                                            Livre
                                                        </p>
                                                        <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-medium">
                                                            Prática
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Informações adicionais - AGORA ABAIXO DAS GRADES */}
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 text-center">
                                {[
                                    {
                                        icon: Users,
                                        title: 'Turmas Kids',
                                        desc: 'Aulas especiais para crianças',
                                    },
                                    {
                                        icon: Target,
                                        title: 'Todos os Níveis',
                                        desc: 'Do iniciante ao avançado',
                                    },
                                    {
                                        icon: Clock,
                                        title: 'Flexibilidade',
                                        desc: 'Horários variados',
                                    },
                                    {
                                        icon: Play,
                                        title: 'Aula Experimental',
                                        desc: 'Agende sua primeira aula',
                                    },
                                ].map(({ icon: Icon, title, desc }) => (
                                    <div key={title} className="group cursor-default">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-semibold text-white mb-1">{title}</h4>
                                        <p className="text-sm text-gray-400">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}