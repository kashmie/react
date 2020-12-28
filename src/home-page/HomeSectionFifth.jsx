import React from "react";

const HomeSectionFifth = () => {
	return (
		<div className="container fifth-top ">
			<div className="row  ">
				<div className="col-sm-12	col-md-6	col-lg-6	col-xl-6  ">
					<h2 className="text-white">
						Why the <span className="green-color  ">Zfloos</span>
						<br /> platform?
					</h2>
					<p className="p18 pt-5 white-off ">
						At<span className="green-color  "> zFloos</span> , We do not compete
						with others, but instead, we compete with ourselves every day to be
						better and better.
					</p>
					<p className="p18 white-off non-active-p">
						Some of our advantages in zFloos that make us the best in our field
					</p>
					<img
						src="/images/mask-group.svg"
						alt=" mobile image"
						className="img-fluid"
					/>
				</div>
				<div className="col-sm-12	col-md-6	col-lg-6	col-xl-6   ">
					<p className="p18 p-top white-off non-active-p2">
						Some of our advantages in zFloos that make us the best in our field
					</p>
					<div class="d-flex  justify-content-center py-3 mt-5">
						<div className="p-2 item-advantages ">
							<div className=" px-2 pt-2">
								<svg className="icon-dollar"></svg>
							</div>
							<p className="secondary-color p16 p-3">Primarily economical</p>
						</div>
						<div className="p-2 item-advantages">
							<div className=" px-2 pt-2">
								<svg className="icon-launch"></svg>
							</div>
							<p className="secondary-color p16 p-3">Simplicity and speed</p>
						</div>
					</div>

					<div class="d-flex  justify-content-center py-3">
						<div className="p-2 item-advantages ">
							<div className=" px-2 pt-2">
								<svg className="icon-updates"></svg>
							</div>
							<p className="secondary-color p16 p-3">Permanent updates</p>
						</div>
						<div className="p-2 item-advantages">
							<div className=" px-2 pt-2">
								<svg className="icon-time"></svg>
							</div>
							<p className="secondary-color p16 p-3">
								Continuous follow-up 24/7
							</p>
						</div>
					</div>

					<div class="d-flex  justify-content-center py-3">
						<div className="p-2 item-advantages ">
							<div className=" px-2 pt-2">
								<svg className="icon-security"></svg>
							</div>
							<p className="secondary-color p16 p-3">
								A secure system for protecting
							</p>
						</div>
						<div className="p-2 item-advantages">
							<div className=" px-2 pt-2">
								<svg className="icon-integration  "></svg>
							</div>
							<p className="secondary-color p16 p-3">
								Integration with all you need
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeSectionFifth;
