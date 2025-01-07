import { ReviewType } from "../types/type";
import TextExpander from "./TextExpander";

interface REVIEW {
  review: ReviewType;
}

const ReviewCard: React.FC<REVIEW> = ({ review }) => {
  return (
    <div
      key={review.id}
      className="bg-[#1a1a1a] p-6 sm:p-8 mb-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center font-semibold text-lg rounded-full bg-blue-500 text-white">
          <p className="text-sm sm:text-lg">{review.author[0].toUpperCase()}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm sm:text-lg font-semibold text-white">
            A review by {review.author}
          </p>
          <p className="text-xs sm:text-sm text-white">
            Written on {new Date(review.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="text-white leading-relaxed">
        <TextExpander>{review.content}</TextExpander>
      </div>
    </div>
  );
};

export default ReviewCard;
