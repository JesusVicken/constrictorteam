'use client'

import CarrosselProjetos from '../_components/CarrosselProjetos'

export default function ProjetosPage() {
    return (
        <main className="px-4 py-8 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Nossos Projetos</h1>
            <p className="text-center text-muted-foreground mb-12">
                Entre em contato e confira nosso portfólio de projetos
            </p>
            <CarrosselProjetos />

          
            <div className="mt-16 text-center">
                <h2 className="text-2xl font-semibold mb-4">Nossa Abordagem</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                    Cada projeto é cuidadosamente planejado para atender às necessidades específicas de nossos clientes,
                    combinando funcionalidade, estética e inovação.
                </p>
            </div>
        </main>
    )
}