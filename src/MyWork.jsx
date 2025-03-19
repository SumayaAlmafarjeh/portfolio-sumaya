import React from 'react'
import Card from './Card'
import todo from './assets/todolist.png'
import cakeshop from './assets/cakeshop.png'
import cssProject from './assets/cssProject.png'
import catsFacts from './assets/catsFacts.png'
import weather from './assets/weather.png'
import MagicalM from './assets/magicalM.png'
import shams from './assets/shams.png'
import guess from './assets/guess.png'
import Footer from './Footer'

function MyWork() {
  return (

    <div className='work-page'>
      <p className='mywork-title'>MY PROJECTS</p>
      <hr />
      <div className='projects-sec'>
        <div className='mywork-cards'>
          <Card key={0} img={todo} title={'TO-DO-LIST PROJECT'} desc={'A responsive To-Do List web app to organize tasks efficiently.Add, delete, and check off tasks with a clean and user-friendly interface for better productivity.🚀'} link={'https://to-do-list-rouge-eight-75.vercel.app/'} tech={'React,js,HTML,CSS'} />

          <Card key={3} img={catsFacts} title={'CATS FACTS PROJECT'} desc={'A simple web app that fetches and displays random cat facts using an external API. It features a button to load new facts dynamically, providing fun and interesting cat trivia.🐱'} link={'https://cats-facts-two.vercel.app/'} tech={'React JS,HTML,CSS,'} />

          <Card key={4} img={weather} title={'WEATHER WEB APP'} desc={'Real-Time Weather App fetches live weather data from an API and displays current conditions based on user input or location🌍'} link={'https://weather-project-murex-eight.vercel.app/'} tech={'React JS,HTML,CSS,'} />

          <Card key={5} img={MagicalM} title={'MAGICAL MOMENTS'} desc={' Full delivery App including login , signup ,  all categories in the menu with their items ,Questions game page allows to the customers playing together while sitting in the coffee house collecting memories.Completed with My colleague Ala\'a Matouq.'} link={'https://drive.google.com/file/d/1X7Y2LS6PYz10SzpIaWRwTG0mbdl1ZhQx/view?usp=drivesdk'} tech={'Android Studio,Java'} />

          <Card key={1} img={cakeshop} title={'THE CAKE SHOP PROJECT'} desc={'Backend development ,Full functionality website with payment cycle using PayPal , AND  Admin panel including user management, categories management and charts for business statistics'} link={'https://drive.google.com/file/d/1BT2Udu3qjsOaupV691yeWC5WfW7tWO0j/edit'} tech={'PHP,js,Bootstrap,CSS'} />

          <Card key={2} img={cssProject} title={'CSS PROJECT'} desc={'full responsive website using CSS and HTML ,  user-friendly interface presenting the usage of flexbox in multiple sections.'} link={'https://sumayaalmafarjeh.github.io/fullCssProject/'} tech={'HTML,CSS'} />

          <Card key={6} img={guess} title={'GUESS GAME'} desc={'A simple interactive web-based game designed to engage users with dynamic gameplay.'} link={'https://sumayaalmafarjeh.github.io/16-12Q1GuessGame/'} tech={'JS,CSS,HTML'} />

          <Card key={7} img={shams} title={'SHAMS UI PROJECT'} desc={'Full website UI design pages for a smart healthcare management system(SHAMS).Designed using Figma.'} link={'https://www.figma.com/design/1xjnnT4kOzjXP7cwwJMyMt/smy0213553?node-id=0-1&t=VtHvRA9R0mreSkhL-1'} tech={'Figma'} />
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default MyWork
