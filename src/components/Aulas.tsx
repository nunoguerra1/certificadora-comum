'use client';

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import imagem from "../../public/teste.png"

const aulas = [
    {
        categoria: "FUNDAMENTOS",
        titulo: "Princípios de Redes",
        descricao: "Entenda os conceitos básicos, a base da comunicação de dados e o funcionamento dos modelos OSI e TCP/IP.",
        imagem: imagem,
    },
    {
        categoria: "ARQUITETURA",
        titulo: "Topologias Físicas e Lógicas",
        descricao: "Conheça as estruturas em estrela, malha e anel, e entenda como desenhar a melhor rede para cada cenário.",
        imagem: imagem,
    },
    {
        categoria: "PROTOCOLOS",
        titulo: "Endereçamento IP",
        descricao: "Domine a base do IPv4 e as inovações do IPv6, aprendendo exatamente como os dispositivos são localizados na internet.",
        imagem: imagem,
    },
    {
        categoria: "PLANEJAMENTO",
        titulo: "Cálculo de Sub-redes",
        descricao: "Aprenda a técnica essencial para dividir, segmentar e otimizar blocos de endereços com eficiência e segurança.",
        imagem: imagem,
    },
    {
        categoria: "APLICAÇÃO",
        titulo: "Serviços Essenciais",
        descricao: "Desmistifique como o DNS, DHCP e NAT trabalham nos bastidores para manter toda a infraestrutura conectada.",
        imagem: imagem,
    }
];

export function Aulas() {
    return (
        <section id="aulas" className="relative z-10 w-full py-32 bg-[#0a0a0a] text-white overflow-hidden">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-gray-800 to-transparent" />

            <div className="mx-auto max-w-300 px-6">

                {/* Header da Seção */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Módulos de Especialização
                        </h2>
                        <p className="text-zinc-500 text-lg font-medium">
                            Conteúdo técnico de alto nível com abordagem prática.
                        </p>
                    </div>

                    <button className="px-8 py-3 rounded-full border border-zinc-800 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500">
                        Ver Todos
                    </button>
                </div>

                {/* Grid de Aulas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {aulas.map((aula, index) => (
                        <div key={index} className="group cursor-pointer">

                            <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl mb-8 border border-zinc-900 bg-zinc-900 transition-all duration-500 group-hover:border-zinc-700 shadow-2xl">
                                <Image
                                    src={aula.imagem}
                                    alt={aula.titulo}
                                    fill
                                    className="object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
                            </div>

                            <div className="space-y-4">
                                <span className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">
                                    {aula.categoria}
                                </span>
                                <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                                    {aula.titulo}
                                </h3>
                                <p className="text-zinc-500 leading-relaxed text-sm max-w-[90%]">
                                    {aula.descricao}
                                </p>

                                <div className="pt-4 overflow-hidden">
                                    <div className="flex items-center gap-2 text-white transition-all duration-500 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                        <ArrowRight size={20} weight="bold" />
                                    </div>
                                    <div className="h-px w-8 bg-zinc-800 group-hover:bg-transparent transition-colors -mt-2.5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}