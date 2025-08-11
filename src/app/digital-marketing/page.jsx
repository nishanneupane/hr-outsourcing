"use client"
import React from 'react';
import {
    Share2,
    PenSquare,
    Search,
    Mails,
    MousePointerClick,
    LineChart,
    Users,
    TrendingUp
} from 'lucide-react';

export default function DigitalMarketing() {
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

        const currentElement = document.querySelector("#digital-marketing");
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
            icon: <Share2 className="w-8 h-8 text-teal-500" />,
            title: "Social Media Management",
            description: "We build and manage your brand's presence across all major social platforms, engaging your audience and driving growth."
        },
        {
            icon: <PenSquare className="w-8 h-8 text-teal-500" />,
            title: "Content Creation",
            description: "Our team creates compelling blog posts, videos, and graphics that resonate with your target audience and build brand authority."
        },
        {
            icon: <Search className="w-8 h-8 text-teal-500" />,
            title: "SEO Optimization",
            description: "Improve your search engine rankings and attract organic traffic with our comprehensive on-page and off-page SEO strategies."
        },
        {
            icon: <Mails className="w-8 h-8 text-teal-500" />,
            title: "Email Marketing Campaigns",
            description: "We design and execute targeted email campaigns that nurture leads, convert customers, and foster brand loyalty."
        },
        {
            icon: <MousePointerClick className="w-8 h-8 text-teal-500" />,
            title: "Pay-Per-Click Advertising",
            description: "Get immediate results with our expertly managed PPC campaigns on Google Ads and social media platforms."
        },
        {
            icon: <LineChart className="w-8 h-8 text-teal-500" />,
            title: "Analytics and Performance Tracking",
            description: "We provide detailed reports and insights on your marketing performance, allowing for data-driven decision-making."
        },
        {
            icon: <Users className="w-8 h-8 text-teal-500" />,
            title: "Influencer Collaboration",
            description: "Leverage the power of influencers to expand your reach and build credibility within your niche market."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-teal-500" />,
            title: "Website Traffic Growth Strategies",
            description: "We implement multi-faceted strategies to consistently increase the quantity and quality of visitors to your website."
        }
    ];

    return (
        <section id="digital-marketing" className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold leading-7 text-teal-600">Growth & Engagement</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Digital Marketing
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        Expand your online presence and connect with your audience through our comprehensive suite of digital marketing services.
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
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-500/10 mb-4">
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
