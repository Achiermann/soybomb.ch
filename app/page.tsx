import Image from "next/image";
import styles from "./page.module.css";

const SHOWS = [
  { date: "19.11.26", venue: "kraftfeld", city: "winterthur" },
  { date: "25.11.26", venue: "schönegg varieté", city: "zürich" },
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
];

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/background.jpg"
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className={styles.bg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Soybomb</h1>

        <p className={styles.lead}>
          we will return to the stage this year, with new music and an equally
          new four-piece line up
        </p>

        <ul className={styles.shows}>
          {SHOWS.map((show) => (
            <li key={show.date} className={styles.show}>
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
            </li>
          ))}
        </ul>

        <p className={styles.lead}>tickets are on sale now</p>
        <p className={styles.lead}>
          anisa djojoatmodjo and noah weber will join us on stage
        </p>
        <p className={styles.lead}>hope to see some of you again!</p>
      </div>
    </main>
  );
}
