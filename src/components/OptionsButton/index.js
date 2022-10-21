import GameContext from '../../context/GameContext'
import {Button, Image} from './styledComponent'

const OptionsButton = props => {
  const {details} = props
  const {imageUrl, id} = details

  return (
    <GameContext.Consumer>
      {value => {
        const {youChoose} = value
        const onChoose = () => {
          youChoose(id)
        }

        const testIds = `${id.toLowerCase()}Button`

        return (
          <Button onClick={onChoose} data-testid={testIds}>
            <Image src={imageUrl} alt={id} />
          </Button>
        )
      }}
    </GameContext.Consumer>
  )
}

export default OptionsButton
