import React from "react";
import Button from "../components/Button";

const HomeSectionSeventh = () => {
	return (
		<div>
			<section id="section-number">
				<div className="container  ">
					<div className="row">
						<div className="col-sm-12	col-md-6	col-lg-6	col-xl-6  ">
							<h3>
								<span className="green-color">zFloos </span> in numbers
							</h3>
						</div>
						<div className="col-sm-12	col-md-6	col-lg-6	col-xl-6 ">
							<p className="p18  gray-color">
								The first platform that provides you with an integrated
								environment for e-commerce
							</p>
						</div>
					</div>
					<div className="row pt-3 text-center">
						<div className="col-sm-12	col-md-2	col-lg-3	col-xl-3 ">
							<span className="z-numbers">25K+</span>
							<p className="p16 gray-color pt-3">Added products</p>
						</div>
						<div className="col-sm-12	col-md-2	col-lg-3	col-xl-3 ">
							<span className="z-numbers">10K+</span>
							<p className="p16 gray-color pt-3">Success transactions</p>
						</div>
						<div className="col-sm-12	col-md-2	col-lg-3	col-xl-3 ">
							<span className="z-numbers">50K+</span>
							<p className="p16 gray-color pt-3">Total sales in KWD</p>
						</div>
						<div className="col-sm-12	col-md-2	col-lg-3	col-xl-3 ">
							<span className="z-numbers">300+</span>
							<p className="p16 gray-color  pt-3">Happy merchants</p>
						</div>
					</div>
				</div>
			</section>

			<section id="valued-section">
				<div className="container  ">
					<div className="row">
						<div className="col-sm-12	col-md-6	col-lg-6	col-xl-6  ">
							<h1 className="text-white ">
								Our Valued <br />
								<span className="green-color">Clients</span>
							</h1>
						</div>
						<div className="col-sm-12	col-md-6	col-lg-6	col-xl-6  ">
							<p className="p18  text-white pt-2">
								We are proud of our platform and support personnel for
								continuing to work during COVID-19 times to fulfill our clients
								orders online
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row our-cuomers">
						<div className="col">
							<div class="d-flex flex-wrap justify-content-center pt-5">
								<div class=" px-4 py-3">
									<img
										src="/images/1.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/2.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/3.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/4.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/5.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/6.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/7.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/8.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/9.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/10.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/11.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/12.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/13.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
								<div class=" px-4 py-3">
									<img
										src="/images/14.svg"
										alt="card  image"
										className="img-fluid "
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="container">
					<div className="row start-div">
						<div className="col-sm-12	col-md-7	col-lg-7	col-xl-7 pl-5 pt-5">
							<h3 className="pl-5  pt-5">
								Ready <span className="green-color">to start</span> your
								journey?
							</h3>
							<p className="p18 pl-5 pt-3">
								We are here to help you enter the world of e-commerce in a few
								simple steps
							</p>
						</div>
						<div className="col-sm-12	col-md-5	col-lg-5	col-xl-5 ">
							<Button name={"Start Free"} class={"btn start-btn mx-auto"} />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomeSectionSeventh;
