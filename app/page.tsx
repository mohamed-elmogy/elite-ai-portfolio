"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, MessageCircle, Moon, Send, Sun, X } from "lucide-react";

const github = "https://github.com/mohamed-elmogy";
const email = "mailto:mohamedmahmoud.br@gmail.com";
const projects = [
  { number: "01", title: "Deep research, coordinated by agents.", category: "AGENTIC AI", text: "An asynchronous research pipeline built with the OpenAI Agents SDK, agent orchestration, and structured task execution.", tags: ["Python", "OpenAI Agents SDK", "Multi-agent orchestration"] },
  { number: "02", title: "Arabic summarization with AraBART.", category: "ARABIC NLP", text: "Fine-tuned AraBART for Arabic text summarization, achieving a ROUGE-L score of 60.4 in the project's evaluation.", tags: ["Hugging Face", "Fine-tuning", "ROUGE-L 60.4"] },
  { number: "03", title: "A connected sales agent workflow.", category: "AI AUTOMATION", text: "A cold-email workflow that combines tool calling, agent handoffs, and automated task coordination.", tags: ["Tool calling", "Agent handoffs", "Workflow automation"] },
  { number: "04", title: "A conversational portfolio assistant.", category: "LLM APPLICATION", text: "An LLM-powered assistant built and deployed on Hugging Face Spaces to introduce my background and work.", tags: ["LLMs", "Hugging Face Spaces", "Conversational AI"] },
];

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [sending, setSending] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi, I'm Mohamed's portfolio assistant. Ask me about his projects or experience." }]);
  const dialog = useRef<HTMLDialogElement>(null);
  const chatButton = useRef<HTMLButtonElement>(null);
  const messageEnd = useRef<HTMLDivElement>(null);
  const inFlight = useRef(false);
  const controller = useRef<AbortController | null>(null);
  useEffect(() => () => controller.current?.abort(), []);
  useEffect(() => { messageEnd.current?.scrollIntoView({ block: "nearest" }); }, [messages, sending]);
  async function sendMessage(event: React.FormEvent) {
    event.preventDefault();
    const message = input.trim();
    if (!message || inFlight.current) return;
    inFlight.current = true;
    setSending(true); setError(""); setInput("");
    const history = [...messages];
    setMessages(previous => [...previous, { role: "user", content: message }]);
    controller.current = new AbortController();
    const timeout = setTimeout(() => controller.current?.abort(), 45000);
    try {
      const response = await fetch("https://career-conservation.onrender.com/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message, history }), signal: controller.current.signal });
      if (!response.ok) throw new Error("Unavailable");
      const data = await response.json();
      if (typeof data.reply !== "string" || !data.reply.trim()) throw new Error("Empty reply");
      setMessages(previous => [...previous, { role: "assistant", content: data.reply }]);
    } catch {
      setError("The assistant is unavailable right now. Please try again or contact Mohamed by email.");
      setInput(message);
      setMessages(previous => previous.slice(0, -1));
    } finally { clearTimeout(timeout); inFlight.current = false; setSending(false); }
  }
  return <div className={`portfolio ${dark ? "theme-dark" : "theme-light"}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><nav className="container navigation" aria-label="Main navigation">
      <a className="wordmark" href="#main">ME<span>.</span></a>
      <div className="nav-links"><a href="#case">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      <button className="icon-button" aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} onClick={() => setDark(!dark)}>{dark ? <Sun size={19}/> : <Moon size={19}/>}</button>
    </nav></header>
    <main id="main">
      <section className="container hero">
        <div className="hero-copy"><div className="availability"><span/> OPEN TO AI ENGINEERING OPPORTUNITIES</div>
          <p className="eyebrow intro-name">MOHAMED ELMOGY / AI ENGINEER</p>
          <h1>Language.<br/>Agents.<br/><span>Applied AI.</span></h1>
          <p className="hero-description">I build with large language models, fine-tune for Arabic, and connect AI agents into useful workflows.</p>
          <div className="actions"><a className="button primary" href="#case">Explore my work <ArrowUpRight size={18}/></a><a className="button secondary" href="/resume.pdf" download="Mohamed_Elmogy_AI_Engineer_Resume.pdf"><Download size={17}/> Download CV</a></div>
          <p className="location"><MapPin size={15}/> Jubail, Saudi Arabia <span>·</span> Open to relocation</p>
        </div>
        <div className="portrait-area"><div className="portrait-frame"><Image src={dark ? "/mohamed4.png" : "/mohamed5.png"} alt="Mohamed Elmogy" width={600} height={700} priority className="portrait"/><div className="portrait-caption"><span>BUILDING WITH CURIOSITY.</span><span>01 / PROFILE</span></div></div><div className="portrait-note"><span className="note-symbol">↗</span><div>From model experiments<br/><strong>to working applications.</strong></div></div></div>
      </section>
      <div className="stack-strip"><div className="container"><span>MY TOOLKIT</span><p>Python</p><p>PyTorch</p><p>Hugging Face</p><p>OpenAI Agents SDK</p><p>FastAPI</p><p>Docker</p></div></div>
      <section className="container section" id="case"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Built to learn.<br/>Made to work.</h2></div><p>A selection of hands-on projects in language models, Arabic NLP, and agent workflows.</p></div>
        <div className="project-grid">{projects.map(project => <article className="project-card" key={project.number}><div className="project-top"><span>{project.category}</span><span>{project.number}</span></div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
        <a className="text-link" href={github} target="_blank" rel="noopener noreferrer">Explore my GitHub profile <ArrowUpRight size={18}/></a>
      </section>
      <section className="about-section" id="about"><div className="container section about-grid"><div><p className="eyebrow">02 / BACKGROUND</p><h2>A foundation in AI.<br/>A focus on language.</h2><p className="about-copy">I&apos;m an early-career AI Engineer and Cairo University graduate. My work combines research internship experience in Arabic NLP with independent projects in generative AI and agent orchestration.</p><div className="residency"><MapPin size={21}/><div><strong>Based in Saudi Arabia</strong><p>Transferable Iqama · Open to relocation across the Kingdom</p></div></div></div>
        <div className="timeline"><article><span className="eyebrow">JUL 2025 — JAN 2026</span><h3>ML &amp; AI Research Intern</h3><h4>Electronics Research Institute</h4><ul><li>Fine-tuned ALLAM and MAREFA using QLoRA for English-to-Arabic translation.</li><li>Built preprocessing and tokenization pipelines for reproducible experiments.</li><li>Optimized transformer inference workflows and evaluated translation quality.</li></ul></article><article><span className="eyebrow">2019 — 2023</span><h3>B.Sc. in Artificial Intelligence</h3><h4>Cairo University</h4><p>GPA: 3.12 / 4.00</p></article></div>
      </div></section>
      <section className="container section" id="expertise"><p className="eyebrow">03 / TECHNICAL FOCUS</p><h2>The tools behind the work.</h2><div className="expertise-grid"><article><span>01</span><h3>LLMs &amp; Arabic NLP</h3><p>Transformers, QLoRA, fine-tuning, RAG, prompt engineering, and vector databases.</p></article><article><span>02</span><h3>Agents &amp; orchestration</h3><p>OpenAI Agents SDK, LangGraph, CrewAI, AutoGen, tool calling, and agent handoffs.</p></article><article><span>03</span><h3>Applications &amp; deployment</h3><p>Python, FastAPI, REST APIs, Docker, Linux, Gradio, Hugging Face Spaces, and CI/CD fundamentals.</p></article></div></section>
      <section className="container contact-section" id="contact"><p className="eyebrow">04 / LET&apos;S CONNECT</p><h2>Have an AI role<br/>in mind<span>?</span></h2><p>I&apos;m looking for junior and associate AI engineering opportunities.<br/>Let&apos;s talk about what I could contribute to your team.</p><a className="button primary" href={email}>Get in touch <ArrowUpRight size={18}/></a><div className="contact-links"><a href={email}><Mail size={17}/> Email</a><a href={github} target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub</a><a href="https://linkedin.com/in/mohamed-elmogy" target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn</a></div></section>
    </main>
    <footer className="container footer"><span>© {new Date().getFullYear()} Mohamed Elmogy</span><span>AI Engineer · Saudi Arabia</span></footer>
    <button ref={chatButton} className="chat-launcher" onClick={() => dialog.current?.showModal()} aria-label="Open portfolio assistant"><MessageCircle size={21}/><span>Ask about my work</span></button>
    <dialog ref={dialog} className="chat-dialog" aria-labelledby="chat-title" onClose={() => chatButton.current?.focus()}><div className="chat-header"><div><h2 id="chat-title">Portfolio assistant</h2><p>Ask about Mohamed&apos;s experience</p></div><button className="icon-button" aria-label="Close assistant" onClick={() => dialog.current?.close()}><X size={20}/></button></div><div className="chat-messages" role="log" aria-live="polite">{messages.map((message,index) => <p className={`message ${message.role}`} key={index}>{message.content}</p>)}{sending && <p className="chat-status">Thinking… The first reply may take a moment.</p>}<div ref={messageEnd}/></div>{error && <p className="chat-error" role="alert">{error} <a href={email}>Email Mohamed</a></p>}<form onSubmit={sendMessage} className="chat-form"><label className="sr-only" htmlFor="chat-input">Your question</label><input id="chat-input" value={input} onChange={event => setInput(event.target.value)} placeholder="Ask about a project…" maxLength={2000} disabled={sending}/><button type="submit" className="icon-button" disabled={sending || !input.trim()} aria-label="Send message"><Send size={19}/></button></form><p className="chat-disclaimer">AI replies may be inaccurate. Messages are sent to the portfolio assistant service.</p></dialog>
  </div>;
}
