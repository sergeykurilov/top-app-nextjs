import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {

	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initalProps = await Document.getInitialProps(ctx);
		return { ...initalProps };
	}


	render(): JSX.Element {
		return <Html lang="ru">
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>;
	}
}


export default MyDocument;