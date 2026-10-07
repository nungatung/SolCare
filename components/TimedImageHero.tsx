"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, Bookmark } from "lucide-react";
import styles from "./TimedImageHero.module.css";

type Slide = {
  place: string;
  title: string;
  title2: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    place: "SolCare",
    title: "YOUR SOLAR",
    title2: "ON AUTOPILOT",
    description:
      "Protect and maximise your solar investment with SolCare. We keep your panels operating at optimal efficiency with smart AI powered monitoring, preventive maintenance and professional cleaning.",
    image: "/hero/hero-1.webp",
  },
  {
    place: "Live Inverter Sync",
    title: "REAL TIME",
    title2: "PERFORMANCE",
    description:
      "SolCare syncs directly with your inverter, no hardware required. It reads your production, irradiance and local conditions every day so you always know what your system is really doing.",
    image: "/hero/hero-2.webp",
  },
  {
    place: "Soiling Intelligence",
    title: "KNOW WHEN",
    title2: "TO CLEAN",
    description:
      "Sola separates genuine soiling from hot weather, shading and seasonal dips, then forecasts the optimal clean window so you act before your output takes a real hit.",
    image: "/hero/hero-3.webp",
  },
  {
    place: "Vetted Local Pros",
    title: "PROFESSIONAL",
    title2: "CLEANING",
    description:
      "When a clean is worth it, SolCare dispatches a vetted local cleaner to your door. One tap booking, no forms, no phone calls, no guesswork.",
    image: "/hero/hero-4.webp",
  },
  {
    place: "Verified Results",
    title: "PROVEN",
    title2: "YIELD",
    description:
      "Every clean is verified with thermal imaging checks and maintenance notes, so you can see exactly how much yield was recovered and what it is worth.",
    image: "/hero/hero-5.webp",
  },
  {
    place: "Climate Positive",
    title: "CARBON",
    title2: "OFFSET",
    description:
      "Every kilowatt recovered from soiling is logged as a real CO2 offset, putting a number on what clean panels actually contribute to a cleaner grid.",
    image: "/hero/hero-6(1).webp",
  },
];

const EASE = "sine.inOut";
const AUTO_MS = 5500;

