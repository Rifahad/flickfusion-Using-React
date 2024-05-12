import Image from "../assets/2170.jpg";
// import Demo from "../assets/multifandom.mp4";

function BackgroundVid() {
  return (
    <div className=' w-full h-screen absolute top-0 bg-cover bg-no-repeat bg-center overflow-hidden -z-10'>
      {/* <video src={Demo} autoPlay loop	muted className='opacity-95'></video > */}
      <img src={Image} className="h-full w-full" alt="" srcset="" />
    </div>
  )
}

export default BackgroundVid
