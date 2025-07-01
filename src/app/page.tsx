import Card from "@/components/Card";
import CardHorizontal from "@/components/CardHorizontal";
import ContactForm from "@/components/ContactForm";
import data from "@/data/data.json";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IconText from "@/components/IconText";
import Pill from "@/components/Pill";
import Section from "@/components/Section";
import TextAndMedia from "@/components/TextAndMedia";

export default function Home() {
  const year = new Date().getFullYear() - 2018;
  const about = data.about.map((paragraph, index) => <p key={index}>{paragraph.replace("{year}", year.toString())}</p>);

  return (
    <div className="font-[family-name:var(--font-poppins)] min-h-screen">
      <a href="#main-content" className="fixed top-0 left-[-1000px] hover:underline hover:underline-offset-4 focus:static">Skip to main content</a>
      <Header/>
      <main className="flex flex-col items-center sm:items-start" id="main-content">
        <Hero/>
        <Section sectionId="about">
          <div className="col-span-12">
            <h2 className="text-dPurple">
              About me.
            </h2>
          </div>
          <TextAndMedia 
            src="/profile.jpeg"
            alt="a photo of me wearing a blue blouse. I have long hair and wear glasses."
            text={about}
            imagePosition="left"
          />
        </Section>
        <Section sectionId="skills" mode="dark dark:bg-gray-800 text-white">
          <div className="col-span-12">
            <h2 className="text-dPinkDark">
                Skills
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4">
            <IconText src="/front-end.png" alt="">
              <h3>Frontend</h3>
            </IconText>
            <ul className="mt-4">
              {data.skills.frontend.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4">
            <IconText src="/backend-coding.png" alt="">
              <h3>Backend/Tools</h3>
            </IconText>
            <ul className="mt-4">
              {data.skills.backend.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4">
            <IconText src="/web-development.png" alt="">
              <h3>Dev Practices</h3>
            </IconText>
            <ul className="mt-4">
              {data.skills.practices.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
          </div>
        </Section>
        <Section sectionId="projects">
          <div className="col-span-12">
            <h2 className="text-dPurple">
                Projects Highlights
            </h2>
          </div>
          { data.projects.map((project, index) => 
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <Card src={project.src} alt={project.alt} href={project.href} ariaLabel={project.ariaLabel}>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="mb-2">{project.name}</h3>
                    <p>
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    { project.skills.map ((skill, index) => <Pill key={index} text={skill} />) }
                  </div>
                </div>
              </Card>
            </div>
          )}
        </Section>
        <Section sectionId="certifications">
          <div className="col-span-12">
            <h2 className="text-dPurple">
                Certifications
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 w-full">
            <CardHorizontal src="/developer.svg" alt="" href="https://dev.acquia.com/person/community/daniela-taniguchi#4257225834-2084705551" ariaLabel="Go to Daniela's Drupal Developer Credential in a new tab">
                <h3 className="mb-2">Drupal Developer</h3>
                <p>
                  Credential validating full-stack Drupal expertise, including site building, custom module development, and theming. Covers HTML, CSS, Twig, PHP, and Drupal APIs, with a strong focus on performance, security, and best practices in modern Drupal development.
                </p>
              </CardHorizontal>
          </div>
          <div className="col-span-12 md:col-span-6 w-full">
            <CardHorizontal src="/front-end-specialist.svg" alt="" href="https://dev.acquia.com/person/community/daniela-taniguchi#4257225834-2084705551" ariaLabel="Go to Daniela's Drupal Front End Specialist Credential in a new tab">
                <h3 className="mb-2">Drupal Front End Specialist</h3>
                <p>
                  Credential demonstrating advanced theming and front-end skills in Drupal. Covers custom theme development, Twig templating, layout configuration, and performance/security best practices using HTML, CSS, JavaScript, and PHP within the Drupal framework.
                </p>
              </CardHorizontal>
          </div>
        </Section>
        <Section sectionId="contact" mode="dark dark:bg-gray-800 top-cut text-white">
          <div className="col-span-12">
            <h2 className="text-dPinkDark">
                Contact
            </h2>
            <h3>Let's connect?</h3>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="flex flex-col gap-8">
              <IconText src="/InBug-Black.png" alt="">
                <div className="flex flex-col">
                  <h4>Linkedin</h4>
                  <a 
                    href="https://www.linkedin.com/in/danielataniguchi/" 
                    aria-label="Go to Daniela Taniguchi's Linkedin" 
                    target="_blank"
                    className="hover:underline hover:underline-offset-4 outline-offset-4"
                  >
                      Daniela Taniguchi
                  </a>
                </div>              
              </IconText>
              <IconText src="/github-mark.png" alt="">
                <div className="flex flex-col">
                  <h4>Github</h4>
                  <a 
                    href="https://github.com/danitaniguchi" 
                    aria-label="Go to Daniela Taniguchi's Github" 
                    target="_blank"
                    className="hover:underline hover:underline-offset-4 outline-offset-4"
                  >
                      danitaniguchi
                  </a>
                </div>              
              </IconText>
              <IconText src="/mail.png" alt="">
                <div className="flex flex-col">
                  <h4>Email</h4>
                  <a 
                    href="mailto:daniela.taniguchi@outlook.com" 
                    aria-label="Send an email to daniela.taniguchi@outlook.com" 
                    target="_blank" 
                    className="hover:underline hover:underline-offset-4 outline-offset-4"
                  >
                      daniela.taniguchi@outlook.com
                  </a>
                </div>              
              </IconText>
              <IconText src="/resume.png" alt="">
                <div className="flex flex-col">
                  <h4>Resume</h4>
                  <a
                    href="/resume_Daniela-Taniguchi.pdf" 
                    target="_blank" 
                    className="hover:underline hover:underline-offset-4 outline-offset-4"
                  >
                    PDF Resume Daniela Taniguchi
                  </a>
                </div>              
              </IconText>
              <IconText src="/location.png" alt="">
                <div className="flex flex-col">
                  <h4>Location</h4>
                  <p>Houston - Texas</p>
                </div>              
              </IconText>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-7 w-full">
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
