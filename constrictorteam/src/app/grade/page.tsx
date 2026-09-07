'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Clock,
    Users,
    Target,
    Flame,
    Calendar,
    MapPin,
    ArrowRight,
    Sparkles,
    Shield,
    CheckCircle2,
    ZoomIn,
    X
} from 'lucide-react'

// --- Ícone WhatsApp ---
const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
)

const scheduleData = [
    {
        id: 'seg-qua-sex',
        category: 'semana',
        day: 'Segunda, Quarta e Sexta',
        badge: 'Treinos Regulares',
        classes: [
            { time: '11:30 - 12:40', activity: 'LUTA LIVRE', instructor: 'MESTRE ATAÍDE', type: 'nogi' },
            { time: '12:40 - 13:40', activity: 'JIU-JITSU', instructor: 'MESTRE ATAÍDE', type: 'gi' },
            { time: '19:30 - 21:00', activity: 'JIU-JITSU', instructor: 'PROF. BRENO GUSMÃO', type: 'gi' },
        ],
    },
    {
        id: 'kids',
        category: 'kids',
        day: 'Segunda, Quarta e Sexta (Kids)',
        badge: 'Infantil / Juvenil',
        classes: [
            { time: '18:30 - 19:30', activity: 'JIU-JITSU KIDS', instructor: 'PROF. BRENO GUSMÃO', type: 'kids' },
        ],
    },
    {
        id: 'ter-qui',
        category: 'semana',
        day: 'Terça e Quinta',
        badge: 'Treinos Regulares',
        classes: [
            { time: '12:30 - 13:30', activity: 'JIU-JITSU', instructor: 'RODRIGO AMARAL (CARRANCA)', type: 'gi' },
            { time: '13:30 - 14:30', activity: 'MUAY THAI', instructor: 'YGOR MORATO', type: 'striking' },
            { time: '19:30 - 21:00', activity: 'JIU-JITSU', instructor: 'CARRANCA', type: 'gi' },
        ],
    },
    {
        id: 'sabado',
        category: 'sabado',
        day: 'Sábado Especial',
        badge: 'Open Mat & Especiais',
        classes: [
            { time: '08:30 - 09:30', activity: 'OLD SCHOOL JIU-JITSU', instructor: 'EQUIPE CONSTRICTOR', type: 'gi' },
            { time: '09:30 - 10:30', activity: 'YOGA & MOBILIDADE', instructor: 'JOANA ALVES', type: 'condicionamento' },
            { time: '10:30 - 12:30', activity: 'OPEN MAT JIU-JITSU', instructor: 'TATAME ABERTO', isHighlight: true, type: 'openmat' },
            { time: '12:30 - 13:30', activity: 'MUAY THAI', instructor: 'TREINADOR TOCO', type: 'striking' },
        ],
    },
]

