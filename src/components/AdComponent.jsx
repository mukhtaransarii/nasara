import { useEffect } from "react";

// Shared useEffect logic
const useAdsense = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);
};

// SQUARE Ad (like product card)
export const SquareAd = () => {
  useAdsense();
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", height: "250px" }} // square shape
      data-ad-client="ca-pub-1920376743727534"
      data-ad-slot="2585008143"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

// HORIZONTAL Ad (e.g., leaderboard/banner)
export const HorizontalAd = () => {
  useAdsense();
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%", height: "90px" }} // horizontal shape
      data-ad-client="ca-pub-1920376743727534"
      data-ad-slot="2585008143"
      data-ad-format="horizontal"
      data-full-width-responsive="true"
    ></ins>
  );
};

// VERTICAL Ad (e.g., sidebar or mobile column)
export const VerticalAd = () => {
  useAdsense();
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "300px", height: "600px" }} // vertical shape
      data-ad-client="ca-pub-1920376743727534"
      data-ad-slot="2585008143"
      data-ad-format="vertical"
      data-full-width-responsive="true"
    ></ins>
  );
};
