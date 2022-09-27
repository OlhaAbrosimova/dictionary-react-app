import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetic.css";

export default function Phonetics(props) {
	// console.log(props.phonetic);
	if (props.phonetic.audio && props.phonetic.text) {
		return (
			<div className="Phonetic">
				<span className="audioPlayer">
					<ReactAudioPlayer
						src={props.phonetic.audio}
						autoPlay={false}
						controls
					/>
				</span>
				<span className="transcription">{props.phonetic.text}</span>
			</div>
		);
	}
}
