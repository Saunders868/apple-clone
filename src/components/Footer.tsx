import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-xs text-gray">
            More ways to shop:{" "}
            <span className="underline text-blue"> Find an Apple Store</span>
            or <span className="underline text-blue"> other retailer</span>{" "}
          </p>
          <p className="font-semibold text-xs text-gray">
            Or call 00800-233-2332
          </p>

          <div className="bg-neutral-700 my-5 h-[1px] w-full" />

          <div className="flex md:flex-row flex-col md:items-center justify-between">
            <p className="font-semibold text-xs text-gray">
              Copyright @ 2024 Daniel Saunders. All rights reserved
            </p>

            <div className="flex">
              {footerLinks.map((link, i) => (
                <p className="font-semibold text-gray text-xs">
                  {link} {""}
                  {i != footerLinks.length - 1 && (
                    <span className="mx-2"> | </span>
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
