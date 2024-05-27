import style from "./FiveStarRating.module.css"
import fullStar from "../../assets/fullStar.svg"
import halfStar from "../../assets/halfStar.svg"
import emptyStar from "../../assets/emptyStar.svg"

export function FiveStarRating({ rating }) {
  const starList = []
  const starFillCount = Math.floor(rating)
  const hasStarHalf = rating - starFillCount >= 0.5
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0)

  for (let i = 0; i < starFillCount; i++) {
    starList.push(
      <img
        src={fullStar}
        key={`full-${i}`}
        alt="full star"
        className={style.stars}
      />
    )
  }

  if (hasStarHalf) {
    starList.push(
      <img
        src={halfStar}
        key={"half star"}
        alt="half star"
        className={style.stars}
      />
    )
  }

  for (let i = 0; i < emptyStarCount; i++) {
    starList.push(
      <img
        src={emptyStar}
        key={`empty-${i}`}
        alt="empty star"
        className={style.stars}
      />
    )
  }

  return <div>{starList}</div>
}
