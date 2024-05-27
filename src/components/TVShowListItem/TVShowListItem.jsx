import style from "./TVShowListItem.module.css"
import { SMALL_IMG_COVER_BASE_URL } from "../../config"

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={() => onClick(tvShow)} className={style.container}>
      <img
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        className={style.img}
      />
      <div className={style.title}> {tvShow.name}</div>
    </div>
  )
}
