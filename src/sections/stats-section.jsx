'use client';

import BlurFade from "@/components/ui/blur-fade";

const StatsSection = () => {
    const stats = [
        { label: "Staff Growth YOY", value: "44%" },
        { label: "Female Representation", value: "55%" },
        { label: "Global Clients", value: "30+" },
        { label: "Social Media Growth Rate YOY", value: "60%" },
    ];

    return (
        <section className="relative py-24 bg-neutral-900 overflow-hidden">
            {/* Decorative floating elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-slow-spin" />
                <div className="absolute top-1/4 right-[-80px] w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl animate-slow-spin" />
                <div className="absolute bottom-[-60px] left-1/3 w-80 h-80 bg-blue-500 rounded-full opacity-15 blur-3xl animate-slow-spin" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16 tracking-tight">
                    Generating Next Level Growth
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <BlurFade key={idx} delay={0.2 * idx} yOffset="-20">
                            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:scale-105 transition-transform duration-500 cursor-default">
                                <span className="block text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2">
                                    {stat.value}
                                </span>
                                <p className="text-sm md:text-base font-medium text-white/80 tracking-wide">
                                    {stat.label}
                                </p>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
