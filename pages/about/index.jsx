import React from "react";
import PageLayout from "../../components/PageLayout";
import Image from "next/image";
import Link from "next/link";

export default function about({ data }) {
  return (
    <PageLayout title="About" desc="about page">
      <Image
        width="400"
        height={370}
        src="http://localhost:3000/img/casita.jpg"
        alt="alt image"
      />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto id necessitatibus iure magni repellat officia ex sed veritatis quisquam, laboriosam maiores porro recusandae est accusamus? Odio exercitationem illum quo amet!
    </PageLayout>
  );
}

