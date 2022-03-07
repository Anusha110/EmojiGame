import React from 'react'
import {
   NavBarContainer,
   TitleWithScoreContainer,
   LogoAndTitleContainer,
   EmojiLogo,
   Title,
   ScoresContainer,
   Score
} from './styledComponents'

type NavBarProps = {
   currentScore: number
   isGameInProgress: boolean
   topScore: number
}

const NavBar = (props: NavBarProps): JSX.Element => {
   const { currentScore, isGameInProgress, topScore } = props

   return (
      <NavBarContainer>
         <TitleWithScoreContainer>
            <LogoAndTitleContainer>
               <EmojiLogo
                  src='https://assets.ccbp.in/frontend/react-js/game-logo-img.png'
                  alt='emoji logo'
               />
               <Title>Emoji Game</Title>
            </LogoAndTitleContainer>
            {isGameInProgress && (
               <ScoresContainer className='scores-container'>
                  <Score>Score: {currentScore}</Score>
                  <Score>Top Score: {topScore}</Score>
               </ScoresContainer>
            )}
         </TitleWithScoreContainer>
      </NavBarContainer>
   )
}

export default NavBar
