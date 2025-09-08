import Image from "next/image";
import React from "react";
import SDGs from "../../public/SDGs.png";
import aboutImage from "../../public/about.jpg";

export const AboutSection = () => {
  return (
    <div className="">
      <div
        className="py-32 h-[256px] bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${aboutImage.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-0"></div>
      </div>
      <div className="md:py-32 py-10 ">
        <div className="w-full md:mx-auto px-10 md:px-24">
          <div className="justify-center w-full flex items-center flex-col">
            {/* Left: Image */}
            <div className="flex-shrink-0 flex-grow-0 md:w-5/12 px-3">
              <Image
                src={SDGs.src}
                width={400}
                height={80}
                alt="UNA-RWANDA"
                className="w-full -mt-3"
              />
            </div>

            {/* Right: Content */}
            <div className="md:w-7/12 px-3  ">
              <div className="md:pl-[30px]">
                <h2 className="mb-4 tracking-wide md:text-3xl text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Who We Are
                </h2>

                <p className="leading-7 text-[15px] ">
                  The{" "}
                  <strong>
                    United Nations Association of Rwanda (UNA-RWANDA)
                  </strong>
                  is a non-profit organization committed to transforming
                  communities into active global citizens. Guided by the
                  principles and vision of the United Nations, we focus on
                  driving progress toward the
                  <strong> Sustainable Development Goals (SDGs)</strong>.
                </p>

                <p className="leading-7 text-[15px] text-gray-700 mt-3">
                  Our mission is to promote peace, justice, equality, and
                  sustainable development in Rwanda by empowering communities,
                  engaging youth, and fostering collaboration. We strive for
                  diversity, inclusion, and innovation to ensure no one is left
                  behind in building a brighter and more sustainable future.
                </p>

                <p className="leading-7 text-[15px] text-gray-700 mt-3">
                  Over the years, UNA-RWANDA has developed diverse programs
                  designed to transform communities into active global citizens
                  while advancing the United Nations’ Sustainable Development
                  Goals (SDGs). Through
                  <strong> conflict resolution and peacebuilding</strong>, the
                  association facilitates dialogue and nurtures reconciliation
                  within communities. Its work in{" "}
                  <strong>human and people’s rights</strong> strengthens
                  awareness and protection of fundamental freedoms, while
                  <strong> women empowerment initiatives</strong> focus on
                  education, skills development, and advocacy for gender
                  equality. The
                  <strong> UN Association Elders League</strong> brings together
                  respected elders whose wisdom and experience help guide
                  younger generations in UN-related programs. In addition, the
                  <strong> School-Net program</strong> connects schools and
                  educational institutions, encouraging collaboration and
                  knowledge sharing among students and teachers. Responding to
                  global challenges, UNA-RWANDA also leads{" "}
                  <strong>climate action and sustainability efforts</strong>,
                  engaging communities to protect the environment and adapt to
                  climate change.
                </p>

                <p className="leading-7 text-[15px] text-gray-700 mt-3">
                  Through these programs, UNA-RWANDA continues to build a
                  society that embraces the values of peace, equality,
                  inclusion, and sustainability, ensuring that every individual
                  can contribute to Rwanda’s growth as part of the global
                  community.
                </p>

                <p className="leading-7 text-[15px] text-gray-700  mt-3">
                  UNA-RWANDA is part of a global network of UN Associations
                  coordinated by the{" "}
                  <a
                    href="https://www.wfuna.org/"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    World Federation of United Nations Associations (WFUNA)
                  </a>
                  , active in over 100 countries worldwide.
                </p>

                <div className="mt-5">
                  <a
                    href="https://www.wfuna.org/"
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2  rounded-md"
                  >
                    Become a member
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
