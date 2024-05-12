import { Carousel } from 'antd';
import john from "../assets/banner2.jpg";

const Banner = () => (
  <Carousel
    autoplay
    arrows
    className='h-[400px] mt-24 shadow-lg bg-gradient-to-r from-[rgba(40,40,60,1)] via-[rgba(40,0,60,0.9)] to-[rgba(40,0,60,0)] bg-blend-multiply will-change-transform'
  >
    <div className="h-[400px] flex items-center justify-center">
      <img src={john} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={john} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={john} className="w-full h-full object-cover" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={john} className="w-full h-full object-cover" alt="" />
    </div>
  </Carousel>
);

export default Banner;