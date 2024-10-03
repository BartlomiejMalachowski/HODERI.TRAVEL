import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='flex items-center justify-center min-h-fit'>
  <div className='max-w-[1240px] mx-5 grid gap-7 px-300 py-30'>
    <div className='lg:col-span-2 w-full flex flex-col justify-center'>
      <div>
        <h2>WAKACJE LUXUSOWE W ZESTAWIE DLA DWÓCH OSÓB</h2>
        <p className='py-4'>
          Przeżyj szczyt luksusowych wakacji all-inclusive dla par w kurortach BEACHES.
          Nasze luksusowe ośrodki plażowe, usytuowane w najpiękniejszych tropikalnych
          lokalizacjach i wspaniałych plażach Saint Lucji, Jamajki, Antigui, Bahamów,
          Grenady, Barbadosu i Curaçao, oferują nieograniczone wykwintne jedzenie,
          unikalne bary serwujące wysokiej jakości alkohole i wina oraz wszystkie
          sporty lądowe i wodne, w tym bezpłatne opłaty za pole golfowe w naszych
          ośrodkach golfowych oraz certyfikowane nurkowanie w większości kurortów.
          Jeśli planujesz wesele, HODERI.TRAVEL jest liderem w zakresie wesel na karaibach
          oraz pakietów na miesiąc miodowy.
        </p>
      </div>
      <div className='border text-center'>
        <p className='pt-2'>OTRZYMAJ 10% ZNIŻKI</p>
        <p className='py-4'>POZOSTAŁO TYLKO 12 GODZIŃ</p>
        <p className='bg-gray-800 text-gray-200 py-2'>ZAREZERWUJ TERAZ</p>
      </div>
      <form className='w-full'>
        <div className='flex flex-col my-2'>
          <label>Kierunek Podróży</label>
          <select className='border rounded-md p-2'>
            <option>Grande Antigua</option>
            <option>Floryda</option>
            <option>Malediwy</option>
            <option>Cozumel</option>
          </select>
        </div>
        <div className='flex flex-col my-4'>
          <label>Data Zameldowania</label>
          <input className='border rounded-md p-2' type="date" />
        </div>
        <div className='flex flex-col my-2'>
          <label>Data Wymeldowania</label>
          <input className='border rounded-md p-2' type="date" />
        </div>
        <button className='w-full my-4'>Sprawdź Dostępne Kurorty</button>
      </form>
    </div>
  </div>
</div>
  );
};

export default Search;
