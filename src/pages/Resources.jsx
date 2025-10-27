import React from "react";

export default function Resources() {
  return (
    <section className="min-h-screen flex items-start justify-center px-6 py-12">
      <div className="max-w-4xl w-full card-bg rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-bold rainbow-text">Visiting Card & Business Profile</h2>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Visiting Card (PDF)</h3>
            <p className="text-gray-300">Download the visiting card (print-ready).</p>
            <a
              href="/visiting-card.pdf"
              download
              className="inline-block px-5 py-3 bg-orange-400 text-black rounded-md font-semibold"
            >
              Download PDF
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Business Profile (Video)</h3>
            <p className="text-gray-300">Stream the company profile video.</p>
            <video controls className="w-full rounded-md bg-black border border-white/5">
              <source src="/business-profile.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
