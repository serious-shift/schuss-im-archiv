import Link from "next/link";

export default function Home() {
  return (
    <main 
    className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center text-white"
    style={{ backgroundImage: "url('/images/Szene-0_polizeistation-akte-heller.png')" }}
    >
      <div className="text-center bg-black p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Schuss im Archiv
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Ein interaktiver Kriminalfall
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/chapter/einfuehrung"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
>
          Fall beginnen
        </Link>
        <Link href="/chapter/1"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-300 hover:scale-105"
>
          dev mode
        </Link>
        </div>
      </div>
    </main>
  );
}