'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
    const whatsappNumber = '61991627171'
    const whatsappMessage =
        'Olá, gostaria de agendar uma aula experimental na Constrictor Team.'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
    )}`

    return (
        <section className="bg-black text-white relative overflow-hidden">
            {/* --- FUNDO COM GRADIENTE --- */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 opacity-90"></div>

            <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-20">
                {/* TÍTULO PRINCIPAL */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wide mb-4 text-white">
                        Contato e Localização
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Fale com a <strong>Constrictor Team</strong> e venha
                        conhecer nossa estrutura. Treine com os melhores e faça
                        parte do legado.
                    </p>
                </motion.div>

                {/* --- GRID DE INFORMAÇÕES --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* SOBRE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left"
                    >
                        <img
                            src="/logo1234.png"
                            alt="Logo Constrictor Team"
                            width={240}
                            height={90}
                            loading="eager"
                            className="drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                        />
                        <p className="text-gray-300 leading-relaxed">
                            A <strong>Constrictor Team</strong> é referência em
                            formar cidadãos conscientes. Promovemos o Jiu-Jitsu
                            como filosofia de vida. Construindo respeito,
                            disciplina e superação dentro e fora do tatame.
                        </p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 transition-all px-6 py-3 rounded-lg font-semibold text-white shadow-lg shadow-green-600/30"
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>Fale conosco no WhatsApp</span>
                        </a>
                    </motion.div>

                    {/* CONTATOS */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-wide">
                            Contatos
                        </h3>
                        <ul className="space-y-5 text-gray-300">
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <Mail className="w-5 h-5 text-gray-400" />
                                <span>contato@constrictorteam.com.br</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3">
                                <Phone className="w-5 h-5 text-gray-400" />
                                <span>(61) 99874-8228</span>
                            </li>
                            <li className="flex items-start justify-center md:justify-start gap-3">
                                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                                <span>
                                    <strong>Centro de Treinamento Constrictor Team</strong> — Sede
                                    <br />
                                    Parque da Cidade, Estacionamento 08 - Brasília/DF
                                    <br />
                                    Filiais em todo o Brasil 🇧🇷
                                </span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* REDES SOCIAIS */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-center md:text-left"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white uppercase tracking-wide">
                            Redes Sociais
                        </h3>
                        <p className="text-gray-300 mb-8">
                            Siga a <strong>Constrictor Team</strong> e acompanhe
                            nossos treinos, conquistas e eventos ao redor do
                            mundo.
                        </p>

                        <div className="flex justify-center md:justify-start gap-8">
                            {/* FACEBOOK */}
                            <a
                                href="https://www.facebook.com/Constrictorteam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                                aria-label="Facebook"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#1877F2"
                                    className="w-8 h-8 drop-shadow-[0_0_6px_rgba(24,119,242,0.5)]"
                                >
                                    <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.326v21.348C0 23.4.597 24 1.326 24h11.495v-9.294H9.692V11.09h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.319h3.588l-.467 3.615h-3.121V24h6.116C23.403 24 24 23.4 24 22.674V1.326C24 .6 23.403 0 22.675 0z" />
                                </svg>
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://www.instagram.com/constrictorteam/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 drop-shadow-[0_0_6px_rgba(225,48,108,0.6)]"
                                >
                                    <radialGradient
                                        id="ig-gradient"
                                        cx="30%"
                                        cy="107%"
                                        r="150%"
                                        fx="30%"
                                        fy="107%"
                                    >
                                        <stop offset="0%" stopColor="#fdf497" />
                                        <stop offset="5%" stopColor="#fdf497" />
                                        <stop offset="45%" stopColor="#fd5949" />
                                        <stop offset="60%" stopColor="#d6249f" />
                                        <stop offset="90%" stopColor="#285AEB" />
                                    </radialGradient>
                                    <path
                                        fill="url(#ig-gradient)"
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.246 2.43.414a4.92 4.92 0 0 1 1.77 1.145 4.92 4.92 0 0 1 1.145 1.77c.168.46.358 1.26.414 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.414 2.43a4.92 4.92 0 0 1-1.145 1.77 4.92 4.92 0 0 1-1.77 1.145c-.46.168-1.26.358-2.43.414-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.43-.414a4.92 4.92 0 0 1-1.77-1.145 4.92 4.92 0 0 1-1.145-1.77c-.168-.46-.358-1.26-.414-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.246-1.97.414-2.43A4.92 4.92 0 0 1 3.792 2.95a4.92 4.92 0 0 1 1.77-1.145c.46-.168 1.26-.358 2.43-.414C8.416 2.175 8.796 2.163 12 2.163z"
                                    />
                                    <path
                                        fill="white"
                                        d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"
                                    />
                                </svg>
                            </a>

                            {/* WHATSAPP */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                                aria-label="WhatsApp"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    fill="#25D366"
                                    className="w-8 h-8 drop-shadow-[0_0_6px_rgba(37,211,102,0.6)]"
                                >
                                    <path d="M16 3C9.383 3 4 8.383 4 15c0 2.65.836 5.099 2.25 7.125L4 29l7.09-2.23A11.935 11.935 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zM16 25a8.962 8.962 0 0 1-4.571-1.259l-.326-.194-4.207 1.322 1.383-4.105-.213-.333A8.954 8.954 0 0 1 7 15c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9zm4.646-6.694c-.254-.127-1.504-.744-1.737-.829-.233-.085-.404-.127-.574.127-.17.254-.659.829-.807.998-.148.17-.297.19-.551.063-.254-.127-1.072-.395-2.042-1.259-.754-.673-1.263-1.504-1.411-1.758-.148-.254-.016-.392.111-.519.114-.113.254-.297.381-.446.127-.148.17-.254.254-.424.085-.17.042-.318-.021-.446-.063-.127-.574-1.386-.787-1.899-.207-.497-.419-.43-.574-.438-.148-.007-.318-.009-.488-.009a.938.938 0 0 0-.68.318c-.233.254-.889.868-.889 2.116s.91 2.457 1.037 2.626c.127.17 1.791 2.733 4.34 3.834 2.549 1.101 2.549.734 3.007.689.458-.042 1.504-.612 1.716-1.203.212-.592.212-1.101.148-1.203-.063-.106-.233-.17-.488-.297z" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* MAPA RESPONSIVO */}
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[450px] border-t border-neutral-800">
                <iframe
                    title="Constrictor Team Brasília"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.000338429802!2d-47.9170703!3d-15.8087543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b896d8b3de5%3A0x54ddfa28bf4248bb!2sConstrictor%20Team!5e0!3m2!1spt-BR!2sbr!4v1730816823000!5m2!1spt-BR!2sbr"
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* RODAPÉ FINAL */}
            <div className="text-center text-gray-500 py-6 text-sm border-t border-neutral-800 backdrop-blur-sm">
                © {new Date().getFullYear()} Constrictor Team — Todos os
                direitos reservados.
            </div>
        </section>
    )
}
