

const Hero = () => {
    return (
        <div>
            <div className={`hero min-h-[70vh] rounded-xl bg-[url('../cook.jpg')]  bg-no-repeat bg-center`} >
            <div className="hero-content text-center text-neutral-content">
              <div className="lg:max-w-xl">
                <h1 className="mb-10 text-[#fda503c9] text-2xl lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-5 text-base text-gray-200">Indulge your senses in a symphony of flavors at our restaurant doorstep.</p>
               <div className='space-x-4'>
                <button className='bg-[#FDA403] py-3 px-6 rounded-3xl text-black font-semibold'>Explore Now</button>
                <button className='text-gray-50 font-semibold py-3 px-6 border-[1px] border-[#E5C287] rounded-3xl'>Our Feedback</button>
               </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Hero;