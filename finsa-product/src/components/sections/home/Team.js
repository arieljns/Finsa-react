import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import img1 from '../../../assets/img/team/01.jpg'
import img2 from '../../../assets/img/team/02.jpg'
import img3 from '../../../assets/img/team/03.jpg'
import img4 from '../../../assets/img/team/04.jpg'
import img5 from '../../../assets/img/team/10.jpg'
import img6 from '../../../assets/img/team/11.jpg'
import img7 from '../../../assets/img/team/12.jpg'
import img8 from '../../../assets/img/team/13.jpg'

const teamblock = [
    { img: img1, name: 'John N. Holmes', post: 'Business Developer' },
    { img: img2, name: 'Kenneth A. Spencer', post: 'Business Developer' },
    { img: img3, name: 'David K. Marble', post: 'Business Developer' },
    { img: img4, name: 'Raymond Grimes', post: 'Business Developer' },
    { img: img5, name: 'Sebastian Cartwright', post: 'Business Developer' },
    { img: img6, name: 'Joseph Browne', post: 'Business Developer' },
    { img: img7, name: 'Morgan Graham', post: 'Business Developer' },
    { img: img8, name: 'Mason Parkinson', post: 'Business Developer' },
]

const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: false,
    fade: false,
    dots: false,
    swipe: true,
    responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
        },
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
        },
    },
    ],
}

function Team(props) {
    return (
        <section className="team-section section-gap">
            <div className="container">
                {/* Section Title */}
                <div className="section-title mb-40 both-border text-center">
                    <span className="title-tag">Meet Our Advisors</span>
                    <h2 className="title">We Have An Exclusive <br /> Team Member</h2>
                </div>
                {/* Team Boxes */}
                <Slider className="row team-members" id="teamSliderOne" {...settings}>
                    {teamblock.map((item, i) => (
                        <div key={i} className="col-lg-12">
                            <div className="team-member">
                                <div className="member-picture-wrap">
                                    <div className="member-picture">
                                        <img src={item.img} alt="" />
                                        <div className="social-icons">
                                            <Link to="/">
                                                <i className="fab fa-facebook-f" />
                                            </Link>
                                            <Link to="/">
                                                <i className="fab fa-twitter" />
                                            </Link>
                                            <Link to="/">
                                                <i className="fab fa-behance" />
                                            </Link>
                                            <Link to="/">
                                                <i className="fab fa-instagram" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="member-desc">
                                    <h3 className="name"><Link to="/teamdetail">{item.name}</Link></h3>
                                    <span className="pro">{item.post}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Team;