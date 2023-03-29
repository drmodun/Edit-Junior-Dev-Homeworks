import { useState } from "react";
import Board from "./components/Board";
import Statistic from "./components/Statistic";


function App() {
  const [scoreUpdates, setScoreUpdates] = useState([]);
  function handleScoreUpdate(scoreUpdate) {
    setScoreUpdates((prev) => [...prev, scoreUpdate]);
  }
  function handleReset() {
    setScoreUpdates([]);
  }
  function handleUndo(changed) {
    console.log(scoreUpdates);
    if (changed === 1) {
      let temp = [...scoreUpdates];
      let broken = false;
      [...temp].reverse().forEach((scoreUpdate, i) => {
        if (broken) return;
        if (scoreUpdate.changed === 1) {
          temp.splice(temp.length - 1 - i, 1);
          console.log(temp);
          setScoreUpdates(temp);
          broken = true;
        }
      })
    }
    else if (changed === 2) {
      let temp = [...scoreUpdates];
      let broken = false;
      [...temp].reverse().forEach((scoreUpdate, i) => {
        if (broken) return;
        if (scoreUpdate.changed === 2) {
          temp.splice(temp.length - i - 1, 1);
          console.log(temp);
          setScoreUpdates(temp);
          broken = true;
        }
      })
    }
  }



  return (
    <div>
      <h1>Scoreboard</h1>
      <div className="Scoreboard">
        <Board
          date="Nov 12, 2020"
          homeScore={0}
          awayScore={0}
          minute={0}
          handleScoreUpdate={handleScoreUpdate}
          handleReset={handleReset}
          handleUndo={handleUndo}
        />
        <Statistic title="Fouls" />
        <Statistic title="Shots" />
        <Statistic title="Yellow cards" />
        <Statistic title="Red cards" />
        <div className="feed">
          <h2>Feed ({scoreUpdates.length})</h2>
          <ul>
            {[...scoreUpdates].sort(
              (a, b) => a.minute - b.minute
            ).reverse().map((scoreUpdate) => (
              <li >
                {scoreUpdate.minute} {scoreUpdate.changed === 1 ? "Liverpool" : "Arsenal"} scored
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default App;
