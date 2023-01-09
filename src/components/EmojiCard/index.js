import './index.css'

const EmojiCard = props => {
  const {object, ifClicked} = props

  const onClicked = () => {
    ifClicked(object.id)
  }

  return (
    <li className="emoji">
      <button type="button" onClick={onClicked} className="emojibutton">
        <img
          src={object.emojiUrl}
          alt={object.emojiName}
          className="emojiimg"
        />
      </button>
    </li>
  )
}

export default EmojiCard
