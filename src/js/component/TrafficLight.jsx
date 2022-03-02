import React, { useState } from "react";

const TrafficLight = () => {
	const [red, setRed] = useState(false);
	const [yellow, setYellow] = useState(false);
	const [green, setGreen] = useState(false);

	return (
		<div className="container d-flex align-items-center justify-content-center">
			<div className="row justify-content-center">
				<div className="col-md-4 d-flex flex-column align-items-center text-center">
					<div
						id="barra"
						className="container abs-center justify-content-center"></div>

					<div id="trafficlight p-5 text-center">
						<div
							id="container"
							className="container abs-center justify-content-center">
							<button
								className={`redlight ${red ? "light" : ""}`}
								onClick={() => {
									setRed(true);
									setYellow(false);
									setGreen(false);
								}}></button>
							<button
								className={`yellowlight ${
									yellow ? "light" : ""
								}`}
								onClick={() => {
									setRed(false);
									setYellow(true);
									setGreen(false);
								}}></button>
							<button
								className={`greenlight ${green ? "light" : ""}`}
								onClick={() => {
									setRed(false);
									setYellow(false);
									setGreen(true);
								}}></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TrafficLight;
