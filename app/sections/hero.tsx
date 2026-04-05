export default function Hero() {
    return (
      <section id="hero" className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold">Madimetja Movundlela</h1>

        <p className="text-xl mt-4">Full Stack Software Engineer</p>

        <p className="mt-4 max-w-xl">
          I build modern web applications using Next.js, TypeScript and scalable
          backend technologies.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            View Projects
          </button>

          <button className="border px-6 py-3 rounded-lg">Contact Me</button>
        </div>
      </section>
    );
}