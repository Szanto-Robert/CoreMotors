import { NextSeo } from "next-seo";

export default function SeoHead() {
  return (
    <NextSeo
      title="CoreMotors"
      description="A CoreMotors Kft. uniós támogatással megvalósuló elektromobilitási projektje."
      openGraph={{
        type: "website",
        locale: "ro_RO",
        url: "https://coremotors.hu/",
        site_name: "CoreMotors",
      }}
    />
  );
}
