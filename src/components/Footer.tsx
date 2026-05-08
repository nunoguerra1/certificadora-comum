'use client';

export function Footer() {
    return (
        <footer className="w-full py-10 z-10 bg-white border-t border-gray-100">
            <div className="mx-auto max-w-300 px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <span className="text-sm font-black tracking-tighter text-zinc-900">
                    ROTA INICIAL
                </span>

                <p className="text-[11px] md:text-xs text-zinc-400 text-center md:text-right leading-relaxed">
                    © 2026 Rota Inicial. Todos os direitos reservados.
                    <span className="hidden md:inline"> | </span>
                    <br className="md:hidden" />
                    Projeto desenvolvido para a Disciplina Certificadora de Competência Comum — ADS UTFPR-CP (2026.1).
                </p>

            </div>
        </footer>
    );
}