import React from "react";

const Modal = ({ message, onClose }) => {
	const modalwindowStyle = {
		position: "fixed",
		top: "0",
		right: "0",
		bottom: "0",
		left: "0",
		width: "100%",
		height: "100%",
		overflow: "auto",
		zIndex: "1",
		padding: "20px",
		boxSizing: "border-box",
		backgroundColor: "rgba(0,0,0,0.75)",
		textAlign: "center",
	};

	const modalcontainerStyle = {
		display: "flex",
		position: "absolute",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		width: "fit-content",
		padding: "0 1rem",
		gap: "1rem",
		top: "50%",
		left: "50%",
		transform: "translateX(-50%)",
		borderRadius: "5px",
		border: "solid grey 2px",
	};

	return (
		<div style={modalwindowStyle}>
			<div style={modalcontainerStyle}>
				<button onClick={onClose}>X</button>
				<p>{message}</p>
			</div>
		</div>
	);
};

export default Modal;
