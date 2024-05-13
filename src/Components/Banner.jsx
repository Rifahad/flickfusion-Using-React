import { Carousel } from 'antd';
import Banner1 from "../assets/Banner/banner1.jpg";
import Banner2 from '../assets/Banner/banner2.jpg';
import Banner3 from '../assets/Banner/banner3.jpeg';
import Banner4 from '../assets/Banner/banner4.jpg';
import Banner5 from '../assets/Banner/banner5.jpg';
import Banner6 from '../assets/Banner/banner6.jpg';
import Banner7 from '../assets/Banner/banner7.jpg';


const Banner = () => (
  <div className='w-full flex justify-center h-[450px] items-center  overflow-hidden'>

  <Carousel
    autoplay
    arrows
    className='h-[400px] w-[300px] border rounded-xl overflow-hidden sm:w-[1600px]'
    >
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner1} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner2} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner3} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner4} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner5} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner7} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner6} className="w-full h-full object-cover" alt="" />
    </div>
  </Carousel>
    </div>
);

export default Banner;