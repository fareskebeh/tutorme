import type { Tutor } from "./types";

//this dataset is AI generated

const tutors: Tutor[] = [
  {
    id: "a3f1c9e2-4b7d-4c8a-9f2e-1a2b3c4d5e6f",
    firstName: "Amira",
    lastName: "Khan",
    email: "amira.khan@example.com",
    username: "amira_k",
    age: 32,
    location: "Amsterdam, Netherlands",
    role: "Tutor",
    locationAvailability: ["online", "assignment"],
    language: "English",
    availability: "Highly available",
    rate: 45,
    rating: 4.9,
    reviewsCount: 87,
    reviews: [
      {
        by: { id: "u1", firstName: "Liam", email: "liam@example.com", role: "Client" },
        value: 5,
        comment: "Amira explained calculus better than my textbook ever could!"
      },
      {
        by: { id: "u2", firstName: "Sophie", email: "sophie@example.com", role: "Client" },
        value: 4.8,
        comment: "Very patient and thorough. Highly recommend."
      }
    ],
    tags: ["Math", "SAT Prep", "STEM"],
    isFavorite: true,
    pfp: "https://example.com/images/amira.jpg",
    subjects: [
      { title: "Algebra II", grade: "10" },
      { title: "Calculus", grade: "12" },
      { title: "SAT Math", grade: "12" },
    ],
  },
  {
    id: "b7e2d1a4-9c3f-4d6b-8e1a-2f3c4d5e6a7b",
    firstName: "Luca",
    lastName: "Bianchi",
    email: "luca.b@example.com",
    username: "lucab",
    age: 28,
    location: "Rome, Italy",
    role: "Tutor",
    locationAvailability: ["home"],
    language: "Italian",
    availability: "Available",
    rate: 30,
    rating: 4.2,
    reviewsCount: 34,
    reviews: [
      {
        by: { id: "u3", firstName: "Marco", email: "marco@example.com", role: "Client" },
        value: 4.5,
        comment: "Physics finally makes sense thanks to Luca!"
      }
    ],
    subjects: [
      { title: "Physics", grade: "11" },
      { title: "Chemistry", grade: "10" },
    ],
  },
  {
    id: "c9d3e4f5-1a2b-4c6d-8f9e-0a1b2c3d4e5f",
    firstName: "Jin",
    lastName: "Park",
    email: "jin.park@example.com",
    username: "jinpark",
    age: 41,
    location: "Seoul, South Korea",
    role: "Tutor",
    locationAvailability: ["assignment", "online"],
    language: "Korean",
    availability: "Slightly available",
    rate: 55,
    rating: 5.0,
    reviewsCount: 120,
    reviews: [
      {
        by: { id: "u4", firstName: "Minji", email: "minji@example.com", role: "Client" },
        value: 5,
        comment: "Jin is a master of biology. His AP prep was flawless."
      }
    ],
    tags: ["Biology", "AP Science"],
    isFavorite: false,
    pfp: "https://example.com/images/jin.jpg",
    subjects: [
      { title: "Biology", grade: "12" },
      { title: "AP Biology", grade: "12" },
    ],
  },
  {
    id: "d1e2f3a4-5b6c-7d8e-9f0a-1b2c3d4e5f6a",
    firstName: "Chloe",
    lastName: "Nguyen",
    email: "chloe.nguyen@example.com",
    username: "chloe_n",
    age: 24,
    location: "Toronto, Canada",
    role: "Tutor",
    locationAvailability: ["online"],
    language: "English",
    availability: "Busy",
    rate: 25,
    rating: 3.8,
    reviewsCount: 12,
    reviews: [
      {
        by: { id: "u5", firstName: "Ava", email: "ava@example.com", role: "Client" },
        value: 3.5,
        comment: "Good writing feedback, but slow response time."
      }
    ],
    tags: ["English", "Essay Writing"],
    subjects: [
      { title: "English Literature", grade: "11" },
      { title: "Creative Writing", grade: "10" },
    ],
  },
];

export default tutors