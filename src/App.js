import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App container">
			<section>
				<main>
					<h1 className="dictionaryHead">Dictionary app</h1>

					<Dictionary defaultKeyword="night" />
				</main>
			</section>
			<footer>
				<a
					href="https://github.com/OlhaAbrosimova/dictionary-react-app"
					target="_blank"
					rel="noreferrer"
				>
					Open-sourced code,
				</a>{" "}
				by{" "}
				<a
					href="https://olhaabrosimova.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					Olha Abrosimova
				</a>
			</footer>
		</div>
	);
}
