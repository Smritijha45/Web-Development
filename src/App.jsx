import UserCard from "./components/UserCard"
import githubdp from "./assets/githubdp.jpg"
import Maharana from "./assets/maharana.jpg"
import PrithviRaj from "./assets/prithviraj.jpg"




function App() {

  return (
    <div className="container">
      <UserCard name="Smriti Jha" desc="CSE Student" image={githubdp} style={{"border-radius":"10px"}}/>
      <UserCard name="Maharana Pratap" desc="Warrior" image={Maharana} style={{"border-radius":"10px"}}/>
      <UserCard name="PrithviRaj Chauhan" desc="Warrior" image={PrithviRaj} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
