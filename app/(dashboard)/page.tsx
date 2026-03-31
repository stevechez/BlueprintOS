import Link from 'next/link';

export default function CommandCenter() {
	return (
		<div className="max-w-5xl mx-auto pt-8 pb-16 px-4">
			<div className="mb-12">
				<h1 className="text-4xl font-black text-slate-900 mb-2">
					Welcome to the Command Center
				</h1>
				<p className="text-lg text-slate-500 font-medium">
					Everything you need to run your trade business, all in one place.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* MODULE 1: SITE ENGINE */}
				<div className="group relative bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-indigo-500 transition-all shadow-sm hover:shadow-xl">
					<div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
						🌐
					</div>
					<h2 className="text-2xl font-bold text-slate-900 mb-3">
						Site Engine
					</h2>
					<p className="text-slate-500 mb-8 leading-relaxed">
						Manage your professional presence, update your portfolio, and view
						incoming leads from your website.
					</p>
					<Link
						href="https://sites.blueprintos.com"
						className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all"
					>
						Launch Module <span className="text-xl">→</span>
					</Link>
				</div>

				{/* MODULE 2: COMM VAULT */}
				<div className="group relative bg-white p-8 rounded-3xl border-2 border-slate-100 hover:border-amber-500 transition-all shadow-sm hover:shadow-xl">
					<div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
						⚡
					</div>
					<h2 className="text-2xl font-bold text-slate-900 mb-3">Comm Vault</h2>
					<p className="text-slate-500 mb-8 leading-relaxed">
						Access your AI tools, generate bids, stop scope creep, and manage
						your communication history.
					</p>
					<Link
						href="/vault"
						className="inline-flex items-center gap-2 text-amber-600 font-bold hover:gap-3 transition-all"
					>
						Launch Module <span className="text-xl">→</span>
					</Link>
				</div>
			</div>

			{/* QUICK STATS STRIP */}
			<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
				<div className="bg-slate-900 text-white p-6 rounded-2xl">
					<p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">
						New Leads
					</p>
					<p className="text-3xl font-black">12</p>
				</div>
				<div className="bg-slate-900 text-white p-6 rounded-2xl">
					<p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">
						Bids Sent
					</p>
					<p className="text-3xl font-black">28</p>
				</div>
				<div className="bg-slate-900 text-white p-6 rounded-2xl">
					<p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">
						Unpaid Invoices
					</p>
					<p className="text-3xl font-black text-rose-400">$4,200</p>
				</div>
			</div>
		</div>
	);
}
