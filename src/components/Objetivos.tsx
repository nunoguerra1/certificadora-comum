'use client';

import { Cpu, ComputerTowerIcon, Stack, Database } from "@phosphor-icons/react";

const objectivesData = [
    {
        icon: <Cpu size={28} weight="regular" className="text-gray-400 transition-colors duration-300 group-hover:text-accent" />,
        title: 'Peer-to-Peer',
        description: 'Entenda a distribuição descentralizada e sistemas autônomos de troca de dados.',
    },
    {
        icon: <ComputerTowerIcon size={28} weight="regular" className="text-gray-400 transition-colors duration-300 group-hover:text-accent" />,
        title: 'TCP/IP',
        description: 'O coração da internet. Aprofunde-se nos protocolos de transmissão e endereçamento.',
    },
    {
        icon: <Stack size={28} weight="regular" className="text-gray-400 transition-colors duration-300 group-hover:text-accent" />,
        title: 'Camadas de Rede',
        description: 'Domine o Modelo OSI e entenda como cada camada interage no ecossistema.',
    },
    {
        icon: <Database size={28} weight="regular" className="text-gray-400 transition-colors duration-300 group-hover:text-accent" />,
        title: 'Infraestrutura',
        description: 'Aprenda a projetar e gerenciar backbones e datacenters de nível global.',
    }
];

export function Objetivos() {
    return (
        <section id="objetivos" className="w-full py-54 bg-white">
            <div className="mx-auto max-w-300 px-6">

                <div className="text-center mb-16">
                    <h4 className="text-[11px] font-extrabold tracking-[0.2em] text-accent uppercase mb-6">
                        Objetivos do Curso
                    </h4>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
                        O que você vai dominar
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {objectivesData.map((objective, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:border-gray-200"
                        >
                            <div className="mb-6 p-3 bg-gray-50 rounded-lg inline-flex transition-transform duration-300 group-hover:scale-110">
                                {objective.icon}
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {objective.title}
                            </h3>
                            <p className="text-sm text-muted leading-relaxed font-normal max-w-[95%]">
                                {objective.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}