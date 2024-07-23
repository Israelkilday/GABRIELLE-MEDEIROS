import CountUp from "react-countup";

interface StatsItemProps {
  countNum: number;
  countText: string;
  text: string;
}

const StartItem = ({ countNum, countText, text }: StatsItemProps) => {
  return (
    <div className="text-center font-primary">
      <div className="mb-4 text-[40px] text-accent">
        <CountUp end={countNum} delay={2.4} duration={6} />

        <span>{countText}</span>
      </div>

      <p className="text-lg text-primary-foreground">{text}</p>
    </div>
  );
};

export default StartItem;
