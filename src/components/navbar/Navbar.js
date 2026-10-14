"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, Search, Phone, Mail, MapPin, MessageCircle, ArrowRight, X } from "lucide-react";
import Portal from "./Portal";
import { company, menuData, whatsappLink } from "@/data/siteContent";

// Free zone menu groups map onto the tabs of the Free Zone explorer section
const EMIRATE_TAB = { Ajman: "Northern Emirates", Fujairah: "Northern Emirates", "Ras Al Khaimah": "Northern Emirates" };

const navigateTo = (href, group) => {
  if (group && href === "#freezones") {
    window.dispatchEvent(new CustomEvent("einova:select-emirate", { detail: EMIRATE_TAB[group] || group }));
  }
  const el = href?.startsWith("#") ? document.querySelector(href) : null;
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else if (href) window.location.href = href;
};

const Navbar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredSubgroup, setHoveredSubgroup] = useState(null);
  const [popupPos, setPopupPos] = useState({ left: 0, top: 0, width: 960 });
  const menuRefs = useRef({});
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [currentContactIdx, setCurrentContactIdx] = useState(0);

  const rotatingContacts = [company.phoneDisplay, company.email];

  // Flat list of every menu item, used by the search box
  const searchIndex = useMemo(
    () =>
      menuData.flatMap((menu) =>
        (menu.submenus || []).flatMap((group) =>
          group.items.map((item) => ({
            ...item,
            menu: menu.title,
            group: group.title,
            href: item.href || menu.path,
          }))
        )
      ),
    []
  );

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (q.length < 2) return [];
    return searchIndex
      .filter((i) => `${i.name} ${i.group} ${i.menu}`.toLowerCase().includes(q))
      .slice(0, 8);
  }, [searchQuery, searchIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentContactIdx((prev) => (prev + 1) % rotatingContacts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [rotatingContacts.length]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculatePopupPosition = (menuTitle) => {
    const menuElement = menuRefs.current[menuTitle];
    if (!menuElement) return;

    const rect = menuElement.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const popupWidth = Math.min(960, windowWidth - 40);

    let left = rect.left;
    if (rect.left + popupWidth > windowWidth) {
      left = windowWidth - popupWidth - 20;
    }
    // Center-aligned menus
    if (rect.left + rect.width / 2 > windowWidth * 0.4 && rect.left + rect.width / 2 < windowWidth * 0.6) {
      left = Math.max(20, (windowWidth - popupWidth) / 2);
    }

    setPopupPos({ left, top: rect.bottom, width: popupWidth });
  };

  // The mega menu is portaled, so leaving the nav item and entering the panel needs a small grace period
  const closeTimer = useRef(null);
  const cancelClose = () => clearTimeout(closeTimer.current);
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setHoveredMenu(null), 120);
  };
  useEffect(() => cancelClose, []);

  const handleMenuHover = (menuTitle) => {
    if (isMobile) return;
    cancelClose();
    calculatePopupPosition(menuTitle);
    setHoveredMenu(menuTitle);
    const menu = menuData.find((m) => m.title === menuTitle);
    if (menu?.submenus) {
      setHoveredSubgroup(menu.submenus[0]?.title || null);
    }
  };

  const handleItemClick = (menu, group, item) => {
    navigateTo(item.href || menu.path, menu.title === "UAE Free Zone" ? group.title : null);
    setHoveredMenu(null);
    setShowMobileMenu(false);
  };

  return (
    <>
      {/* Main nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gold/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
            {/* Logo */}
            <button onClick={() => navigateTo("#home")} className="flex items-center flex-shrink-0 min-w-0 group" aria-label="Einova Ventures Consultants – home">
              <Image src="/logo-mark.png" alt="Einova Ventures Consultants" width={52} height={41} className="h-9 w-auto sm:h-10 mr-2 group-hover:scale-105 transition-transform" priority />
              <span className="flex flex-col items-start leading-none">
                <span className="font-serif font-bold text-sm sm:text-base lg:text-lg tracking-wide text-ink whitespace-nowrap">
                  EINOVA <span className="text-gold-gradient">VENTURES</span>
                </span>
                <span className="font-serif text-[9px] sm:text-[10px] tracking-[0.32em] text-ink/70 mt-0.5">CONSULTANTS</span>
              </span>
            </button>

            {/* Search Bar - hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-lg mx-2 lg:mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
                  placeholder="Search free zones, emirates, services..."
                  className="w-full rounded-full py-2 px-4 pl-10 text-sm border border-gold/30 bg-gold-50/60 text-ink placeholder:text-ink/45 focus:outline-none focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20 transition-all shadow-sm hover:shadow-md"
                />
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gold-dark" />

                <AnimatePresence>
                  {searchFocused && searchQuery.trim().length >= 2 && (
                    <motion.ul
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gold/20 overflow-hidden"
                    >
                      {searchResults.length === 0 ? (
                        <li className="px-4 py-3 text-sm text-ink/60">No matches — try “Dubai” or “visa”</li>
                      ) : (
                        searchResults.map((r) => (
                          <li key={r.id}>
                            <button
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => {
                                navigateTo(r.href, r.menu === "UAE Free Zone" ? r.group : null);
                                setSearchQuery("");
                                setSearchFocused(false);
                              }}
                              className="w-full flex items-center justify-between px-4 py-2.5 text-left hover:bg-gold-50 transition-colors"
                            >
                              <span className="text-sm font-medium text-ink">{r.name}</span>
                              <span className="text-[11px] text-gold-dark">{r.menu} · {r.group}</span>
                            </button>
                          </li>
                        ))
                      )}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-1 md:gap-2 lg:gap-3 flex-shrink-0">
              <div
                className="relative"
                onMouseEnter={() => !isMobile && setShowPopup(true)}
                onMouseLeave={() => !isMobile && setShowPopup(false)}
                onClick={() => isMobile && setShowPopup(!showPopup)}
              >
                <button className="flex items-center space-x-1.5 rounded-full px-2.5 md:px-3 py-1.5 bg-brand text-gold-light border border-gold/40 hover:border-gold transition-colors shadow-sm hover:shadow-md">
                  <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0" />
                  {/* Rotating phone / email on large screens */}
                  <div className="overflow-hidden h-4 hidden lg:flex flex-col justify-center items-start relative" style={{ width: 128 }}>
                    <AnimatePresence initial={false}>
                      <motion.span
                        key={currentContactIdx}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="font-semibold text-xs absolute left-0 top-0 whitespace-nowrap"
                      >
                        {rotatingContacts[currentContactIdx]}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <span className="lg:hidden font-semibold text-xs">Contact</span>
                  <ChevronDown className="h-3 w-3" />
                </button>

                {/* Contact popup */}
                <AnimatePresence>
                  {showPopup && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      role="dialog"
                      aria-label="Contact information"
                      className={`${isMobile ? "fixed inset-x-2 top-16" : "absolute right-0 w-80"} mt-2 bg-white shadow-2xl z-50 flex flex-col overflow-hidden border border-gold/20`}
                      style={{ maxHeight: isMobile ? "calc(100vh - 5rem)" : "75vh", borderRadius: "18px" }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="px-4 py-3 bg-brand relative overflow-hidden">
                        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gold-gradient" />
                        <h3 className="text-sm font-serif font-bold text-gold-gradient">Talk to Our Setup Experts</h3>
                        <p className="text-xs text-on-brand/70">{company.hours}</p>
                      </div>

                      <div className="p-3 space-y-3 overflow-y-auto flex-1 custom-scrollbar">
                        <div>
                          <h4 className="text-[11px] font-semibold text-gold-dark tracking-wider uppercase mb-1.5">Call / WhatsApp</h4>
                          <div className="space-y-1.5">
                            <a href={company.phoneHref} className="bg-gold-50 hover:bg-gold-100 rounded-md p-2 flex items-center transition-colors">
                              <span className="bg-gold-100 rounded-full p-1 mr-2"><Phone className="h-3 w-3 text-gold-dark" /></span>
                              <span className="font-semibold text-ink text-sm">{company.phoneDisplay}</span>
                            </a>
                            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="bg-gold-50 hover:bg-gold-100 rounded-md p-2 flex items-center transition-colors">
                              <span className="bg-gold-100 rounded-full p-1 mr-2"><MessageCircle className="h-3 w-3 text-gold-dark" /></span>
                              <span className="font-semibold text-ink text-sm">Chat on WhatsApp</span>
                            </a>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-semibold text-gold-dark tracking-wider uppercase mb-1.5">Email</h4>
                          <a href={`mailto:${company.email}`} className="bg-gold-50 hover:bg-gold-100 rounded-md p-2 flex items-center transition-colors">
                            <span className="bg-gold-100 rounded-full p-1 mr-2"><Mail className="h-3 w-3 text-gold-dark" /></span>
                            <span className="font-medium text-ink/80 text-sm">{company.email}</span>
                          </a>
                        </div>
                        <div>
                          <h4 className="text-[11px] font-semibold text-gold-dark tracking-wider uppercase mb-1.5">Office</h4>
                          <div className="bg-gold-50 rounded-md p-2 flex items-start">
                            <span className="bg-gold-100 rounded-full p-1 mr-2 mt-0.5"><MapPin className="h-3 w-3 text-gold-dark" /></span>
                            <span className="text-ink/80 text-xs leading-relaxed">{company.address}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-cream px-3 py-2 flex justify-between items-center flex-shrink-0 border-t border-gold/15">
                        <button onClick={() => setShowPopup(false)} className="text-xs font-medium text-gold-dark hover:text-ink flex items-center">
                          <X className="h-3 w-3 mr-1" /> Close
                        </button>
                        <button
                          className="text-xs font-medium text-gold-dark hover:text-ink flex items-center"
                          onClick={() => {
                            setShowPopup(false);
                            navigateTo("#contact");
                          }}
                        >
                          Request Callback <ArrowRight className="h-3 w-3 ml-1" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => navigateTo("#contact")}
                className="hidden lg:inline-flex btn-shine items-center gap-1.5 rounded-full px-4 py-2 bg-gold-gradient text-ink text-xs font-bold tracking-wide shadow-md hover:shadow-lg transition-shadow"
              >
                Free Consultation
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden p-1.5 rounded-md text-ink hover:text-gold-dark flex-shrink-0"
                aria-label="Toggle mobile menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showMobileMenu ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-14 sm:top-16 left-0 right-0 shadow-lg z-40 overflow-hidden bg-brand text-on-brand"
            style={{ maxHeight: "calc(100vh - 4rem)", overflowY: "auto" }}
          >
            <div className="px-3 py-3 border-t border-gold/20">
              <div className="mb-3 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search free zones, services..."
                  className="w-full rounded-lg py-2 pl-8 pr-3 text-sm bg-brand-700 border border-gold/30 text-on-brand placeholder:text-on-brand/40 focus:outline-none focus:border-gold"
                />
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gold" />
                {searchResults.length > 0 && (
                  <ul className="mt-2 rounded-lg bg-brand-800 border border-gold/20 divide-y divide-on-brand/5">
                    {searchResults.map((r) => (
                      <li key={r.id}>
                        <button
                          onClick={() => {
                            navigateTo(r.href, r.menu === "UAE Free Zone" ? r.group : null);
                            setSearchQuery("");
                            setShowMobileMenu(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm"
                        >
                          {r.name} <span className="text-[11px] text-gold/80">· {r.group}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="space-y-1">
                {menuData.map((menu) => (
                  <div key={menu.title} className="border-b border-on-brand/10 last:border-0">
                    <button
                      onClick={() => {
                        if (!menu.submenus) {
                          navigateTo(menu.path);
                          setShowMobileMenu(false);
                        } else {
                          setHoveredMenu(hoveredMenu === menu.title ? null : menu.title);
                        }
                      }}
                      className="flex items-center justify-between w-full py-2.5 text-left font-medium hover:text-gold-light"
                    >
                      {menu.title}
                      {menu.submenus && (
                        <ChevronDown size={16} className={`text-gold transition-transform ${hoveredMenu === menu.title ? "rotate-180" : ""}`} />
                      )}
                    </button>

                    {menu.submenus && hoveredMenu === menu.title && (
                      <div className="pl-3 pb-3 space-y-2">
                        {menu.submenus.map((group) => (
                          <div key={group.title}>
                            <h4 className="font-serif font-semibold text-xs mb-1 text-gold-light">{group.title}</h4>
                            <ul className="space-y-0.5">
                              {group.items.map((item) => (
                                <li key={item.id}>
                                  <button
                                    onClick={() => handleItemClick(menu, group, item)}
                                    className="text-xs w-full text-left py-1 text-on-brand/75 hover:text-gold-light"
                                  >
                                    {item.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-lg py-2.5 bg-gold-gradient text-ink text-sm font-bold"
              >
                <MessageCircle className="h-4 w-4" /> Free Consultation on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom nav */}
      <nav className="fixed top-16 left-0 right-0 z-40 hidden md:block bg-brand text-on-brand/90 border-b border-gold/25">
        <div className="max-w-full px-2 lg:px-4 xl:px-6">
          <div className="flex overflow-x-auto justify-start md:justify-center scrollbar-hide h-12 items-center gap-1">
            {menuData.map((menu) => {
              const hasSubmenus = !!menu.submenus;
              const isOpen = hoveredMenu === menu.title && hasSubmenus && !isMobile;
              return (
                <div
                  key={menu.title}
                  className={`relative transition-colors ${isOpen ? "rounded-t-md bg-white text-ink" : "hover:text-gold-light"}`}
                  ref={(el) => (menuRefs.current[menu.title] = el)}
                  onMouseEnter={() => !isMobile && handleMenuHover(menu.title)}
                  onMouseLeave={() => !isMobile && scheduleClose()}
                >
                  <button
                    className={`flex items-center gap-1 font-medium px-2 lg:px-3.5 py-1.5 whitespace-nowrap text-xs lg:text-sm tracking-wide ${isOpen ? "font-semibold" : ""}`}
                    onClick={() => {
                      navigateTo(menu.path);
                      setHoveredMenu(null);
                    }}
                    type="button"
                  >
                    <span>{menu.title}</span>
                    {hasSubmenus && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180 text-gold-dark" : "text-gold"}`}
                      />
                    )}
                  </button>

                  {hasSubmenus && (
                    <AnimatePresence>
                      {isOpen && (
                        <Portal>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            style={{ position: "fixed", left: popupPos.left, top: popupPos.top, width: popupPos.width, zIndex: 2000 }}
                            className="bg-white text-ink rounded-lg shadow-2xl border border-gold/20 flex flex-col overflow-hidden"
                            onMouseEnter={cancelClose}
                            onMouseLeave={scheduleClose}
                          >
                            {/* Highlights strip - full width */}
                            <div className="w-full border-b border-gold/15 px-4 py-3 bg-gold-50 flex flex-wrap items-center gap-x-5 gap-y-2">
                              <h4 className="font-serif font-semibold flex items-center gap-2 text-gold-gradient">
                                <Star size={16} className="text-gold fill-gold" />
                                Why {menu.title}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {menu.highlights?.map((h) => (
                                  <span key={h} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-gold/30 text-gold-dark">
                                    {h}
                                  </span>
                                ))}
                              </div>
                              <button
                                onClick={() => {
                                  navigateTo("#contact");
                                  setHoveredMenu(null);
                                }}
                                className="ml-auto text-xs font-semibold text-ink hover:text-gold-dark flex items-center gap-1"
                              >
                                Get a free quote <ArrowRight size={14} />
                              </button>
                            </div>

                            <div className="flex flex-col md:flex-row">
                              {/* Left subgroups */}
                              <div className="w-full md:w-1/3 md:border-r border-gold/15 max-h-[400px] overflow-y-auto p-4 bg-cream custom-scrollbar">
                                {menu.submenus.map((group) => {
                                  const active = hoveredSubgroup === group.title;
                                  return (
                                    <div
                                      key={group.title}
                                      className={`py-2 px-3 rounded cursor-pointer transition-colors duration-150 border-l-2 flex justify-between items-center ${
                                        active ? "font-semibold bg-gold-100/70 text-gold-dark border-gold" : "border-transparent text-ink/80 hover:text-ink"
                                      }`}
                                      onMouseEnter={() => setHoveredSubgroup(group.title)}
                                    >
                                      {group.title}
                                      <span className={`text-[10px] rounded-full px-1.5 ${active ? "bg-gold text-white" : "bg-ink/5 text-ink/50"}`}>
                                        {group.items.length}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Right group items */}
                              <div className="w-full md:w-2/3 p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                                {menu.submenus.map((group) => (
                                  <div key={group.title} className={hoveredSubgroup === group.title ? "block" : "hidden"}>
                                    <h4 className="font-serif font-semibold mb-3 border-b border-gold/20 pb-2 text-ink">{group.title}</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                                      {group.items.map((item) => (
                                        <li key={item.id}>
                                          <button
                                            onClick={() => handleItemClick(menu, group, item)}
                                            className="group/item w-full text-left flex items-center gap-2 px-2 py-1.5 rounded-md text-ink/80 hover:text-gold-dark hover:bg-gold-50 transition-colors"
                                          >
                                            <span className="h-1.5 w-1.5 rotate-45 bg-gold flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                                            {item.name}
                                          </button>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        </Portal>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
