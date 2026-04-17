'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
   { name: "About me", href: "#about" },
   { name: "Projects", href: "#project" },
   { name: "Contact me", href: "#contact" },
];

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div 
               key="mobile-nav" // Key is vital for AnimatePresence to track the element
               className="md:hidden fixed inset-0 backdrop-blur-md bg-gray-100/60 z-50 flex flex-col"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }} 
               transition={{ duration: 0.3, ease: "easeInOut" }}
            >
               <div className="flex justify-end p-4">
                  <button onClick={onClose} className="text-2xl text-gray-900">
                      ✕
                  </button>
               </div>
               <div className="flex flex-col items-center justify-center flex-1 gap-[24px]">
                  {navLinks.map((link) => (
                     <a
                        key={link.name}
                        href={link.href}
                        className="text-xl font-medium hover:text-amber-500"
                        onClick={onClose}
                     >
                        {link.name}
                     </a>
                  ))}
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}

export function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

   return (
      <>
         {/* The component stays "mounted" but its internal AnimatePresence handles the logic */}
         <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

         <nav className="flex justify-between items-center backdrop-blur-md p-4 sticky top-0 z-50 max-w-8xl">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-5 items-center">
               <h1 className="col-span-4 text-[12px] font-bold md:text-xl md:col-span-1">
                  Harb <br /> Coded
               </h1>
               
               <div className="hidden md:flex gap-[24px] justify-center text-gray-900 text-[16px] col-span-3">
                  {navLinks.map((link) => (
                     <a key={link.name} href={link.href} className="hover:text-amber-500">
                        {link.name}
                     </a>
                  ))}
               </div>

               <div className="md:hidden justify-self-end">
                  <motion.button
                     onClick={toggleMenu}
                     className="text-gray-900 text-[24px] hover:text-amber-500"
                     whileTap={{ scale: 0.9 }}
                     animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  > 
                     {isMenuOpen ? '✕' : '☰'}
                  </motion.button>
               </div>
            </div>
         </nav>
      </>
   );
}