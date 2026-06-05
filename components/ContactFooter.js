import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";
import { ICONS } from "@/lib/cv-data";

export default function ContactFooter({ contacts }) {
  return (
    <section
      className="w-section w-contact"
      id="contact"
      data-screen-label="Contact"
    >
      <SectionTitle>Contact</SectionTitle>
      <div className="w-contact__cols">
        <div className="w-contact__left">
          <p className="w-lead">
            Providing services on an hourly basis. Get in touch to discuss your
            project and engagement requirements.
          </p>
          <ul className="w-contact__links">
            {contacts.map((c, i) => (
              <li key={i}>
                <a href={c.href}>
                  <img src={ICONS[c.icon]} alt="" />
                  <span>{c.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
