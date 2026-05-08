'use client';

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function Hero() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(() => ({
        fpsLimit: 120,
        particles: {
            color: {
                value: "#dc2626",
            },
            links: {
                color: "#71717a",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 0.8,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 80,
            },
            opacity: {
                value: 0.3,
                random: true,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        detectRetina: true,
    }), []);

    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-dots pt-12 pb-24">
            {init && (
                <Particles
                    id="tsparticles"
                    className="absolute inset-0 z-0 pointer-events-none"
                    particlesLoaded={particlesLoaded}
                    options={options}
                />
            )}

            <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-gray-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70" />
            <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-gray-300/40 rounded-full mix-blend-multiply filter blur-[120px] opacity-60" />

            <div className="relative z-10 mx-auto flex max-w-300 flex-col lg:flex-row items-center justify-between px-6 gap-16 lg:gap-8 w-full py-12">
                <div className="flex-1 flex flex-col items-start text-left max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
                        <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                            Redes de Computadores
                        </span>
                    </div>

                    <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-900 leading-[1.05]">
                        Descomplicando <br /> as Redes.
                    </h1>

                    <p className="mt-6 text-base sm:text-lg text-zinc-500 leading-relaxed max-w-[90%]">
                        A jornada definitiva para dominar a infraestrutura que conecta o mundo.
                        Aprenda com uma metodologia de alta performance focada em engenharia real.
                    </p>

                    <div className="mt-10 flex flex-wrap items-center gap-4">
                        <button className="rounded-full bg-zinc-900 px-8 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
                            INICIAR JORNADA
                        </button>
                        <button className="rounded-full border border-zinc-200 bg-white px-8 py-3.5 text-xs font-semibold text-zinc-900 transition-all duration-300 hover:bg-zinc-50 hover:scale-105 active:scale-95 shadow-sm">
                            CONHECER O MÉTODO
                        </button>
                    </div>
                </div>

                <div className="flex-1 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0 group">
                    <div className="relative z-10 w-full max-w-97.5 aspect-4/5 rounded-2xl bg-linear-to-b from-gray-900 to-black p-4 shadow-2xl border border-gray-800 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 overflow-hidden group/card">
                        <div className="relative w-full h-full rounded-xl flex items-center justify-center overflow-hidden p-1">
                            <Image
                                src="/switch.png"
                                alt="High performance network switch"
                                fill
                                priority
                                className="object-contain scale-100 transition-transform duration-700 group-hover/card:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}