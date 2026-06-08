'use client';

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, X, FileText } from "@phosphor-icons/react";

import Aula1 from "../../public/Aula1.png"
import Aula2 from "../../public/Aula2.png"
import Aula3 from "../../public/Aula3.png"
import Aula4 from "../../public/Aula4.png"

const aulas = [
    {
        categoria: "FUNDAMENTOS",
        titulo: "Princípios de Redes",
        descricao: "Entenda os conceitos básicos, a base da comunicação de dados e o funcionamento dos modelos OSI e TCP/IP.",
        imagem: Aula1,
        youtubeId: "nybEYQG-yh4",
        slidesUrl: "https://docs.google.com/presentation/d/1HOFWWi6OWWncLMKlsQcbFBZAIkPFQLPd/edit?usp=drive_link&ouid=114035626317007559321&rtpof=true&sd=true",
        exercicio: "https://cdn.discordapp.com/attachments/1313696369181065360/1513374443303604266/Lista_Exercicios_Redes_Aula1.pdf?ex=6a277f48&is=6a262dc8&hm=f334d146e82b2cbbbddc4b71dbae3dd70953fb04b212d042f2dd42b7fad07396&"
    },
    {
        categoria: "PROTOCOLOS",
        titulo: "Endereçamento IP",
        descricao: "Domine a base do IPv4 e as inovações do IPv6, aprendendo exatamente como os dispositivos são localizados na internet.",
        imagem: Aula2,
        youtubeId: "ypkpgF34m3M",
        slidesUrl: "https://docs.google.com/presentation/d/1BshPPQ9tvA7Feq7g0DSYEXMen7lVcOje/edit?usp=drive_link&ouid=114035626317007559321&rtpof=true&sd=true",
        exercicio: "https://cdn.discordapp.com/attachments/1313696369181065360/1513374442296967208/Lista_Exercicios_Redes_Aula2-v2.pdf?ex=6a277f48&is=6a262dc8&hm=2d6044cbc1c22c1ac7a0ade8d9e74f66229d6a7019c55fe3149aaa4ce66ca394&"
    },
    {
        categoria: "DNS",
        titulo: "Servidor DNS",
        descricao: "Entenda como o DNS funciona e como ele resolve nomes de domínio em endereços IP.",
        imagem: Aula3,
        youtubeId: "3WccBT92dVU",
        slidesUrl: "https://docs.google.com/presentation/d/1RvDggoLIHnHZsH4gHujYmvul-3UUCv8-/edit?usp=drive_link&ouid=114035626317007559321&rtpof=true&sd=true",
        exercicio: "https://cdn.discordapp.com/attachments/1313696369181065360/1513374441738866868/Lista_Exercicios_Redes_Aula3.pdf?ex=6a277f48&is=6a262dc8&hm=c7032b9cf99cb4e01e318bf8decbbd8beeb96f82d57f8031edc8833d9bce7299&"
    },
    {
        categoria: "PACOTE DADOS",
        titulo: "Pacote de Dados",
        descricao: "Aprenda como as informações viajam fisicamente pelos cabos, e a engenharia da fragmentação digital que torna a internet possível.",
        imagem: Aula4,
        youtubeId: "AhB55rnxFQI",
        slidesUrl: "https://docs.google.com/presentation/d/1z9bHKGSGGHmjebHIoV9UwSRyNu-ubROC/edit?usp=drive_link&ouid=114035626317007559321&rtpof=true&sd=true",
        exercicio: "https://cdn.discordapp.com/attachments/1313696369181065360/1513374441223229602/Lista_Exercicios_Redes_Aula4.pdf?ex=6a277f47&is=6a262dc7&hm=9511766a0e1f695eb874c0eb3efa606cfec53da7defa7ee2d4e473be5aca2998&"
    },
];

export function Aulas() {
    const [aulaAberta, setAulaAberta] = useState<typeof aulas[0] | null>(null);

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
                        <div
                            key={index}
                            className="group cursor-pointer"
                            onClick={() => setAulaAberta(aula)}
                        >
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
                                        <span className="text-xs font-bold uppercase tracking-widest">Assistir Aula</span>
                                        <ArrowRight size={20} weight="bold" />
                                    </div>
                                    <div className="h-px w-8 bg-zinc-800 group-hover:bg-transparent transition-colors -mt-2.5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL DA AULA */}
            {aulaAberta && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setAulaAberta(null)}
                    />

                    {/* Conteúdo do Modal */}
                    <div className="relative w-full max-w-4xl bg-[#0f0f0f] rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">

                        {/* Botão Fechar */}
                        <button
                            onClick={() => setAulaAberta(null)}
                            className="absolute top-6 right-6 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-all"
                        >
                            <X size={24} weight="bold" />
                        </button>

                        {/* Player do YouTube (Aspect Ratio 16:9) */}
                        <div className="relative aspect-video w-full">
                            <iframe
                                src={`https://www.youtube.com/embed/${aulaAberta.youtubeId}?rel=0&modestbranding=1`}
                                title={aulaAberta.titulo}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        <div className="p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                            <div className="max-w-xl">
                                <h3 className="text-2xl font-bold text-white mb-2">{aulaAberta.titulo}</h3>
                                <p className="text-zinc-400 text-sm">{aulaAberta.descricao}</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                                <a
                                    href={aulaAberta.exercicio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-white hover:bg-white hover:text-black transition-all group flex-1 sm:flex-initial"
                                >
                                    <FileText size={24} />
                                    <div className="flex flex-col items-start">
                                        <span className="text-[10px] font-bold text-zinc-500 uppercase transition-colors tracking-widest group-hover:text-zinc-400">Praticar Conteúdo</span>
                                        <span className="font-bold">Baixar Exercícios</span>
                                    </div>
                                </a>

                                <a
                                    href={aulaAberta.slidesUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-white hover:bg-white hover:text-black transition-all group flex-1 sm:flex-initial"
                                >
                                    <FileText size={24} />
                                    <div className="flex flex-col items-start">
                                        <span className="text-[10px] font-bold text-zinc-500 uppercase transition-colors tracking-widest group-hover:text-zinc-400">Material Complementar</span>
                                        <span className="font-bold">Acessar Slides</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}