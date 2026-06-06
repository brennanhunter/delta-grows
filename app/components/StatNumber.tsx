"use client";

import CountUp from "react-countup";

type Props = {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

/**
 * Animated stat number that counts up when it scrolls into view (once).
 */
export default function StatNumber({ end, prefix, suffix, decimals = 0 }: Props) {
  return (
    <CountUp
      className="dg-stat__value"
      end={end}
      prefix={prefix}
      suffix={suffix}
      decimals={decimals}
      duration={2}
      enableScrollSpy
      scrollSpyOnce
    />
  );
}
