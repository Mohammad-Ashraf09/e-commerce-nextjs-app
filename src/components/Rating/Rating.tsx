'use client';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface RatingProps {
    rating: number;
}

const Rating = ({ rating }: RatingProps): React.JSX.Element => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} className="star" />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="star" />);
        } else {
            stars.push(<FaRegStar key={i} className="star" />);
        }
    }

    return (
        <>
            <div className="flex items-center gap-0.5 text-xs">
                {stars}
                <span className="rating ml-1 font-semibold">({rating.toFixed(1)})</span>
            </div>

            <style jsx global>{`
                .star {
                    color: var(--background-warning);
                }
                .rating {
                    color: var(--text-secondary);
                }
            `}</style>
        </>
    );
};

export default Rating;
