import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';
const Banner = () => {
  return (
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
  <div className='flex flex-col lg:flex-row'>
  <div className='lg:ml-8 xl:ml-[140px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
  <h1 className='text-5xl lg:text=[58px] font-semibold leading-none mb-6'>
  <span className='text-violet-700'> Rent </span>Your Dream House With Us</h1>
  <p className='max-w-[480px] mb-8'> We provide a wide range of housing options, from apartments and single-family homes to vacation rentals, ensuring you can find the perfect place for your unique needs. Our website features intuitive search tools and filters, making it easy to narrow down your choices based on location, budget, and property type.</p>
  </div>
  <div className='hidden flex-1 lg:flex justify-end items-end'>
  <img style={{marginRight:'8px', marginBottom:'40px'}} src={Image} alt=''/>

  </div>
  </div>
  <Search/>
  </section>
  );
};
export default Banner;