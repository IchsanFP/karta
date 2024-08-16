import { Link } from "react-router-dom"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {dataPI, dataDiv} from "../components/Data";

export default function Team(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <section id="team" className="py-24 bg-rose-900">
            <div className="container mx-auto">
                <div className="w-full mx-auto">
                    <h1 className="text-3xl font-bold text-center lg:text-4xl font-monst text-rose-50">Our Team</h1>
                </div>
                <div className='w-4/5 mx-auto my-7'>
                    <h1 className='text-2xl font-semibold text-center lg:text-3xl text-rose-50 font-monst'>Pengurus Inti</h1>
                    <div className='mt-6'>
                    <Slider {...settings}>
                        {dataPI.map((card, index) => (
                        <div key={index} className='flex flex-wrap justify-center'>
                            <div className='relative flex flex-col items-center justify-center'>
                            <Link to={`/detail/${index}`}>
                                <img src={card.img} alt="Foto" className='max-w-[120px] sm:max-w-[170px] md:max-w-[220px]'/>
                            </Link>
                            <h1 className='pt-2 text-base font-bold text-center font-monst text-rose-50'>{card.name}</h1>
                            <h1 className='text-sm font-medium text-center font-monst text-rose-50'>{card.position}</h1>
                            </div>
                        </div>
                        ))}
                    </Slider>
                    </div>
                </div>

                <div className='w-4/5 mx-auto my-7'>
                    <h1 className='text-2xl font-semibold text-center lg:text-3xl text-rose-50 font-monst'>Divisi</h1>
                    <div className='mt-6'>
                    <Slider {...settings}>
                        {dataDiv.map((card, index) => (
                        <div key={index} className='flex flex-wrap justify-center'>
                            <div className='relative flex flex-col items-center justify-center'>
                            <Link to={`/detaildiv/${index}`}>
                                <img src={card.img} alt="Foto" className='max-w-[120px] sm:max-w-[170px] md:max-w-[220px]'/>
                            </Link>
                            <h1 className='pt-2 text-base font-bold text-center font-monst text-rose-50'>{card.name}</h1>
                            <h1 className='text-sm font-medium text-center font-monst text-rose-50'>{card.position}</h1>
                            </div>
                        </div>
                        ))}
                    </Slider>
                    </div>
                </div>
            </div>
        </section>
    )   
}