export default function TimedImageHero() {
  const rootRef = useRef<HTMLElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const coverRef = useRef<HTMLDivElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const progressBgRef = useRef<HTMLDivElement | null>(null);
  const progressFgRef = useRef<HTMLDivElement | null>(null);
  const arrowLeftRef = useRef<HTMLButtonElement | null>(null);
  const arrowRightRef = useRef<HTMLButtonElement | null>(null);
  const slideNumbersRef = useRef<HTMLDivElement | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const slideItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const detailsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const navSibling = root.previousElementSibling as HTMLElement | null;

    const pullUpUnderNav = () => {
      const navHeight = navSibling?.getBoundingClientRect().height ?? 0;
      root.style.marginTop = navHeight > 0 ? `-${navHeight}px` : "0px";
    };

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tweens: (gsap.core.Tween | gsap.core.Timeline)[] = [];
    const track = <T extends gsap.core.Tween | gsap.core.Timeline>(t: T) => {
      tweens.push(t);
      return t;
    };

    let cancelled = false;
    let stepping = false;
    let autoId: number | null = null;
    let indTl: gsap.core.Timeline | null = null;
    let coverTimeout: ReturnType<typeof setTimeout> | null = null;

    const order = [0, 1, 2, 3, 4, 5];
    let detailsEven = true;

    const L = {
      scale: 1,
      cardWidth: 200,
      cardHeight: 300,
      gap: 40,
      numberSize: 50,
      offsetLeft: 0,
      offsetTop: 0,
      paginationTop: 0,
      progressBg: 500,
    };

    const card = (i: number) => cardRefs.current[i];
    const content = (i: number) => contentRefs.current[i];
    const slideNum = (i: number) => slideItemRefs.current[i];
    const sub = (panel: HTMLElement | null, role: string) =>
      panel
        ? (panel.querySelector(`[data-anim="${role}"]`) as HTMLElement | null)
        : null;

    const setPanelY = (
      panel: HTMLElement | null,
      y: { text: number; title1: number; title2: number; desc: number; cta: number },
    ) => {
      gsap.set(sub(panel, "text"), { y: y.text });
      gsap.set(sub(panel, "title1"), { y: y.title1 });
      gsap.set(sub(panel, "title2"), { y: y.title2 });
      gsap.set(sub(panel, "desc"), { y: y.desc });
      gsap.set(sub(panel, "cta"), { y: y.cta });
    };

    const setPanelText = (panel: HTMLElement | null, slide: number) => {
      const place = sub(panel, "text");
      const title1 = sub(panel, "title1");
      const title2 = sub(panel, "title2");
      const desc = sub(panel, "desc");
      if (place) place.textContent = slides[slide].place;
      if (title1) title1.textContent = slides[slide].title;
      if (title2) title2.textContent = slides[slide].title2;
      if (desc) desc.textContent = slides[slide].description;
    };

    const measure = () => {
      const w = root.clientWidth;
      const h = root.clientHeight;
      const scale = Math.min(1, Math.max(0.42, w / 1440));
      L.scale = scale;
      L.cardWidth = 200 * scale;
      L.cardHeight = 300 * scale;
      L.gap = 40 * scale;
      L.numberSize = 50 * scale;
      L.offsetLeft = Math.max(16, w - 830 * scale);
      L.offsetTop = h - 430 * scale;
      L.paginationTop = Math.min(L.offsetTop + L.cardHeight + 30, h - 56);
      L.progressBg = progressBgRef.current?.clientWidth ?? 500;
    };

    const sizeNumberStrip = () => {
      const size = L.numberSize;
      if (slideNumbersRef.current) {
        gsap.set(slideNumbersRef.current, { width: size, height: size });
      }
      slideItemRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, {
            width: size,
            height: size,
            fontSize: Math.round(size * 0.64),
          });
        }
      });
    };

    const xFor = (restIndex: number) =>
      L.offsetLeft + restIndex * (L.cardWidth + L.gap);
    const progressWidth = (slide: number) =>
      L.progressBg * (1 / order.length) * (slide + 1);

    const buildIndicator = () => {
      if (!indicatorRef.current) return;
      indTl?.kill();
      indTl = track(
        gsap
          .timeline({ repeat: -1 })
          .fromTo(
            indicatorRef.current,
            { x: -root.clientWidth },
            { x: 0, duration: 2, ease: "power1.out" },
          )
          .to(
            indicatorRef.current,
            { x: root.clientWidth, duration: 0.8, ease: "power1.out" },
            ">+=0.3",
          ),
      );
    };

    const init = () => {
      pullUpUnderNav();
      measure();
      sizeNumberStrip();
      const width = root.clientWidth;
      const height = root.clientHeight;
      const [active, ...rest] = order;
      const detailsActive = detailsEven
        ? detailsRefs.current[0]
        : detailsRefs.current[1];
      const detailsInactive = detailsEven
        ? detailsRefs.current[1]
        : detailsRefs.current[0];

      gsap.set(paginationRef.current, {
        top: L.paginationTop,
        left: L.offsetLeft,
        y: 200,
        opacity: 0,
        zIndex: 60,
      });
      gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
      gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
      setPanelY(detailsInactive, { text: 100, title1: 100, title2: 100, desc: 50, cta: 60 });
      setPanelY(detailsActive, { text: 0, title1: 0, title2: 0, desc: 0, cta: 0 });
      setPanelText(detailsActive, active);
      gsap.set(progressFgRef.current, { width: progressWidth(active) });

      gsap.set(card(active), {
        x: 0,
        y: 0,
        width,
        height,
        borderRadius: 0,
        zIndex: 20,
        scale: 1,
      });
      gsap.set(content(active), { x: 0, y: 0, opacity: 0 });

      rest.forEach((i, index) => {
        const startX = L.offsetLeft + 400 * L.scale + index * (L.cardWidth + L.gap);
        gsap.set(card(i), {
          x: startX,
          y: L.offsetTop,
          width: L.cardWidth,
          height: L.cardHeight,
          zIndex: 30,
          borderRadius: 10,
          scale: 1,
        });
        gsap.set(content(i), {
          x: startX,
          y: L.offsetTop + L.cardHeight - 100,
          opacity: 1,
          zIndex: 40,
        });
        gsap.set(slideNum(i), { x: (index + 1) * L.numberSize });
      });
      gsap.set(slideNum(active), { x: 0 });
      gsap.set(indicatorRef.current, { x: -width });

      if (reduced) {
        gsap.set(coverRef.current, { x: width + 400 });
        gsap.set(paginationRef.current, { y: 0, opacity: 1 });
        gsap.set(detailsActive, { opacity: 1, x: 0 });
        gsap.set(indicatorRef.current, { x: 0 });
        return;
      }

      const startDelay = 0.6;
      track(
        gsap.to(coverRef.current, {
          x: width + 400,
          delay: 0.5,
          ease: EASE,
          onComplete: () => {
            coverTimeout = setTimeout(() => {
              if (!cancelled) startAuto();
            }, 500);
          },
        }),
      );
      rest.forEach((i, index) => {
        track(
          gsap.to(card(i), {
            x: xFor(index),
            zIndex: 30,
            delay: startDelay + 0.05 * index,
            ease: EASE,
          }),
        );
        track(
          gsap.to(content(i), {
            x: xFor(index),
            zIndex: 40,
            delay: startDelay + 0.05 * index,
            ease: EASE,
          }),
        );
      });
      track(
        gsap.to(paginationRef.current, {
          y: 0,
          opacity: 1,
          ease: EASE,
          delay: startDelay,
        }),
      );
      track(
        gsap.to(detailsActive, { opacity: 1, x: 0, ease: EASE, delay: startDelay }),
      );
    };

    const step = (dir: 1 | -1) =>
      new Promise<void>((resolve) => {
        if (cancelled) {
          resolve();
          return;
        }
        stepping = true;
        if (dir === 1) order.push(order.shift()!);
        else order.unshift(order.pop()!);
        detailsEven = !detailsEven;

        const width = root.clientWidth;
        const height = root.clientHeight;
        const growing = order[0];
        const rest = order.slice(1);
        const shrinking = dir === 1 ? rest[rest.length - 1] : rest[0];

        const detailsActive = detailsEven
          ? detailsRefs.current[0]
          : detailsRefs.current[1];
        const detailsInactive = detailsEven
          ? detailsRefs.current[1]
          : detailsRefs.current[0];
        setPanelText(detailsActive, growing);

        gsap.set(detailsActive, { zIndex: 22 });
        track(gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease: EASE }));
        track(gsap.to(sub(detailsActive, "text"), { y: 0, delay: 0.1, duration: 0.7, ease: EASE }));
        track(gsap.to(sub(detailsActive, "title1"), { y: 0, delay: 0.15, duration: 0.7, ease: EASE }));
        track(gsap.to(sub(detailsActive, "title2"), { y: 0, delay: 0.15, duration: 0.7, ease: EASE }));
        track(gsap.to(sub(detailsActive, "desc"), { y: 0, delay: 0.3, duration: 0.4, ease: EASE }));
        track(
          gsap.to(sub(detailsActive, "cta"), {
            y: 0,
            delay: 0.35,
            duration: 0.4,
            ease: EASE,
            onComplete: () => resolve(),
          }),
        );
        gsap.set(detailsInactive, { zIndex: 12 });

        gsap.set(card(growing), { zIndex: 20 });
        gsap.set(card(shrinking), { zIndex: 10 });
        track(gsap.to(card(shrinking), { scale: 1.5, ease: EASE }));
        track(gsap.to(progressFgRef.current, { width: progressWidth(growing), ease: EASE }));

        order.forEach((slideIdx, pos) => {
          track(gsap.to(slideNum(slideIdx), { x: pos * L.numberSize, ease: EASE }));
          if (pos === 0) {
            track(
              gsap.to(content(slideIdx), {
                y: L.offsetTop + L.cardHeight - 10,
                opacity: 0,
                duration: 0.3,
                ease: EASE,
              }),
            );
            return;
          }
          if (slideIdx === shrinking) return;
          gsap.set(card(slideIdx), { zIndex: 30 });
          track(
            gsap.to(card(slideIdx), {
              x: xFor(pos - 1),
              y: L.offsetTop,
              width: L.cardWidth,
              height: L.cardHeight,
              ease: EASE,
              delay: 0.1 * pos,
            }),
          );
          track(
            gsap.to(content(slideIdx), {
              x: xFor(pos - 1),
              y: L.offsetTop + L.cardHeight - 100,
              opacity: 1,
              zIndex: 40,
              ease: EASE,
              delay: 0.1 * pos,
            }),
          );
        });

        track(
          gsap.to(card(growing), {
            x: 0,
            y: 0,
            width,
            height,
            borderRadius: 0,
            ease: EASE,
            onComplete: () => {
              const shrinkPos = order.indexOf(shrinking);
              gsap.set(card(shrinking), {
                x: xFor(shrinkPos - 1),
                y: L.offsetTop,
                width: L.cardWidth,
                height: L.cardHeight,
                zIndex: 30,
                borderRadius: 10,
                scale: 1,
              });
              gsap.set(content(shrinking), {
                x: xFor(shrinkPos - 1),
                y: L.offsetTop + L.cardHeight - 100,
                opacity: 1,
                zIndex: 40,
              });
              gsap.set(detailsInactive, { opacity: 0 });
              setPanelY(detailsInactive, { text: 100, title1: 100, title2: 100, desc: 50, cta: 60 });
              stepping = false;
            },
          }),
        );
      });

    const relayout = () => {
      if (cancelled) return;
      pullUpUnderNav();
      measure();
      sizeNumberStrip();
      const width = root.clientWidth;
      const height = root.clientHeight;
      order.forEach((slideIdx, pos) => {
        if (pos === 0) {
          gsap.set(card(slideIdx), { x: 0, y: 0, width, height, borderRadius: 0 });
          gsap.set(content(slideIdx), { x: 0, y: 0, opacity: 0 });
        } else {
          gsap.set(card(slideIdx), {
            x: xFor(pos - 1),
            y: L.offsetTop,
            width: L.cardWidth,
            height: L.cardHeight,
            borderRadius: 10,
          });
          gsap.set(content(slideIdx), {
            x: xFor(pos - 1),
            y: L.offsetTop + L.cardHeight - 100,
            opacity: 1,
          });
        }
        gsap.set(slideNum(slideIdx), { x: pos * L.numberSize });
      });
      gsap.set(paginationRef.current, {
        top: L.paginationTop,
        left: L.offsetLeft,
      });
      gsap.set(progressFgRef.current, { width: progressWidth(order[0]) });
      if (!reduced) buildIndicator();
    };

    const startAuto = () => {
      if (cancelled || autoId !== null) return;
      buildIndicator();
      autoId = window.setInterval(() => {
        if (cancelled || stepping) return;
        indTl?.restart();
        void step(1);
      }, AUTO_MS);
    };

    const onNext = () => {
      if (stepping || cancelled) return;
      indTl?.restart();
      void step(1);
    };
    const onPrev = () => {
      if (stepping || cancelled) return;
      indTl?.restart();
      void step(-1);
    };

    arrowRightRef.current?.addEventListener("click", onNext);
    arrowLeftRef.current?.addEventListener("click", onPrev);

    const ro = new ResizeObserver(() => relayout());
    ro.observe(root);
    if (navSibling) ro.observe(navSibling);

    init();

    return () => {
      cancelled = true;
      if (autoId !== null) window.clearInterval(autoId);
      if (coverTimeout) clearTimeout(coverTimeout);
      indTl?.kill();
      ro.disconnect();
      arrowRightRef.current?.removeEventListener("click", onNext);
      arrowLeftRef.current?.removeEventListener("click", onPrev);
      root.style.marginTop = "";
      tweens.forEach((t) => t.kill());
      gsap.killTweensOf(
        [
          indicatorRef.current,
          coverRef.current,
          paginationRef.current,
          progressFgRef.current,
          ...cardRefs.current,
          ...contentRefs.current,
          ...slideItemRefs.current,
          ...detailsRefs.current,
        ].filter(Boolean) as gsap.TweenTarget[],
      );
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className={styles.root}
      aria-roledescription="carousel"
      aria-label="SolCare highlights"
    >
      <div ref={indicatorRef} className={styles.indicator} />

      {slides.map((s, i) => (
        <div
          key={s.image}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
          className={styles.card}
        >
          <Image
            src={s.image}
            alt={`${s.place} — ${s.title} ${s.title2}`}
            fill
            priority={i === 0}
            sizes="100vw"
            className={styles.cardImage}
          />
        </div>
      ))}

      {slides.map((s, i) => (
        <div
          key={`content-${i}`}
          ref={(el) => {
            contentRefs.current[i] = el;
          }}
          className={styles.cardContent}
        >
          <div className={styles.contentStart} />
          <div className={styles.contentPlace}>{s.place}</div>
          <div className={styles.contentTitle1}>{s.title}</div>
          <div className={styles.contentTitle2}>{s.title2}</div>
        </div>
      ))}

      {[0, 1].map((panelIndex) => {
        const s = slides[panelIndex];
        return (
          <div
            key={`details-${panelIndex}`}
            ref={(el) => {
              detailsRefs.current[panelIndex] = el;
            }}
            className={styles.details}
          >
            <div className={styles.placeBox}>
              <div className={styles.text} data-anim="text">
                {s.place}
              </div>
            </div>
            <div className={styles.titleBox1}>
              <div className={styles.title1} data-anim="title1">
                {s.title}
              </div>
            </div>
            <div className={styles.titleBox2}>
              <div className={styles.title2} data-anim="title2">
                {s.title2}
              </div>
            </div>
            <div className={styles.desc} data-anim="desc">
              {s.description}
            </div>           
          </div>
        );
      })}

      <div ref={paginationRef} className={styles.pagination}>
        <button
          ref={arrowLeftRef}
          type="button"
          className={`${styles.arrow}`}
          aria-label="Previous slide"
        >
          <ChevronLeft />
        </button>
        <button
          ref={arrowRightRef}
          type="button"
          className={`${styles.arrow} ${styles.arrowRight}`}
          aria-label="Next slide"
        >
          <ChevronRight />
        </button>
        <div className={styles.progressSubContainer}>
          <div ref={progressBgRef} className={styles.progressSubBackground}>
            <div ref={progressFgRef} className={styles.progressSubForeground} />
          </div>
        </div>
        <div ref={slideNumbersRef} className={styles.slideNumbersWrap}>
          {slides.map((_, i) => (
            <div
              key={`number-${i}`}
              ref={(el) => {
                slideItemRefs.current[i] = el;
              }}
              className={styles.item}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div ref={coverRef} className={styles.cover} />
    </section>
  );
}
