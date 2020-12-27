import React from "react";
import "./button.scss";
const Button = (props) => {
	return (
		<button type="button" className={` basic-btn ${props.class}`}>
			{props.name}
		</button>
	);
};

export default Button;
