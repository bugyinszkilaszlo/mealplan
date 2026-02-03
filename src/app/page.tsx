import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Tervezd meg az étkezéseidet,
            <br />
            Egyszerűsítsd az életed
          </h1>
          <p className={styles.heroSubtitle}>
            Rendszerezd a receptjeidet, készíts heti étrendeket, és ne töprengj
            többé azon, hogy &quot;mi legyen vacsorára?&quot;.
          </p>
          <div className={styles.heroButtons}>
            <Link
              href='/planner'
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Tervezés kezdése
            </Link>
            <Link
              href='/recipes'
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              Receptek böngészése
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2>Miért MealPlan?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📝</div>
              <h3>Könnyű tervezés</h3>
              <p>
                Húzd be kedvenc receptjeidet a heti naptárba. A tervezés még
                sosem volt ilyen egyszerű.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🍳</div>
              <h3>Recept gyűjtemény</h3>
              <p>
                Tárold az összes receptedet egy helyen. Adj hozzá jegyzeteket,
                értékeld őket, és tartsd nyilván a kedvenceidet.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛒</div>
              <h3>Okos bevásárlás</h3>
              <p>
                Generálj automatikusan bevásárlólistát az étrendedből. Soha
                többé ne felejts el egy hozzávalót sem.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>⏰</div>
              <h3>Időmegtakarítás</h3>
              <p>
                Tölts kevesebb időt az étkezések átgondolásával, és többet
                élvezd őket szeretteiddel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className={styles.container}>
          <h2>Hogyan működik</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Add hozzá a receptjeidet</h3>
              <p>Importálj vagy készítsd el kedvenc receptjeidet</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Tervezd meg a hetedet</h3>
              <p>Ütemezd be az étkezéseket a naptáradba</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Főzz és élvezd</h3>
              <p>Kövesd a terved és egyél finom ételeket</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>Készen állsz a kezdésre?</h2>
          <p>
            Csatlakozz az otthoni szakácsok ezreihez, akik egyszerűsítették az
            étkezéseik tervezését
          </p>
          <Link
            href='/planner'
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLarge}`}
          >
            Kezdd el most
          </Link>
        </div>
      </section>
    </div>
  );
}
