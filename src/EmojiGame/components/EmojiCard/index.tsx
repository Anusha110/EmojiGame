import React from 'react'
import { EmojiItem, EmojiButton, EmojiIcon } from './styledComponents'

type EmojiDetails = {
   id: number
   emojiName: string
   emojiUrl: string
}

type EmojiCardProps = {
   emojiDetails: EmojiDetails
   clickEmoji: (id: number) => void
}

const EmojiCard = (props: EmojiCardProps): JSX.Element => {
   const { emojiDetails, clickEmoji } = props
   const { id, emojiName, emojiUrl } = emojiDetails

   const onClickEmojiCard = (): void => {
      clickEmoji(id)
   }

   return (
      <EmojiItem>
         <EmojiButton onClick={onClickEmojiCard}>
            <EmojiIcon src={emojiUrl} alt={emojiName} />
         </EmojiButton>
      </EmojiItem>
   )
}

export default EmojiCard
