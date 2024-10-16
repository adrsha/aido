import "./page.css"
import "./Components/Card/page"
import Card from "./Components/Card/page"

export default function Page() {
  let cardContent : [string, string, number][] = [
    ["adarsha/sharkCalc", "step by step pyhton based calc", 58],
    ["asur/pasm", "step by step rust based password manager", 46],
    ["adarsha/nvim", "neovim configurations", 78]
]
  return (
    <>
      <div className="hero">
        <div className="bubbles">
          <img src="bubbles-left.png" />
          <img src="bubbles-right.png" />
        </div>
        <div className="bigboy">
          ai
        </div>
        <div className="littleboy">
          do
        </div>

        <div id="uselessShinyBall">
          <div id="ball">
          </div>
        </div>
        <Card
          description={cardContent[0][1]}
          info={cardContent[0][0]}
        />
      </div>
    </>
  )
}
