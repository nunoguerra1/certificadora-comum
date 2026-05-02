import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Proposito } from "@/components/Proposito";
import { Aulas } from "@/components/Aulas";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Proposito />
      <Aulas />
    </main>
  );
}