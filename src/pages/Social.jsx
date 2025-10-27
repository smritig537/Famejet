import React from "react";

const SocialLink = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="block p-4 rounded-md card-bg hover:bg-white/5 transition"
  >
    {label}
  </a>
);

export default function Social() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full space-y-4">
        <h2 className="text-4xl font-bold rainbow-text">Follow Us</h2>
        <p className="text-gray-300">Stay connected across platforms.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <SocialLink href="https://facebook.com" label="Facebook" />
          <SocialLink href="https://instagram.com" label="Instagram" />
          <SocialLink href="https://twitter.com" label="Twitter (X)" />
          <SocialLink href="https://wa.me/" label="WhatsApp Business" />
          <SocialLink href="https://linkedin.com" label="LinkedIn" />
          <SocialLink href="https://youtube.com" label="YouTube" />
        </div>
      </div>
    </section>
  );
}
