import style from "./TVShowList.module.css"
import { TVShowListItem } from "../TVShowListItem/TVShowListItem"
import { useEffect } from "react"

export function TVShowList({ tvShowList, onClickItem }) {
  useEffect(() => {
    const listElement = document.querySelector(`.${style.list}`)

    listElement.addEventListener("wheel", (event) => {
      event.preventDefault()
      listElement.scrollLeft += event.deltaY
    })

    return () => {
      listElement.removeEventListener("wheel", () => {})
    }
  }, [])
  return (
    <div>
      <div className={style.title}>You may also like :</div>
      <div className={style.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={style.tv_show_list_item} key={tvShow.id}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          )
        })}
      </div>
    </div>
  )
}
