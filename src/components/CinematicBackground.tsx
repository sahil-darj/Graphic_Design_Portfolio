import React, { useEffect, useRef, useState } from "react";

const CinematicBackground: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [tiledList, setTiledList] = useState<string[]>([]);

    useEffect(() => {
        // Images that MUST be in the center
        const specialPriority = [
            "background/CENTER/sonunigam.webp",
            "background/CENTER/lndneatss Photoshop 2.webp",
            "background/CENTER/5.webp",
            "background/CENTER/KISAAN.webp",
        ];

        const otherCenterImages = [
            "3.webp",
            "55ec105e-c227-4f14-a557-faf4d38bc70b.webp",
            "8.webp",
            "Agriculture POST Design - PSD.webp",
            "BUDDH-PURNIMA-POST2.webp",
            "POSTER1 (2).webp",
            "SOCIALMEDIA.webp",
            "a4b378e6-2a4d-40cd-bcd5-fba8fd4932ac.webp",
            "dosafinal.webp",
            "joker1.webp",
            "or4.webp",
            "poster2 (1).webp",
            "poster2.webp",
        ].map((n) => `background/CENTER/${n}`);

        const outerImageList = [
            "13284653-b232-45fe-9e19-f165ede9cd7e.webp",
            "3ff47a92-0e66-440c-9216-6e4f970e366e.webp",
            "4.webp",
            "6.webp",
            "61436862-a5ae-4c0d-9a64-96d3811744d5.webp",
            "7.webp",
            "Certificate of appreciation with futuristic design.webp",
            "ChatGPT Image Mar 27, 2026, 08_36_36 PM.webp",
            "ae8a188b-b997-4790-9115-ce070083f2c9.webp",
            "aly.webp",
            "em.webp",
            "final1111.webp",
            "final2.webp",
            "freepik__professional-vector-logo-for-enagar-representing-s__50600.webp",
            "hero-premium (3).webp",
            "hr.webp",
            "l10.webp",
            "l13.webp",
            "l14.webp",
            "l4.webp",
            "l7.webp",
            "movie4.webp",
            "o6.webp",
            "o7.webp",
            "or1.webp",
            "or2.webp",
            "poster1.webp",
            "s1.webp",
            "s2.webp",
            "s8.webp",
            "srkkkk.webp",
            "t4.webp",
            "task2-3.webp",
            "Design 1 Photoshop.webp",
        ].map((n) => `background/${n}`);

        const rootImages = ["Design 1 Photoshop.webp"];
        const outerImagesFinal = [
            ...outerImageList.filter((path) => !path.includes("Design 1 Photoshop.webp")),
            ...rootImages,
        ];

        const cornerTopLeft = ["c1.webp", "c3.webp", "l6.webp"];
        const cornerBottomRight = ["t1.webp"];
        const remaining = [...otherCenterImages, ...outerImagesFinal];
        remaining.sort(() => Math.random() - 0.5);

        const half = Math.floor(remaining.length / 2);
        const combined = [
            ...cornerTopLeft,
            ...remaining.slice(0, half),
            ...specialPriority,
            ...remaining.slice(half),
            ...cornerBottomRight,
        ];
        const uniqueCombined = Array.from(new Set(combined));
        setTiledList(uniqueCombined);

        const handleMouseMove = (e: MouseEvent) => {
            if (!gridRef.current) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 15;
            const y = (e.clientY / window.innerHeight - 0.5) * 15;
            gridRef.current.style.transform = `translate(-50%, -50%) perspective(1500px) rotateX(${25 + y / 2
                }deg) rotateZ(${-12 + x / 2}deg) scale(0.55)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden bg-black bg-no-repeat bg-cover bg-center">
            {/* Grid Container */}
            <div
                ref={gridRef}
                className="absolute top-1/2 left-1/2 flex flex-wrap justify-center content-center gap-4 w-[220vw] h-[220vh] p-[100px] transition-transform duration-700 ease-[cubic-bezier(0.165,0.84,0.44,1)] pointer-events-none"
                style={{
                    transform: "translate(-50%, -50%) perspective(1500px) rotateX(25deg) rotateZ(-12deg) scale(0.55)",
                }}
            >
                {tiledList.map((path, index) => (
                    <div
                        key={index}
                        className="relative h-[280px] flex-grow bg-[#0a0a0a] rounded-lg overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.9)] border border-white/10"
                    >
                        <img
                            src={`/hero-background/thumbnails/${path}`}
                            alt={`Art ${index}`}
                            className="h-full w-full block object-cover brightness-90"
                            loading="lazy"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                if (target.src.includes("thumbnails/")) {
                                    target.src = `/hero-background/${path}`;
                                } else {
                                    target.parentElement!.style.display = "none";
                                }
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Premium Cinematic Glows */}
            <div className="absolute top-[10%] left-[10%] w-[60vw] h-[60vh] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-[4]"></div>
            <div className="absolute bottom-[10%] right-[10%] w-[60vw] h-[60vh] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none z-[4]"></div>

            {/* Overlays */}
            <div className="absolute inset-0 pointer-events-none z-[5] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.6)_70%,#000_100%)]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none z-[6] bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        </div>
    );
};

export default CinematicBackground;
