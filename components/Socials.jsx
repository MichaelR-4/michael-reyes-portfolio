import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const socialsLink = [
  { icon: <FaGithub />, path: "https://github.com/MichaelR-4" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/reyes-michael/",
  },
  { icon: <FaInstagram />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialsLink.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
