"use client"
import React from 'react';
import { Target, Zap, Handshake } from 'lucide-react';

export default function OurPurpose() {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = document.querySelector("#our-purpose-section");
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    const pillars = [
        {
            icon: <Target className="h-7 w-7 text-cyan-600 mt-1" />,
            title: "Empowering Brokers",
            description: "Our primary goal is to empower mortgage brokers by removing administrative burdens. We provide the essential support that allows you to focus on what you do best: building client relationships and closing deals."
        },
        {
            icon: <Zap className="h-7 w-7 text-cyan-600 mt-1" />,
            title: "Driving Efficiency",
            description: "We are obsessed with efficiency. By leveraging streamlined processes and cutting-edge technology, we accelerate workflows, reduce turnaround times, and bring a new level of operational excellence to your business."
        },
        {
            icon: <Handshake className="h-7 w-7 text-cyan-600 mt-1" />,
            title: "Building Partnerships",
            description: "We believe in success through collaboration. We act as a seamless extension of your team, building long-term partnerships founded on trust, transparency, and a shared commitment to achieving outstanding results."
        }
    ];

    return (
        <section id="our-purpose-section" className="bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-28">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
                    <div className={`transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <h2 className="text-base font-semibold leading-7 text-cyan-600">Our Core Mission</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Your Growth is Our Purpose
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-700">
                            We are leading providers of support services for Australian mortgage brokers and provide comprehensive outsourcing solutions. Our existence is dedicated to one thing: creating the conditions for your business to thrive in a competitive landscape.
                        </p>
                        <div className="mt-12 space-y-10">
                            {pillars.map((pillar, index) => (
                                <div
                                    key={pillar.title}
                                    className={`flex gap-x-5 transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                                    style={{ transitionDelay: `${200 + index * 150}ms` }}
                                >
                                    <div className="flex-shrink-0">
                                        {pillar.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold leading-6 text-gray-900">{pillar.title}</h3>
                                        <p className="mt-2 text-base leading-7 text-gray-600">{pillar.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className={`mt-10 lg:mt-0 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Team collaborating on a business strategy"
                            className="rounded-2xl shadow-xl object-cover w-full h-full"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/e0f2fe/334155?text=Our+Team'; }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
