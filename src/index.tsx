import { createRoot } from 'react-dom/client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';

import './style.css';

import { MainSlider } from './Components/Main';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<MainSlider />);
}
