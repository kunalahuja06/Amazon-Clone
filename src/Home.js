import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="image"
        />
        <div className="home__row">
          <Product
            id="111"
            title="Apple iPhone 13 (128GB) - Pink"
            price={74999}
            image={
              "https://m.media-amazon.com/images/I/61l9ppRIiqL._AC_UY327_FMwebp_QL65_.jpg"
            }
            rating={Math.min(5, 10)}
          />
        </div>
        <div className="home__row">
          <Product
            id="112"
            title={"The Alchemist"}
            price={220}
            rating={4}
            image={
              "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865542l/18144590._SY475_.jpg"
            }
          />
          <Product
            id="113"
            title={
              "Dalmond Truffles Handmade Almond Date Chocolates Gift Pack-12 Pcs, Assorted - Dark, Milk & White Chocolates Gift Box [250 GMS]"
            }
            price={499}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/716HMEpRkpL._SL1500_.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="114"
            title={
              "TP-Link Archer AC1200 Archer C6 Wi-Fi Speed Up to 867 Mbps/5 GHz + 300 Mbps/2.4 GHz,Wireless Router"
            }
            price={2599}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/51ax8peHlPL._AC_UY327_FMwebp_QL65_.jpg"
            }
          />
          <Product
            id="115"
            title={
              "Apple Watch Series 7 (GPS + Cellular, 45mm) - Midnight Aluminium Case with Midnight Sport Band - Regular"
            }
            price={53999}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71W+RrSPINL._SL1500_.jpg"
            }
          />
          <Product
            id="116"
            title={
              "Lenovo V15 Intel Celeron N4020 15.6 FHD (1080p)(39.62 cm) HD Thin and Light Laptop (4GB RAM/1 TB HDD / DOS /Iron Grey/1 Year Onsite Warranty/1.7 kg), 82C30052IH"
            }
            price={36999}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/61koe2VO+jL._SL1302_.jpg"
            }
          />
        </div>
        <div className="home__row">
          <Product
            id="117"  
            title={
              "Samsung S21 Ultra 5G with Snapdragon 888 (Phantom Silver, 12GB RAM, 256GB Storage)"
            }
            price={110999}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/81J0QOSKU-L._SL1500_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
