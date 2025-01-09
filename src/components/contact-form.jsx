'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useModal } from '@/context/modalContext'

export function ContactForm() {

    const { isModalOpen, setIsModalOpen } = useModal();

    const handleClose = () => {
        setIsModalOpen(false);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "f246ffb6-4ca4-48d8-a1ef-a126162c9208");

        // Handle checkboxes: Collect all checked values into an array
        const services = [];
        formData.forEach((value, key) => {
            if (key === 'checkbox') {
                services.push(value);
            }
        });

        // Convert form data to an object, including the services array
        const object = Object.fromEntries(formData);
        object.services = services; // Add the array of selected services

        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });

        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }

    if (!isModalOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center md:justify-end p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-2xl p-8 overflow-y-auto bg-white rounded-3xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute p-2 transition-colors rounded-full top-4 right-4 hover:bg-black/10"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Form Content */}
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl md:text-3xl md:font-medium tracking-[-0.06em] leading-6 mb-2 md:mb-0">
                            Got ideas? We've got the skills. Let's team up.
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                className="w-full pr-4 py-3 bg-transparent border-b border-black/40 focus:border-black/60 focus:outline-none tracking-[-0.06em]"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@company.com"
                                className="w-full pr-4 py-3 bg-transparent border-b border-black/40 focus:border-black/60 focus:outline-none tracking-[-0.06em]"
                            />
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Tell us a little about the project..."
                                rows={3}
                                className="w-full pr-4 py-3 bg-transparent border-b border-black/40 focus:border-black/60 focus:outline-none resize-none tracking-[-0.06em]"
                            />
                        </div>

                        <div className="space-y-3">
                            <p className="md:font-medium text-lg tracking-[-0.06em]">How can we help?</p>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    'Mortgage Brokerage',
                                    'Accounting and Bookkeeping',
                                    'Administrative Support',
                                    'Digital Marketing',
                                    'Web Development and Maintenance',
                                    'IT Support and Market Assistance'
                                ].map((service) => (
                                    <label key={service} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4"
                                            name="checkbox"
                                            value={service} // Ensure the value is set
                                        />
                                        <span className="text-sm font-light">{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center pt-2 md:pt-12 md:justify-end">
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="py-3 w-max justify-end px-6 text-sm text-white transition-colors rounded-md bg-zinc-900 hover:bg-zinc-800"
                            >
                                Let's get started!
                            </motion.button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    )
}
