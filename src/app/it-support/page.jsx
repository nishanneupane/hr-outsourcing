"use client"
import React from 'react';
import {
    HardHat,
    Briefcase,
    Target,
    BarChart4,
    Network,
    CloudCog,
    FileImage,
    School
} from 'lucide-react';

export default function ITSupportAndMarketing() {
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

        const currentElement = document.querySelector("#it-support-marketing");
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
            icon: <HardHat className="w-8 h-8 text-red-500" />,
            title: "Technical Support & Software Maintenance",
            description: "We provide expert technical assistance and ensure your software is always up-to-date and running efficiently."
        },
        {
            icon: <Briefcase className="w-8 h-8 text-red-500" />,
            title: "Business Consultant",
            description: "Leverage our industry expertise to refine your business processes, strategies, and operational models for peak performance."
        },
        {
            icon: <Target className="w-8 h-8 text-red-500" />,
            title: "Marketing Strategy Development",
            description: "We craft data-driven marketing strategies that align with your business goals and resonate with your target audience."
        },
        {
            icon: <BarChart4 className="w-8 h-8 text-red-500" />,
            title: "Campaign Performance Analysis",
            description: "Our team analyzes your campaign data to provide actionable insights, optimizing for ROI and future success."
        },
        {
            icon: <Network className="w-8 h-8 text-red-500" />,
            title: "IT Infrastructure Troubleshooting",
            description: "We quickly diagnose and resolve issues within your IT infrastructure to minimize downtime and maintain productivity."
        },
        {
            icon: <CloudCog className="w-8 h-8 text-red-500" />,
            title: "Cloud Service Management",
            description: "Optimize your cloud environment with our management services, ensuring security, scalability, and cost-effectiveness."
        },
        {
            icon: <FileImage className="w-8 h-8 text-red-500" />,
            title: "Digital Asset Optimization",
            description: "We manage and optimize your digital assets, from images to documents, for better performance and user experience."
        },
        {
            icon: <School className="w-8 h-8 text-red-500" />,
            title: "Training and Onboarding for IT Tools",
            description: "Empower your team with comprehensive training and smooth onboarding for new software and IT tools."
        }
    ];

    return (
        <section id="it-support-marketing" className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold leading-7 text-red-600">Strategic Support</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        IT Support and Marketing Assistance
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        A unified approach to technology and marketing, ensuring your infrastructure is solid and your message is heard.
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
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-500/10 mb-4">
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
