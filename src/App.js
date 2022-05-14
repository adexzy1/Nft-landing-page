import Header from './components/Header';
import CollectionList from './components/CollectionList';
import Hero from './components/Hero';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [collection, setCollection] = useState([]);
  const [activeNft, setActiveNft] = useState('0');

  useEffect(() => {
    const abortController = new AbortController();

    const getAssets = async () => {
      try {
        const nfts = await axios.get(
          'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xCC6524016C53554d1F6c6e45842cf00066a71af9&order_direction=asc&offset=0',
          {
            signal: abortController.signal,
          }
        );

        setCollection(nfts.data.assets);
      } catch (error) {
        console.log(error);
      }
    };

    getAssets();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Hero activeNft={activeNft} collection={collection} />
      <CollectionList collection={collection} setActiveNft={setActiveNft} />
    </div>
  );
}

export default App;
