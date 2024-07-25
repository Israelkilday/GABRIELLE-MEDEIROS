import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";

interface SocialsProps {
  containerStyles: string;
}

const Socials = ({ containerStyles }: SocialsProps) => {
  return (
    <article>
      <ul className={`${containerStyles}`}>
        <li>
          <Link
            href="https://api.whatsapp.com/send?phone=5585986270742"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="text-[28px]" />
          </Link>
        </li>

        <li>
          <Link
            href="https://linktr.ee/gabriellemedeiros"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandLinktree className="text-2xl" />
          </Link>
        </li>

        <li>
          <Link
            href="https://www.instagram.com/gabriellemedeiros.oficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl" />
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default Socials;
