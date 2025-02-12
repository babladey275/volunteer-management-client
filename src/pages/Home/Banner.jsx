import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/nN3R8bFB/volunteers-working-together-full-shot.jpg",
      title: "Volunteer at Our Camp",
      description:
        "Make a difference in the community by joining our volunteer programs.",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/3yPLtvG3/team-environment-volunteers-digging-holes-planting-small-trees.jpg",
      title: "Make an Impact",
      description: "Help others, build connections, and create lasting change.",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/7tW4PFq9/front-view-volunteers-helping-with-food-donations.jpg",
      title: "Join Our Mission",
      description: "Contribute your time and skills to an important cause.",
    },
  ];

  return (
    <div className="w-full">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-96 md:h-[520px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50">
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h2 className="text-xl md:text-3xl font-bold text-shadow">
                  {slide.title}
                </h2>
                <p className="mt-2 text-sm md:text-xl">{slide.description}</p>
                <Link
                  to="/all-volunteer-need-posts"
                  className="btn btn-outline text-white mt-4 hover:bg-[#275C87] hover:border-[#275C87]"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
