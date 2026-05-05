"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/supabase";

/* ─────────── Data ─────────── */
interface ProjectPhase {
    image: string;
    title: string;
    description: string;
}

interface Project {
    id: string;
    title: string;
    subtitle: string;
    location: string;
    year: string;
    coverImage: string;
    description: string;
    phases: ProjectPhase[];
}

const projects: Project[] = [
    {
        id: "hayrat-cesmesi",
        title: "Hayrat Çeşmesi",
        subtitle: "Mermer Hayrat Çeşme Projesi",
        location: "Sivas",
        year: "2024",
        coverImage: img("/proje-cesme1.jpg"),
        description:
            "Geleneksel Osmanlı mimarisinden ilham alan, modern işçilikle hayata geçirilen hayrat çeşmesi projemiz. Çizimden teslimata, her aşamada titizlikle çalışıldı.",
        phases: [
            {
                image: img("/proje-cesme7.jpg"),
                title: "3D Tasarım & Görselleştirme",
                description:
                    "Projenin yerleşim alanına uygun 3D modelleme ve fotorealistik render çalışması yapıldı.",
            },
            {
                image: img("/proje-cesme2.jpg"),
                title: "Detaylı Çizim & Planlama",
                description:
                    "Çeşmenin tüm ölçüleri ve süsleme detayları teknik çizimlerle belirlendi.",
            },
            {
                image: img("/proje-cesme3.jpg"),
                title: "Mermer Seçimi & Kesim",
                description:
                    "Projeye uygun doğal taş blokları seçildi ve CNC ile hassas kesim işlemleri gerçekleştirildi.",
            },
            {
                image: img("/proje-cesme4.jpg"),
                title: "İşleme & Şekillendirme",
                description:
                    "Ustalarımız tarafından geleneksel el işçiliği ile mermer yüzeylere motifler işlendi.",
            },
            {
                image: img("/proje-cesme5.jpg"),
                title: "Montaj & Kurulum",
                description:
                    "Parçalar sahada birleştirildi ve çeşme yapısı yerleşim alanına monte edildi.",
            },
            {
                image: img("/proje-cesme-6.jpg"),
                title: "Detay Çalışması",
                description:
                    "Süsleme detayları, yazı panoları ve musluklara son rötuşlar yapıldı.",
            },
            {
                image: img("/proje-cesme1.jpg"),
                title: "Tamamlanan Proje",
                description:
                    "Hayrat çeşmesi başarıyla tamamlanarak hizmete açıldı. Doğal taşın zamansız güzelliği eserimizde hayat buldu.",
            },
        ],
    },
];

