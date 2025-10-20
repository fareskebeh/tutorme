const TutorPrevLoader = () => {
  return (
    <div className="sm:pt-18 p-4 px-8 flex **:transition duration-150 justify-center sm:flex-row flex-col w-full gap-8 animate-pulse">
      <div className="flex flex-[0.6] flex-col items-start gap-4 sm:gap-6 md:gap-8">
        <div className="flex items-center gap-4">
          <div className="h-30 w-30 sm:h-50 sm:w-50 rounded-full bg-neutral-300 dark:bg-slate-900" />
          <div className="flex flex-col gap-3">
            <div className="h-8 sm:h-10 md:h-12 w-48 sm:w-64 md:w-80 bg-neutral-300 dark:bg-slate-900 rounded-lg" />
            <div className="flex gap-2 flex-wrap">
              <div className="h-6 w-16 rounded-md bg-neutral-200 dark:bg-slate-900" />
              <div className="h-6 w-20 rounded-md bg-neutral-200 dark:bg-slate-900" />
            </div>
            <div className="h-6 w-40 sm:w-56 bg-neutral-200 rounded-md dark:bg-slate-900" />
            <div className="h-6 w-32 sm:w-44 bg-neutral-200 rounded-md dark:bg-slate-900" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="h-6 w-28 bg-neutral-200 dark:bg-slate-900 rounded-md" />
          <div className="flex gap-4">
            <div className="h-6 w-32 bg-neutral-200 dark:bg-slate-900 rounded-md" />
            <div className="h-6 w-20 bg-neutral-200 dark:bg-slate-900 rounded-md" />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="h-10 w-24 bg-neutral-300 dark:bg-slate-900 rounded-xl" />
          <div className="h-10 w-20 bg-neutral-200 dark:bg-slate-900 rounded-xl" />
          <div className="h-10 w-28 bg-neutral-100 dark:bg-slate-900 rounded-xl" />
        </div>
      </div>

      <div className="flex-[0.4] w-full flex flex-col gap-4">
        <div className="h-6 w-32 bg-neutral-200 dark:bg-slate-900 rounded-md" />
        <div className="h-24 w-full bg-neutral-200 dark:bg-slate-900 rounded-xl" />
        <div className="h-24 w-full bg-neutral-200 dark:bg-slate-900 rounded-xl" />
      </div>
    </div>
  );
};

export default TutorPrevLoader;
