import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyCarData, assets } from "../assets/assets";
import Loader from "../components/Loader";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;

  const handleSubmit = async(e) => {
    e.preventDefault();
  }

  useEffect(() => {
    const foundCar = dummyCarData.find((c) => c._id.toString() === id);
    setCar(foundCar);
  }, [id]);

  

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 font-medium mb-6"
      >
        <img
          src={assets.arrow_icon}
          alt="Back"
          className="rotate-180 opacity-65 w-5 h-5"
        />
        Back to all cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left section */}
        <div className="lg:col-span-2">
          <img
            src={car.image}
            alt={car.brand}
            className="w-full h-auto md:max-h-[400px] object-cover rounded-xl mb-6 shadow-md"
          />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} • {car.year}
              </p>
            </div>
            <hr className="border-gray-200 my-6" />

            {/* Car details icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: assets.users_icon,
                  text: `${car.seating_capacity} Seats`,
                },
                { icon: assets.fuel_icon, text: car.transmission },
                { icon: assets.car_icon, text: car.location },
              ].map(({ icon, text }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-50 p-4 rounded-lg"
                >
                  <img src={icon} alt="" className="mb-2 h-5" />
                  <p className="text-sm text-gray-600">{text}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-medium mb-3">Description</h2>
              <p className="text-gray-500">{car.description}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-medium mb-3">Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "360 Camera",
                "Bluetooth",
                "Cruise Control",
                "Heated Seats",
                "Keyless Entry",
                "Leather Seats",
                "Navigation System",
                "Parking Sensors",
                "Power Windows",
                "Sunroof",
                "USB Port",
                "Wi-Fi Hotspot",
              ].map((item) => (
                <li key={item} className="flex items-center text-gray-500">
                  <img src={assets.check_icon} alt="" className="h-4 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Right section (e.g. booking form) */}
        <form onSubmit={handleSubmit} className="shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500">
          <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
            {currency}
            {car.pricePerDay}{" "}
            <span className="text-base text-gray-400">per day</span>
          </p>
          <hr className="border-borderColor my-6" />

          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Pickup Date</label>
            <input
              type="date"
              className="border border-borderColor px-3 py-2 rounded-lg"
              required
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Return Date</label>
            <input
              type="date"
              className="border border-borderColor px-3 py-2 rounded-lg"
              required
              id="return-date"
            />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-700 transition-all py-3 font-medium text-white rounded-xl cursor-pointer">
            Book Now
          </button>
          <p className="text-center text-small">No credit card required to reserve</p>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