/* ─────────── Component ─────────── */
export default function ProjelerClient() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState<number>(0);
    const [visiblePhases, setVisiblePhases] = useState<Set<number>>(new Set());
    const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Intersection Observer for scroll-based reveal
    useEffect(() => {
        if (!selectedProject) return;
        const observers: IntersectionObserver[] = [];

        phaseRefs.current.forEach((ref, index) => {
            if (!ref) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisiblePhases((prev) => new Set([...prev, index]));
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(ref);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, [selectedProject]);

    // Close lightbox on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (lightboxImage) setLightboxImage(null);
                else if (selectedProject) setSelectedProject(null);
            }
            if (lightboxImage && selectedProject) {
                if (e.key === "ArrowRight") {
                    const next = (lightboxIndex + 1) % selectedProject.phases.length;
                    setLightboxIndex(next);
                    setLightboxImage(selectedProject.phases[next].image);
                }
                if (e.key === "ArrowLeft") {
                    const prev = (lightboxIndex - 1 + selectedProject.phases.length) % selectedProject.phases.length;
                    setLightboxIndex(prev);
                    setLightboxImage(selectedProject.phases[prev].image);
                }
            }
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [lightboxImage, selectedProject, lightboxIndex]);

    // Lock body scroll when detail or lightbox is open
    useEffect(() => {
        if (lightboxImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [lightboxImage]);

    const openLightbox = (image: string, index: number) => {
        setLightboxImage(image);
        setLightboxIndex(index);
    };

    const navigateLightbox = (direction: number) => {
        if (!selectedProject) return;
        const newIndex = (lightboxIndex + direction + selectedProject.phases.length) % selectedProject.phases.length;
        setLightboxIndex(newIndex);
        setLightboxImage(selectedProject.phases[newIndex].image);
    };

    return (
        <div className="min-h-screen bg-[var(--cream)]">
            {/* ─── Hero Section ─── */}
            <section className="relative overflow-hidden bg-[var(--charcoal)] text-white">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src={img("/proje-cesme4.jpg")}
                        alt=""
                        fill
                        className="object-cover"
                        unoptimized
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--charcoal)] via-[var(--charcoal)]/80 to-[var(--charcoal)]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 md:py-44">
                    <div className="max-w-3xl">
                        <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--gold)] mb-4 sm:mb-6 font-medium opacity-0 animate-[heroFadeUp_0.8s_0.2s_forwards]">
                            Projelerimiz
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 sm:mb-8 opacity-0 animate-[heroFadeUp_0.8s_0.4s_forwards]">
                            Taşa İşlenen
                            <br />
                            <span className="text-[var(--gold)]">Sanat</span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl opacity-0 animate-[heroFadeUp_0.8s_0.6s_forwards]">
                            Her projemiz bir hikâye taşır. Çizimden yapıma, ham mermerden
                            zamansız eserlere uzanan yolculuğumuza tanık olun.
                        </p>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
                </div>
            </section>

            {/* ─── Projects Grid ─── */}
            <section className="py-16 sm:py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--grey-medium)] mb-3">
                            Tamamlanan Projeler
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--charcoal)] tracking-tight">
                            Eserlerimiz
                        </h2>
                        <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <div
                                key={project.id}
                                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[var(--border-light)] transform hover:-translate-y-2 opacity-0"
                                style={{
                                    animation: `fadeInUp 0.7s ease-out forwards ${idx * 150}ms`,
                                }}
                                onClick={() => {
                                    setSelectedProject(project);
                                    setVisiblePhases(new Set());
                                    phaseRefs.current = [];
                                }}
                            >
                                {/* Cover Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                    {/* Year badge */}
                                    <div className="absolute top-4 right-4 bg-[var(--gold)]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-white">
                                        {project.year}
                                    </div>

                                    {/* Phase count */}
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                        <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/20">
                                            📸 {project.phases.length} Aşama
                                        </div>
                                    </div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-[var(--charcoal)]/0 group-hover:bg-[var(--charcoal)]/30 transition-colors duration-500 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all duration-500 scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="var(--charcoal)"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-6 sm:p-8">
                                    <div className="flex items-center gap-2 text-xs text-[var(--grey-medium)] mb-3 uppercase tracking-wider">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                        {project.location}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--charcoal)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[var(--grey-medium)] leading-relaxed mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center text-[var(--gold)] font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                                        Proje Detayları
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Placeholder for future projects */}
                        <div className="group cursor-default bg-[var(--cream-dark)]/50 rounded-2xl overflow-hidden border-2 border-dashed border-[var(--border-medium)] flex flex-col items-center justify-center min-h-[400px] opacity-0" style={{ animation: "fadeInUp 0.7s ease-out forwards 300ms" }}>
                            <div className="text-center p-8">
                                <div className="w-16 h-16 rounded-full bg-[var(--cream-dark)] flex items-center justify-center mx-auto mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--grey-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--grey-light)] mb-2">
                                    Yeni Projeler Yakında
                                </h3>
                                <p className="text-sm text-[var(--grey-light)]">
                                    Devam eden projelerimiz tamamlandığında burada yayınlanacaktır.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-20 sm:py-24 bg-[var(--charcoal)] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                        Projenizi Hayata Geçirelim
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                        Mermer ile hayalinizdeki eseri birlikte tasarlayalım. Çizimden teslimata kadar her aşamada yanınızdayız.
                    </p>
                    <Link
                        href="/iletisim"
                        className="inline-block px-10 py-4 bg-[var(--gold)] text-white font-medium hover:bg-[var(--gold-light)] transition-colors duration-300 uppercase tracking-wider text-sm rounded-lg"
                    >
                        Bizimle İletişime Geçin
                    </Link>
                </div>
            </section>

            {/* ═══════════ Project Detail Modal ═══════════ */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setSelectedProject(null);
                    }}
                >
                    <div className="min-h-screen">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            aria-label="Kapat"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>

                        {/* Detail Header */}
                        <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
                            <Image
                                src={selectedProject.coverImage}
                                alt={selectedProject.title}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-[var(--charcoal)]/40 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-16">
                                <div className="max-w-4xl">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="bg-[var(--gold)]/90 px-3 py-1 rounded-full text-xs font-bold text-white">
                                            {selectedProject.year}
                                        </span>
                                        <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20 flex items-center gap-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                                            {selectedProject.location}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Timeline / Phases */}
                        <div className="bg-[var(--cream)] py-12 sm:py-16 md:py-20">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-12 sm:mb-16">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--grey-medium)] mb-3">
                                        Çizimden Yapıma
                                    </p>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-[var(--charcoal)]">
                                        Proje Aşamaları
                                    </h3>
                                    <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4 rounded-full" />
                                </div>

                                <div className="relative">
                                    {/* Timeline line */}
                                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--gold)]/60 via-[var(--gold)]/30 to-transparent -translate-x-1/2" />

                                    <div className="space-y-8 sm:space-y-12 md:space-y-0">
                                        {selectedProject.phases.map((phase, index) => (
                                            <div
                                                key={index}
                                                ref={(el) => { phaseRefs.current[index] = el; }}
                                                className={`md:flex md:items-center md:gap-8 lg:gap-12 md:mb-16 transition-all duration-700 ${
                                                    visiblePhases.has(index)
                                                        ? "opacity-100 translate-y-0"
                                                        : "opacity-0 translate-y-8"
                                                } ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                            >
                                                {/* Image */}
                                                <div className="md:w-1/2 mb-4 md:mb-0">
                                                    <div
                                                        className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                                                        onClick={() => openLightbox(phase.image, index)}
                                                    >
                                                        <Image
                                                            src={phase.image}
                                                            alt={phase.title}
                                                            fill
                                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                            unoptimized
                                                        />
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                                            <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/80 flex items-center justify-center transition-all duration-300 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--charcoal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Timeline dot (desktop) */}
                                                <div className="hidden md:flex items-center justify-center w-0 relative z-10">
                                                    <div className="w-10 h-10 rounded-full bg-[var(--gold)] border-4 border-[var(--cream)] shadow-md flex items-center justify-center text-white text-xs font-bold">
                                                        {index + 1}
                                                    </div>
                                                </div>

                                                {/* Text */}
                                                <div className="md:w-1/2">
                                                    <div className={`bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-[var(--border-light)] ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                                                            <span className="md:hidden w-8 h-8 rounded-full bg-[var(--gold)] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                                                                {index + 1}
                                                            </span>
                                                            <span className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-semibold">
                                                                Aşama {index + 1} / {selectedProject.phases.length}
                                                            </span>
                                                        </div>
                                                        <h4 className="text-lg sm:text-xl font-bold text-[var(--charcoal)] mb-2">
                                                            {phase.title}
                                                        </h4>
                                                        <p className="text-sm text-[var(--grey-medium)] leading-relaxed">
                                                            {phase.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Back button */}
                                <div className="text-center mt-12 sm:mt-16">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--charcoal)] text-white font-medium rounded-lg hover:bg-[var(--grey-dark)] transition-colors text-sm uppercase tracking-wider"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                                        Tüm Projelere Dön
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ═══════════ Lightbox ═══════════ */}
            {lightboxImage && selectedProject && (
                <div
                    className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
                    onClick={() => setLightboxImage(null)}
                >
                    {/* Close */}
                    <button
                        onClick={() => setLightboxImage(null)}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        aria-label="Kapat"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>

                    {/* Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
                        className="absolute left-2 sm:left-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        aria-label="Önceki"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                    </button>

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
                        className="absolute right-2 sm:right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
                        aria-label="Sonraki"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </button>

                    {/* Image */}
                    <div
                        className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={lightboxImage}
                            alt={selectedProject.phases[lightboxIndex]?.title || ""}
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full text-white text-sm font-medium border border-white/10 max-w-[90vw] text-center">
                        {selectedProject.phases[lightboxIndex]?.title} — {lightboxIndex + 1} / {selectedProject.phases.length}
                    </div>
                </div>
            )}

            {/* ─── Animations ─── */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes heroFadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}
