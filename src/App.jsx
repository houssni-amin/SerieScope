import "./global.css"
import style from "./App.module.css"

export function App() {
  return (
    <div className={style.main_container}>
      <div className={style.header}>
        <div className={style.logo}>
          <div>Logo</div>
          <div>Subtitle</div>
        </div>
        <div className={style.search}>
          <input className={style.input} type="text" />
        </div>
      </div>
      <div className={style.tv_show_details}>Details</div>
      <div className={style.recommendation}>Recommendations</div>
    </div>
  )
}
