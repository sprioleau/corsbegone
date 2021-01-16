import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>CORS be Gone</title>
				<link rel="icon" href="/blast.png" />
			</Head>

			<main className={styles.main}>
				<header>
					<h1>Welcome to CORS be Gone</h1>
					<p className="intro-text">Your gateway to pleasant development.</p>
				</header>

				<section>
					<p>
						This API enables cross-origin requests to anywhere. Usage: / Shows help /iscorsneeded This is the only
						resource on this host which is served without CORS headers. /url Create a request to url, and includes CORS
						headers in the response. If the protocol is omitted, it defaults to http (https if port 443 is specified).
						Cookies are disabled and stripped from requests. Redirects are automatically followed. For debugging
						purposes, each followed redirect results in the addition of a X-CORS-Redirect-n header, where n starts at 1.
						These headers are not accessible by the XMLHttpRequest API. After 5 redirects, redirects are not followed
						any more. The redirect response is sent back to the browser, which can choose to follow the redirect
						(handled automatically by the browser). The requested URL is available in the X-Request-URL response header.
						The final URL, after following all redirects, is available in the X-Final-URL response header. To prevent
						the use of the proxy for casual browsing, the API requires either the Origin or the X-Requested-With header
						to be set. To avoid unnecessary preflight (OPTIONS) requests, it's recommended to not manually set these
						headers in your code.
					</p>
				</section>
			</main>

			<footer className="footer" role="contentinfo">
				<ul class="footer__footer-links">
					<li class="footer-link">
						<a href="https://github.com/sprioleau/corsbegone">source</a>
					</li>
					<li class="footer-link">
						<a href="https://github.com/sprioleau">about</a>
					</li>
				</ul>
				<div class="byline">
					created by <span class="credit">@sprioleau</span>👨🏾&zwj;💻
				</div>
			</footer>
		</div>
	);
};

export default Home;
