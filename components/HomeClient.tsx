'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define interfaces for the data we expect from Sanity
interface Experience {
    role: string;
    company: string;
    duration: string;
    description: string[];
}

interface Education {
    degree: string;
    institution: string;
    status: string;
    year?: string;
    order?: number;
}

interface Skill {
    title: string;
    category: string;
}

interface Hobby {
    name: string;
    icon: string;
}

interface Profile {
    name: string;
    role: string;
    summary: string;
    email: string;
    phone: string;
    target_roles?: string[];
    credentials?: { label: string; value: string }[];
    strengths?: { title: string; description: string }[];
}

interface Declaration {
    statement: string;
    name: string;
}

interface HomeProps {
    profile: Profile;
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    hobbies: Hobby[];
    declaration: Declaration;
}

export default function HomeClient({
    profile,
    experience,
    education,
    skills,
    hobbies,
    declaration
}: HomeProps) {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setFormStatus('submitting');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mykdywwv', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
            } else {
                setFormStatus('error');
            }
        } catch (err) {
            setFormStatus('error');
        }
    }

    // Fallback / Defaults if Sanity is empty (optional, but good for "Transition")
    // Actually, we will handle empty arrays in the UI rendering or pass defaults from page.tsx
    // For now, let's assume props might be empty and render conditionally or show defaults if desired.
    // The user asked for CMS to *edit*, so if it's empty, it should probably be empty?
    // BUT the user currently HAS data. If I deploy this, the site will be BLANK until they fill Sanity.
    // CRITICAL: verified strategy -> I should use the hardcoded data as FALLBACK in page.tsx if Sanity returns null/empty.

    return (
        <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-slate-200 selection:text-slate-900">

            {/* 1. Header: Sticky Navigation */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
                        RK.
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <Link href="#about" className="hover:text-slate-900 transition-colors">About</Link>
                        <Link href="#experience" className="hover:text-slate-900 transition-colors">Experience</Link>
                        <Link href="#education" className="hover:text-slate-900 transition-colors">Education</Link>
                        <Link href="#contact" className="hover:text-slate-900 transition-colors">Contact</Link>
                    </nav>
                    <a
                        href="/Reet_Kumari_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-sm hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg"
                    >
                        Download CV
                    </a>
                </div>
            </header>

            {/* 2. Hero Section */}
            <section className="relative py-24 md:py-32 bg-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                        {profile?.name || 'Reet Kumari'}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 font-light tracking-wide">
                        {profile?.role || 'Operations Executive | Office Administrator'}
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
                        <Link
                            href="#contact"
                            className="inline-block px-8 py-3 bg-slate-900 text-white rounded-md font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                        >
                            Contact Reet
                        </Link>
                    </div>
                    <div className="flex justify-center gap-8 text-slate-500">
                        <a href={`mailto:${profile?.email || 'itsmereet7857@gmail.com'}`} className="hover:text-slate-900 transition-colors flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            {profile?.email || 'itsmereet7857@gmail.com'}
                        </a>
                        <a href={`tel:${profile?.phone || '9931280821'}`} className="hover:text-slate-900 transition-colors flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            {/* Format phone number slightly for display if needed */}
                            {profile?.phone || '+91 99312 80821'}
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. Professional Summary */}
            <section id="about" className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Professional Summary</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        {profile?.summary || "I am a dedicated professional with a strong foundation in Physics, bridging the gap between analytical thinking and operational excellence. My expertise lies in streamlining office processes, ensuring backend operations run smoothly, and maintaining high standards of documentation and workflow coordination. With a transition from academic research to administration, I bring a unique, detail-oriented perspective to every task."}
                    </p>
                </div>
            </section>

            {/* 4. Target Roles (NEW) */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-10">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Open To Opportunities</h3>
                        <h2 className="text-2xl font-serif font-bold text-slate-900">Target Roles</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {(profile.target_roles && profile.target_roles.length > 0) ? profile.target_roles.map((role) => (
                            <span key={role} className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all cursor-default">
                                {role}
                            </span>
                        )) : (
                            // Fallback
                            ['Operations Associate', 'Administrative Coordinator', 'Back Office Executive', 'Workflow Specialist', 'Office Administrator', 'Support Analyst'].map((role) => (
                                <span key={role} className="px-5 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 font-medium hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all cursor-default">
                                    {role}
                                </span>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* 5. Strengths (NEW) */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-4 gap-8">
                        {(profile.strengths && profile.strengths.length > 0) ? profile.strengths.map((strength, index) => (
                            <div key={index} className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors">
                                <h3 className="text-xl font-bold mb-3 text-slate-100">{strength.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{strength.description}</p>
                            </div>
                        )) : (
                            // Fallback
                            <>
                                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors">
                                    <h3 className="text-xl font-bold mb-3 text-slate-100">Adaptability</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Quick learner adaptable to new work environments and evolving operational needs.</p>
                                </div>
                                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors">
                                    <h3 className="text-xl font-bold mb-3 text-slate-100">Dedication</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Hardworking professional committed to continuous growth and organizational success.</p>
                                </div>
                                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors">
                                    <h3 className="text-xl font-bold mb-3 text-slate-100">Problem Solving</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Strong analytical abilities for identifying bottlenecks and implementing effective solutions.</p>
                                </div>
                                <div className="p-6 bg-slate-800/50 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors">
                                    <h3 className="text-xl font-bold mb-3 text-slate-100">Reliability</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">Punctual, dependable team player who ensures tasks are completed with precision.</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* 6. Experience Grid */}
            <section id="experience" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex items-center gap-4 mb-12">
                        <span className="h-px flex-1 bg-slate-200"></span>
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Experience</h2>
                        <span className="h-px flex-1 bg-slate-200"></span>
                    </div>

                    <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 space-y-12">

                        {(experience && experience.length > 0) ? experience.map((exp, index) => (
                            <div key={index} className="md:grid md:grid-cols-[200px_1fr] md:gap-8 relative">
                                <div className="md:text-right mb-4 md:mb-0">
                                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">{exp.duration}</span>
                                </div>
                                {/* Dot */}
                                <div className="absolute left-[-21px] md:left-auto md:right-[calc(100%+33px)] top-2 w-3 h-3 rounded-full bg-slate-900 border-2 border-white"></div>

                                <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                                    <p className="text-slate-500 mb-4 font-medium italic">{exp.company}</p>
                                    <ul className="space-y-3 text-slate-600">
                                        {exp.description && exp.description.map((desc, i) => (
                                            <li key={i} className="flex gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )) : (
                            // FALLBACK
                            <div className="md:grid md:grid-cols-[200px_1fr] md:gap-8 relative">
                                <div className="md:text-right mb-4 md:mb-0">
                                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">3 Months</span>
                                </div>
                                {/* Dot */}
                                <div className="absolute left-[-21px] md:left-auto md:right-[calc(100%+33px)] top-2 w-3 h-3 rounded-full bg-slate-900 border-2 border-white"></div>

                                <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">Operations / Support Intern</h3>
                                    <p className="text-slate-500 mb-4 font-medium italic">Confidential / Private Firm</p>
                                    <ul className="space-y-3 text-slate-600">
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                                            <span>Coordinated daily administrative workflows, checking and processing over 50+ documents weekly.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                                            <span>Streamlined internal reporting systems, reducing data entry errors by 20%.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                                            <span>Provided high-level support for team scheduling and cross-departmental communication.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* 7. Skills & Stats */}
            <section id="skills" className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-10 text-center">Technical Proficiency</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {(skills && skills.length > 0) ? skills.map((skill) => (
                            <div key={skill.title} className="bg-white border border-slate-200 p-4 rounded-md text-center hover:border-slate-900 transition-colors shadow-sm">
                                <p className="font-medium text-slate-700">{skill.title}</p>
                            </div>
                        )) : (
                            // Fallback skills
                            ['Office Administration', 'Workflow Coordination', 'Data Entry', 'Documentation', 'MS Office Suite', 'Google Workspace', 'Customer Support', 'Reporting'].map((skill) => (
                                <div key={skill} className="bg-white border border-slate-200 p-4 rounded-md text-center hover:border-slate-900 transition-colors shadow-sm">
                                    <p className="font-medium text-slate-700">{skill}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* 8. Education */}
            <section id="education" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900">Education</h2>
                    </div>

                    <div className="space-y-6">
                        {(education && education.length > 0) ? education.map((edu, index) => (
                            <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-slate-50 rounded-lg border border-slate-100 transition-transform hover:-translate-y-1">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                                    <p className="text-slate-600">{edu.institution}</p>
                                </div>
                                <div className="mt-2 md:mt-0 flex gap-3 items-center">
                                    {/* Add grade if exists and different from status? Schema has just status. Let's use status. */}
                                    <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full">{edu.status}</span>
                                </div>
                            </div>
                        )) : (
                            // FALLBACK
                            <>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-slate-50 rounded-lg border border-slate-100 transition-transform hover:-translate-y-1">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">M.Sc in Physics</h3>
                                        <p className="text-slate-600">Patliputra University</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full">Pursuing</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-slate-50 rounded-lg border border-slate-100 transition-transform hover:-translate-y-1">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">B.Sc in Physics</h3>
                                        <p className="text-slate-600">Patliputra University</p>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full">Completed</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-slate-50 rounded-lg border border-slate-100 transition-transform hover:-translate-y-1">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Intermediate (12th)</h3>
                                        <p className="text-slate-600">BSEB</p>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex gap-3 items-center">
                                        <span className="font-bold text-slate-900">70%</span>
                                        <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full">Completed</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-slate-50 rounded-lg border border-slate-100 transition-transform hover:-translate-y-1">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">Matriculation (10th)</h3>
                                        <p className="text-slate-600">CBSE</p>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex gap-3 items-center">
                                        <span className="font-bold text-slate-900">CGPA: 9.4</span>
                                        <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full">Completed</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* 9. Hobbies (NEW) */}
            <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
                <div className="container mx-auto px-6 max-w-5xl text-center">
                    <h2 className="text-2xl font-serif font-bold mb-10">Hobbies & Interests</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {(hobbies && hobbies.length > 0) ? hobbies.map((hobby, index) => (
                            <div key={index} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl">{hobby.icon}</div>
                                <span className="font-medium text-slate-300">{hobby.name}</span>
                            </div>
                        )) : (
                            // FALLBACK
                            <>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl">📚</div>
                                    <span className="font-medium text-slate-300">Reading Literature</span>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl">✈️</div>
                                    <span className="font-medium text-slate-300">Traveling</span>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl">🤝</div>
                                    <span className="font-medium text-slate-300">Volunteering</span>
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl">🎨</div>
                                    <span className="font-medium text-slate-300">Creative Arts</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* 10. Contact Section */}
            <section id="contact" className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-2xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
                        <p className="text-slate-600">Have an inquiry or opportunity? I'd love to hear from you.</p>
                    </div>

                    {formStatus === 'success' ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-in fade-in zoom-in duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                            <p className="text-green-700">Thank you for reaching out. I will get back to you shortly.</p>
                            <button onClick={() => setFormStatus('idle')} className="mt-6 text-sm font-medium text-green-800 hover:underline">Send another message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        disabled={formStatus === 'submitting'}
                                        className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-slate-900 outline-none transition-colors rounded-t-sm disabled:opacity-50"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        disabled={formStatus === 'submitting'}
                                        className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-slate-900 outline-none transition-colors rounded-t-sm disabled:opacity-50"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    disabled={formStatus === 'submitting'}
                                    className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-slate-900 outline-none transition-colors rounded-t-sm disabled:opacity-50"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    disabled={formStatus === 'submitting'}
                                    className="w-full px-4 py-3 bg-slate-50 border-b-2 border-slate-200 focus:border-slate-900 outline-none transition-colors rounded-t-sm resize-none disabled:opacity-50"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            {formStatus === 'error' && (
                                <div className="p-4 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
                                    Something went wrong. Please try again or email directly.
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-slate-900 text-white font-bold py-4 rounded-md hover:bg-slate-800 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {formStatus === 'submitting' ? (
                                    <>Processing...</>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* 11. Declaration (NEW) */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{declaration?.statement ? "Declaration" : "Declaration"}</h3>
                    <p className="text-slate-600 italic mb-6">"{declaration?.statement || "I hereby declare that all the details furnished here are true to the best of my knowledge and belief."}"</p>
                    <div className="flex justify-center flex-col items-center">
                        <span className="font-serif font-bold text-xl text-slate-900">{declaration?.name || "Reet Kumari"}</span>
                    </div>
                </div>
            </section>

            {/* 12. Footer / Credentials */}
            <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
                        {/* Credentials Box */}
                        <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                            <h3 className="font-serif font-bold text-lg text-slate-900 mb-4">Technical Credentials</h3>
                            <div className="space-y-3">
                                {(profile.credentials && profile.credentials.length > 0) ? profile.credentials.map((cred, index) => (
                                    <div key={index} className="flex justify-between items-center border-b border-slate-200 pb-2 last:border-0 last:pb-0">
                                        <span className="text-slate-600">{cred.label}</span>
                                        <span className="font-bold text-slate-900">{cred.value}</span>
                                    </div>
                                )) : (
                                    <>
                                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                                            <span className="text-slate-600">Typing Speed (English)</span>
                                            <span className="font-bold text-slate-900">40 WPM</span>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                                            <span className="text-slate-600">Typing Speed (Hindi)</span>
                                            <span className="font-bold text-slate-900">35 WPM</span>
                                        </div>
                                        <div className="flex justify-between items-center pt-1">
                                            <span className="text-slate-600">Certification</span>
                                            <span className="font-bold text-slate-900">BCC Certified</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Simple Contact */}
                        <div className="flex flex-col justify-center">
                            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-4">Ready to optimize your operations?</h3>
                            <p className="text-slate-600 mb-6">Open for opportunities in Administration and Operations.</p>
                            <Link href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 transition-colors">
                                Contact Reet
                            </Link>
                        </div>
                    </div>

                    <div className="text-center border-t border-slate-100 pt-8">
                        <div className="flex justify-center gap-6 mb-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                        </div>
                        <p className="text-slate-400 text-sm">© 2026 Reet Kumari. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
