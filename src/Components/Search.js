import React from 'react'
import { useEffect, useState } from "react"
import Footer from './Footer'
import Navbar from './Navbar'
export default function Search() {
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
    <div className="filter-list" style={{marginTop:"10vh"}}>
   {/* <input style={{width:"30%",padding:"15px", margin:"auto",borderRadius:"50px", textAlign:"center"}} type="text" placeholder="Search" /> */}

   <ul style={{marginTop:"30px"}} class="movies-list ">
           {searchData.map((item) =>(
             <li>
             <div  class="movie-card">

               <a href="./Search.html">
                 <figure class="card-banner">
                   <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="Sonic the Hedgehog 2 movie poster"/>
                 </figure>
               </a>

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
    <Footer/>
    </>
  )
}
