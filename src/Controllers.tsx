interface SliderControllersProps {
  onNext: () => void;
  onPrev: () => void;
}

export const SliderControllers = ({ onNext, onPrev }: SliderControllersProps) => {
  return (
    <div className="slider-controllers">
      <button className="controller-btn prev" onClick={onPrev}>
        ‹
      </button>

      <button className="controller-btn next" onClick={onNext}>
        ›
      </button>
    </div>
  );
};
