import { FiveStarRating } from "../FiveStarRating/FiveStarRating"
import style from "./TVShowDetails.module.css"

export function TVShowDetails({ TVShow }) {
  const rating = (TVShow.vote_average / 2).toFixed(1)
  return (
    <div>
      <div className={style.title}>{TVShow.name}</div>
      <div className={style.rating_container}>
        <FiveStarRating rating={rating} />
        <div className={style.rating}>{rating} / 5</div>
      </div>

      <div className={style.overview}>{TVShow.overview}</div>
    </div>
  )
}
