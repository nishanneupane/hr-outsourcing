"use client"
import React, { useState, useEffect } from 'react';


const BookOpen = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);

const BarChart3 = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M3 3v18h18"></path>
        <path d="M18 17V9"></path>
        <path d="M13 17V5"></path>
        <path d="M8 17v-3"></path>
    </svg>
);

const Scale = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
        <path d="M7 21h10"></path>
        <path d="M12 3v18"></path>
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
    </svg>
);

const ShieldCheck = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
);

const NotebookText = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M10 6h8" /><path d="M10 12h8" /><path d="M10 18h8" />
    </svg>
);

const Users = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const Wallet = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14" />
        <path d="M22 12a2 2 0 0 0-2-2h-1a2 2 0 0 0 0 4h1a2 2 0 0 0 2-2Z" />
    </svg>
);

const FileText = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
    </svg>
);


// Main Accounting Component
function Accounting() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the animation shortly after the component mounts
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const services = [
        {
            icon: <BookOpen className="w-8 h-8 text-cyan-500" />,
            title: "Financial Record Management",
            description: "We meticulously maintain your financial records, ensuring every transaction is accurately categorized and recorded for complete clarity and compliance."
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
            title: "Financial Reporting",
            description: "Receive clear, concise, and insightful financial reports (P&L, Balance Sheets) that empower you to make informed, strategic business decisions."
        },
        {
            icon: <Scale className="w-8 h-8 text-cyan-500" />,
            title: "Account Reconciliation",
            description: "Our team performs regular, detailed reconciliations of your bank accounts and credit cards to guarantee accuracy and identify discrepancies early."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-cyan-500" />,
            title: "Audit Assistance",
            description: "We prepare and organize all necessary financial documentation, providing robust support to ensure a smooth and stress-free audit process."
        },
        {
            icon: <NotebookText className="w-8 h-8 text-cyan-500" />,
            title: "Budget Preparation",
            description: "Collaborate with us to build a comprehensive budget that aligns with your goals, helping you manage cash flow and plan for future growth effectively."
        },
        {
            icon: <Users className="w-8 h-8 text-cyan-500" />,
            title: "Payroll Processing",
            description: "We handle all aspects of payroll, from calculations to direct deposits and tax withholdings, ensuring your team is paid accurately and on time, every time."
        },
        {
            icon: <Wallet className="w-8 h-8 text-cyan-500" />,
            title: "Expense Tracking",
            description: "Streamline your expense management with our efficient tracking systems, providing you with a clear overview of spending to control costs."
        },
        {
            icon: <FileText className="w-8 h-8 text-cyan-500" />,
            title: "Tax Preparation and Filing",
            description: "Our experts ensure your business is tax-ready, handling all preparation and filing requirements to maximize returns and ensure full compliance."
        }
    ];

    return (
        <section id="accounting" className=" bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10 mb-4">
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

export default function AccountingPage() {
    return (
        <div className="bg-gray-100 font-sans antialiased">

            <main>
                {/* Hero Section */}
                <div id="home" className="relative isolate pt-32 sm:pt-48 pb-20 sm:pb-24 bg-white">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ffdb] to-[#0891b2] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
                        />
                    </div>
                    <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Accounting and Bookkeeping
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We provide a comprehensive suite of accounting services to keep your financials in perfect order, freeing you to focus on your core business.
                        </p>
                    </div>
                </div>

                <Accounting />

            </main>

        </div>
    );
}
