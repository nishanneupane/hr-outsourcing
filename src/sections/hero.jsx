'use client';

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import ShimmerButton from "@/components/ui/shimmer-button";
import BlurFade from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { useModal } from "@/context/modalContext";
import { useState } from "react";
import { Loader } from "lucide-react";

const Hero = () => {
    const { setIsModalOpen } = useModal();
    const [handling, setHandling] = useState(false);
    const handleConnectClick = () => {
        setHandling(true);
        setTimeout(() => {
            setIsModalOpen(true);
            setHandling(false);
        }, 750);
    };
    return (
        <section id="hero" className="relative min-h-screen grid place-items-center overflow-hidden hero">
            <BlurFade yOffset='0'>
                <div className="relative flex flex-col w-full items-center justify-center rounded-lg px-4 container py-32 text-center">

                    <BlurFade yOffset='-10' className='z-10 py-2 px-6 mb-8 bg-gradient-to-r from-sky-400/40 via-blue-500/30 to-cyan-400/30 rounded-full backdrop-blur-md text-sm md:text-base font-medium' delay={0.25}>
                        <p className="text-white tracking-wide">
                            Truly Trusted Staffing Partner
                        </p>
                    </BlurFade>

                    <BlurFade yOffset='-15' delay={0.5}>
                        <h1 className="z-10 text-4xl md:text-6xl font-semibold md:font-bold tracking-[-.04em] text-white leading-tight md:leading-[4.5rem]">
                            Mortgage Broker Support & <br className="md:block hidden" /> Business Outsourcing Solutions
                        </h1>
                    </BlurFade>

                    <BlurFade yOffset='-20' delay={0.75} className="z-10 my-6 md:my-10 lg:w-[55%]">
                        <p className="text-lg md:text-xl text-neutral-100 tracking-wide">
                            We provide top-notch support services for <span className="text-orange-400 font-semibold">Australian mortgage brokers</span> and deliver <span className="text-orange-400 font-semibold">comprehensive business outsourcing solutions.</span>
                        </p>
                    </BlurFade>

                    <BlurFade yOffset='-25' delay={1}>
                        <ShimmerButton
                            borderRadius="8px"
                            background="white"
                            shimmerColor="#3eb3f7"
                            shimmerSize=".24rem"
                            onClick={handleConnectClick}
                            className={cn(
                                "relative flex items-center justify-center overflow-hidden z-10",
                                "text-[#197eb8] py-3 px-6 md:py-4 md:px-8 font-semibold text-lg md:text-xl rounded-xl backdrop-blur-sm",
                                "hover:-translate-y-1 hover:scale-105 transition-transform duration-300 active:scale-95 shadow-lg group"
                            )}
                        >
                            {handling && (
                                <Loader className="animate-spin absolute" size={22} />
                            )}

                            <span
                                className={`block relative group-hover:-translate-y-12 ${handling ? "invisible" : ""
                                    }`}
                                style={{ transition: "transform 0.5s" }}
                            >
                                Get Started Today
                            </span>

                            <span
                                className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-12 group-hover:translate-y-[-50%] ${handling ? "invisible" : ""
                                    }`}
                                style={{ transition: "transform 0.5s" }}
                            >
                                Get Started Today
                            </span>
                        </ShimmerButton>

                    </BlurFade>

                    <AnimatedGridPattern
                        numSquares={55}
                        maxOpacity={0.45}
                        duration={2.5}
                        repeatDelay={0}
                        className={cn(
                            "absolute inset-0 h-full w-full -z-10",
                            "[mask-image:radial-gradient(250px_circle_at_center,white,transparent)]",
                            "md:[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                            "skew-y-12 stroke-white/50"
                        )}
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -z-10" />

                </div>
            </BlurFade>
        </section>
    )
}

export default Hero;
