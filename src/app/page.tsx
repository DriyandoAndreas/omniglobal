import CarouselImage from "@/components/CarouselImage";
import Footer from "@/components/Footer";
import MarketStock from "@/components/MarketStock";
import OurService from "@/components/OurService";

export default function Home() {
  return (
    <>
      <CarouselImage />
      <OurService />
      <MarketStock />
      <Footer/>
    </>
  );
}
