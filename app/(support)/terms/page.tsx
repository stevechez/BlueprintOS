'use client';

export default function TermsOfService() {
	const terms = [
		{
			title: '1. Acceptance of Terms',
			content:
				'By accessing Blueprint OS, you agree to be bound by these terms. If you do not agree, please do not use our services.',
		},
		{
			title: '2. AI Accuracy',
			content:
				"Blueprint OS uses Artificial Intelligence to generate communication scripts and estimates. While we strive for accuracy, these are 'drafts' meant for professional review. You are ultimately responsible for the accuracy of any bid or contract you send to a client.",
		},
		{
			title: '3. Subscription & Billing',
			content:
				"Subscriptions are billed in advance on a monthly basis. You may cancel at any time. One-time 'Jumpstart' fees are non-refundable after work has commenced, though they are covered by our 30-day overall satisfaction guarantee.",
		},
		{
			title: '4. Prohibited Use',
			content:
				'You may not use Blueprint OS to generate spam, fraudulent contracts, or illegal communication. We reserve the right to terminate accounts that violate professional standards.',
		},
	];

	return (
		<div className="max-w-4xl mx-auto py-24 px-6">
			<h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
				Terms of Service
			</h1>
			<p className="text-slate-500 font-bold mb-12 uppercase tracking-widest text-sm">
				Effective Date: March 30, 2026
			</p>

			<div className="space-y-12">
				{terms.map(term => (
					<div key={term.title} className="border-b border-slate-100 pb-8">
						<h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">
							{term.title}
						</h3>
						<p className="text-lg text-slate-600 leading-relaxed font-medium">
							{term.content}
						</p>
					</div>
				))}
			</div>

			<div className="mt-16 p-8 bg-amber-50 rounded-[2rem] text-amber-800 font-medium text-sm border border-amber-100">
				<p className="font-black mb-2 uppercase tracking-widest">
					A Handyman&apos;s Disclaimer:
				</p>
				Blueprint OS provides tools to help you communicate and estimate. We are
				not lawyers, and our scripts do not constitute legal advice. Always
				ensure your contracts comply with local and state licensing laws.
			</div>
		</div>
	);
}
