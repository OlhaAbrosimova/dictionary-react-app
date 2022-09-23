import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	console.log(props.meaning);
	return (
		<div className="Meaning">
			<h3>{props.meaning.partOfSpeech}</h3>

			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index}>
						<span>
							{" "}
							{definition.definition}
							<br />
							<em>Example: {definition.example}</em>
							<br />
							<Synonyms synonyms={definition.synonyms} />
						</span>
					</div>
				);
			})}
		</div>
	);

	// <p>{props.meaning.definitions[0].definition}</p>

	// <em>
	// 	<p>{props.meaning.definitions[0].example}</p>
	// </em>
}
