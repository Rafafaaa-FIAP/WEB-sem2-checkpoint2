import Slide from "../../components/Slide"
import Benefits from "../../components/Benefits"
import HomeCard from "../../components/HomeCard"
import InstrumentsBar from "../../components/InstrumentsBar"


function Home() {
  return (
    <>
        <div className="app-home">
          <InstrumentsBar></InstrumentsBar>
          <Benefits/>
           <Slide/>

           <h2>Lançamentos</h2>

           <div className="new">

            <HomeCard></HomeCard>
            <HomeCard></HomeCard>
            <HomeCard></HomeCard>

           
           </div>
           
        </div>
       
    </>
  )
}

export default Home