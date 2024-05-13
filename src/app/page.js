import Goals from "@/components/Goals";
import Graph from "@/components/Graph";
import Topbar from "@/components/Topbar";
import heart from '../../public/heart.gif'

export default function Home() {
  return (
 <div >
<Topbar/>
<div>
  <p className="goals">Today’s Goal</p>
  {/* <img src={heart} alt="heartbeat" width={100}/> */}
</div>
<Goals/>
<Graph/>
 </div>
  );
}
