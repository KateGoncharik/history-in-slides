import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import { HistoricalEvent } from '../types';

interface EventsSliderProps {
  events: HistoricalEvent[];
}
export const EventsSlider = ({ events }: EventsSliderProps) => {
  return (
    <div>
      <Swiper
        modules={[Mousewheel, FreeMode]}
        mousewheel={{
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        freeMode={true}
        watchSlidesProgress={true}
        resistance={true}
        resistanceRatio={0.85}
        watchOverflow={true}
        centeredSlides={false}
        spaceBetween={10}
        className="events-swiper"
        breakpoints={{
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {events.map((event) => (
          <SwiperSlide key={event.id} className="event-slide">
            <div className="event-card">
              <div className="event-year">{event.year}</div>
              {event.description && <div className="event-description">{event.description}</div>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
