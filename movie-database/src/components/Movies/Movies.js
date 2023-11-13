import { useState } from "react"
import DataMovie from "../../utils/constants/DataMovie"
import Movie from "../Movie/Movie"
import styles from "./Movies.module.css"

function Movies() {

    //state
    const [item, setItem] = useState(DataMovie)

    const handleClick = () => {
        const movie = {
            id: 4,
            title: "Batman", 
            date: "20 Agustus 2006",
            image: "https://www.themoviedb.org/t/p/original/lnWJtG3vmbU7dNJrYfGk08oMAX.jpg"
        }

        setItem([...item, movie])
    }
  return (
      <div className={styles.container}>
        <section className={styles.movies}>
            <h2 className={styles.movies__title}>Latest Movies</h2>
            <div className={styles.movie__container}>
                {
                    item.map(function(data){
                        return(
                                <Movie key={data.id} title={data.title} data={data.date} image={data.image} />
                        )
                    })
                }
            </div>
            <button className={styles.movie__button} onClick={handleClick}>Tambahkan Movie</button>
        </section>
      </div>
  )
}

export default Movies