"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
   { name: "About me", href: "#about" },
   { name: "Projects", href: "#project" },
   { name: "Contact me", href: "#contact" },
];

const navLinksProjectPage = [
   { name: "Description", href: "#description" },
   { name: "Technology", href: "#technology" },
   { name: "Gallery", href: "#gallery" },
];

// Added 'isProjectPage' to the props here
const MobileMenu = ({
   isOpen,
   onClose,
   isProjectPage,
}: {
   isOpen: boolean;
   onClose: () => void;
   isProjectPage: boolean;
}) => {
   // Determine which links to use based on the current page
   const currentLinks = isProjectPage ? navLinksProjectPage : navLinks;

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               key="mobile-nav"
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
                  {/* Dynamic Heading inside Mobile Menu */}
                  <span className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                     {isProjectPage ? "Project Menu" : "Main Menu"}
                  </span>

                  {currentLinks.map((link) => (
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
};

export function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

   const pathname = usePathname();
   const isProjectPage = pathname.startsWith("/projects");

   return (
      <>
         {/* Pass the isProjectPage prop here */}
         <MobileMenu 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)} 
            isProjectPage={isProjectPage} 
         />

         <nav className="flex justify-between items-center backdrop-blur-md px-4 py-6 sticky top-0 z-50 max-w-8xl">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-5 items-center">
               <h1 className="col-span-4 text-[16px] font-bold md:text-2xl md:col-span-1">
                  <Link href="/">
                     {isProjectPage ? "← Back Home" : "Harb Coded"}
                  </Link>
               </h1>

               {/* Desktop Menu Logic */}
               <div className="hidden md:flex gap-[24px] justify-center text-gray-900 text-[16px] col-span-3">
                  {(isProjectPage ? navLinksProjectPage : navLinks).map((link) => (
                     <a
                        key={link.name}
                        href={link.href}
                        className="hover:text-amber-500"
                     >
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
                     {isMenuOpen ? "✕" : "☰"}
                  </motion.button>
               </div>
            </div>
         </nav>
      </>
   );
}