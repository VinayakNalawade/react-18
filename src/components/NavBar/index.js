import './index.css'

const Navbar = props => {
  const {score, topScore, show} = props

  return (
    <nav className="navbar">
      <div className="navNameContainer">
        <img
          className="navlogo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="navheading">Emoji Game</h1>
      </div>
      {show && (
        <div className="navScoreContainer">
          <p className="navScore">Score: {score}</p>
          <p className="navScore">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default Navbar
