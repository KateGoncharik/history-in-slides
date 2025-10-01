import { useEffect, useState } from 'react';
import { EventsSlider } from './EventsSlider';
import { SliderControllers } from './Controllers';
import { mockCategories } from '../data/data';
import { DateComponent } from './Date';

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
      <div className="header-content">
        <div className="gradient" />
        <h2 className="main-title">Исторические даты</h2>
      </div>

      <div className="dates-display">
        <DateComponent className="start-date" value={startYear} />
        <DateComponent className="end-date" value={endYear} />
      </div>
      <div className="controllers-container">
        <div>
          {String(activeCategory + 1).padStart(2, '0')} /{' '}
          {String(mockCategories.length).padStart(2, '0')}
        </div>
        <SliderControllers onNext={handleNext} onPrev={handlePrev} />
      </div>

      <div className="events-section">
        <div className="current-category">
          <h3>{currentCategory.name}</h3>
        </div>

        <EventsSlider events={currentCategory.events} />
      </div>
    </div>
  );
};
