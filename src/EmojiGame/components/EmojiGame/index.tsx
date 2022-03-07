import React, { Component } from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'
import {
   AppContainer,
   EmojiGameBody,
   EmojisListContainer
} from './styledComponents'

type EmojiDetails = {
   id: number
   emojiName: string
   emojiUrl: string
}

type EmojiGameProps = { emojisList: EmojiDetails[] }

interface EmojiGameState {
   clickedEmojisList: number[]
   isGameInProgress: boolean
   topScore: number
}

class EmojiGame extends Component<EmojiGameProps, EmojiGameState> {
   state = {
      clickedEmojisList: [],
      isGameInProgress: true,
      topScore: 0
   }

   resetGame = (): void => {
      this.setState({ clickedEmojisList: [], isGameInProgress: true })
   }

   renderScoreCard = (): JSX.Element => {
      const { emojisList } = this.props
      const { clickedEmojisList } = this.state
      const isWon = clickedEmojisList.length === emojisList.length

      return (
         <WinOrLoseCard
            isWon={isWon}
            onClickPlayAgain={this.resetGame}
            score={clickedEmojisList.length}
         />
      )
   }

   finishGameAndSetTopScore = (currentScore: number): void => {
      const { topScore } = this.state
      let newTopScore = topScore

      if (currentScore > topScore) {
         newTopScore = currentScore
      }

      this.setState({ topScore: newTopScore, isGameInProgress: false })
   }

   clickEmoji = (id: number): void => {
      const { emojisList } = this.props
      const { clickedEmojisList } = this.state
      console.log('id', id)
      // const random = clickedEmojisList as number[]
      const isEmojiPresent = (clickedEmojisList as number[]).includes(id)
      const clickedEmojisLength = clickedEmojisList.length

      if (isEmojiPresent) {
         this.finishGameAndSetTopScore(clickedEmojisLength)
      } else {
         if (emojisList.length - 1 === clickedEmojisLength) {
            this.finishGameAndSetTopScore(emojisList.length)
         }
         this.setState(prevState => ({
            clickedEmojisList: [...prevState.clickedEmojisList, id]
         }))
      }
   }

   getShuffledEmojisList = (): EmojiDetails[] => {
      const { emojisList } = this.props

      return emojisList.sort(() => Math.random() - 0.5)
   }

   renderEmojisList = (): JSX.Element => {
      const shuffledEmojisList = this.getShuffledEmojisList()

      return (
         <EmojisListContainer>
            {shuffledEmojisList.map(emojiObject => (
               <EmojiCard
                  key={emojiObject.id}
                  emojiDetails={emojiObject}
                  clickEmoji={this.clickEmoji}
               />
            ))}
         </EmojisListContainer>
      )
   }

   render(): JSX.Element {
      const { clickedEmojisList, isGameInProgress, topScore } = this.state

      return (
         <AppContainer>
            <NavBar
               currentScore={clickedEmojisList.length}
               isGameInProgress={isGameInProgress}
               topScore={topScore}
            />
            <EmojiGameBody>
               {isGameInProgress
                  ? this.renderEmojisList()
                  : this.renderScoreCard()}
            </EmojiGameBody>
         </AppContainer>
      )
   }
}

export default EmojiGame
