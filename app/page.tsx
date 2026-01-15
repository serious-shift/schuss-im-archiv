import StartButton from "@/src/components/ui/StartButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col font-sans text-white overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-105"
          style={{ backgroundImage: "url('/images/Szene-0_polizeistation-akte-heller.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center p-6">
        
        <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-8 animate-fade-in-up">
            
            <div className="relative w-full h-40 md:h-64 drop-shadow-2xl">
              <Image 
                src="/images/schuss-im-archiv-logo-f.png" 
                alt="Schuss im Archiv Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="space-y-6">
              <div className="h-px w-24 bg-red-600 mx-auto shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
              <p className="text-xl md:text-2xl text-gray-200 tracking-[0.2em] font-light uppercase text-shadow-sm">
                Ein interaktiver Kriminalfall
              </p>
            </div>

            <div className="pt-8">
              <StartButton />
            </div>

        </div>
      </div>

      <footer className="relative z-10 w-full py-6 text-center border-t border-white/10 bg-black/40 backdrop-blur-md">
        <p className="text-gray-400 text-sm tracking-wide">
          Ein Projekt von <span className="text-white font-medium">Lotta Klinke</span>, <span className="text-white font-medium">Simeon Lenz</span>, <span className="text-white font-medium">Leonie Mäder</span> und <span className="text-white font-medium">Marius Schmidt</span>
        </p>
        <p className="text-gray-600 text-xs mt-1">© {new Date().getFullYear()} Digital Media - Schuss im Archiv</p>
      </footer>

    </main>
  );
}