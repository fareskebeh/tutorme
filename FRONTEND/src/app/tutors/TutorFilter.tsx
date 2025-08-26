import React, { useState, useEffect } from "react";
import tutors from "../mock/tutors";
import TutorTile from "./TutorTile";
import type { Tutor } from "../mock/types";
import { useSearchParams } from "react-router-dom";

type Filter = {
  subject?: string | undefined;
  location?: string | undefined;
  availability?: "available" | "highlyAvailable" | "all" | undefined;
  availabilityLocation?: "home" | "online" | "assignment" | "all" | undefined;
  maxRate?: number | undefined;
};

const TutorFilter = () => {
  const [results, setResults] = useState<Tutor[] | null>(null);

  const [searchParams] = useSearchParams();

  const initParams: Filter = {
    subject: searchParams.get("subject") ?? undefined,
    location: searchParams.get("location") ?? undefined,
    availability:
      (searchParams.get("availability") as Filter["availability"]) ?? undefined,
    availabilityLocation:
      (searchParams.get(
        "availabilityLocation"
      ) as Filter["availabilityLocation"]) ?? undefined,
    maxRate: Number(searchParams.get("maxRate")) ?? undefined,
  };

  useEffect(()=> {
    //API call code placeholderrrr 
  },[])

  return (
    <div className="p-2 sm:pt-17 flex bg-neutral-100 flex-col gap-2">
      {
        tutors.map((tutor, i) => (
          <React.Fragment key={i}>
            <TutorTile {...tutor} />
          </React.Fragment>
        ))
        //handle Loading state on next commit
      }
    </div>
  );
};

export default TutorFilter;
