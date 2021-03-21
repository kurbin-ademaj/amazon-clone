import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />
      {/* Product id, title, price, rating, img */}
      <div className='home__row'>
        <Product
          id='12321341'
          title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
        />
        <Product
          id='12321342'
          title='CARRERA Stand Mixer 657'
          price={399.0}
          rating={4}
          image='https://www.carrera.de/assets/foodprocessor-657/FP-01-ba4b44fb3f2164d90aa4fbd4381b1c5e3856c97e6b66906e7966ebb40f8b756c.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321343'
          title='Garmin Vivomove hr'
          price={199}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/817VHcWxBjL._AC_SL1500_.jpg'
        />
        <Product
          id='12321344'
          title='AMAZON Echo (3rd generation) Smart Speaker, anthracite fabric'
          price={97.47}
          rating={3}
          image='http://t3.gstatic.com/shopping?q=tbn:ANd9GcTXGw1unRTxcp1-9pA6eVxAH8XPb95VWguQJog89arJLn-olQu3tgRccv69Y8ojht6zt6EAEsevbZYIIuefJUP3ikuzDEXE&usqp=CAY'
        />
        <Product
          id='12321345'
          title='New Apple iPad Pro 12.9 ", Space gray 256GB'
          price={1159.53}
          rating={2}
          image='https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._AC_SL1500_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='12321346'
          title='Samsung C49HG90DMU 124.20 cm (49 inch) curved gaming monitor (3840 x 1080 pixels, Ultra Wide 32: 9 format, 144hz, 1ms) matt black'
          price={689.37}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;
