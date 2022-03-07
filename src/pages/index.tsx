import type { NextPage } from 'next'
import { Dashboard } from '../components/dashboard'
import { Header } from '../components/header'

const Home: NextPage = () => {
  return (
    <div id="container">
      <Header/>
      <Dashboard/>
    </div>
  )
}

export default Home
