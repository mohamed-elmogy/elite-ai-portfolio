"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Moon, Sun, X, Download } from "lucide-react";

export default function Portfolio() {

  const [dark, setDark] = useState(true);
  const [chatOpen, setChatOpen] = useState(false);

  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi — I’m Mohamed’s AI assistant. How can I help?" }
  ]);

  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  /* Wake Render Server */
  useEffect(() => {
    const wake = () => fetch("https://career-conservation.onrender.com").catch(()=>{});
    wake();
    const interval = setInterval(wake, 300000);
    return () => clearInterval(interval);
  }, []);

  /* Send Message */
  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("https://career-conservation.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: messages
        })
      });

      const data = await res.json();

      setMessages(prev => [
        ...prev,
        { role: "assistant", content: data.reply }
      ]);

    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Server is waking up, try again." }
      ]);
    }

    setSending(false);
  };

  return (

    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
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
        <section className="relative px-8 pt-36 pb-32 max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT TEXT */}
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

              <p className="opacity-70 mt-10 max-w-xl text-xl leading-relaxed">
                Building real-world AI systems across LLM engineering, Arabic NLP, and Computer Vision —
                focused on production deployment and measurable performance.
              </p>

              <div className="flex flex-wrap gap-5 mt-14">
                <a href="mailto:mohamedmahmoud.br@gmail.com">
                  <Button className="rounded-2xl px-10 py-6 text-lg shadow-xl">
                    <Mail className="mr-3 h-5 w-5" /> Work With Me
                  </Button>
                </a>

                <a href="/resume.pdf" download>
                  <Button variant="outline" className="rounded-2xl px-10 py-6 text-lg backdrop-blur-xl">
                    <Download className="mr-3 h-5 w-5" /> Download Resume
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="flex justify-center perspective-[1200px]"
            >

              <motion.div
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="relative group"
              >

                {/* AI GLOW BACKGROUND */}
                <div className="
                  absolute -inset-10 
                  bg-gradient-to-r 
                  from-blue-500/20 
                  via-purple-500/20 
                  to-cyan-400/20
                  blur-3xl 
                  opacity-60 
                  group-hover:opacity-80
                  transition
                  rounded-[40px]
                "></div>

                {/* DEPTH SHADOW */}
                <div className="
                  absolute inset-0 
                  translate-y-8 
                  scale-95 
                  blur-2xl 
                  opacity-40 
                  bg-black
                  rounded-[40px]
                "></div>

                {/* GLASS CARD */}
                <div className="
                  relative
                  rounded-[36px]
                  overflow-hidden
                  border border-white/20
                  dark:border-white/10
                  backdrop-blur-2xl
                  bg-white/5
                  shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                ">

                  {/* LIGHT EDGE REFLECTION */}
                  <div className="
                    pointer-events-none
                    absolute inset-0
                    bg-gradient-to-br
                    from-white/20 via-transparent to-transparent
                    opacity-40
                  "></div>

                  <img
                    src={dark ? "/mohamed4.png" : "/mohamed5.png"}
                    alt="Mohamed Elmogy"
                    className="
                      w-[420px] md:w-[500px]
                      object-cover
                      relative z-10
                    "
                  />

                </div>

              </motion.div>

            </motion.div>


          </div>

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
        {/* FLOATING CHAT BUTTON */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            size="lg"
            className="rounded-full w-16 h-16 shadow-2xl"
            onClick={() => setChatOpen(true)}
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
              className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center z-50"
            >

              {/* MODAL CARD */}
              <motion.div
                initial={{ scale: .9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: .9, opacity: 0 }}
                className="
                  w-[95%] md:w-[900px]
                  h-[85vh]
                  rounded-3xl
                  bg-black/60
                  border border-white/10
                  backdrop-blur-2xl
                  shadow-2xl
                  flex flex-col
                  overflow-hidden
                "
              >

                {/* HEADER */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">

                  <h3 className="font-semibold text-lg bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                    AI Career Assistant
                  </h3>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setChatOpen(false)}
                  >
                    <X />
                  </Button>

                </div>

                {/* MESSAGES */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">

                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`
                          max-w-[70%] px-5 py-3 rounded-2xl text-sm
                          ${m.role === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-white/10 border border-white/10 backdrop-blur-xl"}
                        `}
                      >
                        {m.content}
                      </div>
                    </div>
                  ))}

                  {sending && (
                    <div className="text-white/60 text-sm animate-pulse">
                      AI is typing...
                    </div>
                  )}

                </div>

                {/* INPUT */}
                <div className="border-t border-white/10 p-4 flex gap-3">

                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask me anything..."
                    className="
                      flex-1
                      bg-white/5
                      border border-white/10
                      rounded-xl
                      px-4 py-3
                      outline-none
                    "
                  />

                  <Button onClick={sendMessage} disabled={sending}>
                    Send
                  </Button>

                </div>

              </motion.div>
            </motion.div>

          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
