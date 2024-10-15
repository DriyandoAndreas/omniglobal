import React from "react";
import Image from "next/image";
import { User } from "lucide-react";
import Image3 from "@/app/assets/images/image3.jpg";
import struktur from "@/app/assets/images/struktur-organisasi-omni.jpeg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function page() {
  return (
    <>
      <div
        className="relative h-[500px] md:h-[300px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Image3.src})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute p-8">
          <h2 className="text-white text-4xl font-bold py-4">
            About Omni Milenia Global
          </h2>
          <p className="text-white ">
            Omni Milenia Global, led by Sahud Parulian Sinaga, is an investment
            company focused on economic empowerment through various innovative
            and sustainable investment opportunities. We are committed to
            providing reliable, profitable investment solutions that help
            clients achieve their financial goals. With expertise across
            multiple sectors and a proactive approach, Omni Milenia Global is
            ready to be a trusted investment partner for both local and
            international investors.
          </p>
        </div>
      </div>
      <div className="p-8">
        <div className="py-8">
          <div className="md:flex lg:space-x-4">
            <div className="basis-1/2">
              <h2 className="text-2xl font-bold py-4">Visiion</h2>
              <div className="min-h-[500px] bg-sky-900 text-white p-4 rounded-md">
                <ul>
                  <li>
                    1. To become a competitive, high-quality, and competent
                    trading company that masters both domestic and international
                    marketing resources and networks.
                  </li>
                  <li>
                    2. To become a resilient trading company in Indonesia on a
                    national scale, reliable, innovative, and competitive,
                    capable of growing healthily and independently.
                  </li>
                  <li>
                    3. To become a company that can provide business solutions
                    based on information and communication technology tailored
                    to the needs of buyers.
                  </li>
                  <li>
                    4. To become the Most Update Solution Agency offering
                    integrated services carried out professionally by experts in
                    Retail, Human Resources, and Event Management, aiming to
                    help clients succeed in expanding their brand exposure to
                    consumers.
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-1/2">
              <h2 className="text-2xl font-bold py-4">Mission</h2>
              <div className="min-h-[500px] bg-sky-900 p-4 rounded-md text-white">
                <ul>
                  <li>
                    1. Optimize company value, contribute to shareholders, and
                    uphold social responsibility.
                  </li>
                  <li>2. Expand value-added products.</li>
                  <li>3. Develop new businesses based on competencies.</li>
                  <li>
                    4. Establish better harmony and communication with all
                    stakeholders.
                  </li>
                  <li>
                    5. Make customer satisfaction a top priority through quality
                    products.
                  </li>
                  <li>
                    6. Empower professional company management and enhance human
                    resource competencies.
                  </li>
                  <li>
                    7. Develop professional human resources. 8. Prioritize
                    timely and efficient performance to achieve mutual success.
                  </li>
                  <li>
                    9. Enhance company value through creativity and integrity by
                    developing competent human resources.
                  </li>
                  <li>
                    10. Provide the best service in every task with high
                    standards.
                  </li>
                  <li>
                    11. Ensure client products succeed in the market through the
                    services provided.
                  </li>
                  <li>
                    12. Apply the RQS principle (Quick Response, Best Quality,
                    Excellent Services) in delivering services to clients.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <div>
            <h2 className="text-4xl font-bold text-center py-4">Our Team</h2>
          </div>
          <div className="md:flex justify-center space-y-4 lg:space-x-4 lg:space-y-0">
            <div className="min-w-[200px]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <User size={40} />
                  </CardTitle>
                  <CardTitle className="text-center py-4">
                    Saud Parulian Sinaga
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Direktur Utama</p>
                </CardContent>
              </Card>
            </div>
            <div className="min-w-[200px]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <User size={40} />
                  </CardTitle>
                  <CardTitle className="text-center py-4">Siana Wati</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Team Leader</p>
                </CardContent>
              </Card>
            </div>
            <div className="min-w-[200px]">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-center">
                    <User size={40} />
                  </CardTitle>
                  <CardTitle className="text-center py-4">
                    Putra Restu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">Team Leader</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="py-8">
          <div>
            <h2 className="text-4xl font-bold text-center">
              Organization Structure
            </h2>
          </div>
          <div className="flex justify-center py-4">
            <Image src={struktur} alt="struktur-organisasi" />
          </div>
        </div>
      </div>
    </>
  );
}
