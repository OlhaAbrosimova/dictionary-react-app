import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
	console.log(props.meaning);
	return (
		<div className="Meaning">
			<section>
				<h3>{props.meaning.partOfSpeech}</h3>
				{props.meaning.definitions.map(function (definition, index) {
					return (
						<div key={index}>
							<p>
								<div className="definitions"> {definition.definition}</div>

								<div className="examples">
									<em> {definition.example}</em>
								</div>
							</p>
						</div>
					);
				})}
				<Synonyms synonyms={props.meaning.synonyms} />
			</section>
		</div>
	);
}
