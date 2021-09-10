import { connectToDatabase } from '../util/mongodb'
import About from './about'
import ContactUs from './contactus'
import FAQ from './faq'
import Header from './header'
import Home from './home'
import OurServices from './ourservices'
import OurTeam from './ourteam'

export default function Dashboard({ isConnected }) {
  return (
    <div className="container">
      <style jsx global>{`
        
        * {
        font-family: "Poppins", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
      }

      html {
        font-size: 62.5%;
      }
      `}</style>
      <Header />
      <Home />
      <About />
      <OurServices />
      <OurTeam />
      <ContactUs />
      <FAQ />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()

  const isConnected = await client.isConnected() // Returns true or false

  return {
    props: { isConnected },
  }
}
