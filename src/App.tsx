
import type { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";

function Page({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />

      <Routes>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/about" element={<Page><About /></Page>} />
        <Route path="/projects" element={<Page><Projects /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
      </Routes>

      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
