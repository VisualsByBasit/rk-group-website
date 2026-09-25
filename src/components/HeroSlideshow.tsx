"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    name: "RK Group",
    image: "/assets/hero/islamabad.webp",
    alt: "Islamabad skyline with Faisal Mosque and the Margalla Hills",
    eyebrow: "Pakistan, built into our story",
    title: "Everyday essentials.",
    emphasis: "Enduring enterprise.",
    description: "RK Group brings generations of enterprise to the food, manufacturing, energy and infrastructure businesses that move life forward.",
    theme: "group",
  },
  {
    name: "ACP",
    image: "/assets/brand-lineups/acp-no-tub.webp",
    alt: "ACP Banaspati tins, pouches and cartons",
    eyebrow: "ACP Banaspati",
    title: "A trusted name.",
    emphasis: "Made for every kitchen.",
    description: "Dependable banaspati ghee presented across practical retail and family formats for everyday cooking.",
    theme: "acp",
  },
  {
    name: "Islamabad Macaroni",
    image: "/assets/brand-lineups/islamabad-macaroni.webp",
    alt: "Islamabad Macaroni jars and packets in six pasta shapes",
    eyebrow: "Islamabad Macaroni",
    title: "Different shapes.",
    emphasis: "The same great care.",
    description: "A colourful pasta family made for generous meals, everyday recipes and the tables that bring people together.",
    theme: "macaroni",
  },
  {
    name: "Dilpasand",
    image: "/assets/brand-lineups/dilpasand-no-tub.webp",
    alt: "Dilpasand Banaspati tins, pouches and cartons",
    eyebrow: "Dilpasand Banaspati",
    title: "Full flavour.",
    emphasis: "Familiar results.",
    description: "A kitchen staple created for the recipes, celebrations and everyday meals families return to.",
    theme: "dilpasand",
  },
  {
    name: "Dewan",
    image: "/assets/brand-lineups/deewan-no-tub.webp",
    alt: "Dewan Banaspati Ghee tins, pouches and cartons",
    eyebrow: "Dewan Banaspati Ghee",
    title: "A pantry essential.",
    emphasis: "Ready for every recipe.",
    description: "A distinctive banaspati range built around dependable performance in everyday family cooking.",
    theme: "dewan",
  },
  {
    name: "Kashmir Tea",
    image: "/assets/brand-lineups/kashmir-tea.webp",
    alt: "Kashmir Tea cartons, pouches and tin",
    eyebrow: "Kashmir Tea",
    title: "A richer cup.",
    emphasis: "A warmer conversation.",
    description: "A carefully presented tea blend for daily rituals, shared moments and conversations that deserve time.",
    theme: "tea",
  },
  {
    name: "Islamabad Nimco",
    image: "/assets/brand-lineups/islamabad-nimco.webp",
    alt: "Islamabad Nimco Special, Classic and Chatpata Mix pouches",
    eyebrow: "Islamabad Nimco",
    title: "Tradition in every bite.",
    emphasis: "Crunch for every gathering.",
    description: "Classic, Special and Chatpata mixes bring familiar flavour to tea time, family moments and everyday snacking.",
    theme: "nimco",
  },
  {
    name: "Gulberg",
    image: "/assets/brand-lineups/gulberg.webp",
    alt: "Gulberg Banaspati Ghee pouches and trade cartons",
    eyebrow: "Gulberg Banaspati Ghee",
    title: "A familiar essential.",
    emphasis: "Made for family cooking.",
    description: "Gulberg brings its distinctive yellow and green identity to practical banaspati pouches and trade cartons.",
    theme: "gulberg",
  },
] as const;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[active];

  return (
    <section className={`hero hero--${slide.theme}`} id="top" aria-roledescription="carousel" aria-label="RK Group and its brands">
      <div className="hero-slides">
        {slides.map((item, index) => (
          <div className={`hero-slide${index === active ? " is-active" : ""}`} aria-hidden={index !== active} key={item.name}>
            <Image className="hero-image" src={item.image} alt={index === active ? item.alt : ""} fill priority={index === 0} sizes="100vw" />
          </div>
        ))}
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="shell hero-content" aria-live={paused ? "polite" : "off"}>
        <p className="eyebrow light"><span /> {slide.eyebrow}</p>
        <h1 key={`${slide.name}-title`}>{slide.title}<br /><em>{slide.emphasis}</em></h1>
        <p className="hero-lede" key={`${slide.name}-description`}>{slide.description}</p>
        <div className="hero-actions">
          <a className="button primary" href="#brands">Explore our brands <span>↓</span></a>
          <a className="quiet-link" href={active === 0 ? "#story" : "#brands"}>{active === 0 ? "Discover our story" : `View ${slide.name}`}</a>
        </div>
      </div>
      <div className="hero-controls" aria-label="Choose a hero slide">
        <button type="button" className="hero-step" onClick={() => setActive(current => (current - 1 + slides.length) % slides.length)} aria-label="Previous slide">←</button>
        <div className="hero-dots">
          {slides.map((item, index) => (
            <button type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Show ${item.name} slide`} aria-pressed={index === active} key={item.name}><span /></button>
          ))}
        </div>
        <button type="button" className="hero-step" onClick={() => setActive(current => (current + 1) % slides.length)} aria-label="Next slide">→</button>
        <button type="button" className="hero-pause" onClick={() => setPaused(value => !value)} aria-label={paused ? "Play slideshow" : "Pause slideshow"}>{paused ? "Play" : "Pause"}</button>
      </div>
      <a className="scroll-cue" href="#story" aria-label="Scroll to our story"><span>Scroll</span><b>↓</b></a>
    </section>
  );
}
