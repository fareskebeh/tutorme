import sent from "../../assets/sent.png";
import gmailIcon from "../../assets/icons/gmail-144.svg";
import outlookIcon from "../../assets/icons/outlook.svg";
import yahooIcon from "../../assets/icons/yahoo.svg";

type Mail = {
  link: string;
  icon: string;
};

const Verify = () => {
  const mailOptions: Mail[] = [
    {
      link: "https://gmail.com",
      icon: gmailIcon,
    },
    {
      link: "https://outlook.com",
      icon: outlookIcon,
    },
    {
      link: "https://yahoo.com",
      icon: yahooIcon,
    },
  ];

  return (
    <div className="pt-20 h-[100dvh] flex flex-col items-center gap-4 md:justify-around md:flex-row justify-center px-8">
      <img className="w-40 md:w-100 md:order-2" src={sent} />

      <div className="space-y-6 text-center flex flex-col items-center md:items-start sm:text-left">
        <p className="font-bold text-4xl sm:text-5xl md:text-6xl">
          Verify your email
        </p>
        <p className="text-xl sm:text-2xl">
          We have successfully sent a confirmation email, please check your
          inbox!
        </p>
        <div className="flex gap-8">
        {mailOptions.map((mail, index) => (
          <a key={index} href={mail.link}>
            <img className="w-10" src={mail.icon} />
          </a>
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default Verify;
