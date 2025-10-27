import React from "react";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-5xl w-full text-center">
        <div className="card-bg rounded-2xl p-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="rainbow-text">FameJet Star</span>{" "}
            <span className="text-white">Entertainment</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-8">
            We create unforgettable storytelling across film, music and digital platforms. Based in
            Delhi — global ambitions, local roots.
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <a
              href="/resources"
              className="px-6 py-3 rounded-md font-semibold border border-orange-400 hover:bg-orange-400/10 transition"
            >
              Downloads & Profile
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-md bg-orange-500 text-black font-semibold hover:scale-[1.02] transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-[360px] h-[200px] card-bg rounded-xl flex items-center justify-center text-gray-400">
            <span>Featured: show reel / poster here</span>
          </div>
        </div>
      </div>
    </section>
  );
}
