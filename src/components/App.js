import React, { useState } from "react";
import Modal from "../lib/modalComponent";

const App = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleSave = (e) => {
		e.preventDefault();
		setIsModalVisible(true);
	};
	const handleClosing = (e) => {
		setIsModalVisible(false);
	};

	return (
		<div>
			<button onClick={handleSave}> Click here </button>
			{isModalVisible && (
				<Modal message={"Employee Created !"} onClose={handleClosing} />
			)}
		</div>
	);
};

export default App;
