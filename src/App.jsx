import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import RAGArchitectureModal from "./components/RAGArchitectureModal";

function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [ragModalOpen, setRagModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] selection:bg-violet-500 selection:text-white">
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />
      <main className="flex-1">
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenRAGArchitecture={() => setRagModalOpen(true)}
        />
        <About onOpenRAGArchitecture={() => setRagModalOpen(true)} />
        <Projects onOpenRAGArchitecture={() => setRagModalOpen(true)} />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
      <RAGArchitectureModal
        isOpen={ragModalOpen}
        onClose={() => setRagModalOpen(false)}
      />
    </div>
  );
}

export default App;
