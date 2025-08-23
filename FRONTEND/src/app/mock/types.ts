export type Subject = {
  title: string;
  grade: string;
};

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  age: number;
  location: string;
  pfp?: string;
  role: "Tutor" | "Admin" | "Client";
  language: string;
}

export interface Client extends User {
  parentContactInfo?: {
    email: string;
    phone: string;
    name: string;
    relation: string;
  };
}

export interface Tutor extends User {
  availability:
    | "Busy"
    | "Slightly available"
    | "Available"
    | "Highly available";
  rate: number;
  rating: number;
  reviewsCount:number;
  tags?: string[];
  isFavorite?: boolean;
  subjects: Subject[];
  locationAvailability: string[]
}


