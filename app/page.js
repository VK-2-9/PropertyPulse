import Hero from "./components/Hero";
import HomeProperties from "./components/HomeProperties";
import InfoBoxes from "./components/InfoBoxes";

export default function Home() {
  // Server-side log: correct env var name is MONGODB_URI (typo previously caused undefined)
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
}
