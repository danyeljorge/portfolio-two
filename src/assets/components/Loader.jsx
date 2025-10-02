import {Player} from '@lottiefiles/react-lottie-player';
import loaderAlian from '../data/loader.json';



function Loader() {

    console.log("Loader renderizado", loaderAlian);
  return (
    <div className="flex items-center justify-center h-screen bg-[#1b1b1b]">
      
        <Player
        autoplay
        loop
        src={loaderAlian}
        style={{ height: '300px', width: '300px' }}
      >
      </Player>
    </div>
  );
}

export default Loader;
