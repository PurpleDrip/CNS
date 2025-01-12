import React from "react";

function SectionWithImage({ title, paragraphs, imageSrc, reverse = false }) {
  return (
    <div
      className={`section-with-image flex p-20 gap-20 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="img-container w-[35rem] flex items-center justify-center relative">
        <img
          src="/images/noise-bg.jpg"
          alt="Background"
          className="absolute -z-1 rounded-full"
        />
        <img
          src={imageSrc || "https://picsum.photos/320"}
          alt={title}
          className="z-0 rounded-full bg-white w-[20rem]"
        />
      </div>
      <div className="content-container border-accent border w-full p-8 rounded-3xl">
        <h1 className="text-3xl mb-8 text-primary font-semibold">{title}</h1>
        <div className="text-lg">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWithImage;
