import '../css/hero.css';
import instagram from '../assets/icon/instagram.png';
import twitter from '../assets/icon/twitter.png';
import more from '../assets/icon/more.png';
import { useEffect, useState } from 'react';

const Hero = ({ activeNft, collection }) => {
  const [activeHero, setActiveHero] = useState();

  useEffect(() => {
    const active_hero = collection.find((x) => x.token_id === activeNft);

    if (active_hero) {
      setActiveHero(active_hero);
    }
  }, [collection, activeNft]);

  return (
    <section className="hero-container">
      <section className="left-col">
        <section className="hero-img-container">
          <img src={activeHero?.image_original_url} alt={activeHero?.name} />
        </section>

        <section className="hero-details">
          <h1>
            {activeHero?.name}{' '}
            <span className="hero-id">·#{activeHero?.token_id}</span>
          </h1>

          <div className="owner-container">
            <div className="circle">
              <img
                src={activeHero?.owner.profile_img_url}
                alt={activeHero?.name}
              />
            </div>
            <div>
              <p>{activeHero.owner.address}</p>
              <p className="username">@iamTheBravo</p>
            </div>
          </div>
        </section>
      </section>

      <section className="socials">
        <div>
          <img src={instagram} alt="instagram" />
        </div>
        <div>
          <img src={twitter} alt="twitter" />
        </div>
        <div>
          <img src={more} alt="more" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
