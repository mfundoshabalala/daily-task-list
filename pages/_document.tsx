import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { JSXElementConstructor, ReactElement, ReactFragment } from 'react';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<{
		html: string;
		head?: (JSX.Element | null)[];
		styles?:
			| ReactElement<unknown, string | JSXElementConstructor<unknown>>[]
			| ReactFragment;
	}> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head />
				<body className="font-nunito">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
