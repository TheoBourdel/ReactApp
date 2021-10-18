import Slider from "react-slick";

import '../css/components/CarouselMedia.css';

import post1 from '../media/posts/post1.png'
import post2 from '../media/posts/post2.png'
import post3 from '../media/posts/post3.png'
import post4 from '../media/posts/post4.png'
import profil2 from '../media/Ellipse/Ellipse2.png'
import profil3 from '../media/Ellipse/Ellipse3.png'
import profil4 from '../media/Ellipse/Ellipse4.png'
import profil5 from '../media/Ellipse/Ellipse5.png'
import Profil from "./Profil";




const CarouselMedia = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <div className="media-container">
            <Slider {...settings}>
                <div className="post-container">
                    <img src={post1} alt="post1" />
                    <div className="profil-container">
                        <Profil image={profil2} name="Ridhwan Nordin" twitter="@ridzjcob"></Profil>
                    </div>
                </div>
                <div className="post-container">
                    <img src={post2} alt="post1" />
                    <div className="profil-container">
                        <Profil image={profil3} name="Clem Onojeghuo" twitter="@clemono2"></Profil>
                    </div>
                </div>
                <div className="post-container">
                    <img src={post3} alt="post1" />
                    <div className="profil-container">
                        <Profil image={profil4} name="Jon Tyson" twitter="jontyson"></Profil>
                    </div>
                </div>
                <div className="post-container">
                    <img src={post4} alt="post1" />
                    <div className="profil-container">
                        <Profil image={profil5} name="Simon Zhu" twitter="smnzhu"></Profil>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CarouselMedia;