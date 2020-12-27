import React from "react";
import Button from "../components/Button";
const Header = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark ">
				<div className="container">
					<a className="navbar-brand" href="#">
						<img src="images/logo-white.svg" alt="zfloos logo" />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto">
							<li className="nav-item dropdown mx-2">
								<a
									className="nav-link dropdown-toggle header-link {"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Products
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">
										Action
									</a>
									<a className="dropdown-item" href="#">
										Another action
									</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</li>
							<li className="nav-item dropdown  mx-2">
								<a
									className="nav-link dropdown-toggle header-link {"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Payments Gateway
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<a className="dropdown-item" href="#">
										Action
									</a>
									<a className="dropdown-item" href="#">
										Another action
									</a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</div>
							</li>

							<li className="nav-item  mx-2">
								<a className="nav-link header-link {" href="#">
									Pricing
								</a>
							</li>
						</ul>
						<Button name={"Sign in"} class={"btn btn-light"} />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
