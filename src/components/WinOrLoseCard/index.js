import './index.css'

const WinOrLoseCard = props => {
  const {score, playagain} = props

  const ifreset = () => {
    playagain()
  }

  return (
    <div className="winLoseCard">
      <img
        className="winLoseimg"
        alt="win or lose"
        src={
          score < 12
            ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
        }
      />
      <div className="winLoseContentConatainer">
        <h1 className="winLoseHeading">
          {score < 12 ? 'You Lose' : 'You Won'}
        </h1>
        <p className="winLosepara">{score < 12 ? 'Score' : 'Best Score'}</p>
        <p className="winLoseScore">{score}/12</p>
        <button className="playagainbutton" type="button" onClick={ifreset}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
