import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>HODERI.TRAVEL</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>O Nas</li>
            <li>Współpraca</li>
            <li>Kariera</li>
            <li>Nowości</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>Strona Główna</li>
            <li>Kierunki Pordóży</li>
            <li>Infrormację o pordóży</li>
            {/* <li>View</li>
            <li>Book</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
