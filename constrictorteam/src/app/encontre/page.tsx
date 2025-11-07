'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function CTInfo() {
    const [activeTab, setActiveTab] = useState<'video' | 'fotos'>('video')

    return (
        <section className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">
                        Nosso Centro de Treinamento
                    </h2>
                    <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Conheça nossa estrutura, ambiente e a família Constrictor Team
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12" data-aos="fade-up">
                    <div className="bg-gray-900 rounded-lg p-1 flex space-x-1 border border-gray-800">
                        <button
                            onClick={() => setActiveTab('video')}
                            className={`px-8 py-4 rounded-md font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'video'
                                    ? 'bg-white text-black shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            <span>🎥</span>
                            <span>Tour Virtual</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('fotos')}
                            className={`px-8 py-4 rounded-md font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'fotos'
                                    ? 'bg-white text-black shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                                }`}
                        >
                            <span>📸</span>
                            <span>Galeria</span>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-6xl mx-auto">
                    {/* Video Tab */}
                    {activeTab === 'video' && (
                        <div className="grid lg:grid-cols-2 gap-12 items-center" data-aos="fade-right">
                            <div className="relative group">
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 transform group-hover:scale-[1.02] transition-transform duration-500">
                                    <video
                                        className="w-full h-auto aspect-video object-cover"
                                        src="/infra1.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                                            <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[6px] border-y-transparent ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6" data-aos="fade-left">
                                <h3 className="text-3xl font-bold uppercase tracking-wide border-l-4 border-white pl-4">
                                    Experiência Constrictor Team
                                </h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    Venha fazer parte da nossa família! No CT Constrictor Team, oferecemos
                                    estrutura completa para seu desenvolvimento no Jiu-Jitsu.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        '🏋️ Tatames profissionais de alta qualidade',
                                        '🛀 Vestários completos com chuveiros',
                                        '📚 Área de descanso',
                                        '🌿 Ambiente familiar e acolhedor',
                                        '🚗 Estacionamento gratuito',
                                        '♿ Acessibilidade para todos',
                                        '🏋️ Academia em meio ao parque da cidade',
                                        
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center space-x-3 group">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <button className="bg-white text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white hover:bg-gray-100">
                                        Agende uma Aula Experimental
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Fotos Tab */}
                    {activeTab === 'fotos' && (
                        <div className="space-y-12">
                            {/* Grid de Fotos */}
                            <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up">
                                {/* Foto 1 */}
                                <div className="group relative">
                                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 transform group-hover:scale-[1.02] transition-all duration-500">
                                        <Image
                                            src="/ct1.webp"
                                            alt="Estrutura do CT Constrictor Team"
                                            width={600}
                                            height={400}
                                            className="w-full h-80 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h4 className="text-xl font-bold text-white mb-2">
                                                Área de Treinos
                                            </h4>
                                            <p className="text-gray-300 text-sm">
                                                Tatames profissionais para treinos técnicos e sparring
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Foto 2 */}
                                <div className="group relative">
                                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 transform group-hover:scale-[1.02] transition-all duration-500">
                                        <Image
                                            src="/ct1.webp"
                                            alt="Ambiente do CT Constrictor Team"
                                            width={600}
                                            height={400}
                                            className="w-full h-80 object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h4 className="text-xl font-bold text-white mb-2">
                                                Ambiente Familiar
                                            </h4>
                                            <p className="text-gray-300 text-sm">
                                                Espaço acolhedor para toda a família Constrictor
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Informações Adicionais */}
                            <div className="grid md:grid-cols-3 gap-6 text-center" data-aos="fade-up">
                                {[
                                    {
                                        icon: '⏰',
                                        title: 'Horários Flexíveis',
                                        description: 'Turmas manhã, tarde e noite'
                                    },
                                    {
                                        icon: '👨‍👩‍👧‍👦',
                                        title: 'Para Todas as Idades',
                                        description: 'Baby ao Master - Masculino e Feminino'
                                    },
                                    {
                                        icon: '🏆',
                                        title: 'Competição & Lazer',
                                        description: 'Preparação técnica para todos os objetivos'
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 group">
                                        <div className="text-3xl mb-4">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-400">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* CTA Bottom */}
                <div className="text-center mt-16" data-aos="fade-up">
                    <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
                        <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                            Pronto para Começar sua Jornada?
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Junte-se à família Constrictor Team e descubra como o Jiu-Jitsu pode transformar sua vida
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white hover:bg-gray-100">
                                📞 Fale Conosco
                            </button>
                            <button className="bg-transparent text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white hover:bg-white hover:text-black">
                                📍 Ver Localização
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}