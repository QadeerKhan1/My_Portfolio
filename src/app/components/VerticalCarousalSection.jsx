"use client";
import { useEffect , useState } from "react";
import Image from "next/image";
import { carouselData } from "../utils/carouselData";

const VerticalCarousalSection = ({darkMode}) => {
    const dark = darkMode
    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#4b7bff] to-[#C5D9FA]"
    : "text-transparent bg-clip-text bg-gradient-to-r from-[#629bf7]  to-black";
  return (
    <>
    <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .horizontal-card[data-animated="true"] .scroller__inner_card {
          display: flex;
          animation: scroll linear infinite;
        }
      `}</style>
      <div className="flex flex-col justify-center items-center bg-transparent mx-10 md:mx-0 mt-6 lg:mt-28">
        <h2 className={`font-bold  text-[28px] md:text-[46px] text-center ${dark}`}>
          Testimonials
        </h2>
        <p className="text-[16px] md:text-[22px] text-[#5A5A79] md:w-[694px] text-center">
          Hear from some of our amazing customers who have transformed their
          careers through our platform.
        </p>
      </div>

      <section className="text-[#413D45] hidden lg:block mt-[60px] max-h-[75vh] overflow-hidden">
        <div className="container px-4 mx-auto flex gap-5 w-full bg-transparent">
          {carouselData.map((column, index) => (
            <VerticalCarouselCards
              key={index}
              data={column.cards}
              direction={column.direction}
            />
          ))}
        </div>
      </section>
      <div className="w-full items-center justify-center mt-[50px]  hidden lg:flex lg:flex-col">
        <Image
          src="/svg/students.png"
          width={1000}
          height={1000}
          className="h-[71px] w-[160px] object-contain"
          alt="students"
        />
        <p className="leading-relaxed text-lg text-center text-[#5A5A79] mt-3">
          Loved by <span className="font-bold">thousands</span> of students and
          professionals
        </p>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .horizontal-card[data-animated="true"] .scroller__inner_card {
          display: flex;
          animation: scroll linear infinite;
        }
      `}</style>
    </>
  );
};

export default VerticalCarousalSection;

const VerticalCarouselCards = ({ data, direction }) => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const addAnimation = () => {
        const handleSwitchValueChanged = () => {
            const localStorageValue = localStorage.getItem("switchValue");
            const parsedValue = localStorageValue === "true";
            setDarkMode(parsedValue);
          };
          window.addEventListener("switchValueChanged", handleSwitchValueChanged);


      handleSwitchValueChanged();

      const scrollers = document.querySelectorAll(".vertical");
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        scrollers.forEach((scroller) => {
          scroller.setAttribute("data-animated", true);
        });
      }
    };
    addAnimation();
  }, []);

  return (
    <div
      className="flex flex-col  gap-10 lg:w-[25%] lg:text-left text-center vertical "
      data-direction={direction}
      data-speed="slow"
    >
      {data.map((card, index) => (
        <VerticalCarouselSingleCard darkMode={darkMode} key={index} {...card} />
      ))}
    </div>
  );
};

const VerticalCarouselSingleCard = ({darkMode, src, text, name, info }) => {
    const dark = darkMode
    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#4b7bff] to-[#C5D9FA]"
    : "text-transparent bg-clip-text bg-gradient-to-r from-[#629bf7]  to-black";
  return (
    <div className={`flex flex-col  gap-5 mb-5 lg:items-start items-center rounded-[10px] w-full p-4 ${darkMode ? "bg-[#141432]" : "bg-[#c5d9fa]"}  scrollerinner`}>
      <Image
        src={src}
        width={64}
        height={64}
        className="min-h-min min-w-min  rounded-full"
        alt="double-quotes"
      />
      <div className="flex-grow ">
        <p className="leading-relaxed text-lg text-[#5A5A79] font-medium">{text}</p>
      </div>
      <div className="flex-grow ">
        <p className={`leading-relaxed text-lg font-bold  ${dark}`}>
          {name}
        </p>
        {/* <p className="leading-relaxed text-[10px] font-medium">{info}</p> */}
      </div>
    </div>
  );
};
