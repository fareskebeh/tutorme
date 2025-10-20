import SplitText from "../../components/SplitText";
import HomeSearch from "./HomeSearch";
import CountUp from "../../components/Countup";
import { motion } from "framer-motion";
import { HiPencil, HiCash, HiStar } from "react-icons/hi";

const Home = () => {
  const services = [
    {
      title: "We connect students to the tutor that they need.",
      icon: <HiPencil size={100} />,
    },
    {
      title:
        "Tutorme ensures quality tutoring through verified and rated professionals",
      icon: <HiStar size={100} />,
    },
    {
      title:
        "Our platform is safe for payments between students and their tutors",
      icon: <HiCash size={100} />,
    },
  ];

  const testimonials = [
    {
      testimonial:
        "“As a tutor, I found TutorMe to be a seamless way to connect with motivated students who actually value learning.”",
      role: "Tutor",
      owner: "Amira Khan",
    },
    {
      testimonial:
        "“Finding a tutor who really understood my struggles took minutes. It honestly made studying feel less lonely.”",
      role: "Student",
      owner: "Sofia Martínez",
    },
    {
      testimonial:
        "“My son’s confidence skyrocketed after just a few sessions. TutorMe made it easy to find someone we could trust.”",
      role: "Parent",
      owner: "Ethan Williams",
    },
  ];

  return (
    <div className="dark:text-white flex flex-col items-center gap-20 transition duration-150 pt-20 dark:bg-[radial-gradient(circle_at_center,#071c17,transparent)] bg-[radial-gradient(circle_at_center,#e4f4e4,transparent)] pb-12 overflow-x-hidden">
      <div className="h-[90dvh] px-8 flex flex-col items-center sm:flex-row">
        <div className=" flex justify-center sm:text-left items-center sm:flex-1">
          <SplitText
            text="Are you in need of a tutor right away?"
            className="text-5xl my-4 sm:text-7xl font-black text-left"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
        </div>

        <div className="sm:h-full flex justify-center items-center sm:flex-1">
          <HomeSearch />
        </div>
      </div>

      <hr className="w-[50%] border-2 border-emerald-500" />

      <div className=" flex flex-col items-stretch w-full gap-20 px-8">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          exit={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          What we do?
        </motion.p>
        <div className="flex sm:flex-row flex-col items-center gap-20 rounded-2xl  p-8   transition duration-150 justify-around w-full *:w-60">
          {services.map((s, i) => (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-4 text-center"
              key={i}
            >
              <p className="text-emerald-500 *:bg-[radial-gradient(circle_at_center,#d1fae5,transparent)] dark:*:bg-[radial-gradient(circle_at_center,#022c22,transparent)]">{s.icon}</p> 
              <p className="text-neutral-700 dark:text-slate-400 text-xl transition duration-150">
                {s.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <hr className="w-[50%] border-2 border-emerald-500" />

      <div className="flex flex-col sm:flex-row px-8 gap-20 sm:gap-24 *:flex-[0.5]">
        <div className="text-3xl text-center flex-col items-center flex gap-4">
          <div className="flex gap-2 justify-center">
            <p className="text-emerald-500 text-6xl sm:text-8xl font-black">
              +
            </p>
            <CountUp
              from={0}
              to={1000}
              separator=","
              direction="up"
              duration={1}
              className="font-black text-6xl sm:text-8xl text-emerald-500 count-up-text"
            />
          </div>
          <p>Users, Students and parents , all trust TutorMe.</p>
        </div>

        <div className="text-3xl flex-col text-center flex gap-4">
          <div className="flex gap-2 justify-center">
            <p className="text-emerald-500 text-6xl sm:text-8xl font-black">
              +
            </p>
            <CountUp
              from={0}
              to={1200}
              separator=","
              direction="up"
              duration={1}
              className="font-black text-emerald-500 text-6xl  sm:text-8xl count-up-text"
            />
          </div>
          <p>Students found TutorMe helpful to find the right tutor</p>
        </div>
      </div>

      <hr className="w-[50%] border-2 border-emerald-500" />

      <div className=" flex flex-col items-stretch w-full gap-20 px-8">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          exit={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Client testimonials
        </motion.p>
        <div className="flex sm:flex-row flex-col *:rounded-2xl *:bg-white *:p-4 *:shadow-md *:dark:bg-slate-900 **:transition *:flex-1 *:w-full *:gap-6 duration-150 gap-8 justify-center w-full">
          {testimonials.map((t, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start gap-4 text-left"
              key={i}
            >
              <div>
                <p className="text-emerald-500 font-bold text-2xl">{t.owner}</p>
                <p>{t.role}</p>
              </div>
              <p className="text-neutral-700 text-lg dark:text-slate-400 transition duration-150">
                {t.testimonial}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
