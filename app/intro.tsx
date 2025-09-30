'use client';

import { useState, useEffect } from 'react';

export default function Intro() {
    const [currentSpan, setCurrentSpan] = useState(-1);
    const spans = [
        { text: '🌎Hello' },
        { text: '👋 Hi' },
        { text: '🙏வணக்கம்' }
    ];

    useEffect(() => {
        const timers = [
            setTimeout(() => setCurrentSpan(0), 0),
            setTimeout(() => setCurrentSpan(1), 1000),
            setTimeout(() => setCurrentSpan(2), 2000),
            setTimeout(() => setCurrentSpan(-1), 3000),
        ];
        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    return (
        <section className="fixed inset-0 h-screen w-full bg-gradient-to-b from-black to-gray-900 flex items-center justify-center z-50">
            <div className="text-9xl font-semibold text-center text-gray-200 text-reveal">
                {currentSpan >= 0 && (
                    <span
                        key={currentSpan}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-md text-center transition-opacity duration-500 animate-slide-up opacity-100 font-bricolage"
                    >
                        {spans[currentSpan].text}
                    </span>
                )}
            </div>
        </section>
    );
}
