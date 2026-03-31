import Link from 'next/link';

export default function SupportLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="min-h-screen flex flex-col">
			<nav className="flex justify-between items-center px-6 py-8 max-w-7xl mx-auto w-full">
				<Link
					href="/"
					className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity"
				>
					BLUEPRINT<span className="text-amber-500">OS</span>
				</Link>
				<Link
					href="/"
					className="text-slate-500 font-bold hover:text-slate-900 transition-colors"
				>
					← Back to Site
				</Link>
			</nav>

			<main className="flex-grow">{children}</main>

			{/* You can import your full Footer component here later */}
			<footer className="py-12 text-center text-slate-400 font-bold border-t border-slate-100">
				© 2026 Blueprint OS. Built for those who build the world.
			</footer>
		</div>
	);
}
