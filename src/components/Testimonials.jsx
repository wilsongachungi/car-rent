import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emma Kamau",
      location: "Nairobi",
      image: assets.testimonial_image_1,
      rating: 5,
      testimonial:
        "I've rented cars from various companies, but the experience withcarRental was exceptional",
    },
    {
      name: "John Owino",
      location: "Nakuru",
      image: assets.testimonial_image_2,
      rating: 5,
      testimonial:
        "CarRental made my trip to Nakuru unforgettable. The car was in pristine condition, and the service was top-notch.",
    },
        {
      name: "Peter Kathure",
      location: "Eldoret",
      image: assets.testimonial_image_1,
      rating: 5,
      testimonial:
        "Traveling to Eldoret was a breeze with CarRental. The booking process was seamless, and the car exceeded my expectations.",
    },
  ];
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title="What Our Customers Say"
        subTitle="Discover why discerning travelers choose StayVentures for their luxury accomodation around the world."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                    <img key={ index }src={assets.star_icon} alt="star-icon" />
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
