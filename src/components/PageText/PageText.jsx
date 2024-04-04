import css from "./PageText.module.css";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function PageText() {
  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        Manage your contacts effortlessly with our intuitive and user-friendly
        platform. Whether you are a busy professional, a social butterfly, or
        just someone who likes to stay organized, our app has everything you
        need to streamline your contact management experience.
      </p>
      <div>
        <b>This site was created by Zahar Kshyvak </b>
        <p>My social media:</p>
        <ul className={css.list}>
          <li>
            <a className={css.link} href="https://github.com/anestxs">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              className={css.link}
              href="https://www.linkedin.com/in/zahar-kshyvak-5659922b4/"
            >
              <CiLinkedin />
            </a>
          </li>
          <li>
            <a className={css.link} href="https://t.me/imanestxs">
              <FaTelegram />
            </a>
          </li>
          <li>
            <a className={css.link} href="https://www.instagram.com/imanestxs/">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
