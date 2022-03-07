import styled from 'styled-components'
import tw from 'twin.macro'

export const EmojiItem = styled.li`
   ${tw`w-[40%] list-none my-8`}
   @media screen and (min-width: 992px) {
      ${tw`w-[24%]`}
   }
`

export const EmojiButton = styled.button`
   ${tw`flex justify-center items-center bg-[#ffffff33] cursor-pointer outline-none w-[100%] h-[100px] border-[3px] border-[#ffffff30] rounded-[24px]`}
   @media screen and (min-width: 768px) {
      ${tw`h-[200px]`}
   }
`

export const EmojiIcon = styled.img`
   ${tw`w-[50px]`}
   @media screen and (min-width: 768px) {
      ${tw`w-[100px]`}
   }
`
