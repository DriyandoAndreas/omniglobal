import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="p-8">
        <div style={{ width: "100%", height: "400px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0190890524527!2d106.86377809999999!3d-6.2612155000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f255e8fa4a51%3A0x83d5185d14c0f88a!2sJl.%20Dewi%20Sartika%20No.3a%2C%20RT.5%2FRW.7%2C%20Cililitan%2C%20Kec.%20Kramat%20jati%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013640!5e0!3m2!1sen!2sid!4v1729052797329!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="py-8">
          <div className="flex-col space-y-2">
            <div className="font-bold pb-4">Contact Us</div>
            <div className="flex space-x-2">
              <div>
                <Phone />
              </div>
              <div>
                <Link href={"https://wa.link/yd2xa9"}>+6282-138-830-051</Link>
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
    </>
  );
}
