"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

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
   const { darkMode, toggleDarkMode } = useTheme();
   const currentLinks = isProjectPage ? navLinksProjectPage : navLinks;

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               key="mobile-nav"
               className="md:hidden fixed inset-0 backdrop-blur-md bg-elevated z-50 flex flex-col"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
            >
               <div className="flex justify-end p-4">
                  <button onClick={onClose} className="text-2xl text-primary">
                     ✕
                  </button>
               </div>
               <div className="flex flex-col items-center justify-center flex-1 gap-[24px]">
                  <span className="text-xs uppercase tracking-widest text-tertiary mb-4">
                     {isProjectPage ? "Project Menu" : "Main Menu"}
                  </span>

                  {currentLinks.map((link) => (
                     <Link
                        key={link.name}
                        href={link.href}
                        className="no-link-border text-xl font-medium nav-link"
                        onClick={onClose}
                     >
                        {link.name}
                     </Link>
                  ))}

                  <button
                     onClick={toggleDarkMode}
                     className="mt-8 p-3 rounded-xl bg-card text-primary shadow-sm hover:text-amber-500 transition-colors"
                     aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                     {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                  </button>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
   const { darkMode, toggleDarkMode } = useTheme();

   const pathname = usePathname();
   const isProjectPage = pathname.startsWith("/projects");

   return (
      <>
         <MobileMenu 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)} 
            isProjectPage={isProjectPage} 
         />

         <nav className="flex justify-between items-center bg-elevated backdrop-blur-md px-4 py-6 sticky top-0 z-50 max-w-8xl">
            <div className="w-full max-w-6xl mx-auto flex items-center">
               <h1 className="text-[16px] font-bold md:text-2xl flex-1 md:flex-none">
                  <Link href="/" className="no-link-border nav-link">
                     {isProjectPage ? "← Back Home" : "Harb Coded"}
                  </Link>
               </h1>

                <div className="hidden md:flex gap-[24px] justify-center text-[16px] mx-auto">
                   {(isProjectPage ? navLinksProjectPage : navLinks).map((link) => (
                       <Link
                          key={link.name}
                          href={link.href}
                          className="no-link-border nav-link"
                       >
                          {link.name}
                       </Link>
                   ))}
                </div>

               <div className="flex items-center gap-3">
                  <button
                     onClick={toggleDarkMode}
                     className="p-2 rounded-lg text-primary hover:text-amber-500 hover:bg-card transition-colors"
                     aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                     {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <motion.button
                     onClick={toggleMenu}
                     className="md:hidden text-primary text-[24px] hover:text-amber-500"
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