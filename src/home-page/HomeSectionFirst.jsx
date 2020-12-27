import React from "react";
import Button from "../components/Button";

const HomeSectionFirst = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12	col-md-6	col-lg-6	col-xl-6 z-index-2">
					<h1 className="text-white  pt-5 pb-2  h1-header">
						Integrated <br />
						E-commerce Platform
					</h1>
					<p className="text-white p18">
						Start your e-commerce in minutes and manage your store, mobile apps,
						accounting, sales, purchases, points of sale, online payment
						gateways and more.
					</p>
					<Button name={"Start for free"} class={"my-2  mx-2"} />
					<Button name={"Call us"} class={"btn-basic text-white"} />
				</div>
				<div className="col-sm-12	col-md-6	col-lg-6	col-xl-6 mobile-vector "></div>
			</div>
			<img src="images/div-2.svg" alt="image" className="img-section-first-1" />
		</div>
	);
};

export default HomeSectionFirst;
