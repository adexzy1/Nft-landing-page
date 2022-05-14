import CollectionCard from './CollectionCard';
import '../css/collectionList.css';

const CollectionList = ({ collection, setActiveNft }) => {
  return (
    <section className="collection-list">
      {collection.map((nft) => (
        <CollectionCard
          key={nft.token_id}
          nft={nft}
          setActiveNft={setActiveNft}
        />
      ))}
    </section>
  );
};

export default CollectionList;
