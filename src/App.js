import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App container">
			<header className="App-header">Dictionary app</header> <Dictionary />
			<footer>
				This app was coded by{" "}
				<a
					href="https://olhaabrosimova.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					Olha Abrosimova
				</a>{" "}
				and it is{" "}
				<a
					href="https://github.com/OlhaAbrosimova/dictionary-react-app"
					target="_blank"
					rel="noreferrer"
				>
					open-sourced
				</a>
			</footer>
		</div>
	);
}
