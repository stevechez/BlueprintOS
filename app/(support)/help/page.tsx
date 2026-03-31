'use client';

import Link from 'next/link';

const categories = [
	{
		title: 'Getting Started',
		icon: '🚀',
		articles: [
			'Setting up your profile',
			'Connecting your domain',
			'Your first login',
		],
	},
	{
		title: 'Site Engine',
		icon: '🌐',
		articles: [
			'Changing your Hero image',
			'Editing your service area',
			'How lead forms work',
		],
	},
	{
		title: 'Comm Vault',
		icon: '⚡',
		articles: [
			'Generating a 3-tier bid',
			"The 'Pausing Technique' for scope creep",
			'Setting your hourly rate',
		],
	},
	{
		title: 'Billing',
		icon: '💳',
		articles: ['How to cancel', 'Updating your card', 'Downloading invoices'],
	},
];

export default function HelpPage() {
	return (
		<div className="bg-slate-50 min-h-screen">
			<div className="bg-slate-900 py-20 px-6 text-center">
				<h1 className="text-4xl font-black text-white mb-4 italic">
					How can we help?
				</h1>
				<div className="max-w-xl mx-auto relative">
					<input
						type="text"
						placeholder="Search for articles (e.g. 'domain' or 'bids')..."
						className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-amber-500 transition-all"
					/>
				</div>
			</div>

			<div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{categories.map(cat => (
					<div
						key={cat.title}
						className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
					>
						<div className="text-4xl mb-4">{cat.icon}</div>
						<h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">
							{cat.title}
						</h3>
						<ul className="space-y-3">
							{cat.articles.map(art => (
								<li
									key={art}
									className="text-slate-500 font-medium hover:text-indigo-600 cursor-pointer text-sm"
								>
									{art}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
