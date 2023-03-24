// import React from "react";
import "./App.scss";

function GoTop(props) {
	return (
		<>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <i class="uil uil-arrow-up goTop"></i>
      </div>
    </>
	);
}
export default GoTop;
