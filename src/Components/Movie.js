import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import "./Movie.css"
export default function Movie() {
  const [searchData,setSearchData]=useState([])
  const api_url="https://api.themoviedb.org/3"
  const api_key="ef15b76e12a7817de222263fb254e12e"
  const [category,setCategory]=useState("/search/movie")
  const myData = async () => {
      var response = await fetch(
          `${api_url}${category}?api_key=${api_key}&language=en-US&query=dragon%20ball%20&page=1&include_adult=false`
      )

      var res = await response.json()
      console.log("res",res.results)
      setSearchData(res.results)
  }
  useEffect(() => {
      myData()
  },[category])

  return (
    <>
     <Navbar/>
     <div className="Banner_Movie">
            <div className="Text">
              <h1 className="Heading" >Movie Collection Hub</h1>
              <p className="lorem">Lorem ipsum dolor sit amet conse adipisicing elit. Doloremque sunt adipisci asperiores dolor, doloribus libero suscipit error, corrupti autem dicta, consequatur dolorum. Sunt reprehenderit.lorem  doloribus libero  error.</p>
            </div>
     </div>
     <div style={{textAlign:"center", marginTop:"2vh", color:"yellow"}}>
       <h1>All Movie Collection</h1>
       </div>
     <div className="filter-list" >
        <input style={{width:"30%",padding:"12px", margin:"auto",borderRadius:"50px", textAlign:"center"}} type="text" placeholder="Search" />

      
   
   <ul style={{marginTop:"30px"}} class="movies-list ">
           {searchData.map((item) =>(
             <li>
             <div  class="movie-card">

             <Link to={category.includes ("movie") ? `/FilmDetails/movie/${item.id}` : `/FilmDetails/tv/${item.id}`}>
                 <figure class="card-banner">
                   <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="Sonic the Hedgehog 2 movie poster"/>
                 </figure>
                 </Link>
  

               <div class="title-wrapper">
                 <a href="./movie-details.html">
                   <h3 class="card-title">{item.title}</h3>
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
    < Footer/>
    </>
  )
}
