import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./Photos.css";

export default function Photos(props) {
	if (props.photos) {
		return (
			<section className="Photos">
				<div className="row">
					{props.photos.map(function (photo, index) {
						console.log(photo);
						return (
							<div className="col-4" key={index}>
								<a href={photo.src.original} target="_blank">
									<img src={photo.src.landscape} className="img-fluid" />
								</a>
							</div>
						);
					})}
				</div>
			</section>
		);
	} else {
		return null;
	}
}

// import React from 'react';
// import "./Photos.css";

// const Photos = ({photos}) => {
//   if(photos){
//     return(
//       <section className='section wrapper'>
//         {photos.photos.map((photo, index)=>{
//           return (
//             <div className="cell" key={index}>
//               <a href={photo.src.original} target="_blank" rel="noreferrer">
//                 <img src={photo.src.landscape} className="photo-image" alt={photo.alt}/>
//               </a>
//             </div>
//           )
//         })}
//       </section>
//     )
//   }else{
//     return null;
//   }
// }

// export default Photos;
