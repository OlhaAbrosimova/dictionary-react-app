import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
    let [features, setFeatures] = useState(null);

	function handleResponse(response) {
		console.log(response.data[0]);
		console.log(response.data[0].meanings[0].definitions[0].definition);
        setFeatures(response.data[0]);
	}
	function search(event) {
		event.preventDefault();
		

		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
		console.log(apiUrl);
		axios.get(apiUrl).then(handleResponse);
	}

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}
	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input type="search" onChange={handleKeywordChange}></input>
				<input type="submit" value="Search"></input>
			</form>
            
            <Results results={features}/>
           
		</div>
	);
}
