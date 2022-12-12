import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import userIcons from '../../images/user-icon.png';
export default function Confirmation() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <main className="enrollment">
            <div className="container-fluid">
                <div id="confirmation">
                    <div className="row">
                        <div className="user-top">
                            <div className="user-icon">
                                <img
                                    className="img-fluid"
                                    src={userIcons}
                                    alt="icon"
                                />
                            </div>
                            <h3>Pending for approval</h3>
                            <h6>
                                Thanks for filling the form. You will receive a mail upon
                                activation
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="features">
                    <h6 className='mb-4'>Discover features</h6>
                    <div className="background">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                                <div className="blank-box" />
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                                <div className="anaytics-dashboard">
                                    <h3>Analytics Dashboard</h3>
                                    <p>Get hold of your sales and manage it hassle free.</p>


                                    <div className="content">
                                        <Slider {...settings}>
                                            <div>
                                                <ul style={{ marginBottom: '8rem' }}>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul style={{ marginBottom: '8rem' }}>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul style={{ marginBottom: '8rem' }}>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <ul style={{ marginBottom: '8rem' }}>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                                            ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Slider>

                                    </div>












                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq">
                    <h6 className='mb-4'>FAQ</h6>
                    <div className="faq-background">
                        <div className="content">
                            <ul>
                                <li>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                    <p style={{ maxWidth: '900px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                        ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                        orem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                        ncus natoque in adipiscing pellentesque sed vestibulum, mi.

                                    </p>
                                </li>
                                <li>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                    <p style={{ maxWidth: '900px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                        ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                    </p>
                                </li>
                                <li>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipis</h4>
                                    <p style={{ maxWidth: '900px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rho
                                        ncus natoque in adipiscing pellentesque sed vestibulum, mi.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
