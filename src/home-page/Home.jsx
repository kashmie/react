import React from "react";
import Header from "./Header";
import HomeSectionFirst from "./HomeSectionFirst";
import HomeSectionSecond from "./HomeSectionSecond";
import HomeSectionThird from "./HomeSectionThird";
import HomeSectionFourth from "./HomeSectionFourth";

const HomePage = () => {
	return (
		<div>
			<section id="home-section-first">
				<Header />
				<HomeSectionFirst />
			</section>
			<section>
				<HomeSectionSecond />
			</section>
			<section id="home-section-third">
				<HomeSectionThird />
			</section>
			<section id="home-section-fourth" className="img-fluid">
				<HomeSectionFourth />
			</section>
			<section id="home-section-third"></section>
		</div>
	);
};

export default HomePage;
