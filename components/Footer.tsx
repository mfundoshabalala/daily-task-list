import Image from 'next/image';

const Footer: React.FC = () => (
	<footer className="">
		<span className="relative flex gap-2">
			<Image
				src="https://theysaidso.com/branding/theysaidso.png"
				height="20"
				width="20"
				alt="theysaidso.com"
			/>
			<a href="https://theysaidso.com" title="Powered by quotes from theysaidso.com">
				They Said So®
			</a>
		</span>
	</footer>
);

export default Footer;
