"use client"
import React from 'react';
import {
    Code2,
    ShoppingCart,
    Wrench,
    Gauge,
    Globe,
    Smartphone,
    Shield,
    Database
} from 'lucide-react';

export default function WebDevelopment() {
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

        const currentElement = document.querySelector("#web-development");
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    const services = [
        {
            icon: <Code2 className="w-8 h-8 text-orange-500" />,
            title: "Custom Web Development",
            description: "We build bespoke websites from the ground up, tailored to your unique brand identity and business requirements."
        },
        {
            icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
            title: "E-commerce Solutions",
            description: "Launch a powerful online store with our secure, scalable, and user-friendly e-commerce development services."
        },
        {
            icon: <Wrench className="w-8 h-8 text-orange-500" />,
            title: "Website Maintenance & Updates",
            description: "Keep your website running smoothly with our proactive maintenance, regular updates, and dedicated support."
        },
        {
            icon: <Gauge className="w-8 h-8 text-orange-500" />,
            title: "Performance Optimization",
            description: "We enhance your website's speed and performance to improve user experience and boost search engine rankings."
        },
        {
            icon: <Globe className="w-8 h-8 text-orange-500" />,
            title: "Cross-Browser Testing",
            description: "Ensure a consistent and flawless experience for all users, regardless of the browser they use."
        },
        {
            icon: <Smartphone className="w-8 h-8 text-orange-500" />,
            title: "Mobile Responsiveness Enhancements",
            description: "We optimize your site for all devices, ensuring a perfect look and feel on desktops, tablets, and smartphones."
        },
        {
            icon: <Shield className="w-8 h-8 text-orange-500" />,
            title: "Website Security Implementation",
            description: "Protect your website and user data from threats with our robust security protocols and implementation."
        },
        {
            icon: <Database className="w-8 h-8 text-orange-500" />,
            title: "Content Management System Support",
            description: "We provide expert support for popular CMS platforms, empowering you to manage your content with ease."
        }
    ];

    return (
        <section id="web-development" className="py-20 sm:py-28 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold leading-7 text-orange-600">Build & Maintain</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Web Development and Maintenance
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        From concept to launch and beyond, we provide end-to-end web solutions that are robust, scalable, and secure.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500/10 mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold leading-6 text-gray-900">{service.title}</h3>
                            <p className="mt-3 text-base leading-7 text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
