import style from "./SearchBar.module.css"
import search from "../../assets/search.svg"

export function SearchBar({ onSubmit }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      console.log(e.target.value)
      onSubmit(e.target.value)
    }
  }
  return (
    <div className={style.container}>
      <img src={search} className={style.icon} alt="icon loupe" />
      <input
        onKeyUp={submit}
        className={style.input}
        type="text"
        placeholder="Search a tv show you may like"
      />
    </div>
  )
}
