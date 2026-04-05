export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
        Contact Me
      </h2>

      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-gray-300 
          bg-white text-black
          dark:bg-zinc-900 dark:text-white 
          dark:border-zinc-700
          placeholder-gray-500 dark:placeholder-gray-400"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border border-gray-300 
          bg-white text-black
          dark:bg-zinc-900 dark:text-white
          dark:border-zinc-700
          placeholder-gray-500 dark:placeholder-gray-400"
        />

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded-lg border border-gray-300 
          bg-white text-black
          dark:bg-zinc-900 dark:text-white
          dark:border-zinc-700
          placeholder-gray-500 dark:placeholder-gray-400"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-medium
          bg-black text-white
          hover:opacity-80 transition
          dark:bg-white dark:text-black"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
