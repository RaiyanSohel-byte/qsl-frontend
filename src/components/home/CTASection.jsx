import React from "react";
import cta from "../../app/images/CTA/cta.png";
import cta2 from "../../app/images/CTA/cta2.png";
import Image from "next/image";
import Link from "next/link";

const CTASection = () => {
  return (
    <div style={{ margin: "80px 0" }}>
      <Link href="/">
        <Image
          src={cta}
          alt="cta"
          width={1300}
          height={414}
          className="hidden lg:block"
        />
        <Image src={cta2} alt="cta" className="lg:hidden" />
      </Link>
    </div>
  );
};

export default CTASection;
