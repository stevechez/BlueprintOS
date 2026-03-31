'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from '@/components/ModeToggle';

export default function BlueprintMarketingPage() {
	const [isDemoOpen, setIsDemoOpen] = useState(false);

	return (
		<div className="bg-white dark:bg-slate-950 min-h-screen font-sans selection:bg-amber-100 transition-colors duration-300">
			{/* VIDEO MODAL */}
			<AnimatePresence>
				{isDemoOpen && (
					<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsDemoOpen(false)}
							className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"
						/>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
						>
							<button
								onClick={() => setIsDemoOpen(false)}
								className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all"
							>
								✕
							</button>
							{/* REPLACE SRC WITH YOUR YOUTUBE EMBED LINK */}
							<iframe
								className="w-full h-full"
								src="https://www.youtube.com/embed/dQw4w9WgXcQ"
								title="Blueprint OS Demo"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			{/* 1. NAVIGATION */}
			<nav className="flex justify-between items-center px-6 py-8 max-w-7xl mx-auto">
				<Link
					href="/"
					className="text-2xl font-black tracking-tighter dark:text-white"
				>
					BLUEPRINT<span className="text-amber-500">OS</span>
				</Link>
				<div className="hidden md:flex gap-8 font-bold text-slate-600 dark:text-slate-400">
					<Link
						href="#site-engine"
						className="hover:text-slate-900 dark:hover:text-white transition-colors"
					>
						Site Engine
					</Link>
					<Link
						href="#comm-vault"
						className="hover:text-slate-900 dark:hover:text-white transition-colors"
					>
						Comm Vault
					</Link>
					<Link
						href="#pricing"
						className="hover:text-slate-900 dark:hover:text-white transition-colors"
					>
						Pricing
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<ModeToggle />
					<Link
						href="#pricing"
						className="px-6 py-3 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-900 font-bold rounded-xl hover:scale-105 transition-all shadow-lg active:scale-95"
					>
						Get Started
					</Link>
				</div>
			</nav>

			{/* 2. HERO SECTION */}
			<header className="pt-16 pb-24 px-6 text-center max-w-4xl mx-auto">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8"
				>
					The Office Work is <br />
					<span className="text-amber-500 underline decoration-slate-900 dark:decoration-amber-500/30 underline-offset-8">
						Killing Your Margins.
					</span>
				</motion.h1>
				<p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium mb-10 leading-relaxed">
					Blueprint OS is the first complete digital stack built specifically
					for modern tradesmen. Stop doing free work, win bigger bids, and look
					professional from day one.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link
						href="#pricing"
						className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all text-center"
					>
						Get the Full Suite
					</Link>
					<button
						onClick={() => setIsDemoOpen(true)}
						className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
					>
						Watch the Demo
					</button>
				</div>
			</header>

			{/* 3. PRODUCT MODULES */}
			<section className="py-24 space-y-32 px-6">
				{/* MODULE 01: SITE ENGINE */}
				<div
					id="site-engine"
					className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
				>
					<div className="flex-1">
						<div className="text-indigo-600 dark:text-indigo-400 font-black tracking-widest text-sm mb-4 uppercase">
							Module 01: Marketing
						</div>
						<h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 italic">
							The Site Engine
						</h2>
						<div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
							<p>
								Most contractor websites are &quot;ghost towns&quot;—outdated,
								ugly, and broken on mobile. They cost you money.
							</p>
							<p>
								The **Site Engine** deploys a professional, high-converting
								portfolio and lead-capture system in under 24 hours.
							</p>
							<div className="pt-4 flex flex-col sm:flex-row gap-4">
								<Link
									href="#details"
									className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md text-center"
								>
									Learn More
								</Link>
								<a
									href="https://local-trades-template.vercel.app/"
									target="_blank"
									className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
								>
									See Example Site <span className="text-xl">↗</span>
								</a>
							</div>
						</div>
					</div>
					<div className="flex-1 w-full">
						<div className="relative group">
							<div className="absolute -inset-4 bg-indigo-100 dark:bg-indigo-900/20 rounded-[2rem] transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
							<div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
								<img
									src="/images/site-engine-preview.jpg"
									alt="Preview"
									className="w-full h-auto"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* MODULE 02: COMM VAULT */}
				<div
					id="comm-vault"
					className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16"
				>
					<div className="flex-1">
						<div className="text-amber-600 dark:text-amber-400 font-black tracking-widest text-sm mb-4 uppercase">
							Module 02: Operations
						</div>
						<h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 italic">
							The Comm Vault
						</h2>
						<div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
							<p>
								The biggest profit killer in the trades isn&apos;t materials.
								It&apos;s **bad communication.**
							</p>
							<p>
								The **Comm Vault** puts the psychology of a high-end sales team
								in your pocket. From 3-tier proposals to automated scripts.
							</p>
							<div className="pt-4 flex flex-col sm:flex-row gap-4">
								<Link
									href="#details"
									className="bg-amber-500 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-amber-400 transition-all shadow-md text-center"
								>
									Learn More
								</Link>
								<a
									href="https://contractor-prompt-pack.vercel.app/"
									target="_blank"
									className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all"
								>
									See Example Vault <span className="text-xl">↗</span>
								</a>
							</div>
						</div>
					</div>
					<div className="flex-1 w-full">
						<div className="relative group">
							<div className="absolute -inset-4 bg-amber-100 dark:bg-amber-900/20 rounded-[2rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
							<div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
								<img
									src="/images/commvault.jpg"
									alt="Vault Preview"
									className="w-full h-auto"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* THE DEEP DIVE (CATCH-ALL) */}
			<section
				id="details"
				className="py-24 bg-slate-50 dark:bg-slate-900/50 px-6 border-y border-slate-200 dark:border-slate-800"
			>
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 italic tracking-tight">
							The Blueprint Breakdown
						</h2>
						<p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
							Everything you get when you join the ecosystem.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* SITE ENGINE */}
						<div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
							<div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center text-2xl mb-6">
								🌐
							</div>
							<h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic">
								Site Engine
							</h3>
							<ul className="space-y-4 font-medium text-slate-600 dark:text-slate-400">
								<li className="flex items-start gap-3">
									<span className="text-indigo-600 font-bold">→</span>
									<span>**SEO Branding:** Zip-code specific targeting.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-indigo-600 font-bold">→</span>
									<span>
										**Lead Capture:** Native forms that bypass the
										&apos;junk&apos; folder.
									</span>
								</li>
							</ul>
						</div>

						{/* COMM VAULT */}
						<div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
							<div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center text-2xl mb-6">
								⚡
							</div>
							<h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 italic">
								Comm Vault
							</h3>
							<ul className="space-y-4 font-medium text-slate-600 dark:text-slate-400">
								<li className="flex items-start gap-3">
									<span className="text-amber-600 font-bold">→</span>
									<span>**3-Tier Bids:** Anchoring psychology built-in.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-amber-600 font-bold">→</span>
									<span>
										**Change Orders:** Instant texts to stop free work.
									</span>
								</li>
							</ul>
						</div>

						{/* JUMPSTART */}
						<div
							id="jumpstart"
							className="bg-slate-900 dark:bg-slate-800 p-8 rounded-[2.5rem] border-2 border-amber-500 shadow-2xl text-white"
						>
							<div className="w-12 h-12 bg-amber-500 text-slate-900 rounded-xl flex items-center justify-center text-2xl mb-6 font-black">
								🚀
							</div>
							<h3 className="text-2xl font-black mb-4 italic text-amber-500">
								The $497 Jumpstart
							</h3>
							<p className="text-slate-400 mb-6 font-medium leading-tight text-sm">
								We take the office off your plate entirely.
							</p>
							<ul className="space-y-4 font-medium text-sm">
								<li className="flex items-start gap-3">
									<span className="text-amber-500">✅</span>
									<span>**Full Site Build:** Hand-crafted by our team.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-amber-500">✅</span>
									<span>**SEO Optimized:** Rank locally from Day 1.</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="text-amber-500">✅</span>
									<span>**Vault Config:** Custom script setup included.</span>
								</li>
							</ul>
							<Link
								href="/jumpstart"
								className="w-full mt-8 py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-amber-500 transition-all flex items-center justify-center"
							>
								Claim a Jumpstart Slot
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* 4. THE PATH (3 STEPS) */}
			<section className="py-24 bg-white dark:bg-slate-950 px-6 border-y border-slate-100 dark:border-slate-900">
				<div className="max-w-6xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-16 tracking-tight">
						The Path to a Systematized Business
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
						<div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10" />
						<div className="text-center group">
							<div className="w-16 h-16 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl group-hover:bg-indigo-600 transition-colors duration-300">
								01
							</div>
							<h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
								Deploy Front Office
							</h3>
							<p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
								Launch your professional 24-hour website.
							</p>
						</div>
						<div className="text-center group">
							<div className="w-16 h-16 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl group-hover:bg-amber-500 transition-colors duration-300">
								02
							</div>
							<h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
								Secure Back Office
							</h3>
							<p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
								Set your business defaults in the Comm Vault.
							</p>
						</div>
						<div className="text-center group">
							<div className="w-16 h-16 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl group-hover:bg-green-500 transition-colors duration-300">
								03
							</div>
							<h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3">
								Scale Your Margins
							</h3>
							<p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
								Watch bids close higher and profit grow.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* 5. PRICING */}
			<section
				id="pricing"
				className="py-24 bg-slate-50 dark:bg-slate-900/50 px-6"
			>
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
							Simple, Transparent Pricing
						</h2>
						<p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
							Build your system today. Scale your business tomorrow.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* TIER 1 */}
						<div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
							<div>
								<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
									Comm Vault
								</h3>
								<div className="flex items-baseline gap-1 mb-6">
									<span className="text-4xl font-black dark:text-white">
										$29
									</span>
									<span className="text-slate-500 font-bold">/mo</span>
								</div>
								<ul className="space-y-4 mb-8 dark:text-slate-300">
									<li>✅ 3-Tier Bid Estimator</li>
									<li>✅ Full AI Script Library</li>
									<li>✅ Mobile Access</li>
									<li className="text-slate-400 dark:text-slate-600">
										❌ Custom Website
									</li>
								</ul>
							</div>
							<Link
								href="/signup"
								className="w-full py-4 border-2 border-slate-900 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center"
							>
								Start Free Trial
							</Link>
						</div>
						{/* TIER 2 */}
						<div className="bg-slate-900 p-8 rounded-3xl border-4 border-amber-500 flex flex-col justify-between relative transform md:scale-110 shadow-2xl z-10 text-white">
							<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-slate-900 font-black px-4 py-1 rounded-full text-sm uppercase">
								Most Popular
							</div>
							<div>
								<h3 className="text-xl font-bold mb-2">The Full Blueprint</h3>
								<div className="flex items-baseline gap-1 mb-6">
									<span className="text-4xl font-black">$49</span>
									<span className="text-slate-400 font-bold">/mo</span>
								</div>
								<ul className="space-y-4 mb-8">
									<li className="font-bold text-amber-400">
										✅ Custom Site & Hosting
									</li>
									<li>✅ Full AI Script Library</li>
									<li>✅ Unlimited Lead Storage</li>
									<li>✅ Priority Support</li>
								</ul>
							</div>
							<Link
								href="/signup"
								className="w-full py-4 bg-amber-500 text-slate-900 font-black rounded-xl hover:bg-amber-400 transition-all shadow-lg text-center"
							>
								Get the Full Suite
							</Link>
						</div>
						{/* TIER 3 */}
						<div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between opacity-80">
							<div>
								<div className="mb-4">
									<span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-bold text-xs rounded-full uppercase tracking-tighter">
										Coming Soon
									</span>
								</div>
								<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
									Blueprint Pro +
								</h3>
								<ul className="space-y-4 mb-8 italic text-slate-500 dark:text-slate-400">
									<li>✨ SiteVerdict Integration</li>
									<li>✨ Automated Lead Audits</li>
									<li>✨ Advanced Analytics</li>
								</ul>
							</div>
							<button
								disabled
								className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 font-bold rounded-xl cursor-not-allowed"
							>
								Stay Updated
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* 6. JUMPSTART BANNER */}
			<section className="py-16 bg-amber-50 dark:bg-amber-950/30 border-y border-amber-100 dark:border-amber-900/50">
				<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
					<div className="flex-1 text-center md:text-left">
						<h3 className="text-2xl font-black text-slate-900 dark:text-amber-500 mb-2">
							Rather have us build it for you?
						</h3>
						<p className="text-slate-600 dark:text-slate-400 font-medium italic">
							Skip the learning curve. For a flat fee of **$497**, our team will
							build your site, optimize SEO, and configure your Vault.
						</p>
					</div>
					<Link
						href="/jumpstart"
						className="whitespace-nowrap px-8 py-4 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-900 font-bold rounded-2xl hover:bg-slate-800 dark:hover:bg-amber-400 transition-all shadow-lg"
					>
						Book Your Jumpstart
					</Link>
				</div>
			</section>

			{/* 7. FOUNDER NOTE */}
			<section className="py-24 bg-slate-50 dark:bg-slate-950 px-6">
				<div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm italic text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
					<div className="flex items-center gap-4 mb-8 not-italic">
						<div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-amber-500 overflow-hidden flex items-center justify-center text-2xl font-black text-slate-900 dark:text-white">
							SD
						</div>
						<div>
							<p className="font-black text-slate-900 dark:text-white text-xl leading-none">
								A note from the founder
							</p>
							<p className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-widest mt-1">
								Blueprint OS
							</p>
						</div>
					</div>
					<p className="mb-6">
						&quot;I built Blueprint OS because I saw too many talented
						contractors getting crushed by the &apos;office side&apos; of the
						business.&quot;
					</p>
					<p className="mb-6">
						&quot;Blueprint OS is designed to give you the professional edge of
						a 40-person firm, while letting you stay lean and focused on what
						you do best.&quot;
					</p>
					<p className="mt-8 not-italic font-black text-slate-900 dark:text-white text-xl">
						— Steve Dunn
					</p>
				</div>
			</section>

			{/* 8. FOOTER */}
			<footer className="bg-slate-900 dark:bg-black text-white pt-20 pb-10 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
						<div className="col-span-1">
							<div className="text-2xl font-black tracking-tighter mb-4">
								BLUEPRINT<span className="text-amber-500">OS</span>
							</div>
							<p className="text-slate-400 font-medium mb-6 leading-relaxed">
								The digital stack for modern tradesmen. Win bids, stop creep,
								and get paid.
							</p>
							<div className="flex items-center gap-2 text-green-400 text-sm font-bold">
								<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />{' '}
								Systems Operational
							</div>
						</div>
						<div>
							<h4 className="font-black uppercase tracking-widest text-sm mb-6 text-slate-500">
								Modules
							</h4>
							<ul className="space-y-4 font-bold text-slate-300">
								<li>
									<Link
										href="#site-engine"
										className="hover:text-amber-500 transition-colors"
									>
										Site Engine
									</Link>
								</li>
								<li>
									<Link
										href="#comm-vault"
										className="hover:text-amber-500 transition-colors"
									>
										Comm Vault
									</Link>
								</li>
								<li>
									<a
										href="https://www.siteverdict.online/"
										className="hover:text-amber-500 transition-colors flex items-center gap-2"
									>
										SiteVerdict{' '}
										<span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-500 uppercase">
											Soon
										</span>
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-black uppercase tracking-widest text-sm mb-6 text-slate-500">
								Support
							</h4>
							<ul className="space-y-4 font-bold text-slate-300">
								<li>
									<Link
										href="/help"
										className="hover:text-amber-500 transition-colors"
									>
										Knowledge Base
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="hover:text-amber-500 transition-colors"
									>
										Contact Steve
									</Link>
								</li>
								<li>
									<Link
										href="/billing-faq"
										className="hover:text-amber-500 transition-colors"
									>
										Billing & Refund Policy
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-black uppercase tracking-widest text-sm mb-6 text-slate-500">
								Contact
							</h4>
							<p className="font-bold text-slate-300 mb-2">
								Steve@BlueprintOS.com
							</p>
							<p className="text-slate-400 text-sm mb-6 uppercase tracking-wider font-bold">
								Cupertino, CA
							</p>
						</div>
					</div>
					<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-bold">
						<p>© 2026 Blueprint OS. All rights reserved.</p>
						<div className="flex gap-8">
							<Link
								href="/privacy"
								className="hover:text-white transition-colors"
							>
								Privacy Policy
							</Link>
							<Link
								href="/terms"
								className="hover:text-white transition-colors"
							>
								Terms of Service
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
