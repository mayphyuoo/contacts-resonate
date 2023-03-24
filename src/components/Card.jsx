import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
	return (
		<div className="contact-card">
			<div className="user-icon">
				<FontAwesomeIcon icon={faUser} />
			</div>
			<div className="content-column">
				<div className="heading">
					<h2>{props.data.name}</h2>
					<span id="user-name">({props.data.username})</span>
				</div>
				<div className="identifier">
					<p>Email:</p>
					<p>Phone:</p>
					<p>Website:</p>
					<p>Company:</p>
					<p>Address:</p>
					<p>Zip Code:</p>
				</div>
				<div className="content">
					<p>{props.data.email}</p>
					<p>{props.data.phone}</p>
					<p>{props.data.website}</p>
					<p>{props.data.company.name}</p>
					<p>
						{props.data.address.suite}, {props.data.address.street},{" "}
						{props.data.address.city}
					</p>
					<p>{props.data.address.zipcode}</p>
				</div>
			</div>
		</div>
	);
}
export default Card;
