import { useEffect, useState } from 'react';
import { EventsSlider } from './EventsSlider';
import { SliderControllers } from './Controllers';
import { mockCategories } from './data';

export const MainSlider = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const currentCategory = mockCategories[activeCategory];
  const handleNext = () => {
    setActiveCategory((prev) => (prev === mockCategories.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveCategory((prev) => (prev === 0 ? mockCategories.length - 1 : prev - 1));
  };

  const [startYear, setStartYear] = useState(
    currentCategory.events.length > 0 ? currentCategory.events[0].year : 1999
  );
  const [endYear, setEndYear] = useState(
    currentCategory.events.length > 0
      ? currentCategory.events[currentCategory.events.length - 1].year
      : 1999
  );
  useEffect(() => {
    setStartYear(currentCategory.events[0].year);
    setEndYear(currentCategory.events[currentCategory.events.length - 1].year);
  }, [currentCategory]);
  return (
    <div className="main-slider">
      <h2>Исторические даты</h2>
      <div className="dates-display">
        <span className="start-date">{startYear}</span>
        <span className="end-date">{endYear}</span>
      </div>
      <SliderControllers onNext={handleNext} onPrev={handlePrev} />

      <div className="events-section">
        <div className="current-category">
          <h3>{currentCategory.name}</h3>
          <div className="counter">
            {String(activeCategory + 1).padStart(2, '0')} /{' '}
            {String(mockCategories.length).padStart(2, '0')}
          </div>
        </div>

        <EventsSlider events={currentCategory.events} />
      </div>
    </div>
  );
};
