import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../api";
import TextExpander from "../components/TextExpander";

const ReviewsPage = () => {
    const { slug } = useParams()
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      const fetchReviewsData = async () => {
        try {
          if (slug) {
            const data = await fetchReviews(slug);
            console.log(data);
            setReviews(data || []);
          }
        } catch (error) {
          console.error("Error fetching reviews:", error);
        }
      };
  
      fetchReviewsData();
    }, [slug]);
    
    return (
        <div className="w-full h-full bg-gray-100">
             <div className="max-w-[1200px] mx-auto py-6 px-6 lg:px-0" >
             {reviews.length > 0 ? (
        reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 mb-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center font-semibold text-lg rounded-full bg-blue-500 text-white">
                <p>{review.author[0].toUpperCase()}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg font-semibold text-gray-800">
                  A review by {review.author}
                </p>
                <p className="text-sm text-gray-500">
                  Written on {new Date(review.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="text-[#1a1a1a] leading-relaxed">
              <TextExpander>{review.content}</TextExpander>
            </div>
          </div>
        ))
      ) : (
        <p className="flex justify-center items-center h-full w-full py-20 text-[25px]  italic">
          No reviews available.
        </p>
      )}
    </div>
            
      </div>
     
  )
}
export default ReviewsPage;