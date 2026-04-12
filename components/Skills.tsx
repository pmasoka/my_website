"use client";

import Image from "next/image";
import { skillsItems } from "@/data";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="min-h-fit bg-gray-800" id="skills">
      <div className="px-5 py-14 md:container">

        {/* HEADINGS */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-yellow-500"
        >
          Skills
        </motion.h2>

        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-2 text-gray-300"
        >
          MY TOP SKILLS
        </motion.h4>

        {/* CARDS */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {skillsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative flex w-full max-w-sm items-center gap-5 rounded-md border-2 border-yellow-700 bg-gray-950 p-5"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-125"
              />

              <div>
                <h6 className="text-gray-100">{item.name}</h6>
                <p className="italic text-gray-300">
                  {item.description}
                </p>

                <div className="absolute right-3 top-3 text-yellow-500">
                  <HiOutlineArrowUpRight size={22} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;