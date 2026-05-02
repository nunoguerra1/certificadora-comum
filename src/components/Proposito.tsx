'use client';

import { CompassTool, ShieldCheck, Lightbulb } from "@phosphor-icons/react";

export function Proposito() {
    const cards = [
        {
            title: "Arquitetura Pura",
            description: "Estruturas modulares pensadas para escalabilidade infinita.",
            icon: <CompassTool size={28} weight="regular" className="text-gray-400 transition-colors duration-500 group-hover:text-foreground" />,
        },
        {
            title: "Segurança Nativa",
            description: "Protocolos de proteção integrados desde o primeiro bit de informação.",
            icon: <ShieldCheck size={28} weight="regular" className="text-gray-400 transition-colors duration-500 group-hover:text-foreground" />,
        },
        {
            title: "Didática Visual",
            description: "Visualização de pacotes e fluxos de dados em tempo real.",
            icon: <Lightbulb size={28} weight="regular" className="text-gray-400 transition-colors duration-500 group-hover:text-foreground" />,
        }
    ];

    return (
        < section id="proposito" className="relative z-10 w-full py-24 bg-gray-50 border-t border-border/40" >
            <div className="mx-auto max-w-300 px-6">
                <div className="flex flex-col lg:flex-row gap-12 justify-between items-start mb-20">
                    <div className="max-w-2xl">
                        <h4 className="text-[11px] font-extrabold tracking-[0.2em] text-accent uppercase mb-6">
                            Nosso Propósito
                        </h4>
                        <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-foreground leading-[1.15]">
                            Construímos uma ponte entre a complexidade acadêmica e a realidade técnica do mercado de alta performance.
                        </h2>
                    </div>

                    <div className="max-w-sm pt-2 lg:pt-14">
                        <p className="text-base text-muted leading-relaxed font-medium">
                            Nossa missão é democratizar o conhecimento de arquitetura de redes através de uma didática visual, técnica e extremamente precisa.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col bg-background p-10 rounded-2xl border border-border/50 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-border"
                        >
                            <div className="mb-14 transition-transform duration-500 group-hover:scale-110">
                                {card.icon}
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-3">
                                {card.title}
                            </h3>
                            <p className="text-sm text-muted leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section >
    );
}