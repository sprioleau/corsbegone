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
					<p>This API enables cross-origin requests so you can say bye-bye 👋🏾 to those pesky CORS issues.</p>
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
