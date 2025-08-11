"use client"
import React from 'react';
import {
    CalendarDays,
    MailCheck,
    Headset,
    FileCog,
    Plane,
    Database,
    CalendarPlus,
    DatabaseZap
} from 'lucide-react';


export default function AdministrativeSupport() {

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

        const currentElement = document.querySelector("#admin-support");
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
            icon: <CalendarDays className="w-8 h-8 text-indigo-500" />,
            title: "Scheduling & Calendar Management",
            description: "We organize your appointments, meetings, and deadlines, ensuring your schedule is optimized and conflict-free."
        },
        {
            icon: <MailCheck className="w-8 h-8 text-indigo-500" />,
            title: "Email Management",
            description: "Our team filters, organizes, and responds to your emails, keeping your inbox clean and prioritizing important communications."
        },
        {
            icon: <Headset className="w-8 h-8 text-indigo-500" />,
            title: "Virtual Assistant Services",
            description: "Get dedicated remote support for a wide range of administrative tasks, tailored to your specific business needs."
        },
        {
            icon: <FileCog className="w-8 h-8 text-indigo-500" />,
            title: "Document Handling & Coordination",
            description: "We manage your digital and physical files, from creation and formatting to secure storage and retrieval."
        },
        {
            icon: <Plane className="w-8 h-8 text-indigo-500" />,
            title: "Travel Arrangements",
            description: "Let us handle all your business travel logistics, including flights, accommodations, and itineraries, for a seamless trip."
        },
        {
            icon: <Database className="w-8 h-8 text-indigo-500" />,
            title: "Data Entry and Management",
            description: "Ensure your data is accurate and up-to-date with our meticulous data entry, cleaning, and management services."
        },
        {
            icon: <CalendarPlus className="w-8 h-8 text-indigo-500" />,
            title: "Meeting and Event Planning",
            description: "We coordinate all aspects of your meetings and events, from venue booking to agenda preparation and follow-ups."
        },
        {
            icon: <DatabaseZap className="w-8 h-8 text-indigo-500" />,
            title: "CRM and Database Updates",
            description: "Keep your customer relationship management system current and effective with our regular database maintenance and updates."
        }
    ];

    return (
        <section id="admin-support" className="py-20 sm:py-28 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Core Operations</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Administrative Support
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        Streamline your daily operations with our reliable and efficient administrative support, giving you more time to focus on strategic goals.
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
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-500/10 mb-4">
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
