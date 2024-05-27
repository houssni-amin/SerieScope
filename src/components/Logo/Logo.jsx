import style from "./Logo.module.css"

export function Logo({ image, title, subtitle }) {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <img className={style.img} src={image} alt="logo" />
        <span className={style.title}>{title}</span>
      </div>
      <span className={style.subtitle}>{subtitle}</span>
    </div>
  )
}
