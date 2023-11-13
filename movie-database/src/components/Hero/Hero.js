import styles from "./Hero.module.css"

function Hero() {
  return (
      <div className={styles.container}>
        <section className={styles.hero}>
            <div className={styles.hero__left}>
                <h2 className={styles.hero__title}>Spiderman</h2>
                <h3 className={styles.hero__genre}>
                    Genre: Thrliler, Action
                </h3>
                <p className={styles.hero__description}>
                    nonton bareng
                </p>
                <button className={styles.hero__button}>Watch</button>
            </div>
            <div className='hero__right'>
                <img 
                    className={styles.hero__image}
                    src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/703x0/webp/photo/2020/05/09/1218869151.png"
                    alt="placeholder"
                />
            </div>
        </section>
      </div>
  )
}

export default Hero