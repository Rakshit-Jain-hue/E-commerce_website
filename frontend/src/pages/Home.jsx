import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollections from "../components/LatestCollections"
import NewsletterBox from "../components/NewsletterBox"
import OurPolicy from "../components/OurPolicy"

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home