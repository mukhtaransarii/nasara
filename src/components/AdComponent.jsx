import { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
     console.error("Ads error:", e);
    }
  }, []);

  return (
    <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1920376743727534"
     data-ad-slot="9164825952"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  );
};

export default AdComponent;