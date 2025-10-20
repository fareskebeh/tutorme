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
    <div className="shadow-md bg-white border border-neutral-100 dark:border-transparent dark:bg-slate-900 transition duration-150  p-4 max-h-full flex flex-col gap-4 rounded-xl justify-between">
      <div>
        <p className="text-2xl font-bold transition duration-150 dark:text-white">
          Reviews & Rating ({props.reviewCount})
        </p>
      </div>

      <div className="bg-neutral-50 dark:bg-slate-950 dark:border-slate-800 transition duration-150 space-y-4 flex-1 p-2 border border-neutral-100 overflow-y-auto rounded-xl">
        {props.reviews?.map((review, i) => (
          <div className="p-4 bg-white dark:bg-slate-900 shadow-md transition duration-150 rounded-xl flex-col flex gap-2" key={i}>
            <p className="text-2xl font-bold dark:text-white transition duration-150">{review.by.firstName}</p>
            <Rating rating={review.value} />
            <p className="text-lg dark:text-slate-400 transition duration-150">{review.comment}</p>
          </div>
        ))}
      </div>

      {props.user ? (
        <div></div>
      ) : (
        <div className="text-xl flex flex-wrap dark:text-slate-600 transition duration-150 flex-col gap-2 items-start sm:flex-row sm:justify-between sm:items-center">
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
