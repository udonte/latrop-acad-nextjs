import React from "react";
import NewPassword from "./NewPassword";

const page = ({params}) => {

	return (
		<div>
			<NewPassword resetToken={params} />
		</div>
	);
};

export default page;
