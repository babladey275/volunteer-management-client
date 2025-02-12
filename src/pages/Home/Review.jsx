import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Amazing experience volunteering! The camp was well-organized, and I felt like my efforts were truly making a difference. Highly recommend joining the program!",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "This was an incredible opportunity to give back to the community. The leadership team was great, and the impact we made together was priceless. I would definitely do this again!",
  },
  {
    id: 3,
    name: "David Green",
    review:
      "Volunteering here was such a rewarding experience. I learned new skills, met amazing people, and helped make a real difference. Highly motivating!",
  },
  {
    id: 4,
    name: "Alice Brown",
    review:
      "Such a fulfilling and heartwarming experience. I was able to contribute to a cause that mattered, and I felt supported every step of the way. Would love to volunteer again!",
  },
];

const Review = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Volunteers Are Saying
        </h2>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white max-w-5xl mx-auto p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-center text-gray-800">
                    {review.name}
                  </h3>
                </div>
                <p className="text-gray-700">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
