import React from "react";
import { Mail, Phone, User, Inbox } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1f] border-t border-[#010101]"
    >
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <h2 className="mb-8 text-4xl font-bold text-center text-white">
          Let's Connect
        </h2>

        <p className="text-center text-[#94a1b2] text-lg mb-12">
          Feel free to reach out — I'm happy to collaborate or assist with your project.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-10 text-[#94a1b2] text-lg mb-14">
          <div className="flex items-center gap-3">
            <Mail size={20} className="text-white" />
            piolofrances.enriquez@gmail.com
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">

          {/* Name */}
          <div className="text-left">
            <label className="block text-[#94a1b2] mb-2">Name</label>
            <div className="flex items-center border border-[#8f63f4] rounded-lg px-4 py-3 bg-transparent">
              <User size={18} className="text-[#a263f4] mr-3" />
              <input
                type="text"
                placeholder="john doe"
                className="w-full text-white bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="text-left">
            <label className="block text-[#94a1b2] mb-2">Email</label>
            <div className="flex items-center border border-[#a263f4] rounded-lg px-4 py-3 bg-transparent">
              <Mail size={18} className="text-[#a263f4] mr-3" />
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full text-white bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div className="text-left">
            <label className="block text-[#94a1b2] mb-2">Message</label>
            <div className="flex items-start border border-[#a263f4] rounded-lg px-4 py-3 bg-transparent">
              <Inbox size={18} className="text-[#a263f4] mr-3 mt-1" />
              <textarea
                placeholder="Your message here..."
                rows="4"
                className="w-full text-white bg-transparent outline-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button className="px-10 py-3 bg-black text-[#a263f4] border border-[#a263f4] rounded-lg hover:bg-[#a263f4]/10 transition-colors">
              Submit
            </button>
          </div>

        </form>

        {/* Footer */}
        <div className="pt-12 text-center border-t border-[#010101] mt-14">
          <p className="text-[#72757e]">
            © 2025 Piolo Frances Enriquez. Crafted with React & Tailwind CSS.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
