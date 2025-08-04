import React from "react";
import { Link } from "react-router-dom";
import { Heart, X } from "lucide-react";

function DocterCard(props) {
  const { id, name, specialty, hospital, experience, rating, image } = props;
  return (
    <>
      <Link to={`/docter/${id}`} className="hover:scale-105 transition">
        <div className="w-[327px] h-[208px] bg-[#FBFCFF] rounded-2xl shadow-sm relative p-4 flex items-center space-x-3">
          <div className="absolute top-4 right-4 flex space-x-3">
            <button className="text-green-500 hover:text-green-600">
              <Heart size={20} />
            </button>
          </div>
          <img
            src={image}
            alt="profile"
            className="w-[100px] h-[90px] rounded-full border mr-[25px] object-cover "
          />
          <div className="flex flex-col justify-center text-gray-800">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-blue-600 font-medium mt-1">
              {specialty}
            </p>
            <p className="text-xs text-gray-500 mt-1">{hospital}</p>

            {/* Optional Extras */}
            <div className="mt-3 flex items-center space-x-2 text-xs text-gray-600">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md">
                {experience}
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md">
                {rating} ⭐ rating
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default DocterCard;
