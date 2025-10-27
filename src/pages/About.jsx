import React from "react";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl text-center card-bg rounded-2xl p-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="rainbow-text">About</span> Us
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          FameJet Star Entertainment is a full-service entertainment firm that develops film projects,
          digital content, and branded live experiences. Based in Delhi, India, we combine creative
          vision with production expertise.
        </p>

        <div className="space-y-2 text-gray-200">
          <div><strong>Email:</strong> <a href="mailto:famejetstar@gmail.com" className="text-orange-400">famejetstar@gmail.com</a></div>
          <div><strong>Address:</strong> Delhi, India, 110001</div>
          <div><strong>Mobile & WhatsApp:</strong> +91-XXXXXXXXXX (update)</div>
        </div>
      </div>
    </section>
  );
}
