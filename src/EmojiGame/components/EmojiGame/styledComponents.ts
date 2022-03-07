import styled from 'styled-components'
import tw from 'twin.macro'

export const AppContainer = styled.div`
   ${tw`flex flex-col min-h-screen bg-gradient-to-br from-purple-400 to-pink-300`}
`

// bg-gradient-to-br from-#9796f0 to-#fbc7d4

export const EmojiGameBody = styled.div`
   ${tw`flex flex-col flex-1 items-center`}
`

export const EmojisListContainer = styled.div`
   ${tw`flex flex-1 justify-between flex-wrap p-0 w-[80%] max-w-[1000px] m-auto`}
`
