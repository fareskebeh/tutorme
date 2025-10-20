
const TutorsListLoader = () => {

  return (
    Array.from({length:3}).map((_,i)=> (
      <div key={i}
      className="flex p-4 justify-between h-80 bg-white dark:bg-slate-900 dark:border-slate-800 shadow-md border border-neutral-100 rounded-xl"
    >
      <div className="  justify-between flex flex-col gap-4 sm:gap-6 md:gap-8 ">
        <div className="flex gap-4 sm:gap-6 md:gap-8">
          <div
            className="h-15 w-15 sm:h-30 bg-neutral-100 dark:bg-slate-800 animate-pulse sm:w-30 rounded-full"
          />
          <div className="flex *:flex *:items-center *:gap-1 flex-col justify-center gap-1">
            <div className="h-12 w-50 bg-neutral-100 dark:bg-slate-800 animate-pulse rounded-xl">
            </div>
            <div className="h-8 w-30 bg-neutral-100 dark:bg-slate-800 animate-pulse rounded-xl">
            </div>
            <div className="h-8 w-20 bg-neutral-100 dark:bg-slate-800 animate-pulse rounded-xl">
            </div>
          </div>
        </div>

          <div className="flex flex-wrap *:p-2 *:animate-pulse *:h-7 *:w-10 *:dark:bg-slate-800 *:bg-neutral-100 gap-2 *:rounded-xl">
            {Array.from({length:3}).map((_, i) => (
              <div key={i}></div>
            ))}
          </div>

        <div className="flex flex-col gap-1 sm:gap-2">
          <div className="flex flex-col sm:gap-8 sm:flex-row *:bg-neutral-100 *:dark:bg-slate-800 *:animate-pulse *:rounded-xl sm:items-center items-start gap-1">
            <div className="flex items-center gap-1 h-10 w-30 ">
            </div>
            <div className="flex gap-2 *:h-10 *:w-10 *:p-2 *:rounded-xl ">
              {Array.from({length:2}).map((_, i) => (
                <p key={i}></p>
              ))}
            </div>
          </div>
        </div>
      </div>  
      <div className="flex-col flex items-end justify-between">
        <button className="w-10 rounded-full h-10 bg-neutral-100 dark:bg-slate-800 animate-pulse ">
          
        </button>
        <div className="w-20 rounded-xl h-10 bg-neutral-100 dark:bg-slate-800 animate-pulse">
        </div>
      </div>
    </div>
    ))
  );
};

export default TutorsListLoader;
