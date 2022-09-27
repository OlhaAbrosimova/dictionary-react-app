import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
	console.log(props.synonyms);
	console.log(props.synonyms.length);

	if (props.synonyms.length > 0) {
		return (
			<div className="Synonyms">
				<strong>
					<em>Synonyms: </em>
				</strong>
				{props.synonyms.map(function (synonym, index) {
					if (index !== props.synonyms.length - 1) {
						return <span key={index}>"{synonym}", </span>;
					} else {
						return <span key={index}>"{synonym}".</span>;
					}
				})}
			</div>
		);
	} else {
		return null;
	}
}
