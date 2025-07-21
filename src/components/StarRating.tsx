import { css } from '@emotion/react';
import { useState } from 'react';

interface StarRatingProps {
  rating?: number;
  size?: 'small' | 'medium' | 'large';
  onChange?: (rating: number) => void;
}

const getStarSize = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return '1.2rem';
    case 'medium':
      return '1.5rem';
    case 'large':
      return '2rem';
    default:
      return '1.5rem';
  }
};

const StarRatingContainer = (size: 'small' | 'medium' | 'large') => css`
  display: inline-flex;
  gap: 0.1rem;
  font-size: ${getStarSize(size)};
  user-select: none;
`;

const starContainerStyle = css`
  position: relative;
  display: inline-block;
`;

const starHalfStyle = (filled: boolean, isLeft: boolean) => css`
  position: ${isLeft ? 'relative' : 'absolute'};
  top: ${isLeft ? '0' : '0'};
  left: ${isLeft ? '0' : '0'};
  color: ${filled ? '#fbbf24' : '#e2e8f0'};
  overflow: hidden;
  width: ${isLeft ? '50%' : '100%'};
  transition: color 0.2s ease;

  ${!isLeft &&
  css`
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
  `}
`;

const getStarFillType = (starIndex: number, currentRating: number) => {
  const value = starIndex + 1;

  switch (true) {
    case currentRating >= value:
      return 'full';
    case currentRating >= value - 0.5:
      return 'half';
    default:
      return 'empty';
  }
};

const StarRating = ({ rating = 0, size = 'medium', onChange }: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [ratingValue, setRatingValue] = useState<number>(rating);

  const displayRating = hoverRating || ratingValue;

  const onClickStar = (starValue: number) => {
    setRatingValue(starValue);
    onChange?.(starValue);
  };

  const onHoverStar = (starValue: number) => {
    setHoverRating(starValue);
  };

  return (
    <div css={StarRatingContainer(size)}>
      {[0, 1, 2, 3, 4].map((starIndex) => {
        const fillType = getStarFillType(starIndex, displayRating);

        return (
          <span key={starIndex} css={[starContainerStyle]}>
            <span
              css={starHalfStyle(fillType === 'full' || fillType === 'half', true)}
              onClick={() => onClickStar(starIndex + 0.5)}
              onMouseEnter={() => onHoverStar(starIndex + 0.5)}
              onMouseLeave={() => setHoverRating(0)}
            >
              ★
            </span>
            <span
              css={starHalfStyle(fillType === 'full', false)}
              onClick={() => onClickStar(starIndex + 1)}
              onMouseEnter={() => onHoverStar(starIndex + 1)}
              onMouseLeave={() => setHoverRating(0)}
            >
              ★
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
