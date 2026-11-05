import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-6' data-aos='fade-up'">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900">
            Get In <span className="text-red-500 dark:text-red-400">Touch</span>
          </h2>
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-5 dark:bg-zinc-900/30 bg-white/50 p-8 sm:p-10 rounded-3xl border dark:border-zinc-800 border-gray-100 backdrop-blur-sm w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1"
              data-aos="fade-right"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
                required
                data-aos="fade-up"
                data-aos-delay="200"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-5 py-4 rounded-xl border outline-hidden text-base transition-all dark:border-zinc-800 border-gray-200 dark:bg-zinc-900/60 bg-white dark:text-white text-gray-800 focus:border-red-500 dark:focus:border-red-400"
                required
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </form>
          </div>
        </div>
    </section>
  );
}
export default Contact