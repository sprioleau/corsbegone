import Head from "next/head";
import useClipboard from "react-use-clipboard";

const APP_URL = "https://corsbegone.netlify.app/";

const Home = () => {
	const [isCopied, setCopied] = useClipboard(APP_URL, {
		successDuration: 1500,
	});

	return (
		<div className="app">
			<Head>
				<title>CorsBeGone | Develop pleasantly</title>
				<link rel="icon" href="/blast.png" />
			</Head>

			<div className="main-content-wrapper">
				{isCopied && <Notifier copiedText={APP_URL} />}
				<main className="main-content">
					<header className="header">
						<h1 className="header__title">
							<span>Welcome to</span>
							<span>
								CorsBeGone <span className="blast-icon">💥</span>
							</span>
						</h1>
						<p className="header__subtitle">Your gateway to pleasant development</p>
					</header>

					<section className="description">
						<p>
							This API enables cross-origin requests so you can say bye-bye 👋🏾 to those pesky cross-origin resource
							sharing (CORS) issues.
						</p>
						<p>
							To use, prefix your fetch url with{" "}
							<code className="description__app-url" onClick={setCopied}>
								https://corsbegone.netlify.app/
							</code>
							. CORS Be Gone will fetch the data on its server and returning the results back to your client.
						</p>
					</section>
				</main>

				<footer className="footer" role="contentinfo">
					<ul className="footer__footer-links">
						<li className="footer__footer-link">
							<a href="https://github.com/sprioleau/corsbegone">source</a>
						</li>
						<li className="footer__footer-link">
							<a href="https://github.com/sprioleau">about</a>
						</li>
					</ul>
					<div className="footer__byline">
						created by{" "}
						<a href="https://github.com/sprioleau" className="footer__credit">
							@sprioleau
						</a>{" "}
						👨🏾&zwj;💻
					</div>
				</footer>
			</div>
		</div>
	);
};

const Notifier = () => (
	<div className="notifier">
		<h4>{`Copied URL to clipboard`}</h4>
	</div>
);

export default Home;
