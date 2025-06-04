'use client'
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Home Furniture", href: "#categories" },
      { name: "Office Furniture", href: "#categories" },
      { name: "Custom Designs", href: "#categories" },
      { name: "Installation", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", href: "#" },
      { name: "Shipping Policy", href: "#" },
      { name: "Returns & Warranty", href: "#" },
      { name: "Contact Us", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className=" items-center mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent mb-1">
                  BABATIRA
                </h3>
              <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">Furniture & Supply Co.</p>
            </Link>
            <p className="mb-6 text-gray-300">
              Crafting elegant furniture solutions for homes and businesses since
              1995. Quality, durability, and timeless design.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-accent-DEFAULT transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-accent-DEFAULT transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-accent-DEFAULT transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-accent-DEFAULT transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg text-white font-bold mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Babatira Furniture and General
            Supply Company LTD. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}