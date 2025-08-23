import { HiStar } from "react-icons/hi";

type Props = {
    rating: number;
    reviewsCount?:number
}

const Rating = (props: Props) => {
  return (
    <div className="flex items-center">
      {Array(Math.floor(props.rating ?? 0))
        .fill(null)
        .map((_, i) => (
          <HiStar
            key={`filled-${i}`}
            className="text-amber-300 size-6 sm:size-7 md:size-8"
          />
        ))}

      {Array(5 - Math.floor(props.rating ?? 0))
        .fill(null)
        .map((_, i) => (
          <HiStar
            key={`empty-${i}`}
            className="text-amber-100 size-6 sm:size-7 md:size-8"
          />
        ))}

      <p className="ml-2 text-neutral-500">
        {props.rating} {props.reviewsCount && (props.reviewsCount) }
      </p>
    </div>
  );
};

export default Rating;
