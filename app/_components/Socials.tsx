import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

interface SocialsProps {
  containerStyles: string;
}

const Socials = ({ containerStyles }: SocialsProps) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href="/">
          <FaYoutube className="text-[28px]" />
        </Link>
      </li>

      <li>
        <Link href="/">
          <FaFacebook className="text-2xl" />
        </Link>
      </li>

      <li>
        <Link href="/">
          <FaTwitter className="text-2xl" />
        </Link>
      </li>

      <li>
        <Link href="/">
          <FaInstagram className="text-2xl" />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
