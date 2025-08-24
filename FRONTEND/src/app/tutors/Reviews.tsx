import type { Review, User } from "../mock/types";
import Rating from "../../components/Rating";
import { Link } from "react-router-dom";
type Props = {
  reviewCount: number | undefined;
  reviews: Review[] | undefined;
  user: User | null
};

const Reviews = (props: Props) => {

  return (
    <div className="shadow-md p-4 max-h-full flex flex-col gap-4 rounded-xl justify-between">
      <div>
        <p className="text-2xl font-bold">
          Reviews & Rating ({props.reviewCount})
        </p>
      </div>

      <div className="bg-neutral-50 space-y-4 flex-1 p-2 border border-neutral-100 overflow-y-auto rounded-xl">
        {props.reviews?.map((review, i) => (
          <div className="p-4 bg-white shadow-md rounded-xl flex-col flex gap-2" key={i}>
            <p className="text-2xl font-bold">{review.by.firstName}</p>
            <Rating rating={review.value} />
            <p className="text-lg">{review.comment}</p>
          </div>
        ))}
      </div>

      {props.user ? (
        <div></div>
      ) : (
        <div className="text-xl flex flex-wrap flex-col gap-2 items-start sm:flex-row sm:justify-between sm:items-center">
          Want to start giving reviews?{" "}
          <Link
            className="font-bold text-white p-2 bg-emerald-500 rounded-xl hover:opacity-90 active:opacity-80"
            to="/login"
          >
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Reviews;
