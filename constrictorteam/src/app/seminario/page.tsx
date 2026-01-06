'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
// import 'aos/dist/aos.css' (Removido pois já está no global)

export default function SeminarioPage() {

    useEffect(() => {
        AOS.init({ duration: 800, once: true })
    }, [])

    return (
        <main className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black font-sans overflow-x-hidden">

            {/* --- BACKGROUND EFFECTS --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px]" />
            </div>

            {/* --- NAVBAR REMOVIDA AQUI --- */}

            {/* Ajustei pt-28 para pt-10 para o conteudo subir mais */}
            <div className="max-w-6xl mx-auto px-4 pt-10 pb-20 relative z-10">

                {/* --- HERO SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">

                    {/* Texto Hero */}
                    <div className="order-2 lg:order-1 space-y-8" data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            Inscrições Abertas
                        </div>

                        <h1 className="text-5xl sm:text-7xl font-black uppercase leading-[0.9] tracking-tight">
                            Domine a <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                Passagem de Guarda
                            </span>
                        </h1>

                        <p className="text-lg text-gray-400 leading-relaxed max-w-lg border-l-4 border-yellow-500 pl-6">
                            Aprenda conceitos de <strong>amasso, pressão e controle</strong> para passar literalmente <span className="text-white underline decoration-yellow-500 underline-offset-4">QUALQUER guarda</span> com eficiência.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="https://chat.whatsapp.com/CIlQtxdzx7nDjxMqmci8ki"
                                target="_blank"
                                className="group relative inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebc57] text-black font-black text-lg uppercase tracking-wide px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(37,211,102,0.6)]"
                            >
                                <span>Entrar no Grupo</span>
                                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                            </a>
                            <span className="flex items-center text-sm text-gray-500 font-medium px-2">
                                *Pagamento e detalhes no grupo
                            </span>
                        </div>
                    </div>

                    {/* Imagem Hero (Flyer) */}
                    <div className="order-1 lg:order-2 relative" data-aos="zoom-in">
                        <div className="absolute inset-0 bg-yellow-500 blur-[80px] opacity-20 animate-pulse"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/seminarioKim.jpg"
                                alt="Flyer Seminário Kim Ludgero"
                                width={1024}
                                height={1365}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>


                {/* --- BENTO GRID DE INFORMAÇÕES --- */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold uppercase mb-8 flex items-center gap-4" data-aos="fade-up">
                        <span className="w-8 h-[2px] bg-yellow-500"></span>
                        Detalhes do Evento
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="100">

                        {/* Card: Instrutor (Largo) + INSTAGRAM BUTTON */}
                        <div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 min-h-[300px]">
                            <div className="absolute inset-0">
                                <Image
                                    src="/seminarioKim2.jpg"
                                    alt="Kim Ludgero Lutando"
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                            </div>

                            <div className="relative z-10 h-full flex flex-col justify-end p-8">
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-1">O Professor</p>
                                        <h3 className="text-4xl font-black uppercase leading-none">Kim Ludgero</h3>
                                    </div>

                                    {/* BOTÃO INSTAGRAM */}
                                    <a
                                        href="https://www.instagram.com/kimludgero/"
                                        target="_blank"
                                        className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all group/insta"
                                    >
                                        <svg className="w-6 h-6 fill-current group-hover/insta:fill-[#E1306C]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.645.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wide">Ver Perfil</span>
                                    </a>

                                </div>
                                <p className="text-gray-300 mt-2 max-w-md">Multicampeão e especialista em guarda. Vai te ensinar os segredos que não estão no YouTube.</p>
                            </div>
                        </div>

                        {/* Card: Investimento (Destaque) */}
                        <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-3xl p-8 flex flex-col justify-between text-black relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" /></svg>
                            </div>
                            <div>
                                <p className="font-bold uppercase opacity-80 mb-1">Investimento</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm font-bold">R$</span>
                                    <span className="text-6xl font-black tracking-tighter">100</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-bold opacity-80 leading-tight">Pagamento via PIX</p>
                                <p className="text-xs opacity-70">Chave informada no grupo</p>
                            </div>
                        </div>

                        {/* Card: Data e Hora */}
                        <div className="bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-zinc-800/50 transition-colors">
                            <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-yellow-500 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                            </div>
                            <h4 className="text-xl font-bold uppercase mb-1">24 de Janeiro</h4>
                            <p className="text-gray-400">Sábado</p>
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="text-2xl font-bold text-white">10h às 12h</p>
                                <p className="text-sm text-yellow-500 mt-1">2 horas de duração</p>
                            </div>
                        </div>

                        {/* Card: Local */}
                        <div className="md:col-span-2 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-zinc-800/50 transition-colors flex flex-col sm:flex-row items-center gap-6">
                            <div className="w-16 h-16 shrink-0 bg-zinc-800 rounded-full flex items-center justify-center text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div className="text-center sm:text-left">
                                <h4 className="text-xl font-bold uppercase mb-2">Localização</h4>
                                <p className="text-2xl font-bold text-white leading-tight">Constrictor Team <br /><span className="text-gray-400 font-normal">Parque da Cidade</span></p>
                            </div>
                        </div>

                    </div>
                </div>


                {/* --- FAQ / CTA FINAL --- */}
                <div className="text-center max-w-2xl mx-auto py-12" data-aos="fade-up">
                    <h3 className="text-3xl font-bold uppercase mb-6">Não fique de fora</h3>
                    <p className="text-gray-400 mb-8">
                        As vagas são limitadas para garantir a qualidade do ensino e a atenção do professor com cada aluno. Garanta sua presença agora.
                    </p>
                    <a
                        href="https://chat.whatsapp.com/CIlQtxdzx7nDjxMqmci8ki"
                        target="_blank"
                        className="inline-block bg-white text-black font-black text-lg uppercase tracking-wide px-10 py-4 rounded-full hover:bg-gray-200 transition-transform hover:scale-105"
                    >
                        Garantir minha vaga agora
                    </a>
                </div>

            </div>

            {/* FOOTER */}
            <footer className="border-t border-white/10 bg-black py-8 text-center text-gray-600 text-sm">
                <p>&copy; 2025 Constrictor Team. Todos os direitos reservados.</p>
            </footer>
        </main>
    )
}