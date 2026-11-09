import Image from "next/image";
import styles from "./page.module.css";

const SHOWS = [
  { date: "19.11.26", venue: "kraftfeld", city: "winterthur", href: "https://www.kraftfeld.ch/de/programm/1790/bar-und-konzerte-soybomb-live-baden-zuerich-pferd-live-zuerich.html" },
  { date: "20.11.26", venue: "la cabane mégamix", city: "la chaux-de-fonds" },
  { date: "25.11.26", venue: "schönegg varieté", city: "zürich", 
    href: "https://schoenegg-variete.ch/" },
  {
    date: "26.11.26",
    venue: "odeon",
    city: "brugg",
    href: "https://nvpq2.r.ag.d.sendibm3.com/mk/cl/f/sh/1t6Af4OiGsDg0hDJVg6zq3bMpcCNg9/S-X1kDch38L4",
  },
  {
    date: "27.11.26",
    venue: "bad bonn",
    city: "düdingen",
    href: "https://nvpq2.r.ag.d.sendibm3.com/mk/cl/f/sh/1t6Af4OiGsE8LPPju2Cv0JfCDRB7OD/SZkLojCzgGFe",
  },
  { date: "08.12.26", venue: "helsinki", city: "zürich", href: "https://www.helsinkiklub.ch/"},
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/background.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="(min-width: 1024px) 70vw, 100vw"
          className={styles.bg}
        />
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.hl}>Soybomb</span>
          </h1>

          <p className={`${styles.lead} ${styles.wide}`}>
            <span className={styles.hl}>
              we will return to the stage this year,
              <br />
              with new music and an equally new four-piece line up
            </span>
          </p>

          <ul className={styles.shows}>
            {SHOWS.map((show) => (
              <li key={show.date} className={styles.show}>
                <span className={styles.hl}>
                  <span className={styles.date}>{show.date}</span>{" "}
                  {show.href ? (
                    <a
                      className={styles.link}
                      href={show.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {show.venue}
                    </a>
                  ) : (
                    <span>{show.venue}</span>
                  )}
                  , {show.city}
                </span>
              </li>
            ))}
          </ul>

          <p className={styles.lead}>
            <span className={styles.hl}>tickets are on sale now</span>
          </p>
          <p className={styles.lead}>
            <span className={styles.hl}>
              anisa djojoatmodjo and noah weber will join us on stage
            </span>
          </p>
          <p className={styles.lead}>
            <span className={styles.hl}>hope to see some of you again!</span>
          </p>
        </div>
      </main>
    </div>
  );
}
