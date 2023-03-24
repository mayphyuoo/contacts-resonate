import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

function Nav() {
	return (
		<header id="top">
			<span className="nav-icon">
				<FontAwesomeIcon icon={faAddressBook} />
			</span>
			<h1>Contacts</h1>
		</header>
	);
}
export default Nav;
