import { IconStar, IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";



interface AssessmentRatingProps {
    rating: number
}

export default function AssessmentRating( { rating }: AssessmentRatingProps) {
    const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IconStarFilled key={i} className="text-white" />);
      } else if (i - rating < 1) {
        stars.push(<IconStarHalfFilled key={i} className="text-white" />);
      } else {
        stars.push(<IconStar key={i} className="text-purple" />);
      }
    }
    return stars;
  };
    return (
        
        <div className="flex py-3">
          {renderStars(rating)}
        </div>
    )
}