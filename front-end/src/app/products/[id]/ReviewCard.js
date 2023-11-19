import ReactRating from "react-rating";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ReviewCard = ({
  name,
  rating,
  date,
  verified,
  review,
  likes,
  dislikes,
  profilePicture,
}) => {
  return (
    <div className="flex items-center justify-between mb-4 w-full">
      <div>
        <div className="md:flex items-center">
          <img
            src={profilePicture}
            alt={`${name}'s Profile Picture`}
            className="w-12 h-12 rounded-full mr-4"
          />
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        <p className="text-gray-700 mb-4">{review}</p>
        <div className="text-sm text-gray-600">
          {verified ? "Verified Buyer" : "Guest"}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start justify-between mt-4">
          <div className="flex items-center">
            <button className="mr-2 flex items-center text-green-500 hover:text-green-600">
              <FaThumbsUp />
              <span className="ml-2">{likes}</span>
            </button>
            <button className="flex items-center text-red-500 hover:text-red-600">
              <FaThumbsDown />
              <span className="ml-2">{dislikes}</span>
            </button>
          </div>

          <div className="text-sm text-gray-600 my-3">{date}</div>

          <div className="text-yellow-400 text-md ">
            <ReactRating
              initialRating={rating}
              emptySymbol={<BsStar />}
              fullSymbol={<BsStarFill />}
              halfSymbol={<BsStarHalf />}
              readonly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
