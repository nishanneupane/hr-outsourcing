'use client';

import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";

const Purpose = () => {
    return (
        <section id="purpose" className="relative bg-neutral-50 overflow-hidden py-32">
            {/* Decorative background accents */}
            <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <BlurFade delay={0.25} inView>
                    <div className="flex items-center gap-2 mb-8 text-sm text-primary bg-primary-light/20 px-4 py-2 rounded-full w-max animate-pulse">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        Our Purpose
                    </div>
                </BlurFade>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Section */}
                    <BlurFade delay={0.5} inView>
                        <div className="max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-medium tracking-[-.05em] mb-8">
                                Building Businesses with Purpose and People
                            </h1>
                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                At <span className="font-semibold text-primary">Expert HR Outsourcing</span>, we believe success is measured not only by business growth, but by the positive impact we create for people and communities. Our people-first values guide everything we do, ensuring our work contributes to something bigger than business.
                            </p>
                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                Sustainability sits at the core of our mission. We actively promote eco-friendly practices and harness digital innovation to replace outdated, environmentally harmful systems with smarter, more responsible solutions—driving the shift toward a sustainable, net-zero future.
                            </p>
                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                We believe in empowering the next generation. Through education, mentorship, and skills development programs, we help young professionals grow, innovate, and connect with real career opportunities—bridging the gap between potential and purpose.
                            </p>
                            <p className="text-neutral-700 leading-relaxed">
                                Our people are our foundation. From mental health support to leadership growth and work-life balance, we invest in every individual who powers our mission. Because real success starts with the people behind it.
                            </p>
                        </div>
                    </BlurFade>

                    {/* Image Grid */}
                    <BlurFade delay={0.75} inView>
                        <div className="relative grid grid-cols-2 gap-4">
                            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/sustainability.jpg"
                                    alt="Sustainability efforts"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg mt-10">
                                <Image
                                    src="/images/mentorship.jpg"
                                    alt="Mentorship programs"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg -mt-10">
                                <Image
                                    src="/images/community.jpg"
                                    alt="Community initiatives"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/images/team.jpg"
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </BlurFade>
                </div>

                {/* Closing Statement */}
                <BlurFade delay={1} inView>
                    <div className="text-center mt-24">
                        <p className="text-xl font-medium text-neutral-700 max-w-3xl mx-auto">
                            We don’t just build businesses — we build impact. From empowering youth to fostering sustainability,
                            we’re committed to shaping a better, more connected future for everyone.
                        </p>
                    </div>
                </BlurFade>
            </div>
        </section>
    );
};

export default Purpose;
