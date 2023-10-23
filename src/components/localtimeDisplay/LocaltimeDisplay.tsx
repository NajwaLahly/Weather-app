import { useEffect, useState } from "react";

type LocaltimeDisplayProps = {
  localtime: Date;
};

export default function LocaltimeDisplay({ localtime }: LocaltimeDisplayProps) {
  const [time, setTime] = useState(localtime);

  const tick = () => setTime(new Date());

  useEffect(() => {
    const intervalId = setInterval(tick, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [localtime]);

  return <p>{time.toString()}</p>;
}
