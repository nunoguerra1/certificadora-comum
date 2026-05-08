'use client';

import Image from "next/image";
import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react";
import Nuno from "../../public/Nuno.jpeg"
import Daniel from "../../public/Daniel.jpeg"
import Max from "../../public/max.jpg"
import Lucas from "../../public/Lucas.png"

const teamData = [
    {
        nome: "Nuno Guerra",
        cargo: "Desenvolvedor FullStack",
        imagem: Nuno,
        linkedin: "https://www.linkedin.com/in/nunomguerra/",
        github: "https://github.com/nunoguerra1",
    },
    {
        nome: "Daniel Durante",
        cargo: "Profissional de GRC & Privacidade de Dados",
        imagem: Daniel,
        linkedin: "https://www.linkedin.com/in/durante-daniel/",
        github: "https://github.com/Dandurant",
    },
    {
        nome: "Lucas Gabriel",
        cargo: "Desenvolvedor FullStack",
        imagem: Lucas,
        linkedin: "https://www.linkedin.com/in/lucaspinheirodev/",
        github: "https://github.com/Lucassgsantos",
    },
    {
        nome: "Maxine Lourenço",
        cargo: "Desenvolvedor",
        imagem: Max,
        github: "https://github.com/mxiine",
    }
];

export function Time() {
    return (
        <section id="time" className="w-full z-10 py-32 bg-[#f8f9fa]">
            <div className="mx-auto max-w-300 px-6">

                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                        Os Engenheiros
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    {teamData.map((member, index) => (
                        <div key={index} className="group flex flex-col items-center text-center">

                            <div className="relative w-full aspect-4/5 overflow-hidden rounded-4xl mb-6 bg-gray-200 shadow-md transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
                                <Image
                                    src={member.imagem}
                                    alt={`Foto de ${member.nome}`}
                                    fill
                                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                                />
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                                {member.nome}
                            </h3>
                            <p className="text-sm text-gray-500 font-medium mb-4">
                                {member.cargo}
                            </p>

                            <div className="flex items-center gap-4">
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#0077b5] transition-colors duration-300"
                                    aria-label={`LinkedIn de ${member.nome}`}
                                >
                                    <LinkedinLogo size={22} weight="fill" />
                                </a>
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-900 transition-colors duration-300"
                                    aria-label={`GitHub de ${member.nome}`}
                                >
                                    <GithubLogo size={22} weight="fill" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}