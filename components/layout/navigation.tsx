// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const links = [
//     { href: "/work", label: "WORK" },
//     { href: "/about", label: "ABOUT" },
//     { href: "/contact", label: "CONTACT" },
//   ];

//   const pathname = usePathname();

//   const getBackgroundColor = () => {
//     switch (pathname) {
//       case "/work":
//         return "bg-[#845ec2]";
//       case "/about":
//         return "bg-[burlywood]";
//       case "/contact":
//         return "bg-black";
//       default:
//         return "bg-white";
//     }
//   };

//   const getTextColor = () => {
//     switch (pathname) {
//       case "/work":
//         return "text-white";
//       case "/about":
//         return "text-white";
//       case "/contact":
//         return "text-white";
//       default:
//         return "text-neutral-900";
//     }
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//         className={`fixed top-4 right-4 z-50 p-2 rounded-full md:hidden ${getBackgroundColor()} ${getTextColor()}`}
//       >
//         {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>

//       {/* Desktop Navigation */}
//       <nav
//         className={`fixed top-0 left-0 w-16 h-screen hidden md:flex flex-col justify-between items-center py-8 border-r border-neutral-200 ${getBackgroundColor()}`}
//       >
//         <div className="flex flex-col items-center gap-8">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`writing-vertical-lr transform rotate-180 text-sm hover:text-neutral-500 transition-colors ${getTextColor()}`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>

//         <Link
//           href="/"
//           className={`writing-vertical-lr transform rotate-180 text-2xl font-italiana font-bold ${getTextColor()}`}
//         >
//           Amidat Ogunbiyi
//         </Link>

//         <span
//           className={`writing-vertical-lr transform rotate-180 text-sm ${getTextColor()}`}
//         >
//           © 2024
//         </span>
//       </nav>

//       {/* Mobile Navigation */}
//       <nav
//         className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         } ${getBackgroundColor()}`}
//       >
//         <div className="flex flex-col h-full justify-between py-20 px-8">
//           <div className="flex flex-col gap-8">
//             {links.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`text-2xl font-semibold hover:opacity-70 transition-opacity font-italiana cursor-pointer ${getTextColor()}`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           <div className="flex flex-col gap-4">
//             <Link
//               href="/"
//               onClick={() => setIsMenuOpen(false)}
//               className={`text-3xl font-italiana font-bold ${getTextColor()}`}
//             >
//               Amidat Ogunbiyi
//             </Link>
//             <span className={`text-sm ${getTextColor()}`}>© 2024</span>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/work", label: "WORK" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  const pathname = usePathname();

  const getBackgroundColor = () => {
    switch (pathname) {
      case "/work":
        return "bg-[#845ec2]";
      case "/about":
        return "bg-[burlywood]";
      case "/contact":
        return "bg-black";
      default:
        return "bg-white";
    }
  };

  const getTextColor = () => {
    switch (pathname) {
      case "/work":
      case "/about":
      case "/contact":
        return "text-white";
      default:
        return "text-neutral-900";
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed top-4 right-4 z-50 p-2 rounded-full md:hidden ${getBackgroundColor()} ${getTextColor()}`}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 w-16 h-screen hidden md:flex flex-col justify-between items-center py-8 border-r border-neutral-200 ${getBackgroundColor()}`}
      >
        <div className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`writing-vertical-lr transform rotate-180 text-sm hover:text-neutral-500 transition-colors ${getTextColor()}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className={`writing-vertical-lr transform rotate-180 text-2xl font-italiana font-bold ${getTextColor()}`}
        >
          Amidat Ogunbiyi
        </Link>
        <span
          className={`writing-vertical-lr transform rotate-180 text-sm ${getTextColor()}`}
        >
          © 2024
        </span>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${getBackgroundColor()}`}
      >
        <div className="flex flex-col h-full justify-between py-20 px-8">
          <div className="flex flex-col gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-semibold hover:opacity-70 transition-opacity font-italiana cursor-pointer ${getTextColor()}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`text-3xl font-italiana font-bold ${getTextColor()}`}
            >
              Amidat Ogunbiyi
            </Link>
            <span className={`text-sm ${getTextColor()}`}>© 2024</span>
          </div>
        </div>
      </nav>
    </>
  );
}
