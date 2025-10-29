'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {  MagnifyingGlassPlusIcon, X } from '@phosphor-icons/react'

const projects = [
    { id: 1, image: '/projeto11.jpeg', title: 'Projeto Residencial', category: 'Fachadas' },
    { id: 2, image: '/projeto12.jpeg', title: 'Ambiente Corporativo', category: 'Interiores' },
    { id: 3, image: '/projeto13.jpeg', title: 'Design Moderno', category: 'Fachadas' },
    { id: 4, image: '/projeto14.jpeg', title: 'Estrutura Minimalista', category: 'Interiores' },
    { id: 5, image: '/projeto15.jpeg', title: 'Projeto Comercial', category: 'Fachadas' },
    { id: 6, image: '/projeto16.jpeg', title: 'Detalhes em Madeira', category: 'Interiores' },
    { id: 7, image: '/projeto17.jpeg', title: 'Entrada Principal', category: 'Fachadas' },
    { id: 8, image: '/projeto18.jpeg', title: 'Ambiente Integrado', category: 'Interiores' },
    { id: 9, image: '/projeto19.jpeg', title: 'Estrutura Contemporânea', category: 'Fachadas' },
    { id: 10, image: '/projeto20.jpeg', title: 'Design de Interiores', category: 'Interiores' },
    { id: 11, image: '/projeto21.jpeg', title: 'Projeto Arquitetônico', category: 'Fachadas' },
    { id: 12, image: '/projeto21.jpeg', title: 'Espaço Corporativo', category: 'Interiores' },
    { id: 13, image: '/projeto23.jpeg', title: 'Fachada Moderna', category: 'Fachadas' },
]

export default function ProjectsGallery() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
    const [selectedProject, setSelectedProject] = useState<number | null>(null)

    const categories = ['Todos', ...new Set(projects.map(project => project.category))]

    const filteredProjects = selectedCategory === 'Todos'
        ? projects
        : projects.filter(project => project.category === selectedCategory)

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Projetos</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore nossa galeria de trabalhos realizados e inspire-se com nossas soluções personalizadas.
                    </p>
                </div>

                {/* Filtros */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Galeria */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(project => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="group relative overflow-hidden rounded-xl shadow-lg bg-white"
                        >
                            <div className="relative h-80 w-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    quality={90}
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                                        <span className="text-gray-200">{project.category}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedProject(project.id)}
                                    className="absolute top-4 right-4 p-3 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                                    aria-label="Ampliar imagem"
                                >
                                    <MagnifyingGlassPlusIcon size={20} className="text-gray-800" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal de visualização */}
            <AnimatePresence>
                {selectedProject !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <button
                            className="absolute top-6 right-6 p-2 text-white hover:text-gray-300 transition-colors"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Fechar"
                        >
                            <X size={28} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-6xl w-full max-h-[90vh]"
                            onClick={e => e.stopPropagation()}
                        >
                            {selectedProject && (
                                <Image
                                    src={projects.find(p => p.id === selectedProject)!.image}
                                    alt={projects.find(p => p.id === selectedProject)!.title}
                                    width={1200}
                                    height={800}
                                    className="object-contain w-full h-full max-h-[80vh]"
                                    quality={100}
                                />
                            )}

                            <div className="mt-4 text-center text-white">
                                <h3 className="text-2xl font-bold">
                                    {projects.find(p => p.id === selectedProject)?.title}
                                </h3>
                                <p className="text-gray-300">
                                    {projects.find(p => p.id === selectedProject)?.category}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}