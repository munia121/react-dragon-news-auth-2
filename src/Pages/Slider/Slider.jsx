
import bgImage1 from '../../assets/qZone1.png'
import bgImage2 from '../../assets/qZone2.png'
import bgImage3 from '../../assets/qZone3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay, Navigation, Pagination  } from 'swiper/modules';


import "swiper/css/bundle";
import { Link } from 'react-router-dom';


const Slider = () => {
    return (
      
        <div className='mx-auto'>
            <Link  to={'/'}> <button className='btn text-center'>Home</button></Link>
            <Swiper  
            navigation={true} 
            pagination = {
                {
                    clickable:true
                }
            }
            modules={[Navigation,  Autoplay, Pagination ]} 
            loop={true} 
            autoplay = {
                {
                    delay:2000,
                }
            }

            className='mx-auto'>
                <SwiperSlide>
                    slide-1
                    <div style={{ backgroundImage: `url(${bgImage1})` }} className=" h-[600px] bg-no-repeat justify-center items-center w-full border bg-cover">
                        <p className='justify-center items-center flex'>slid-1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>slide-2
                    <div style={{ backgroundImage: `url(${bgImage2})` }} className=" h-[600px] bg-no-repeat justify-center items-center w-full border bg-cover">
                        <p className='justify-center items-center flex'>slid-2</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>slide-3
                    <div style={{ backgroundImage: `url(${bgImage3})` }} className=" h-[600px] bg-no-repeat justify-center items-center w-full border bg-cover">
                        <p className='justify-center items-center flex'>slid-3</p>
                    </div>
                </SwiperSlide>
            </Swiper>




            {/* 


            


            */}

        </div>
    );
};

export default Slider;