"use client";

import { useEffect } from "react";

// Mouse only: touch and reduced motion keep the simple card states in globals.css.
const TILT_DEVICES = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

// Passes the pointer position to the hovered company card as CSS variables, once per frame.
// All of the motion lives in globals.css; the tilt strength is --tilt-max on .company-grid.
export default function CompanyTilt() {
  useEffect(() => {
    const grid = document.querySelector<HTMLElement>(".company-grid");
    if (!grid) return;
    const media = window.matchMedia(TILT_DEVICES);
    let card: HTMLElement | null = null;
    let rect: DOMRect | null = null;
    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      if (!card) return;
      rect ??= card.getBoundingClientRect();
      const left = Math.min(Math.max(x - rect.left, 0), rect.width);
      const top = Math.min(Math.max(y - rect.top, 0), rect.height);
      card.style.setProperty("--tx", (left / rect.width * 2 - 1).toFixed(3));
      card.style.setProperty("--ty", (top / rect.height * 2 - 1).toFixed(3));
      card.style.setProperty("--mx", `${left.toFixed(1)}px`);
      card.style.setProperty("--my", `${top.toFixed(1)}px`);
    };

    const release = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      card?.classList.remove("is-tilting");
      card = null;
      rect = null;
    };

    const onMove = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") return;
      const target = (event.target as Element).closest<HTMLElement>(".company-card");
      if (target !== card) {
        release();
        card = target;
        // Measured before the tilt class goes on, so the tilt cannot feed back into the reading.
        rect = card?.getBoundingClientRect() ?? null;
        card?.classList.add("is-tilting");
      }
      x = event.clientX;
      y = event.clientY;
      if (card && !frame) frame = requestAnimationFrame(paint);
    };

    const onScroll = () => { rect = null; };

    grid.addEventListener("pointermove", onMove);
    grid.addEventListener("pointerleave", release);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      release();
      grid.removeEventListener("pointermove", onMove);
      grid.removeEventListener("pointerleave", release);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
