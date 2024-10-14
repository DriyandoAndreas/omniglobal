import React from "react";
import { Mail, Phone } from "lucide-react";
export default function Footer() {
  return (
    <>
      <div className="p-8 ">
        <div className="flex flex-wrap justify-between space-y-4 lg:space-y-0">
          <div className="lg:basis-1/4">
            <div className="font-bold pb-4">PT. Omni Milenia Global</div>
            <div>
              Jl. Dewi Sartika No.3A, RT.3/RW.13, Cililitan, Kec. Kramat jati,
              Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13640
            </div>
          </div>
          <div className="lg:basis-1/4">
            <div className="flex-col space-y-2">
              <div className="font-bold pb-4">Contact Us</div>
              <div className="flex space-x-2">
                <div>
                  <Phone />
                </div>
                <div>+628-123-456-678</div>
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
      <div className="flex justify-center bg-lime-500 p-2">
        <div className="text-white text-xs">
          &copy; Copyright 2024, PT Omni Milenia Global. All Rights Reserved.
        </div>
      </div>
    </>
  );
}
