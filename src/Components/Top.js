import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
export default function Top() {
    const [TopData,setTopData]=useState([])
    const api_url="https://api.themoviedb.org/3"
    const api_key="ef15b76e12a7817de222263fb254e12e"
    const [bro,setBro]=useState("/movie/top_rated")

    const withData = async () => {
        var attach =await fetch (
        `${api_url}${bro}?api_key=${api_key}`
        )
        var yes = await attach.json()
        console.log("yes",yes.results)
        setTopData(yes.results)
    }
    useEffect(() => {
        withData()
    },[bro])
  return (
    <div>
        <section class="top-rated">
        <div class="container">

          <p class="section-subtitle">Online Streaming</p>

          <h2 class="h2 section-title">Top Rated Movies</h2>

          <ul class="filter-list">

            <li>
              <button style={bro.includes("movie") ? {borderColor:"hs1(57den 97% 45%)"} : {} } onClick={()=>setBro("/movie/now_playing")} class="filter-btn">Movies</button>
            </li>

            <li>
              <button  onClick={()=>setBro("/tv/on_the_air")} class="filter-btn">TV Shows</button>
            </li>

            <li>
              <button onClick={()=>setBro("/tv/top_rated")} class="filter-btn">Documentary</button>
            </li>

            <li>
              <button onClick={()=>setBro("/movie/popular")} class="filter-btn">Sports</button>
            </li>

          </ul>

          <ul class="movies-list">
           {TopData.map((item) =>(
             <li>
             <div class="movie-card">

             <Link to={bro.includes ("movie") ? `/RateDetails/movie/${item.id}` : `/RateDetails/tv/${item.id}`}>
                 <figure class="card-banner">
                   <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="Sonic the Hedgehog 2 movie poster"/>
                 </figure>
               </Link>

               <div class="title-wrapper">
                 <a href="./movie-details.html">
                   <h3 class="card-title">{bro.includes("movie") ? item.title : item.name}</h3>
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
    </div>
  )
}
