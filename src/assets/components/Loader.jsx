import {Player} from '@lottiefiles/react-lottie-player';
import loaderAlian from '../data/loader.json';



function Loader() {

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1b1b1b]">
      
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
