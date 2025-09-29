import React from "react";
import { Mail, Phone } from "lucide-react";
export default function Footer() {
  return (
    <>
      <div className="bg-sky-900 text-white">
        <div className="p-8">
          <div className="flex flex-wrap justify-between space-y-4 lg:space-y-0">
            <div className="lg:basis-1/4">
              <div className="font-bold pb-4">PT. Omni Milenia Global</div>
              <div>
               Jl. Lotus Utara 1, RSOC No.17, RT.004/RW.019, Jaka Setia, Bekasi Selatan, Bekasi, West Java 17147
              </div>
            </div>
            <div className="lg:basis-1/4">
              <div className="flex-col space-y-2">
                <div className="font-bold pb-4">Contact Us</div>
                <div className="flex space-x-2">
                  <div>
                    <Phone />
                  </div>
                  <div>
                     02138711299
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div>
                    <Mail />
                  </div>
                  <div>admin@omnimileniaglobal.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-sky-900 p-2">
        <div className="text-white text-xs">
          &copy; Copyright 2025, PT Omni Milenia Global. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
