"use client";

import HeroSVG from "@/public/svg/hero.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="mx-auto max-w-7xl overflow-hidden bg-gray-950"
        >
            <div className="relative flex min-h-screen flex-col md:flex-row">

                {/* RIGHT STRIP */}
                <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute right-0 top-0 h-full w-3/12 bg-yellow-500 md:w-4/12"
                >
                    <div className="flex h-full items-center justify-center">
                        <h1 className="origin-center rotate-90 text-base sm:text-lg md:text-2xl whitespace-nowrap">
                            <span className="text-white">Patrick</span>{" "}
                            <span className="text-gray-950">Masoka</span>
                        </h1>
                    </div>
                </motion.div>

                {/* CONTENT */}
                <div className="flex w-full flex-col-reverse items-center justify-center px-4 md:w-9/12 md:flex-row md:items-end md:px-6">

                    {/* TEXT */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full pb-10 pt-5 md:w-1/2"
                    >
                        <h2 className="text-lg text-yellow-500 md:text-xl">
                            Full Stack Developer
                        </h2>

                        <div className="mt-4 flex justify-start md:justify-end">
                            <a
                                href="mailto:pjmasoka@gmail.com"
                                className="rounded-lg border border-yellow-700 bg-yellow-600 px-5 py-2 text-gray-200 transition hover:bg-yellow-500"
                            >
                                Hire Me
                            </a>
                        </div>

                        <div className="mt-10 flex flex-col gap-6">

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4"
                            >
                                <h3 className="text-2xl text-gray-100">2+</h3>
                                <p className="text-gray-200">Years of experience</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-4"
                            >
                                <h3 className="text-2xl text-gray-100">10+</h3>
                                <p className="text-gray-200">Projects created</p>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-6 mt-10 h-64 w-full md:mb-0 md:h-[500px] md:w-1/2"
                    >
                        <Image
                            src={HeroSVG}
                            alt="Hero"
                            fill
                            priority
                            className="rounded-xl object-contain md:object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;