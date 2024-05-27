import "./global.css"
import style from "./App.module.css"
import { useEffect, useState } from "react"
import { BACKDROP_BASE_URL } from "./config"
import { TVShowAPI } from "./api/tv-show"
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails"
import { Logo } from "./components/Logo/Logo"
import logo from "./assets/logo.png"
import { TVShowList } from "./components/TVShowList/TVShowList"
import { SearchBar } from "./components/SearchBar/SearchBar"

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState()
  const [recommendationList, setRecommendationList] = useState([])

  async function fetchPopulars() {
    try {
      const populars = await TVShowAPI.fetchPopulars()
      if (populars.length > 0) {
        setCurrentTVShow(populars[0])
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries populaires")
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId)
      if (recommendations.length > 0) {
        setRecommendationList(recommendations.slice(0, 10))
      }
    } catch (error) {
      alert("Erreur durant la recherche des séries recommandées")
    }
  }

  useEffect(() => {
    fetchPopulars()
  }, [])

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id)
    }
  }, [currentTVShow])

  async function serachTVSow(tvShowName) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName)
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0])
      }
    } catch (error) {
      alert("Erreur durant la recherche de la série")
    }
  }

  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className={style.logo}>
          <Logo
            image={logo}
            title={"SerieScope"}
            subtitle={"by Houssni Amin"}
          />
        </div>
        <div className={style.search}>
          <SearchBar onSubmit={serachTVSow} />
        </div>
      </div>
      <div className={style.tv_show_details}>
        {currentTVShow && <TVShowDetails TVShow={currentTVShow} />}
      </div>
      <div className={style.recommendation}>
        {recommendationList && recommendationList.length > 0 && (
          <TVShowList
            onClickItem={setCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  )
}
