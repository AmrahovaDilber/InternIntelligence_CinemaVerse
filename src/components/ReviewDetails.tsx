import { useEffect, useState } from "react";
import { fetchReviews } from "../../api";
import { Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { movieDetailType, ReviewType } from "../types/type";

interface ReviewDetailsProps {
  movieDetails: movieDetailType;
}

const ReviewDetails: React.FC<ReviewDetailsProps> = ({ movieDetails }) => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    const fetchReviewsData = async () => {
      try {
        if (movieDetails && movieDetails.id) {
          const data = await fetchReviews(movieDetails.id);
          console.log(data);
          setReviews(data || []);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviewsData();
  }, [movieDetails]);

  return (
    <div className="max-w-[1200px] mx-auto py-10 px-6 lg:px-0">
      <div className="flex justify-between items-center mb-8 sm:mb-12">
        <p className="text-[#e8ab29] text-[26px] sm:text-[30px] md:text-[40px] font-semibold">
          Reviews ({reviews.length})
        </p>
        <Link
          to={`/allreviews/${movieDetails.id}`}
          className="text-[#e8ab29] text-[16px] sm:text-[20px] font-semibold"
        >
          Read All Reviews
        </Link>
      </div>

      {reviews.length > 0 ? (
        reviews
          .slice(0, 1) 
          .map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))
      ) : (
        <p className="text-center text-white italic py-[100px] sm:py-[200px]">
          No reviews available.
        </p>
      )}
    </div>
  );
};

export default ReviewDetails;
