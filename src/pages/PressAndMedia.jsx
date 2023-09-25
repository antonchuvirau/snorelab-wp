//import React from 'react';
const { createElement, render } = wp.element;
import press_right from '../images/press-right.svg';
import press_about from '../images/press-about.png';
import downloads_left from '../images/downloads-left.png';
import downloads_right from '../images/downloads-right.png';
import press_star from '../images/press-star.svg';
import press_star_half from '../images/press-star-half.svg';
import founder_photo from '../images/founder-photo.png';
import press_article_1 from '../images/press-article-1.png';
import press_article_2 from '../images/press-article-2.png';
import press_article_3 from '../images/press-article-3.png';
import seen_article_1 from '../images/seen-article-1.png';
import seen_article_2 from '../images/seen-article-2.png';
import seen_article_3 from '../images/seen-article-3.png';
import market_herald from '../images/MarketHerald.svg';
import android from '../images/android.svg';
import new_york_times from '../images/NewYorkTimes.svg';
import press_lines from '../images/press-lines.png';

export const PressAndMedia = () => {
	return (
		<main className="press-and-media">
			<section className="press-and-media__top">
				<img alt="" src={press_lines} className="press-and-media__lines" />
				<div className="container">
					<div className="press-and-media__top-title">
						Press & Media
					</div>
					<div className="press-and-media__top-right">
						<div className="press-and-media__top-block-title">
							Are you a medical professional?
						</div>
						<div className="press-and-media__top-block-text">
							Request promotional material and special offers <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSed3DgSHYafClN59TEk8kaWYOCfdULcbcL4T3-fppERXEwcUQ/viewform?usp=sf_link">here</a>
						</div>
					</div>
					<div className="press-and-media__top-left">
						<div className="press-and-media__top-block-title">
							Contact us
						</div>
						<div className="press-and-media__top-block-text">
							Get in touch via email <a href="">team@snorelab.com</a>
						</div>
					</div>
				</div>
			</section>
			<section className="press-and-media__about">
				<div className="container">
					<div className="press-and-media__about-left">
						<div className="press-and-media__about-title">
							About SnoreLab
						</div>
						<div className="press-and-media__about-text">
							SnoreLab is the No.1 iOS and Android app for tracking, recording and reducing snoring. The app has received over 12 million downloads and helped people around the world understand their snoring problem and discover solutions to improve their sleep.
						</div>
						<a
							href="https://docs.google.com/document/d/18BwfIQNHieRJDjmitZCqECTqrU33_KBJjc-9I_X1FnU/edit?usp=sharing"
							className="press-and-media__about-button"
							target="_blank"
						>
							<span>Press kit link</span>
							<img alt="" src={press_right} />
						</a>
					</div>
					<div className="press-and-media__about-right">
						<img alt="" src={press_about} className="press-and-media__about-img"></img>
					</div>
				</div>
			</section>
			<section className="press-and-media__achievements">
				<div className="container">
					<div className="press-and-media__achievements-downloads">
						<img
							alt=""
							className="press-and-media__achievements-left"
							src={downloads_left}
						/>
						<div className="press-and-media__achievements-center">
							<div className="press-and-media__achievements-center-title">
								Over<br/>13 million<br/>downloads
							</div>
							<div className="press-and-media__achievements-center-subtitle">
								from App Store and Play Store
							</div>
						</div>
						<img
							alt=""
							className="press-and-media__achievements-right"
							src={downloads_right}
						/>
					</div>
					<div className="press-and-media__achievements-rating">
						<div className="press-and-media__achievements-rating-title">
							4.6<br />
							Rating
						</div>
						<div className="press-and-media__achievements-rating-stars">
							<img className="press-and-media__achievements-star" alt="" src={press_star} />
							<img className="press-and-media__achievements-star" alt="" src={press_star} />
							<img className="press-and-media__achievements-star" alt="" src={press_star} />
							<img className="press-and-media__achievements-star" alt="" src={press_star} />
							<img className="press-and-media__achievements-star-half" alt="" src={press_star_half} />
						</div>
						<div className="press-and-media__achievements-rating-subtitle">
							from App Store
						</div>
					</div>
					<div className="press-and-media__achievements-recommended">
						<div className="press-and-media__achievements-recommended-title">
							Recommended by doctors and dentists worldwide
						</div>
						<div className="press-and-media__achievements-recommended-subtitle">
							A top-rated health app helping millions of people with their snoring
						</div>
					</div>
				</div>
			</section>
			<section className="press-and-media__founder">
				<div className="container">
					<div className="press-and-media__founder-left">
						<div className="press-and-media__founder-title-mobile">
							The Founder
						</div>
						<img className="press-and-media__founder-photo" alt="" src={founder_photo} />
						<div className="press-and-media__founder-person">
							<div className="press-and-media__founder-name">
								Jules Goldberg
							</div>
							<div className="press-and-media__founder-post">
								Founder
							</div>
						</div>
					</div>
					<div className="press-and-media__founder-right">
						<div className="press-and-media__founder-title">
							The Founder
						</div>
						<div className="press-and-media__founder-text">
							Jules is the founder of SnoreLab, which he created as a self-taught developer in 2012. With interests in physics, art and philosophy, Jules is passionate about creating products that have a positive impact on people's lives. He has created other top-rated health apps including Sleepwave and SnoreGym.
						</div>
						<div className="press-and-media__founder-buttons">
							<a
								className="press-and-media__founder-button"
								target="_blank"
								href="https://docs.google.com/document/d/10-smuGDKKEQt0OoTbNLpOPPIeUkdwZ9i/edit"
							>
								<span>View Bio</span>
								<img alt="" src={press_right} />
							</a>
							<a
								className="press-and-media__founder-button"
								target="_blank"
								href="https://uploads-ssl.webflow.com/62fe5c45ef02b9d338fdca50/6426ffd7f86b934a644a0900_Jules%20Sideways.jpg"
							>
								<span>Download Headshot</span>
								<img alt="" src={press_right} />
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="press-and-media__articles">
				<div className="container">
					<div className="press-and-media__articles-wrap">
						<a
							className="press-and-media__article"
							target="_blank"
							href="https://drive.google.com/drive/folders/1fAVmKT8J_D6H4IuBKy7j76VipVgfl2tY?usp=sharing"
						>
							<div
								className="press-and-media__article-image"
								style={{
									background: `url(${press_article_1})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							></div>
							<div className="press-and-media__article-name">
								Products Screenshots
							</div>
						</a>
						<a
							className="press-and-media__article"
							target="_blank"
							href=""
						>
							<div
								className="press-and-media__article-image"
								style={{
									background: `url(${press_article_2})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							></div>
							<div className="press-and-media__article-name">
								Lifestyle Photos
							</div>
						</a>
						<a
							className="press-and-media__article"
							target="_blank"
							href="https://drive.google.com/drive/folders/19LQSBL6i6P5I83yqmSt9YnZONOdxOCnN?usp=sharing"
						>
							<div
								className="press-and-media__article-image"
								style={{
									background: `url(${press_article_3})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							></div>
							<div className="press-and-media__article-name">
								Logo Assets
							</div>
						</a>
					</div>
				</div>
			</section>
			<section className="press-and-media__seen-in">
				<div className="container">
					<div className="press-and-media__seen-in-title">
						As seen in
					</div>
					<div className="press-and-media__seen-in-articles">
						<a
							className="press-and-media__seen-in-article"
							target="_blank"
							href="https://www.nytimes.com/2020/02/19/smarter-living/wirecutter/anti-snoring-devices.html"
						>
							<div
								className="press-and-media__seen-in-image"
								style={{
									background: `url(${seen_article_1})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<img className="press-and-media__seen-in-logo" alt="" src={new_york_times} />
								<div className="press-and-media__seen-in-subtitle">
									The New York Times
								</div>
								<div className="press-and-media__seen-in-name">
									I Tried 6 Popular Anti-Snoring Devices. Here’s How They Did
								</div>
							</div>
						</a>
						<a
							className="press-and-media__seen-in-article"
							target="_blank"
							href="https://www.androidauthority.com/best-sleep-tracker-apps-android-789293/"
						>
							<div
								className="press-and-media__seen-in-image"
								style={{
									background: `url(${seen_article_2})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<img className="press-and-media__seen-in-logo" alt="" src={android} />
								<div className="press-and-media__seen-in-subtitle">
									Android Authority
								</div>
								<div className="press-and-media__seen-in-name">
									The best sleep tracker apps for Android
								</div>
							</div>
						</a>
						<a
							className="press-and-media__seen-in-article"
							target="_blank"
							href="https://themarketherald.com.au/fancy/the-best-sleep-tracking-apps-2022/"
						>
							<div
								className="press-and-media__seen-in-image"
								style={{
									background: `url(${seen_article_3})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							>
								<img className="press-and-media__seen-in-logo" alt="" src={market_herald} />
								<div className="press-and-media__seen-in-subtitle">
									The Market Herald
								</div>
								<div className="press-and-media__seen-in-name">
									The best sleep tracker apps for Android
								</div>
							</div>
						</a>
					</div>
				</div>
			</section>
		</main>
	);
};
