import React from 'react'
import { Header } from './components/Header'
import { ContentApp } from './components/ContentApp'
import { Results } from './components/Results'
import { ProfileOverview } from './components/ProfileOverview'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <ContentApp />
      <Results />
      <ProfileOverview />
      <Footer />
    </>
  )
}

export default App
