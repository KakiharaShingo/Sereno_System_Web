import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { Menu, X, Box, Settings, MapPin, Play, Mail, ChevronDown, ExternalLink, ArrowRight, Printer, Cpu, Wrench, ShoppingBag, Layers, Zap, Monitor, Instagram, Truck, ShieldCheck } from 'lucide-react';

import { Link } from 'react-router-dom';
import { translations } from '../translations';

// --- Scroll Reveal Animation Component ---
const RevealOnScroll = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Animate only once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% visible
                rootMargin: '0px 0px -50px 0px'
            }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

// --- Translation Helper ---
// Moved inside component to access state

// --- Language Switcher Component ---
const LanguageSwitcher = ({ mobile = false, currentLocale, onLanguageChange }) => {
    const locales = { ja: '日本語', en: 'English' };

    return (
        <div className={`flex items-center gap-2 ${mobile ? 'mt-4 px-6' : ''}`}>
            {Object.entries(locales).map(([code, label]) => (
                <button
                    key={code}
                    onClick={() => onLanguageChange(code)}
                    className={`text-xs font-bold px-2 py-1 rounded transition-colors ${currentLocale === code
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                        }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [locale, setLocale] = useState('ja');

    const t = (key) => {
        return translations[locale]?.[key] || key;
    };

    // Contact Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
    const [formMessage, setFormMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        setFormMessage('');

        const serviceId = 'service_zpqzyws';
        const templateId = 'template_0d2udd9';
        const autoReplyId = 'template_cv79t3n';
        const publicKey = '4wzDtq7AZn8ndGCr6';

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: formData.name,
            to_email: formData.email,
            subject: formData.subject,
            message: formData.message
        };

        try {
            // Send Main Email (to Admin)
            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            // Send Auto-reply (to User)
            await emailjs.send(serviceId, autoReplyId, templateParams, publicKey);

            setFormStatus('success');
            setFormMessage(t('contact_success'));
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS error:', error);
            setFormStatus('error');
            setFormMessage(t('contact_failure'));
        }
    };

    // Scroll detection for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const NavLink = ({ to, children, mobile }) => (
        <button
            onClick={() => scrollToSection(to)}
            className={`text-sm font-bold tracking-wide transition-all duration-300 hover:text-emerald-600 relative group
        ${mobile ? 'block w-full text-left py-4 text-xl border-b border-emerald-100 text-emerald-900' : 'text-emerald-900/80'}
      `}
        >
            {children}
            {!mobile && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            )}
        </button>
    );

    return (
        // Changed base background to a very light green
        <div className="min-h-screen bg-emerald-50/50 font-sans text-emerald-950 selection:bg-emerald-200 selection:text-emerald-950 relative overflow-x-hidden">

            {/* --- Background Fixed Decoration (3D Printer Motif) --- */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                {/* Animated Gradient Orbs - Made them lighter and more pastel */}
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-300/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-300/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>

                {/* 3D Printer Nozzle & Cube Graphic - Changed color to match the light green theme */}
                <div className="absolute top-[-5%] left-[-5%] md:top-[5%] md:left-[2%] opacity-[0.06] text-emerald-800 animate-float-slow transform scale-75 md:scale-100 origin-top-left z-0">
                    <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Gantry / Rail System */}
                        <path d="M100 50 H500" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        <path d="M100 70 H400" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

                        {/* Nozzle Head */}
                        <g transform="translate(280, 70)">
                            <path d="M-20 0 V20 H20 V0" stroke="currentColor" strokeWidth="3" fill="none" />
                            <path d="M-10 20 V30 H10 V20" stroke="currentColor" strokeWidth="3" fill="none" />
                            <path d="M-2 30 V35 H2 V30" stroke="currentColor" strokeWidth="3" fill="none" />
                        </g>

                        {/* Filament (Curved line) */}
                        <path d="M280 105 C 280 140, 240 130, 250 160" stroke="currentColor" strokeWidth="3" fill="none" />

                        {/* Isometric Cube with Complex Mesh */}
                        <g transform="translate(250, 160)">
                            {/* Outer Hexagon Frame */}
                            <path d="M0 0 L87 50 L87 150 L0 200 L-87 150 L-87 50 Z" stroke="currentColor" strokeWidth="3" fill="none" />

                            {/* Internal Cube Edges (Y-shape) */}
                            <path d="M0 200 V100" stroke="currentColor" strokeWidth="3" />
                            <path d="M0 100 L87 50" stroke="currentColor" strokeWidth="3" />
                            <path d="M0 100 L-87 50" stroke="currentColor" strokeWidth="3" />

                            {/* Complex Internal Mesh Lines */}
                            <g stroke="currentColor" strokeWidth="1.5" opacity="0.6">
                                {/* Top Face Mesh */}
                                <path d="M0 0 Q 20 25, 40 25 T 87 50" fill="none" />
                                <path d="M0 0 Q -20 25, -40 25 T -87 50" fill="none" />
                                <path d="M-43 25 Q 0 50, 43 25" fill="none" />

                                {/* Right Face Mesh */}
                                <path d="M87 50 Q 40 100, 40 125 T 0 200" fill="none" />
                                <path d="M0 100 Q 43 125, 43 150 T 87 150" fill="none" />
                                <path d="M43 75 Q 60 110, 20 160" fill="none" />

                                {/* Left Face Mesh */}
                                <path d="M-87 50 Q -40 100, -40 125 T 0 200" fill="none" />
                                <path d="M0 100 Q -43 125, -43 150 T -87 150" fill="none" />
                                <path d="M-43 75 Q -60 110, -20 160" fill="none" />
                            </g>
                        </g>
                    </svg>
                </div>
            </div>

            {/* --- Navigation --- */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                    // Changed navbar background and shadow to light green tint
                    isScrolled ? 'bg-emerald-50/90 backdrop-blur-xl shadow-lg shadow-emerald-100/50 py-3' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Enhanced Logo */}
                    <div className={`flex items-center gap-4 transition-all duration-300 ${isScrolled ? 'scale-95' : 'scale-100'}`}>
                        <div className="relative w-11 h-11 md:w-14 md:h-14 bg-emerald-900 rounded-xl flex items-center justify-center shadow-2xl shadow-emerald-400/20 transform rotate-3 group-hover:rotate-0 transition-transform duration-500 cursor-pointer overflow-hidden group">
                            {/* Shine effect on logo */}
                            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine"></div>
                            <Layers size={28} className="text-emerald-300 absolute -top-1 -left-1 opacity-80" />
                            <Printer size={28} className="text-white relative z-10" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-emerald-950 leading-none">
                                3DMOTO<span className="text-emerald-500">CRAFT</span>
                            </span>
                            <span className="text-[0.65rem] font-bold tracking-[0.2em] text-emerald-700/80 uppercase hidden md:block mt-1 pl-0.5">
                                Sereno System
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        <NavLink to="services">{t('nav_business')}</NavLink>
                        <NavLink to="shop">Online Shop</NavLink>
                        <NavLink to="youtube">{t('nav_youtube')}</NavLink>
                        <NavLink to="location">{t('nav_location')}</NavLink>
                        <NavLink to="company">{t('nav_company')}</NavLink>
                        <LanguageSwitcher currentLocale={locale} onLanguageChange={setLocale} />
                        <button
                            onClick={() => scrollToSection('contact')}
                            // Changed button style to fit light green theme
                            className="px-6 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-400/30 flex items-center gap-2 group"
                        >
                            {t('nav_contact')}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-emerald-900 hover:text-emerald-600 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-emerald-50/95 backdrop-blur-xl shadow-xl border-t border-emerald-100 transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex flex-col px-6 py-6 space-y-2">
                        <NavLink to="services" mobile>{t('nav_business')}</NavLink>
                        <NavLink to="shop" mobile>Online Shop</NavLink>
                        <NavLink to="youtube" mobile>{t('nav_youtube')}</NavLink>
                        <NavLink to="location" mobile>{t('nav_location')}</NavLink>
                        <NavLink to="company" mobile>{t('nav_company')}</NavLink>
                        <LanguageSwitcher mobile currentLocale={locale} onLanguageChange={setLocale} />
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="mt-6 w-full py-4 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-200"
                        >
                            {t('nav_contact')}
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <header className="relative pt-36 pb-20 lg:pt-52 lg:pb-40 overflow-hidden z-10">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <RevealOnScroll>
                        {/* Tech Badge - Lighter green border and text */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 border border-emerald-200 rounded-full text-xs font-bold tracking-widest uppercase text-emerald-700 mb-8 shadow-sm hover:border-emerald-300 hover:text-emerald-600 transition-colors cursor-default backdrop-blur-sm">
                            <Zap size={12} className="text-emerald-500 fill-emerald-500" />
                            {t('hero_badge')}
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-900 via-emerald-600 to-teal-600 mb-8 leading-tight drop-shadow-sm">
                            {t('hero_title')}
                        </h1>

                        <p className="text-lg md:text-xl text-emerald-900/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                            {t('hero_subtitle')}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <button onClick={() => scrollToSection('services')} className="px-9 py-4 bg-emerald-900 text-white rounded-xl font-bold hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl hover:shadow-2xl hover:shadow-emerald-900/20 hover:-translate-y-1">
                                {t('hero_cta')}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button onClick={() => scrollToSection('contact')} className="px-9 py-4 bg-white/80 text-emerald-900 border-2 border-emerald-100 rounded-xl font-bold hover:border-emerald-300 hover:text-emerald-700 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-emerald-100/50 hover:-translate-y-1 backdrop-blur-sm">
                                {t('nav_contact')}
                            </button>
                        </div>
                    </RevealOnScroll>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-emerald-300">
                    <ChevronDown size={32} />
                </div>
            </header>

            {/* --- Services Section --- */}
            {/* Lighter background for sections */}
            <section id="services" className="py-24 bg-emerald-50/80 backdrop-blur-sm z-10 relative">
                <div className="container mx-auto px-6">
                    <RevealOnScroll>
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">{t('business_title')}</h2>
                            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-300 mx-auto rounded-full"></div>
                            <p className="mt-6 text-emerald-900/70 text-lg">{t('business_description')}</p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-3 gap-8">
                        <RevealOnScroll delay={100}>
                            <ServiceCard
                                icon={<Printer size={40} />}
                                title={t('business_service1_title')}
                                desc={t('business_service1_desc')}
                            />
                        </RevealOnScroll>
                        <RevealOnScroll delay={200}>
                            <ServiceCard
                                icon={<Cpu size={40} />}
                                title={t('business_service2_title')}
                                desc={t('business_service2_desc')}
                            />
                        </RevealOnScroll>
                        <RevealOnScroll delay={300}>
                            <ServiceCard
                                icon={<Monitor size={40} />}
                                title={t('business_service3_title')}
                                desc={t('business_service3_desc')}
                            />
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* --- Online Shop Section --- */}
            {/* Adjusted gradient to be lighter */}
            <section id="shop" className="py-28 bg-gradient-to-b from-emerald-50/80 to-emerald-100/50 z-10 relative clip-path-slant">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <RevealOnScroll>
                                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-emerald-100/80 text-emerald-800 rounded-full text-xs font-bold tracking-wide uppercase border border-emerald-200 backdrop-blur-sm">
                                    <ShoppingBag size={14} /> {t('shop_official')}
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-8 leading-tight">
                                    3DMOTO<span className="text-emerald-500">CRAFT</span> {t('shop_title_suffix')}
                                </h2>
                                <p className="text-emerald-900/80 text-lg mb-10 leading-relaxed border-l-4 border-emerald-300 pl-6">
                                    {t('shop_description')}
                                </p>

                                <div className="flex flex-col gap-4 mb-10">
                                    <div className="flex items-center gap-4 text-emerald-800 font-bold bg-white/50 p-3 rounded-xl border border-emerald-100 backdrop-blur-sm shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                            <Truck size={20} />
                                        </div>
                                        {t('shop_feature_delivery')}
                                    </div>
                                    <div className="flex items-center gap-4 text-emerald-800 font-bold bg-white/50 p-3 rounded-xl border border-emerald-100 backdrop-blur-sm shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                            <ShieldCheck size={20} />
                                        </div>
                                        {t('shop_feature_payment')}
                                    </div>
                                    <div className="flex items-center gap-4 text-emerald-800 font-bold bg-white/50 p-3 rounded-xl border border-emerald-100 backdrop-blur-sm shadow-sm">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                            <Wrench size={20} />
                                        </div>
                                        {t('shop_feature_custom')}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="https://serenosystem.3d-moto-craft.com/" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-emerald-200/50 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 group">
                                        <ShoppingBag size={22} />
                                        {t('shop_button')}
                                        <ExternalLink size={18} className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                </div>
                            </RevealOnScroll>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            {/* Shop Visual: A grid of mock products with staggered animation */}
                            <div className="grid grid-cols-2 gap-5 relative">
                                {/* Decorative blob behind images - Lighter and more transparent */}
                                <div className="absolute inset-0 bg-emerald-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 transform translate-x-10 translate-y-10 animate-pulse-slow"></div>

                                <div className="space-y-5 transform translate-y-12">
                                    <RevealOnScroll delay={200}>
                                        {/* Adjusted card borders and shadows for light theme */}
                                        <a href="https://serenosystem.3d-moto-craft.com/" target="_blank" rel="noopener noreferrer" className="block bg-white/90 p-3 rounded-2xl shadow-xl shadow-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer border border-emerald-100 backdrop-blur-sm">
                                            <div className="aspect-square bg-emerald-50 rounded-xl mb-4 overflow-hidden relative">
                                                <img
                                                    src="/images/shop_product_1.png"
                                                    alt="Part 1"
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <span className="absolute top-2 right-2 bg-emerald-900 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">New</span>
                                            </div>
                                            <p className="font-bold text-lg text-emerald-700">{t('shop_product1_title')}</p>
                                            <p className="text-sm text-emerald-600">{t('shop_product1_desc')}</p>
                                            <div className="mt-6 px-6 py-2 bg-white text-emerald-900 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all inline-block">
                                                {t('shop_view_product')}
                                            </div>
                                        </a>
                                    </RevealOnScroll>

                                    <RevealOnScroll delay={400}>
                                        <a href="https://serenosystem.3d-moto-craft.com/items/103260685" target="_blank" rel="noopener noreferrer" className="block bg-white/90 p-3 rounded-2xl shadow-xl shadow-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer border border-emerald-100 backdrop-blur-sm">
                                            <div className="aspect-square bg-emerald-50 rounded-xl mb-4 overflow-hidden">
                                                <img
                                                    src="/images/shop_product_2.png"
                                                    alt="Part 2"
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <p className="font-bold text-lg text-emerald-700">{t('shop_product2_title')}</p>
                                            <p className="text-sm text-emerald-600">{t('shop_product2_desc')}</p>
                                            <div className="mt-6 px-6 py-2 bg-white text-emerald-900 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all inline-block">
                                                {t('shop_view_product')}
                                            </div>
                                        </a>
                                    </RevealOnScroll>
                                </div>

                                <div className="space-y-5">
                                    <RevealOnScroll delay={300}>
                                        <a href="https://serenosystem.3d-moto-craft.com/items/117131223" target="_blank" rel="noopener noreferrer" className="block bg-white/90 p-3 rounded-2xl shadow-xl shadow-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer border border-emerald-100 backdrop-blur-sm">
                                            <div className="aspect-square bg-emerald-50 rounded-xl mb-4 overflow-hidden">
                                                <img
                                                    src="/images/shop_product_3.png"
                                                    alt="Part 3"
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <p className="font-bold text-lg text-emerald-700">{t('shop_product3_title')}</p>
                                            <p className="text-sm text-emerald-600">{t('shop_product3_desc')}</p>
                                            <div className="mt-6 px-6 py-2 bg-white text-emerald-900 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all inline-block">
                                                {t('shop_view_product')}
                                            </div>
                                        </a>
                                    </RevealOnScroll>

                                    <RevealOnScroll delay={500}>
                                        <a href="https://serenosystem.3d-moto-craft.com/" target="_blank" rel="noopener noreferrer" className="bg-emerald-900 p-6 rounded-2xl shadow-xl shadow-emerald-900/20 flex flex-col items-center justify-center text-white text-center h-48 hover:bg-emerald-800 transition-colors duration-500 cursor-pointer group block">
                                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                                <ArrowRight size={24} className="text-white" />
                                            </div>
                                            <span className="font-bold text-lg">{t('shop_more')}</span>
                                        </a>
                                    </RevealOnScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- YouTube Section (Dark Mode - Now Dark Green) --- */}
            {/* Changed dark background to a deep forest green */}
            <section id="youtube" className="py-24 bg-emerald-950 text-white relative overflow-hidden z-10">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-950 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-emerald-950 to-transparent z-10"></div>

                <div className="container mx-auto px-6 relative z-20">
                    <RevealOnScroll>
                        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 border-b border-emerald-900 pb-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-4">
                                    <span className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/50">
                                        <Play className="fill-white text-white ml-1" size={24} />
                                    </span>
                                    {t('youtube_title')}
                                </h2>
                                <p className="text-emerald-300/80 text-lg">{t('youtube_description')}</p>
                            </div>
                            <a href="https://www.youtube.com/@kaaki_bike" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-emerald-900 hover:bg-red-600 hover:text-white rounded-full transition-all duration-300 text-sm font-bold flex items-center gap-2 group border border-emerald-800">
                                {t('youtube_visit')}
                                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </RevealOnScroll>

                    {/* Video Showcase - Styled like a cinema frame */}
                    <RevealOnScroll delay={200}>
                        <div className="w-full max-w-5xl mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/50 border border-emerald-900 transform hover:scale-[1.01] transition-transform duration-500 group">
                            <div className="aspect-video relative">
                                <iframe
                                    src="https://www.youtube.com/embed/tL0SQDVZWAE"
                                    title="YouTube video player"
                                    className="w-full h-full absolute top-0 left-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- Location & Info Grid --- */}
            {/* Lighter background */}
            <section id="location" className="py-24 bg-emerald-50 z-10 relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-stretch">

                        {/* Map Area */}
                        <RevealOnScroll>
                            <div className="h-full bg-white/80 p-3 rounded-3xl shadow-xl shadow-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-300 border border-emerald-100 backdrop-blur-sm">
                                <div className="w-full h-full min-h-[400px] bg-emerald-100/50 rounded-2xl overflow-hidden relative group">
                                    {/* Placeholder for Google Maps */}
                                    <iframe
                                        src="https://maps.google.com/maps?q=34.4288532,135.4912133&z=15&output=embed"
                                        className="w-full h-full absolute inset-0 border-0"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                    <div className="absolute inset-0 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                                    {/* Mock Map UI elements */}
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-5 py-3 rounded-xl shadow-lg text-sm font-bold text-emerald-900 border border-emerald-100">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-emerald-500" />
                                            3DMOTOCRAFT
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        {/* Company Info (Compact) */}
                        <RevealOnScroll delay={200}>
                            <div id="company" className="h-full bg-white/80 p-10 rounded-3xl shadow-xl shadow-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-300 border-t-8 border-emerald-400 flex flex-col justify-center backdrop-blur-sm border border-emerald-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <Settings className="text-emerald-300" size={32} />
                                    <h3 className="text-3xl font-bold text-emerald-950">{t('company_title')}</h3>
                                </div>

                                <dl className="space-y-6">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-emerald-100 pb-4">
                                        <dt className="w-full sm:w-40 font-bold text-emerald-700/80 text-sm uppercase tracking-wider mb-1 sm:mb-0 shrink-0">{t('company_name')}</dt>
                                        <dd className="flex-1 font-bold text-lg text-emerald-900">{t('company_name_value')}</dd>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-emerald-100 pb-4">
                                        <dt className="w-full sm:w-40 font-bold text-emerald-700/80 text-sm uppercase tracking-wider mb-1 sm:mb-0 shrink-0">{t('company_representative')}</dt>
                                        <dd className="flex-1 font-bold text-lg text-emerald-900">{t('company_representative_value')}</dd>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-emerald-100 pb-4">
                                        <dt className="w-full sm:w-40 font-bold text-emerald-700/80 text-sm uppercase tracking-wider mb-1 sm:mb-0 shrink-0">{t('company_business')}</dt>
                                        <dd className="flex-1 font-medium text-emerald-800 leading-relaxed">
                                            {t('company_business_value')}
                                        </dd>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-baseline pt-2">
                                        <dt className="w-full sm:w-40 font-bold text-emerald-700/80 text-sm uppercase tracking-wider mb-1 sm:mb-0 shrink-0">{t('company_address')}</dt>
                                        <dd className="flex-1 font-medium text-emerald-800">{t('company_address_value')}</dd>
                                    </div>
                                </dl>
                            </div>
                        </RevealOnScroll>

                    </div>
                </div>
            </section>

            {/* --- Contact Section --- */}
            <section id="contact" className="py-24 relative bg-emerald-900 overflow-hidden z-10">
                {/* Decorative background - Adapted for green theme */}
                <div className="absolute inset-0 bg-emerald-950 opacity-90"></div>
                <div className="absolute -right-20 top-20 w-[800px] h-[800px] bg-emerald-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse-slow"></div>
                <div className="absolute -left-20 bottom-20 w-[600px] h-[600px] bg-teal-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20 animate-pulse-slow delay-700"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <RevealOnScroll>
                        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-8 md:p-14 rounded-[2.5rem] shadow-2xl border border-emerald-800/30">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('contact_title')}</h2>
                                <p className="text-emerald-100 text-sm md:text-base">{t('contact_description')}</p>
                            </div>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {formStatus === 'success' && (
                                    <div className="p-4 bg-emerald-100 border border-emerald-400 text-emerald-700 rounded-xl">
                                        {formMessage}
                                    </div>
                                )}
                                {formStatus === 'error' && (
                                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                                        {formMessage}
                                    </div>
                                )}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider ml-1">{t('contact_name')}</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-5 py-4 bg-emerald-900/50 border border-emerald-500/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-emerald-900/80 transition-all placeholder-emerald-300/50"
                                            placeholder={t('contact_name_placeholder')}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider ml-1">{t('contact_email')}</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-5 py-4 bg-emerald-900/50 border border-emerald-500/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-emerald-900/80 transition-all placeholder-emerald-300/50"
                                            placeholder={t('contact_email_placeholder')}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider ml-1">{t('contact_subject')}</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-5 py-4 bg-emerald-900/50 border border-emerald-500/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-emerald-900/80 transition-all placeholder-emerald-300/50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-emerald-200 uppercase tracking-wider ml-1">{t('contact_message')}</label>
                                    <textarea
                                        rows="5"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-5 py-4 bg-emerald-900/50 border border-emerald-500/30 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-emerald-900/80 transition-all placeholder-emerald-300/50"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className={`w-full py-5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-emerald-900/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 mt-4 ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <Mail size={22} />
                                    {formStatus === 'submitting' ? t('contact_sending') : t('contact_submit')}
                                </button>
                            </form>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* --- Footer --- */}
            {/* Changed footer to deep green */}
            <footer className="bg-emerald-950 text-emerald-300/80 py-16 border-t border-emerald-900 z-10 relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center relative border border-emerald-800">
                                    <Layers size={20} className="text-emerald-400 absolute -top-0.5 -left-0.5 opacity-80" />
                                    <Printer size={20} className="text-white relative z-10" />
                                </div>
                                <div>
                                    <span className="text-2xl font-bold tracking-tighter text-white leading-none">
                                        3DMOTO<span className="text-emerald-500">CRAFT</span>
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-emerald-300/70 max-w-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: t('footer_tagline') }}></p>
                        </div>

                        <div className="flex flex-wrap gap-8 md:gap-16">
                            <div>
                                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{t('footer_services')}</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">{t('business_service1_title')}</button></li>
                                    <li><button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">{t('business_service2_title')}</button></li>
                                    <li><button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">{t('business_service3_title')}</button></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{t('footer_company')}</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors text-left">{t('nav_business')}</button></li>
                                    <li><button onClick={() => scrollToSection('company')} className="hover:text-emerald-400 transition-colors text-left">{t('nav_company')}</button></li>
                                    <li><button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors text-left">{t('nav_contact')}</button></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{t('footer_legal')}</h4>
                                <ul className="space-y-2 text-sm">
                                    <li><Link to="/privacy" className="hover:text-emerald-400 transition-colors">{t('footer_privacy')}</Link></li>
                                    <li><Link to="/terms" className="hover:text-emerald-400 transition-colors">{t('footer_terms')}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-emerald-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-emerald-300/60">
                        <p>{t('footer_copyright')}</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a href="https://x.com/bon_tenn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-emerald-900 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer border border-emerald-800 group">
                                <span className="font-bold text-sm">X</span>
                            </a>
                            <a href="https://www.instagram.com/kaakii_s/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-emerald-900 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer border border-emerald-800 group">
                                <Instagram size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Helper Component for Service Cards
function ServiceCard({ icon, title, desc }) {
    return (
        // Adjusted card styles for light green theme
        <div className="group h-full p-10 bg-white/80 rounded-[2rem] border border-emerald-100 hover:border-emerald-300 shadow-xl shadow-emerald-100/50 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 group-hover:bg-emerald-100/50"></div>

            <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-emerald-200">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-4 group-hover:text-emerald-600 transition-colors">{title}</h3>
                <p className="text-emerald-900/70 leading-relaxed text-sm">
                    {desc}
                </p>
            </div>
        </div>
    );
}
