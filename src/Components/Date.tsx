import { useSimpleNumberAnimation } from '../useNumber';

interface DateComponentProps {
  value: number;
  duration?: number;
  className?: string;
}

export const DateComponent = ({ value, className = '' }: DateComponentProps) => {
  const numberRef = useSimpleNumberAnimation(value);

  return (
    <span ref={numberRef} className={className}>
      {value}
    </span>
  );
};
