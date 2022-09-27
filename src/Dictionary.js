import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [features, setFeatures] = useState(null);
	let [loaded, setLoaded] = useState(false);

	function handleDictionaryResponse(response) {
		// console.log(response.data[0]);
		// console.log(response.data[0].meanings[0].definitions[0].definition);
		setFeatures(response.data[0]);
	}

	function handlePhotosResponse(response) {
		console.log(response);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}
	function search() {
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		
		axios.get(apiUrl).then(handleDictionaryResponse);

		let pexelsApiKey =
			"563492ad6f91700001000001e8402a7dde1942178f270bb93704f9fb";
		let pexelsApiUrl =
			"https://api.pexels.com/v1/search?query=${keyword}&per_page=80";
		const headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios
			.get(pexelsApiUrl, {
				headers: headers,
			})
			.then(handlePhotosResponse);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<section>
					<h2>What word do you want to look up?</h2>
					<form onSubmit={handleSubmit}>
						<input
							className="formInput"
							type="search"
							onChange={handleKeywordChange}
							defaultValue={props.defaultKeyword}
						></input>
						<input className="formSearch" type="submit" value="Search"></input>
					</form>
				</section>
				<Results results={features} />
			</div>
		);
	} else {
		load();
		return "Loading";
	}
}
