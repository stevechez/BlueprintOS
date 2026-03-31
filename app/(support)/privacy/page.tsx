'use client';

export default function PrivacyPolicy() {
	const sections = [
		{
			title: '1. Data Collection',
			content:
				"We collect information you provide directly to us when you create an account, such as your name, email address, company name, and phone number. We also collect the 'rough notes' and lead data you input into our modules to provide our AI services.",
		},
		{
			title: '2. How We Use Data',
			content:
				"Your data is used to personalize your experience, process transactions, and improve our AI communication models. We do NOT sell your personal data or your clients' contact information to third-party marketing firms. Period.",
		},
		{
			title: '3. Data Security',
			content:
				"We implement a variety of security measures to maintain the safety of your personal information. We use industry-standard encryption and secure Supabase database protocols to ensure your 'Comm Vault' remains private.",
		},
		{
			title: '4. Your Rights',
			content:
				'You have the right to access, correct, or delete your personal data at any time through your account settings. You can also request a full export of your data via our CSV export tool.',
		},
	];

	return (
		<div className="max-w-4xl mx-auto py-24 px-6">
			<h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
				Privacy Policy
			</h1>
			<p className="text-slate-500 font-bold mb-12 uppercase tracking-widest text-sm">
				Last Updated: March 30, 2026
			</p>

			<div className="space-y-12">
				{sections.map(section => (
					<div key={section.title} className="border-b border-slate-100 pb-8">
						<h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">
							{section.title}
						</h3>
						<p className="text-lg text-slate-600 leading-relaxed font-medium">
							{section.content}
						</p>
					</div>
				))}
			</div>

			<div className="mt-16 p-8 bg-slate-100 rounded-[2rem] text-slate-500 font-medium text-sm">
				Questions about our privacy practices? Email{' '}
				<span className="text-slate-900 font-bold">
					Privacy@BlueprintOS.com
				</span>
			</div>
		</div>
	);
}
