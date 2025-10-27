import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-3xl card-bg rounded-2xl p-8">
        <h3 className="text-3xl font-bold mb-4 rainbow-text">Get in touch</h3>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 p-3 rounded-md bg-black/60 border border-white/5 placeholder-gray-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1 p-3 rounded-md bg-black/60 border border-white/5 placeholder-gray-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-1 p-3 rounded-md bg-black/60 border border-white/5 placeholder-gray-400 h-28"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="px-5 py-3 bg-orange-500 text-black rounded-md font-semibold"
            >
              Send message
            </button>
            <a href="mailto:famejetstar@gmail.com" className="px-5 py-3 border border-white/10 rounded-md text-gray-200">
              Email us
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
