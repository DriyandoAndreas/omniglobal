import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartCandlestick,
  HandCoins,
  Building2,
  FileSliders,
} from "lucide-react";
import Link from "next/link";
export default function OurService() {
  return (
    <>
      <div className="bg-lime-100 dark:bg-current">
      <div className="p-8">
        <p className="text-4xl font-bold text-center dark:text-black">Our Services</p>
        <div className="flex flex-wrap gap-4 py-8">
          <div className="flex-1 min-w-[250px]">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-center">
                  <ChartCandlestick size={40} />
                </CardTitle>
                <CardTitle className="text-center">Brokerage</CardTitle>
                <CardDescription className="line-clamp-2">
                  We offers corporate and individual investors direct access to
                  a wide range of stocks that listed on Indonesia Stock Exchage.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={"/"} className="font-bold text-blue-500 text-sm">
                  READ MORE
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex-1 min-w-[250px]">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-center">
                  <HandCoins size={40} />
                </CardTitle>
                <CardTitle className="text-center">
                  Invesment Management
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  The professional management of various securities and assets
                  to meet specified investment goals for the benefits of our
                  investors.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={"/"} className="font-bold text-blue-500 text-sm">
                  READ MORE
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex-1 min-w-[250px]">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-center">
                  <Building2 size={40} />
                </CardTitle>
                <CardTitle className="text-center">Corporate Finance</CardTitle>
                <CardDescription className="line-clamp-2">
                  Our team of professionals is devoted to providing clients with
                  the most effective range of services to raise capital.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={"/"} className="font-bold text-blue-500 text-sm">
                  READ MORE
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex-1 min-w-[250px]">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-center">
                  <FileSliders size={40} />
                </CardTitle>
                <CardTitle className="text-center">
                  Financial Planning
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  In general usage, a financial plan is a comprehensive
                  evaluation of an individual’s current pay and future financial
                  state by using current known variables to predict future
                  income, asset values and withdrawal plans.
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={"/"} className="font-bold text-blue-500 text-sm">
                  READ MORE
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
