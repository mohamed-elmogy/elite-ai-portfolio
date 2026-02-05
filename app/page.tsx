"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Github, Linkedin, Mail, Moon, Sun, X, Download } from "lucide-react";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatLoading, setChatLoading] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="relative min-h-screen overflow-x-hidden bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500">

        {/* ELITE MESH + NOISE BACKGROUND */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full" />
          <div className="absolute bottom-[0%] right-[5%] w-[600px] h-[600px] bg-purple-500/20 blur-[180px] rounded-full" />
          <div className="absolute top-[40%] right-[40%] w-[500px] h-[500px] bg-cyan-400/20 blur-[160px] rounded-full" />
        </div>

        {/* NAVBAR */}
        <nav className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 dark:bg-black/50 border-b border-white/20 dark:border-white/10">
          <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold tracking-tight">Mohamed Elmogy</h1>

            <div className="flex items-center gap-6 text-sm">
              <a href="#about" className="hover:opacity-70">About</a>
              <a href="#expertise" className="hover:opacity-70">Expertise</a>
              <a href="#case" className="hover:opacity-70">Case Studies</a>
              <a href="#contact" className="hover:opacity-70">Contact</a>

              <Button
                variant="outline"
                size="icon"
                className="rounded-xl backdrop-blur-lg"
                onClick={() => setDark(!dark)}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="relative px-8 pt-36 pb-32 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.3em] text-xs opacity-60 mb-6">
              MACHINE LEARNING ENGINEER • LLM • NLP • COMPUTER VISION
            </p>

            <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-tight">
              Production-Ready
              <br />
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                AI Systems
              </span>
            </h2>

            <p className="opacity-70 mt-10 max-w-2xl text-xl leading-relaxed">
              Building real-world AI systems across LLM engineering, Arabic NLP, and Computer Vision —
              focused on production deployment and measurable performance.
            </p>

            <div className="flex flex-wrap gap-5 mt-14">
              <a href="mailto:mohamedmahmoud.br@gmail.com">
                <Button className="rounded-2xl px-12 py-7 text-lg shadow-xl">
                  <Mail className="mr-3 h-5 w-5" /> Work With Me
                </Button>
              </a>
              <a href="/resume.pdf" download>
                <Button variant="outline" className="rounded-2xl px-12 py-7 text-lg backdrop-blur-xl">
                  <Download className="mr-3 h-5 w-5" /> Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-8 py-28 max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-2xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-3xl p-14 shadow-2xl">
            <h3 className="text-3xl font-semibold mb-8 tracking-tight">About Me</h3>

            <p className="opacity-80 leading-relaxed text-xl">
              Applied AI Engineer focused on transforming ML research into production software.
              Strong experience in transformer models, cross-lingual LLMs, and deep learning based vision systems.
            </p>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="px-8 py-28 max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-16 tracking-tight text-center">
            Core Expertise
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "LLM Engineering",
                text: "Transformer fine-tuning, evaluation pipelines, and production deployment."
              },
              {
                title: "Arabic & Cross-Lingual NLP",
                text: "Building high-quality Arabic and multilingual AI applications."
              },
              {
                title: "Computer Vision",
                text: "Deep learning object detection and medical imaging AI solutions."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="backdrop-blur-2xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-3xl p-10 shadow-2xl"
              >
                <h4 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h4>

                <p className="opacity-70 mt-4 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case" className="px-8 py-28 max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-16 tracking-tight text-center">
            Case Studies
          </h3>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Arabic Text Summarization",
                text: "Fine-tuned transformer summarization models for high-quality Arabic NLP applications."
              },
              {
                title: "Cross-Lingual Machine Translation",
                text: "Built production translation pipelines using transformer-based LLM architectures."
              },
              {
                title: "Medical Computer Vision",
                text: "Developed object detection models for medical imaging classification tasks."
              },
              {
                title: "Conversational AI Systems",
                text: "Designed NLP-driven conversational agents for real-world user interaction scenarios."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="backdrop-blur-2xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-3xl p-12 shadow-2xl"
              >
                <h4 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h4>

                <p className="opacity-70 mt-5 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-8 py-28 max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-2xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-3xl p-14 shadow-2xl">
            <h3 className="text-3xl font-semibold mb-10 tracking-tight">Let’s Work Together</h3>

            <div className="space-y-2">
              <a href="mailto:mohamedmahmoud.br@gmail.com" className="block hover:underline">
                Email: mohamedmahmoud.br@gmail.com
              </a>

              <a href="https://github.com/mohamed-elmogy" target="_blank" className="block hover:underline">
                GitHub: github.com/mohamed-elmogy
              </a>

              <a href="https://linkedin.com/in/mohamed-elmogy" target="_blank" className="block hover:underline">
                LinkedIn: linkedin.com/in/mohamed-elmogy
              </a>
            </div>
          </div>
        </section>

        {/* FLOATING CHAT */}
        <Button
          size="lg"
          className="rounded-full w-16 h-16 shadow-2xl backdrop-blur-xl"
          onClick={() => {
            setChatOpen(true);
            setChatLoading(true);
        
            setTimeout(() => {
              setChatLoading(false);
            }, 3000);
          }}
        >
          <MessageCircle />
        </Button>
        </div>

        {/* CHAT MODAL */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end md:items-center justify-center"
            >
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                className="backdrop-blur-2xl bg-white/80 dark:bg-black/80 border border-white/30 dark:border-white/10 w-full md:w-[900px] h-[80vh] md:h-[720px] rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="flex justify-between items-center p-5 border-b border-white/20 dark:border-white/10">
                  <h4 className="font-semibold tracking-tight">Career Chatbot</h4>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setChatOpen(false)}
                  >
                    <X />
                  </Button>
                </div>

                {chatLoading ? (
                  <div className="flex flex-col items-center justify-center h-full text-center px-6">
                
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-6"></div>
                
                    <h3 className="text-xl font-semibold mb-3">
                      AI Assistant is starting...
                    </h3>
                
                    <p className="opacity-70 text-sm">
                      Usually takes 20–30 seconds on first load.
                    </p>
                
                  </div>
                ) : (
                  <iframe
                    src="https://career-conservation.onrender.com"
                    className="w-full h-full border-0"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FOOTER */}
        <footer className="border-t border-white/20 dark:border-white/10 text-center py-10 text-sm opacity-60">
          © {new Date().getFullYear()} Mohamed Elmogy — Machine Learning Engineer
        </footer>
      </div>
    </div>
  );
}
