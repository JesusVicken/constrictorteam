'use client'

import Image from "next/image"
import { Check, MapPin } from "lucide-react"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

export function About() {
    return (
        <section className="bg-white py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Imagem principal */}
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/about.jpg"
                                alt="Líderes da Constrictor Team"
                                fill
                                quality={100}
                                priority
                                className="object-cover object-top hover:scale-110 transition-transform duration-500 ease-out"
                            />
                        </div>

                        {/* Logo sobre a imagem
                        <div className="absolute lg:left-12 lg:-bottom-8 left-1/5 bottom-20 transform -translate-x-1/2 lg:translate-x-0 w-24 h-24 lg:w-40 lg:h-40 rounded-lg overflow-hidden">
                            <Image
                                src="/constrictor-team.jpg"
                                alt="Logo Constrictor Team"
                                fill
                                quality={100}
                                className="object-contain"
                                priority
                            />
                        </div> */}
                    </div>

                    {/* Conteúdo textual */}
                    <div className="space-y-6 mt-10 lg:mt-0" data-aos="fade-up-left" data-aos-delay="300">
                        <h2 className="text-4xl font-bold text-gray-900">Sobre a Constrictor Team</h2>

                        <p className="text-gray-700 text-justify">
                            A <strong>Constrictor Team</strong> é uma equipe de artes marciais reconhecida por sua excelência técnica, disciplina e tradição. Fundada em Brasília, a equipe nasceu com o propósito de formar atletas completos, valorizando tanto o desempenho dentro dos tatames quanto o desenvolvimento humano fora deles.
                        </p>

                        <p className="text-gray-700 text-justify">
                            A Constrictor Team foi fundada pelo <strong>Mestre Ataíde Júnior</strong> - <strong>6° grau de Jiu-Jitsu (Registro CBJJ/IBJJF 5.680)</strong>, que iniciou sua trajetória no judô aos 4 anos de idade e se aprofundou no jiu-jitsu após treinar com mestres renomados como <strong>Hélio Gracie</strong> e <strong>Armando Wriedt</strong>.
                        </p>

                        <p className="text-gray-700 text-justify">
                            Aos 17 anos, Ataíde conheceu <strong>Mestre Popó (José Carneiro Vasconcelos Júnior)</strong>, que desempenhou um papel fundamental em sua trajetória no jiu-jitsu. Juntos, buscaram instrução com o Grão-Mestre Armando Wriedt, faixa vermelha sob a tutela de Hélio Gracie.
                        </p>

                        <p className="text-gray-700 text-justify">
                            Com uma filosofia que une técnica, respeito e superação, a Constrictor Team forma atletas de elite e seres humanos exemplares. Baseando-se em sua formação como biólogo especializado em herpetologia, Ataíde desenvolveu um estilo único de Jiu-Jitsu inspirado nas jiboias - com precisão, paciência, controle rígido e pressão sufocante.
                        </p>

                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Fundada por Mestre Ataíde Júnior -<strong>6° grau de Jiu-Jitsu - Registro CBJJ/IBJJF 5.680</strong>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Parceria fundamental com Mestre Popó na formação da equipe
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Estilo técnico inspirado na precisão e adaptabilidade das serpentes
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-green-600" />
                                Um dos principais centros de MMA e Jiu-Jitsu de Brasília e do mundo
                            </li>
                        </ul>

                        <div className="flex flex-wrap gap-3 pt-4">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://wa.me/5561991627171?text=Olá! Vim pelo site e quero saber mais sobre a Constrictor Team e como participar dos treinos."
                                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-4 py-2 rounded-md transition-colors"
                            >
                                <WhatsappLogoIcon className="w-5 h-5" />
                                Entrar em contato
                            </a>

                            <Link
                                href="/sobre"
                                className="flex items-center gap-2 px-4 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition"
                            >
                                <MapPin className="w-5 h-5 text-gray-800" />
                                Conheça nossa história
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}