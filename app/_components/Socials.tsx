import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { TbBrandLinktree } from "react-icons/tb";

interface SocialsProps {
  containerStyles: string;
}

const Socials = ({ containerStyles }: SocialsProps) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href="https://api.whatsapp.com/send?phone=5585986270742">
          <BiMessageRoundedCheck className="text-[28px]" />
        </Link>
      </li>

      <li>
        <Link href="https://linktr.ee/gabriellemedeiros">
          <TbBrandLinktree className="text-2xl" />
        </Link>
      </li>

      <li>
        <Link href="https://www.instagram.com/gabriellemedeiros.oficial/">
          <FaInstagram className="text-2xl" />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
