import React from "react";
import { Button } from "unbxd-react-components";

const CustomButton = (props) => {
	return <Button {...props}>{props.children}</Button>;
};

export default CustomButton;
