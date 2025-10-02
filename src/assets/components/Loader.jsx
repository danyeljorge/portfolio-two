import {Player} from '@lottiefiles/react-lottie-player';
import loaderAlian from '../data/loader.json';



function Loader() {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1b1b1b]">
      
        <Player
        autoplay
        loop
        src={loaderAlian}
        style={{ height: '300px', width: '300px' }}
      >
      </Player>
      <h1 className='text-3xl font-semibold text-white'>Carregando...</h1>
    </div>
  );
}

export default Loader;
