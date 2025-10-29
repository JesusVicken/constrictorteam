'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Modalidades() {
    const modalidades = [
        {
            nome: 'Jiu-Jitsu',
            descricao: 'Arte suave que ensina técnica, disciplina e autoconfiança, ideal para todas as idades.',
            imagem: '/jiu.jpg',
        },
        {
            nome: 'MMA',
            descricao: 'Combinação de artes marciais com foco em resistência, força e estratégia de combate.',
            imagem: '/mma.jpg',
        },
        {
            nome: 'Capoeira',
            descricao: 'Expressão cultural e luta acrobática que une música, ritmo e movimento.',
            imagem: '/capoeira.png',
        },
    ]

    return (
        <section className="w-full bg-black text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold mb-4 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Modalidades na Constrictor Team
                </motion.h2>
                <motion.p
                    className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Treinamentos que unem tradição, técnica e evolução do Jiu-Jitsu ao MMA, da base ao topo.
                </motion.p>
            </div>

            {/* Cards das modalidades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {modalidades.map((item, i) => (
                    <motion.div
                        key={i}
                        className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="relative w-full h-64 sm:h-72 md:h-80">
                            <Image
                                src={item.imagem}
                                alt={item.nome}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-2">{item.nome}</h3>
                            <p className="text-gray-300 text-xs sm:text-sm">{item.descricao}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
