import React from "react";
import TableOfContents from "@/components/TableOfContents";

export default function resources() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white p-8">
      <TableOfContents />

      <h1 className="text-4xl font-bold mt-12 mb-6 text-center">
        Additional Resources
      </h1>

      <section className="text-lg max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4"></h2>

        <p className="mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
    </div>
  );
}
