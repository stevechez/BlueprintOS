'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function MarketingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	// We can hide the "Jumpstart" link in the nav if they are already on the jumpstart page
	const isJumpstartPage = pathname === '/jumpstart';

	return (
		<div className="min-h-screen flex flex-col font-sans selection:bg-amber-100">
			{/* GLOBAL NAVIGATION */}
			<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
				<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
					<Link
						href="/"
						className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity"
					>
						BLUEPRINT<span className="text-amber-500">OS</span>
					</Link>

					<div className="flex items-center gap-4 md:gap-8">
						{!isJumpstartPage && (
							<Link
								href="/jumpstart"
								className="hidden md:block text-xs font-black uppercase tracking-widest text-slate-400 hover:text-amber-600 transition-colors"
							>
								Book a Jumpstart
							</Link>
						)}
						<Link
							href="/#pricing"
							className="px-5 py-2.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-md active:scale-95 text-sm"
						>
							Get Started
						</Link>
					</div>
				</div>
			</nav>

			{/* PAGE CONTENT */}
			<main className="flex-grow">{children}</main>

			{/* ROBUST FOOTER */}
			<footer className="bg-slate-900 text-white pt-20 pb-10 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
						{/* BRAND */}
						<div className="col-span-1">
							<div className="text-2xl font-black tracking-tighter mb-4">
								BLUEPRINT<span className="text-amber-500">OS</span>
							</div>
							<p className="text-slate-400 font-medium mb-6 leading-relaxed">
								The digital stack for modern tradesmen. Built for those who
								build the world.
							</p>
							<div className="flex items-center gap-2 text-green-400 text-sm font-bold">
								<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
								Systems Operational
							</div>
						</div>

						{/* MODULES */}
						<div>
							<h4 className="font-black uppercase tracking-widest text-[10px] mb-6 text-slate-500">
								The Stack
							</h4>
							<ul className="space-y-4 font-bold text-slate-300">
								<li>
									<Link
										href="/#site-engine"
										className="hover:text-amber-500 transition-colors"
									>
										Site Engine
									</Link>
								</li>
								<li>
									<Link
										href="/#comm-vault"
										className="hover:text-amber-500 transition-colors"
									>
										Comm Vault
									</Link>
								</li>
								<li>
									<a
										href="https://www.siteverdict.online/"
										className="text-slate-600 flex items-center gap-2"
									>
										SiteVerdict{' '}
										<span className="text-[9px] bg-slate-800 px-2 py-0.5 rounded">
											SOON
										</span>
									</a>
								</li>
							</ul>
						</div>

						{/* SUPPORT */}
						<div>
							<h4 className="font-black uppercase tracking-widest text-[10px] mb-6 text-slate-500">
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
										Billing & Refunds
									</Link>
								</li>
							</ul>
						</div>

						{/* CONTACT */}
						<div>
							<h4 className="font-black uppercase tracking-widest text-[10px] mb-6 text-slate-500">
								Direct
							</h4>
							<p className="font-bold text-slate-300 mb-1 italic">
								Steve@BlueprintOS.com
							</p>
							<p className="text-slate-500 text-xs font-bold uppercase">
								Cupertino, California
							</p>
						</div>
					</div>

					<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
						<p>© 2026 Blueprint OS. All rights reserved.</p>
						<div className="flex gap-8">
							<Link
								href="/privacy"
								className="hover:text-white transition-colors"
							>
								Privacy
							</Link>
							<Link
								href="/terms"
								className="hover:text-white transition-colors"
							>
								Terms
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
