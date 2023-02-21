import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
export default function Tv() {
  const [ThrillData,setThrillData]=useState([])
  const api_url="https://api.themoviedb.org/3"
  const api_key="ef15b76e12a7817de222263fb254e12e"

  const [tel,setTel]=useState("/trending/all/day")
    const giveData = async () => {
        var attach =await fetch (
            `${api_url}${tel}?api_key=${api_key}`
        )
        var mine = await attach.json()
        console.log("mine",mine.results)
        setThrillData(mine.results)
    }
    useEffect(() => {
        giveData()
    },[tel])
  return (
    <div>
        <section class="top-rated">
        <div class="container">

          <p class="section-subtitle">Online Streaming</p>

          <h2 class="h2 section-title">Top Trending Movies</h2>

          <ul class="filter-list">

            <li>
              <button style={tel.includes("movie") ? {borderColor:"hs1(57den 97% 45%)"} : {} } onClick={()=>setTel("/movie/now_playing")} class="filter-btn">Movies</button>
            </li>

            <li>
              <button onClick={()=>setTel("/tv/on_the_air")} class="filter-btn">TV Shows</button>
            </li>

            <li>
              <button onClick={()=>setTel("/tv/top_rated")} class="filter-btn">Documentary</button>
            </li>

            <li>
              <button onClick={()=>setTel("/movie/popular")} class="filter-btn">Sports</button>
            </li>

          </ul>

          <ul class="movies-list">
          {ThrillData.map((item)=>(
            <li>
            <div class="movie-card">

              <Link  to={tel.includes ("movie") ? `/TrendDetails/movie/${item.id}` : `/TrendDetails/tv/${item.id}`}>
                <figure class="card-banner">
                  <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path} `} alt="Sonic the Hedgehog 2 movie poster"/>
                </figure>
              </Link>

              <div class="title-wrapper">
                <a href="./movie-details.html">
                  <h3 class="card-title"> {tel.includes("movie") ? item.title : item.name} </h3>
                </a>

                <time datetime="2022">2022</time>
              </div>

              <div class="card-meta">
                <div class="badge badge-outline">2K</div>

                <div class="duration">
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT122M">122 min</time>
                </div>

                <div class="rating">
                  <ion-icon name="star"></ion-icon>

                  <data>7.8</data>
                </div>
              </div>

            </div>
          </li>
          ))}
          </ul>

        </div>
      </section>

      <section class="cta">
        <div class="container">

          <div class="title-wrapper">
            <h2 class="cta-title">Trial start first 30 days.</h2>

            <p class="cta-text">
              Enter your email to create or restart your membership.
            </p>
          </div>

          <form action="" class="cta-form">
            <input type="email" name="email" required placeholder="Enter your email" class="email-field"/>

            <button type="submit" class="cta-form-btn">Get started</button>
          </form>

        </div>
      </section>
    </div>
  )
}
