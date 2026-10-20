import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { SiteLink } from "@/components/site-link";
import { site } from "@/content/site";

export function Contact() {
  const { contact, links } = site;
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-dark py-16 text-paper sm:py-24"
    >
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-start">
        <Reveal className="on-dark">
          <SectionHeading n={5} label="contact" id="contact-title" dark>
            {contact.title}
          </SectionHeading>
          <p className="mt-5 max-w-[40ch] text-on-dark">{contact.intro}</p>
          <SiteLink
            href={links.email && `mailto:${links.email}`}
            className="mt-6 inline-block text-xl font-bold text-yellow"
          >
            {contact.emailLabel}
          </SiteLink>
          <ul className="mt-6 flex gap-5 font-mono text-xs">
            <li>
              <SiteLink href={links.github}>github</SiteLink>
            </li>
            <li>
              <SiteLink href={links.linkedin}>linkedin</SiteLink>
            </li>
            <li>
              <SiteLink href={links.cv}>cv.pdf</SiteLink>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
