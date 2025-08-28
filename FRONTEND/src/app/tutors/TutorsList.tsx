import React, { useState, useEffect } from "react";
import tutors from "../mock/tutors";
import TutorTile from "./TutorTile";
import type { Tutor } from "../mock/types";
import { useSearchParams } from "react-router-dom";
import TutorsListLoader from "../fallback/loading/TutorsListLoader";
import TutorListError from "../fallback/error/TutorListError";


type Filter = {
  subject?: string | undefined;
  location?: string | undefined;
  availability?: "available" | "highlyAvailable" | "all" | undefined;
  availabilityLocation?: "home" | "online" | "assignment" | "all" | undefined;
  maxRate?: number | undefined;
};

type Results = {
  list: Tutor[] | undefined;
  state: "ERROR" | "LOADING" | "SUCCESS";
  message: string | null;
}

const TutorsList = () => {
  const [results, setResults] = useState<Results | null>(null);

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
    
    const getTutors = ()=> {
      setResults({
        list: undefined,
        state:"LOADING",
        message:null,
      })
      setTimeout(()=> {
        setResults({
          list: tutors,
          state: "SUCCESS",
          //replace with fetch logic when backend is done
          message: null
        })
      },5000)
    }

    getTutors()
  },[initParams.subject, initParams.location, initParams.availability, initParams.availabilityLocation, initParams.maxRate])

  return (
 
    <div className={`p-2 flex bg-neutral-100 flex-col gap-2 ${results?.state==="ERROR" && "h-[80dvh] sm:h-[78dvh]"}`}>
      { results?.state==="LOADING" ? <TutorsListLoader/> :
        results?.state==="ERROR" ? <TutorListError/> :
      (
        results?.list?.map((tutor, i) => (
          <React.Fragment key={i}>
            <TutorTile {...tutor} />
          </React.Fragment>
        )))
        //handle Loading state on next commit
      }
    </div>
  );
};

export default TutorsList;
