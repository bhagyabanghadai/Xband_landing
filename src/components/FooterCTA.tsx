"use client";

import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <footer className="bg-slate-900 text-white pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Testimonial Quote */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-medium leading-tight mb-8 text-slate-300"
          >
            &quot;I just want someone <span className="text-white">trustworthy</span> to handle this while I focus on building.&quot;
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-violet-400 mx-auto mb-4" />
            <div className="font-bold text-lg">Startup Sam</div>
            <div className="text-slate-400 text-sm">Founder, SaaS Startup</div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-12 md:p-24 text-center backdrop-blur-md mb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to expand <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">globally?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Join the centralized platform that connects businesses with verified incorporation experts worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors w-full sm:w-auto">
              Find Providers
            </button>
            <button className="px-8 py-4 bg-transparent text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
              Register as Partner
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-violet-400 flex items-center justify-center">
                <span className="text-white font-bold text-xs">X</span>
              </div>
              <span className="font-display font-bold text-lg tracking-tight">XBandGlobal</span>
            </div>
            <p className="text-slate-500 text-sm">
              Making international business incorporation as simple and trustworthy as booking a flight.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Search Providers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jurisdictions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <div>© {new Date().getFullYear()} XBandGlobal. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
