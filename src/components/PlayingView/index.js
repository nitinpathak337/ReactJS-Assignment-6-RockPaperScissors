import GameContext from '../../context/GameContext'

import OptionsButton from '../OptionsButton/index'
import {OptionsDiv} from './styledComponent'

const PlayingView = () => (
  <GameContext.Consumer>
    {value => {
      const {choicesList} = value

      return (
        <OptionsDiv>
          {choicesList.map(eachItem => (
            <OptionsButton key={eachItem.id} details={eachItem} />
          ))}
        </OptionsDiv>
      )
    }}
  </GameContext.Consumer>
)

export default PlayingView
