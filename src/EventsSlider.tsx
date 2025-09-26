import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/mousewheel';

export interface HistoricalEvent {
  year: number;
  description?: string;
}

interface EventsSliderProps {
  events: HistoricalEvent[];
}
// ширина не та, не хватает стилей
export const EventsSlider = ({ events }: EventsSliderProps) => {
  return (
    <div className="events-slider">
      <Swiper
        direction="horizontal"
        modules={[Mousewheel, FreeMode, Controller]}
        mousewheel={true}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.5,
          momentumBounce: true,
        }}
        pagination={{
          clickable: true,
          type: 'fraction',
        }}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={10}
        className="vertical-slider"
      >
        {events.map((event) => (
          <SwiperSlide key={event.year} className="event-slide">
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
