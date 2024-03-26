import React from 'react'
import HomeL from '../components/HomeL'
import Campaign from "../components/Campaign"
import Header from '../components/Header'
import Destinations from '../components/Destinations'
import Offers from '../components/Offers'
import Blog from '../components/Blog'
import TripPlanner from '../components/TripPlanner'

function HomePage() {
  return (
    <div className='home' style={StyleSheet.home}>
        <Header/>
        <HomeL/>
        <Campaign/>
        <Destinations/>
        <Offers/>
        <Blog/>
        <TripPlanner/>
    </div>
  )
}

export default HomePage
