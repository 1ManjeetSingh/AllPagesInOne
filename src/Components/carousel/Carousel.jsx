import React, { useEffect, useState } from "react";

const Carousel = () => {
  const items = [
    {
      title: "Unique Question Sets",
      description: "Tailored questions for authenticity",
      icon: "https://s3-alpha-sig.figma.com/img/0ada/0b19/29f4e3cd9705c3665842a066214dad2c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YZiaRTwn1WrTuNlSNFqg59ZqJlM4Of~CzcjbV4uANul3-b5Y6sKS9HHKvuznTyB8a7UVDA0x52fxnboB~KDonFLSCz5Boeiyu6RGuYheesFYnmbDvsi65zeuG-LPwFmMFDxmcF2eOniH5ivycbNwhZfasJKnnKIFYyNhPuE9bB30vdSUa6Lf2wqLW6lWZkx1dRvzCFif6tgDyiVIgYcTdVguwlMfUpcqMo7NDPbiR4cVUJJgsNhK5anoihmarPGP1q7ft2t-B4Fim33vYwJGyfFUTFQbKLWRBkwg8d75laN0RwcVDamzheTKyXQq7kLIJR7UNQu74S52LElLH6U7vg__",
    },
    {
      title: "Multilingual Interviews",
      description: "Assess in any language",
      icon: "https://s3-alpha-sig.figma.com/img/9c7b/c700/7f7ea02700f5dacd86d8ae0cb3f8d7c2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mkmF7WkmHicxRnGuK3Np4eUH67~MbliKRmdwnh6pg09vHnLsWBuxsKx~-wPZT3YjzcjUFl85D7MeCTQPWRZ8vsfCRdN8IEaONvXl3HBQcNJxLiKNc85fbbXgo5fkWjcroBCcFFf~4CDyVF78e0iayFY8UOSFFrNo2Y4tBTsaOZz1JUfdkML8M~C9CWVdlHjgdcsOvOv-HrtHKeKZW7AvNOPRRxgB7L3gJ-JvF~stg-XvWC3nfFPuyI3RoHQnrhih-vSN5PzvRMMy3IUGxHl~cCgXvsaz4GPmiFA1-3HdfI5vWarn7ohrQrPaETAtGUoCqQCt2zj5~LboFOHcsl1C8w__",
    },
    {
      title: "Bulk Invitations",
      description: "Invite multiple candidates",
      icon: "https://s3-alpha-sig.figma.com/img/566b/7ce5/9af10d3068323170cfcefd4a38402623?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZhW5~sN1oAVAPxKc3R6LIdsx11N3tbR9iPRUklLp2JkwmScUcZhILbNhqtZ~kAVsK6Lu05fDguIQ1jIbH~gvZ5CHii8bNVVLjrlPRE14piRFOv54-xFWsaADklexRKoEfxuBQ0qC7GlUYj9oXIb790ZGICAaKi8mV5UhgpCrwaiSG5j3y2jvhWSrORGTZNfOLeMEJj8EBRD78nLeU18jjvYAnMtX2oePJ3LFYWaHJ0a-z0W3yoeEcQkZNnEtx5FUbZ~ZONVh~0LJGR6fC7qvt5AXu4Wew86NjKpavTyb7wyKFqdmG3Ib3xyhnY9JDd6CUhqPBtpXjYAcFc0Zxj8zw__",
    },
    {
      title: "Advanced Analytics",
      description: "Insights into performance",
      icon: "https://s3-alpha-sig.figma.com/img/0ada/0b19/29f4e3cd9705c3665842a066214dad2c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YZiaRTwn1WrTuNlSNFqg59ZqJlM4Of~CzcjbV4uANul3-b5Y6sKS9HHKvuznTyB8a7UVDA0x52fxnboB~KDonFLSCz5Boeiyu6RGuYheesFYnmbDvsi65zeuG-LPwFmMFDxmcF2eOniH5ivycbNwhZfasJKnnKIFYyNhPuE9bB30vdSUa6Lf2wqLW6lWZkx1dRvzCFif6tgDyiVIgYcTdVguwlMfUpcqMo7NDPbiR4cVUJJgsNhK5anoihmarPGP1q7ft2t-B4Fim33vYwJGyfFUTFQbKLWRBkwg8d75laN0RwcVDamzheTKyXQq7kLIJR7UNQu74S52LElLH6U7vg__",
    },
    {
      title: "Custom Questions",
      description: "Fully customizable interviews",
      icon: "https://s3-alpha-sig.figma.com/img/9c7b/c700/7f7ea02700f5dacd86d8ae0cb3f8d7c2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mkmF7WkmHicxRnGuK3Np4eUH67~MbliKRmdwnh6pg09vHnLsWBuxsKx~-wPZT3YjzcjUFl85D7MeCTQPWRZ8vsfCRdN8IEaONvXl3HBQcNJxLiKNc85fbbXgo5fkWjcroBCcFFf~4CDyVF78e0iayFY8UOSFFrNo2Y4tBTsaOZz1JUfdkML8M~C9CWVdlHjgdcsOvOv-HrtHKeKZW7AvNOPRRxgB7L3gJ-JvF~stg-XvWC3nfFPuyI3RoHQnrhih-vSN5PzvRMMy3IUGxHl~cCgXvsaz4GPmiFA1-3HdfI5vWarn7ohrQrPaETAtGUoCqQCt2zj5~LboFOHcsl1C8w__",
    },
    {
      title: "Secure Data",
      description: "Built with privacy in mind",
      icon: "https://s3-alpha-sig.figma.com/img/566b/7ce5/9af10d3068323170cfcefd4a38402623?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TZhW5~sN1oAVAPxKc3R6LIdsx11N3tbR9iPRUklLp2JkwmScUcZhILbNhqtZ~kAVsK6Lu05fDguIQ1jIbH~gvZ5CHii8bNVVLjrlPRE14piRFOv54-xFWsaADklexRKoEfxuBQ0qC7GlUYj9oXIb790ZGICAaKi8mV5UhgpCrwaiSG5j3y2jvhWSrORGTZNfOLeMEJj8EBRD78nLeU18jjvYAnMtX2oePJ3LFYWaHJ0a-z0W3yoeEcQkZNnEtx5FUbZ~ZONVh~0LJGR6fC7qvt5AXu4Wew86NjKpavTyb7wyKFqdmG3Ib3xyhnY9JDd6CUhqPBtpXjYAcFc0Zxj8zw__",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Effect to handle the number of cards per slide based on screen size
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth <= 640) {
        setCardsPerSlide(1); // 1 card per slide on small screens
      } else if (window.innerWidth <= 768) {
        setCardsPerSlide(2); // 2 cards per slide on medium screens
      } else {
        setCardsPerSlide(3); // 3 cards per slide on large screens
      }
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerSlide >= items.length ? 0 : prevIndex + cardsPerSlide
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-2/3 px-4 sm:w-6/7 md:w-5/6 bg-none">
      <div className="relative w-5/6 mx-auto overflow-hidden">
        {/* AfterSelection Items */}
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex / cardsPerSlide) * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-4"
              style={{ minWidth: `${100 / cardsPerSlide}%` }} // Adjusting the width based on cardsPerSlide
            >
              <div className="flex flex-col items-center justify-center bg-white border-[1px] border-[#B9B9B9]  shadow-[0px_0px_8px_#C9FFFC] rounded-3xl min-h-[180px]">
                <img
                  src={item.icon} // Using the image URL here
                  alt={item.title}
                  className="w-[80px] h-[80px] object-cover "
                />
                <p className=" text-gray-600 ">{item.title}</p>
                <h3 className="text-center text-gray-600 mt-2 font-bold text-lg max-w-[176px] leading-[16px]">{item.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex space-x-2 mt-4">
        {Array(Math.ceil(items.length / cardsPerSlide))
          .fill()
          .map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * cardsPerSlide)}
              className={`p-2 rounded-full ${currentIndex / cardsPerSlide === index
                ? "bg-black"
                : "bg-gray-100"
                }`}
            ></button>
          ))}
      </div>
    </div>
  );
};

export default Carousel;