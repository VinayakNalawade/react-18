/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'

import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import Navbar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {topScore: 0, clickedList: [], score: 0, show: true}

  ifClicked = id => {
    const {clickedList} = this.state
    if (clickedList.includes(id)) {
      this.setState({show: false})
    } else {
      let {score} = this.state
      score += 1

      this.setState(prevState => ({
        score,
        show: score < 12,
        clickedList: [...prevState.clickedList, id],
      }))
    }
  }

  playagain = () => {
    this.setState(prevState => ({
      topScore:
        prevState.score < prevState.topScore
          ? prevState.topScore
          : prevState.score,
      score: 0,
      clickedList: [],
      show: true,
    }))
  }

  render() {
    const {topScore, score, show} = this.state
    const {emojisList} = this.props

    const shuffledEmojis = emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="mainContainer">
        <Navbar show={show} topScore={topScore} score={score} />
        <div className="pageBody">
          {show && (
            <ul className="emojiContainer">
              {shuffledEmojis.map(each => (
                <EmojiCard
                  object={each}
                  key={each.id}
                  ifClicked={this.ifClicked}
                />
              ))}
            </ul>
          )}
          {!show && <WinOrLoseCard score={score} playagain={this.playagain} />}
        </div>
      </div>
    )
  }
}

export default EmojiGame
