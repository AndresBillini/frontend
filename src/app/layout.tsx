import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Content Feed for Money Lion',
	description: 'Challenge Money Lion content feed frontend',
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="en" className={roboto.className}>
			<body>{children}</body>
		</html>
	);
}
