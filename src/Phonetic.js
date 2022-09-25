import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
	return (
		<div className="Phonetic">
			<ReactAudioPlayer src={props.phonetic.audio} controls />
			<a href={props.phonetic.audio} rel="noopener">
				Listen
			</a>
			{props.phonetic.text}
		</div>
	);
}
