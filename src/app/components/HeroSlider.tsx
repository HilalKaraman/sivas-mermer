'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation, Keyboard } from 'swiper/modules';
import Image from 'next/image';

// Swiper stillerini içe aktar
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export default function HeroSlider() {
    const slides = [
        {
            id: 1,
            image: '/yeni-slider-1.jpeg',
            title: 'Öz Sivas Mermer',
            subtitle: 'Özel projeleriniz için sanatsal dokunuşlar.',
            path: 'Projelerimiz'
        },
        {
            id: 2,
            image: '/yeni-slider-2.jpeg',
            title: 'Öz Sivas Mermer',
            subtitle: 'Doğanın sanatını mekanlarınıza taşıyoruz.',
            path: 'Anasayfa '
        }
    ];

    return (
        <div className="relative w-full h-[35vh] sm:h-[50vh] md:h-[calc(100vh-80px)] min-h-[250px] md:min-h-[600px] bg-neutral-900">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade, Navigation, Keyboard]}
                keyboard={{
                    enabled: true,
                }}
                grabCursor={true}
                effect={'fade'}
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + ' !bg-white !w-3 !h-3 !opacity-50 hover:!opacity-100 transition-opacity"></span>';
                    },
                }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        {/* Arkaplan Görseli */}
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.image}
                                alt={slide.subtitle}
                                fill
                                priority={slide.id === 1}
                                className="object-cover object-center"
                                quality={90}
                            />

                            {/* Karartma Katmanı */}
                            <div className="absolute inset-0 bg-black/15" />
                        </div>

                        {/* İçerik Katmanı */}
                        <div className="absolute inset-0 z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col justify-between h-full pt-20 pb-12 sm:py-32">

                                {/* Sol Üst Başlık */}
                                <div className="max-w-4xl">
                                    <span className="text-white/90 text-xs md:text-base tracking-[0.2em] uppercase mb-2 md:mb-4 block animate-subtitle" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                                        {slide.path}
                                    </span>
                                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 tracking-tight leading-[0.9] drop-shadow-2xl animate-blur-in-up">
                                        {slide.title}
                                    </h1>
                                </div>

                                {/* Sağ Alt Alt Yazı */}
                                <div className="self-end max-w-md w-full animate-fade-in-up">
                                    <div className="bg-black/10 md:bg-black/40 px-4 py-3 sm:p-6 md:p-8 border-l-2 md:border-l-4 border-white/70 rounded-sm">
                                        <h2 className="text-sm sm:text-xl md:text-3xl font-light text-gray-200 tracking-wide uppercase animate-subtitle" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
                                            {slide.subtitle}
                                        </h2>
                                        <div className="w-8 md:w-12 h-0.5 md:h-1 bg-white mt-2 md:mt-4 opacity-80" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Özel CSS (Global.css'e de eklenebilir ama component scope'unda tutuyoruz şimdilik) */}
            <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ffffff;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination {
          bottom: 40px !important;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes blurInUp {
            0% {
                opacity: 0;
                transform: translateY(40px);
                filter: blur(10px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }
        
        .animate-subtitle {
            opacity: 0; /* Start hidden */
            animation: fadeInUp 1s ease-out forwards;
            animation-delay: 0.5s; /* Wait for container to appear */
        }

        .animate-blur-in-up {
            opacity: 0;
            animation: blurInUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            animation-delay: 0.2s;
        }
      `}</style>
        </div>
    );
}
