import wethIcon from '../assets/img/weth.png';
import '../css/collectionCard.css';

const CollectionCard = ({ nft, setActiveNft }) => {
  return (
    <section
      onClick={() => setActiveNft(nft.token_id)}
      className="collectionCard"
    >
      <img src={nft.image_original_url} alt={nft.name} />

      <section className="details">
        <p className="name">{nft.name}</p>
        <p className="id">.#{nft.token_id}</p>

        <div className="priceContainer">
          <img src={wethIcon} alt="weth" />
          <p>{nft?.traits[0]?.value}</p>
        </div>
      </section>
    </section>
  );
};

export default CollectionCard;
