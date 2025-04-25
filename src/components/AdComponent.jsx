import { useEffect } from "react";

const injectAd = () => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.error("Adsense error:", e);
  }
};

export const HorizontalAd = () => {
  useEffect(() => {
    injectAd();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1920376743727534"
      data-ad-slot="4690394327"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export const SquareAd = () => {
  useEffect(() => {
    injectAd();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1920376743727534"
      data-ad-slot="9164825952"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export const VerticalAd = () => {
  useEffect(() => {
    injectAd();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1920376743727534"
      data-ad-slot="5182183062"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};
