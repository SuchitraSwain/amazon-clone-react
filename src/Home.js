import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id={123}
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id={123}
          title="Chamonics Bluetooth Smart Watch Compatible with All 3G, 4G Phone with Camera and Sim Card Support A1 for Men boy Kids Girls and Women (A1 Black)"
          price={199.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={123}
          title="JBL Go 2 Portable Waterproof Bluetooth Speaker with mic (Deep Sea Blue)"
          price={98.96}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id={123}
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Gold (Latest Model)"
          price={300.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61NhHYq8AnL._AC_SL1500_.jpg"
        />
        <Product
          id={123}
          title="New Apple iPhone SE (64GB, White) [Carrier Locked] + Carrier Subscription [Cricket Wireless] ($10/Month Amazon Gift Card Credit)"
          price={110.20}
          rating={3}
          image="https://m.media-amazon.com/images/I/81UhYiZH98L._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={123}
          title="Insignia NS-24DF311SE21 24-inch Smart HD TV - Fire TV Edition"
          price={80.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51YUcT86d4L._AC_UY218_.jpg"
        />
      </div>

      {/* PRODUCT */}
    </div>
  );
}

export default Home;