export default function HorariosPage() {
    const [selectedTab, setSelectedTab] = useState<'todos' | 'semana' | 'sabado' | 'kids'>('todos')
    const [openMatModalOpen, setOpenMatModalOpen] = useState(false)

    const whatsappNumber = '5561991627171'
    const openMatMessage = encodeURIComponent(
        'Olá! Gostaria de confirmar minha presença e saber mais informações sobre o Open Mat de Sábado da Constrictor Team.'
    )
    const openMatWhatsappLink = `https://wa.me/${whatsappNumber}?text=${openMatMessage}`

    const experimentalMessage = encodeURIComponent(
        'Olá! Vim pelo site e gostaria de agendar uma aula experimental na Constrictor Team.'
    )
    const experimentalLink = `https://wa.me/${whatsappNumber}?text=${experimentalMessage}`

    const filteredSchedule = selectedTab === 'todos'
        ? scheduleData
        : scheduleData.filter(item => item.category === selectedTab || (selectedTab === 'semana' && item.category !== 'sabado'))

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black relative overflow-x-hidden">
            {/* Background Texture */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src="/backg.png"
                    alt="Background Dojo Texture"
                    fill
                    className="object-cover opacity-20"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black" />
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-zinc-300 text-xs sm:text-sm font-semibold uppercase tracking-widest"
                    >
                        <Calendar size={14} className="text-white" />
                        Grade Oficial de Treinos • Constrictor Team
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]"
                    >
                        Horários de Treino <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">
                            Evolução Constante
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Aulas de Jiu-Jitsu (Gi e No-Gi), Luta Livre, Muay Thai, Turmas Kids e o tradicional <strong>Open Mat aos Sábados</strong>.
                    </motion.p>

                    {/* Stats bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-4"
                    >
                        {[
                            { icon: Clock, label: 'Aulas Semanais', value: '20+' },
                            { icon: Users, label: 'Instrutores Faixa-Preta', value: 'Mestres' },
                            { icon: Target, label: 'Modalidades', value: '5 Áreas' },
                            { icon: Flame, label: 'Open Mat', value: 'Todo Sábado' },
                        ].map((stat, i) => {
                            const Icon = stat.icon
                            return (
                                <div key={i} className="bg-zinc-950 border border-white/10 rounded-2xl p-3.5 sm:p-4 text-center">
                                    <Icon className="w-5 h-5 mx-auto mb-1 text-zinc-300" />
                                    <div className="text-lg sm:text-xl font-extrabold text-white">{stat.value}</div>
                                    <div className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider">{stat.label}</div>
                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl">

                {/* --- DESTAQUE ESPECIAL: OPEN MAT TODO SÁBADO --- */}
                <motion.section
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border-2 border-white/20 shadow-2xl p-6 sm:p-10 lg:p-12 relative"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Imagem do Open Mat */}
                        <div className="lg:col-span-5 relative">
                            <div
                                onClick={() => setOpenMatModalOpen(true)}
                                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-2xl group cursor-zoom-in bg-zinc-900"
                            >
                                <Image
                                    src="/openMAt.jpeg"
                                    alt="Open Mat Constrictor Team Todo Sábado"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                                
                                <div className="absolute top-4 left-4 bg-white text-black text-xs font-black uppercase px-3 py-1.5 rounded-full tracking-wider shadow-lg flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-black animate-ping" />
                                    Todo Sábado às 10h30
                                </div>

                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                                    <span className="font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                        10:30 às 12:30
                                    </span>
                                    <span className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                        <ZoomIn size={14} /> Ampliar
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Conteúdo Textual do Open Mat */}
                        <div className="lg:col-span-7 space-y-6">
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-widest bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                                <Sparkles size={14} /> Tradição de Sábado
                            </div>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                                Open Mat Constrictor Team <br />
                                <span className="text-zinc-400">Todo Sábado às 10h30</span>
                            </h2>

                            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed text-justify">
                                O <strong>Open Mat da Constrictor Team</strong> é um dos momentos mais aguardados da semana. Um tatame aberto dedicado ao intercâmbio técnico, rolas de alto nível, estudo de posições e integração entre todas as nossas unidades, filiais e atletas convidados.
                            </p>

                            {/* Informações Práticas */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="bg-zinc-900/90 border border-white/10 p-4 rounded-2xl space-y-1.5">
                                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                                        <Clock size={16} className="text-zinc-300" />
                                        Horário do Treino
                                    </div>
                                    <p className="text-zinc-400 text-xs sm:text-sm">
                                        Sábados, das <strong>10:30 às 12:30</strong> (logo após o treino Old School e Yoga).
                                    </p>
                                </div>

                                <div className="bg-zinc-900/90 border border-white/10 p-4 rounded-2xl space-y-1.5">
                                    <div className="flex items-center gap-2 text-white font-bold text-sm">
                                        <MapPin size={16} className="text-zinc-300" />
                                        Localização
                                    </div>
                                    <p className="text-zinc-400 text-xs sm:text-sm">
                                        CT Constrictor Team Sede — Parque da Cidade, Estacionamento 08.
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-2.5 text-zinc-300 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-white shrink-0" />
                                    Aberto para todos os níveis (do faixa-branca ao faixa-preta)
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-white shrink-0" />
                                    Integração entre filiais e atletas visitantes
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-white shrink-0" />
                                    Ambiente de respeito, técnica e evolução mútua
                                </li>
                            </ul>

                            <div className="pt-2 flex flex-wrap gap-4">
                                <a
                                    href={openMatWhatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-7 py-4 bg-white text-black font-extrabold rounded-full transition-all duration-300 hover:bg-zinc-200 hover:scale-105 uppercase tracking-wider text-xs sm:text-sm shadow-xl"
                                >
                                    <WhatsAppIcon />
                                    Confirmar Presença no Open Mat
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* --- FILTRO POR CATEGORIA (UI/UX MODERNA) --- */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
                    {[
                        { id: 'todos', label: 'Todos os Horários' },
                        { id: 'semana', label: 'Segunda a Sexta' },
                        { id: 'sabado', label: 'Sábados (Open Mat)' },
                        { id: 'kids', label: 'Turmas Kids' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id as any)}
                            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                selectedTab === tab.id
                                    ? 'bg-white text-black shadow-lg scale-105'
                                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* --- GRADE DE HORÁRIOS COMPLETA --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
                    <AnimatePresence mode="popLayout">
                        {filteredSchedule.map((group, index) => (
                            <motion.div
                                key={group.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="bg-zinc-950 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between hover:border-white/30 transition-colors"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white">
                                                <Calendar size={20} />
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-black uppercase text-white">
                                                {group.day}
                                            </h3>
                                        </div>
                                        <span className="text-[11px] font-bold text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                                            {group.badge}
                                        </span>
                                    </div>

                                    {/* Lista de Aulas */}
                                    <div className="space-y-3">
                                        {group.classes.map((aula, i) => (
                                            <div
                                                key={i}
                                                className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                                                    aula.isHighlight
                                                        ? 'bg-white/10 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                                                        : 'bg-zinc-900/70 border-white/5 hover:border-white/20'
                                                }`}
                                            >
                                                <div className="space-y-1">
                                                    <span className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                                        <Clock size={14} className="text-zinc-400" />
                                                        {aula.time}
                                                    </span>
                                                    <h4 className="text-sm sm:text-base font-extrabold text-white uppercase tracking-tight">
                                                        {aula.activity}
                                                    </h4>
                                                </div>

                                                <div className="text-right">
                                                    <span className="text-xs text-zinc-300 font-semibold block">
                                                        {aula.instructor || 'Treino Livre'}
                                                    </span>
                                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">
                                                        {aula.isHighlight ? 'Destaque Sábado' : 'Instrutor'}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                                    <span>CT Constrictor Sede</span>
                                    <Link
                                        href="/contato"
                                        className="text-white hover:underline flex items-center gap-1 font-semibold"
                                    >
                                        Ver Endereço <ArrowRight size={12} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* --- BANNER DE AULA EXPERIMENTAL --- */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center bg-zinc-950 border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl"
                >
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white mb-4">
                        Pronto para Dar o Primeiro Passo no Tatame?
                    </h3>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                        Agende uma aula experimental gratuita em qualquer uma das nossas modalidades e horários. Venha conhecer a nossa equipe, a metodologia e o ambiente.
                    </p>

                    <a
                        href={experimentalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-extrabold rounded-full transition-all duration-300 hover:bg-zinc-200 hover:scale-105 uppercase tracking-wide text-xs sm:text-sm shadow-2xl"
                    >
                        <WhatsAppIcon />
                        Agendar Aula Experimental
                    </a>
                </motion.section>

            </div>

            {/* --- MODAL LIGHTBOX DO OPEN MAT --- */}
            <AnimatePresence>
                {openMatModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpenMatModalOpen(false)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-pointer"
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-zinc-950 border border-white/20 flex flex-col z-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setOpenMatModalOpen(false)}
                                className="absolute top-4 right-4 z-50 p-2.5 bg-black/70 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all border border-white/20"
                                aria-label="Fechar"
                            >
                                <X size={20} />
                            </button>

                            <div className="relative w-full h-[70vh] bg-black flex items-center justify-center">
                                <Image
                                    src="/openMAt.jpeg"
                                    alt="Open Mat Constrictor Team"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            <div className="p-4 sm:p-6 bg-zinc-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                                        Tradição Constrictor Team
                                    </span>
                                    <p className="text-white text-sm md:text-base font-semibold">
                                        Open Mat aos Sábados — 10:30 às 12:30 no CT Sede
                                    </p>
                                </div>

                                <a
                                    href={openMatWhatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 bg-white text-black font-extrabold rounded-full text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
                                >
                                    Participar do Open Mat
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    )
}