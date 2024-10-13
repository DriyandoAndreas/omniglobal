"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image1 from "@/app/assets/images/image1.jpg";
import Image2 from "@/app/assets/images/image2.jpg";
import Image3 from "@/app/assets/images/image3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CarouselImage() {
  return (
    <div>
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem
            className="relative h-[300px] md:h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${Image1.src})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute p-8">
              <div className="flex-col space-y-4">
                <div>
                  <h2 className="text-4xl lg:text-6xl text-white font-bold">
                    Welcome to Omni Milenia Global
                  </h2>
                </div>
                <div>
                  <p className="text-lg lg:text-2xl text-white">
                    Invesment Management and Corporate Management
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem
            className="relative h-[300px] md:h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${Image2.src})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute p-8">
              <div className="flex-col space-y-4">
                <div>
                  <h2 className="text-4xl lg:text-6xl text-white font-bold">
                    Invest today, enjoy tomorrow
                  </h2>
                </div>
                <div className="lg:w-[550px]">
                  <p className="text-lg lg:text-2xl text-white line-clamp-3">
                    {`Investing is more than just a financial strategy—it's a
                    pathway to long-term stability and prosperity. By making
                    smart investment choices today, you can watch your wealth
                    grow steadily over time, giving you peace of mind for the
                    future. Whether you're saving for retirement, a dream home,
                    or your child's education, investing can help you achieve
                    your financial goals and build a more secure future for
                    yourself and your loved ones.`}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem
            className="relative h-[300px] md:h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${Image3.src})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute p-8">
              <div className="flex-col space-y-4">
                <div>
                  <h2 className="text-4xl lg:text-6xl text-white font-bold">
                    Grow your wealth, secure your future
                  </h2>
                </div>
                <div className="lg:w-[550px]">
                  <p className="text-lg lg:text-2xl text-white line-clamp-3">
                    {`The best time to start investing is now. With the power of compounding, every investment you make today sets you up for greater returns in the future. By planning ahead and making strategic investment decisions, you can create the financial freedom to enjoy life's best moments without worry. Start investing today, and unlock the potential to live your dreams tomorrow.`}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
