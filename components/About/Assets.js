import {useState, useEffect} from 'react';
import Image from 'next/image';

function Assets() {
    const [asset, setAsset] = useState("/bicycle.svg");
    const assets = ['/code.svg', '/911.svg', '/bicycle.svg', '/code.svg', '/911.svg', '/bicycle.svg', '/code.svg', '/911.svg', '/bicycle.svg'];
  
    const loading = () =>{
        const shuffledAssets = _.shuffle(assets);
        shuffledAssets.map((asset, index)=>setTimeout(() => {
          setAsset(asset);
        }, 200*index ));
    }
  
    useEffect(() => {
      loading();
    }, [])

    return (
        <div className="column" onClick={loading}>
        <Image
            src={asset}
            alt="Asset Pic"
            width={400}
            height={400}
          />
        </div>
    )
}

export default Assets
