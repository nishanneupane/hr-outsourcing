"use client"
import React, { useState, useEffect } from 'react';
import {
    FilePlus2,
    ShieldCheck,
    FolderKanban,
    MessageSquareQuote,
    AreaChart,
    TrendingUp,
    Handshake,
    ClipboardCheck
} from 'lucide-react';


export default function MortgageBrokerServices() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = document.querySelector("#mortgage-services");
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
            icon: <FilePlus2 className="w-8 h-8 text-primary" />,
            title: "Loan Application Management",
            description: "We handle the entire loan application process from submission to approval, ensuring accuracy and efficiency at every step."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            title: "Regulatory Compliance",
            description: "Stay ahead of regulatory changes. We ensure all applications and processes are fully compliant with the latest Australian mortgage laws."
        },
        {
            icon: <FolderKanban className="w-8 h-8 text-primary" />,
            title: "Document Handling",
            description: "Secure and systematic management of all necessary documents, from collection and verification to submission and archiving."
        },
        {
            icon: <MessageSquareQuote className="w-8 h-8 text-primary" />,
            title: "Stakeholder Communication",
            description: "Acting as a central point of contact, we facilitate clear and timely communication between clients, lenders, and other stakeholders."
        },
        {
            icon: <AreaChart className="w-8 h-8 text-primary" />,
            title: "Credit Assessment and Analysis",
            description: "Our experts conduct thorough credit assessments and financial analysis to present the strongest possible case to lenders."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-primary" />,
            title: "Market Research for Mortgage Trends",
            description: "We provide insights into the latest market trends and loan products, helping you offer competitive and relevant advice to your clients."
        },
        {
            icon: <Handshake className="w-8 h-8 text-primary" />,
            title: "Client Relationship Management",
            description: "We help you build and maintain strong client relationships with professional communication and dedicated support throughout the loan lifecycle."
        },
        {
            icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
            title: "Application Status Tracking",
            description: "Provide real-time updates to your clients with our proactive application tracking, ensuring transparency and peace of mind."
        }
    ];

    return (
        <section id="mortgage-services" className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold leading-7 text-cyan-600">Our Expertise</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Mortgage Broker Support Services
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        Delegate your administrative and operational tasks to us, so you can focus on growing your brokerage and serving your clients.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
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
