import React from "react";
import Button from "../components/Button";

const HomeSectionSecond = () => {
	return (
		<div className="container">
			<div className="row  justify-content-end  step-create">
				{/* <div className="px-5 pt-4 col-sm-12	col-md-4	col-lg-4	col-xl-4"> </div> */}
				<div className="px-5 pt-4 col-sm-12	col-md-4	col-lg-4	col-xl-4">
					<h6 className="p18-blod ">
						<svg className="icon-create"></svg>
						Create an account
					</h6>
					<p className="secondary-color p16">
						Create your account with one click and start directly
					</p>
				</div>
				<div className="px-5 pt-4 col-sm-12	col-md-4	col-lg-4	col-xl-4">
					<h6 className="p18-blod ">
						<svg className="icon-add-product"></svg>
						Add your produtcs
					</h6>
					<p className="secondary-color p16">
						Add your products in the convenient way that suits you
					</p>
				</div>
				<div className="px-5 pt-4 col-sm-12	col-md-4	col-lg-4	col-xl-4">
					<h6 className="p18-blod ">
						<svg className="icon-launch"></svg>
						Launch your online store
					</h6>
					<p className="secondary-color p16">
						Launch your store online and start your sales
					</p>
				</div>
			</div>
		</div>
	);
};

export default HomeSectionSecond;
