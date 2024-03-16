import bannerImage from '../assets/images/cook.jpg'

const Hero = () => {
    return (
        <div>
            <div className={`hero min-h-[70vh] rounded-xl bg-[url(${bannerImage})]  bg-no-repeat bg-center`} >
            <div className="hero-content text-center text-neutral-content">
              <div className="lg:max-w-xl">
                <h1 className="mb-10 text-2xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum sit soluta nostrum?</p>
               <div className='space-x-4'>
                <button className='bg-[#FDA403] py-3 px-6 rounded-3xl text-black font-semibold'>Explore Now</button>
                <button className='text-black py-3 px-6 border-[1px] border-[#E5C287] rounded-3xl'>Our Feedback</button>
               </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Hero;