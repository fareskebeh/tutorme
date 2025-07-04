import ReactMarkdown from "react-markdown"


const About = () => {
  const markdown:string = 
  `
  # About TutorMe

Welcome to **TutorMe**, where learning meets opportunity. We’re on a mission to make personalized education accessible, empowering, and effective for every learner — no matter where they are in the world.

---

## 🎯 Our Mission

At TutorMe, we believe that education is not one-size-fits-all. Every student learns differently, and every tutor teaches uniquely. Our mission is to bridge that gap by connecting students with the right tutors who can unlock their potential.

We aim to:
- Provide high-quality, one-on-one tutoring in every subject imaginable
- Make learning flexible, affordable, and accessible
- Empower tutors to share their knowledge and grow their impact

---

## 🌍 Who We Are

TutorMe was founded by a team of educators, developers, and lifelong learners who saw a need for a better way to connect students with the help they need. We’re passionate about education, technology, and the power of human connection.

Our platform brings together:
- **Students** looking for support, clarity, and confidence
- **Tutors** who are experts in their fields and passionate about teaching
- **Parents** who want to invest in their child’s future
- **Schools and institutions** seeking scalable academic support

---

## 🧠 How It Works

1. **Search for a Tutor**  
   Browse our growing network of verified tutors by subject, availability, and rating.

2. **Book a Session**  
   Choose a time that works for you — whether it’s a one-time review or ongoing support.

3. **Start Learning**  
   Meet in our virtual classroom, share files, chat, and collaborate in real time.

4. **Track Progress**  
   Get feedback, session summaries, and personalized recommendations.

---

## 💡 Why Choose TutorMe?

- ✅ **Verified Tutors**  
  Every tutor is vetted for expertise, communication, and teaching ability.

- 🕒 **Flexible Scheduling**  
  Learn on your time — whether it’s 2 PM or 2 AM.

- 💬 **Real-Time Support**  
  Chat, video, screen share, and collaborate in our interactive classroom.

- 🔒 **Safe & Secure**  
  Your privacy and safety are our top priorities.

- 🌐 **Global Access**  
  Learn from anywhere, on any device.

---

## 👩‍🏫 For Tutors

Are you passionate about teaching? TutorMe gives you the tools to reach students, grow your income, and make a difference — all on your schedule.

- Set your own rates
- Teach from anywhere
- Build your reputation and impact

---

## 📈 Our Vision

We envision a world where every learner has access to the guidance they need to thrive — not just academically, but personally. Whether it’s mastering calculus, learning a new language, or preparing for a career, TutorMe is here to help you grow.

---

## 📬 Get in Touch

Have questions, feedback, or just want to say hello?  
Reach out to us at [support@tutorme.com](mailto:support@tutorme.com) or follow us on social media.

Together, let’s build a smarter, more connected future — one session at a time.

---

**TutorMe** — Learn better. Teach smarter. Grow together.

  `;

  return (
    <div className='prose h-[100dvh] pt-20 px-8'>
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default About