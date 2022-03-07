import React from 'react'
import {
   WinLoseCard,
   DetailsSection,
   GameStatus,
   CurrentScoreLabel,
   CurrentScoreValue,
   PlayAgainButton,
   ImageSection,
   WinOrLoseImage
} from './styledComponents'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

type WinOrLoseProps = {
   isWon: boolean
   onClickPlayAgain: () => void
   score: number
}

// Person: React.FunctionComponent<PersonProps>

const WinOrLoseCard = (props: WinOrLoseProps): JSX.Element => {
   const { isWon, onClickPlayAgain, score } = props
   const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
   const gameStatus = isWon ? 'You Won' : 'You Lose'
   const scoreLabel = isWon ? 'Best Score' : 'Score'

   return (
      <WinLoseCard>
         <DetailsSection>
            <GameStatus>{gameStatus}</GameStatus>
            <CurrentScoreLabel>{scoreLabel}</CurrentScoreLabel>
            <CurrentScoreValue>{score}/12</CurrentScoreValue>
            <PlayAgainButton type='button' onClick={onClickPlayAgain}>
               Play Again
            </PlayAgainButton>
         </DetailsSection>
         <ImageSection>
            <WinOrLoseImage src={imageUrl} alt='win or lose' />
         </ImageSection>
      </WinLoseCard>
   )
}

export default WinOrLoseCard
