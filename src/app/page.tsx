import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Proposito } from "@/components/Proposito";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Proposito />
    </main>
  );
}