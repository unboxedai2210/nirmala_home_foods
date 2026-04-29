import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import { NavBar } from "./components/site/NavBar";
import { MinOrderBanner } from "./components/site/MinOrderBanner";
import { Hero } from "./components/site/Hero";
import { OurStory } from "./components/site/OurStory";
import { NonVegPickles } from "./components/site/NonVegPickles";
import { VegPickles } from "./components/site/VegPickles";
import { Snacks } from "./components/site/Snacks";
import { HowToOrder } from "./components/site/HowToOrder";
import { ContactForm } from "./components/site/ContactForm";
import { Footer } from "./components/site/Footer";
import { FloatingWhatsApp } from "./components/site/FloatingWhatsApp";

const Landing = () => (
  <div className="relative min-h-screen bg-nirmala-bg text-nirmala-text overflow-x-hidden">
    <NavBar />
    <MinOrderBanner />
    <main>
      <Hero />
      <OurStory />
      <NonVegPickles />
      <div className="section-divider" />
      <VegPickles />
      <div className="section-divider" />
      <Snacks />
      <div className="section-divider" />
      <HowToOrder />
      <div className="section-divider" />
      <ContactForm />
    </main>
    <Footer />
    <FloatingWhatsApp />
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#2C1507",
          color: "#F2E4C4",
          border: "1px solid #3A1E0A",
        },
      }}
    />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
