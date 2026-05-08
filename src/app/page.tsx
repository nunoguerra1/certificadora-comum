import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Proposito } from "@/components/Proposito";
import { Aulas } from "@/components/Aulas";
import { Objetivos } from "@/components/Objetivos";
import { Time } from "@/components/Time";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Proposito />
      <Aulas />
      <Objetivos />
      <Time />
      <Footer />
    </main>
  );
}