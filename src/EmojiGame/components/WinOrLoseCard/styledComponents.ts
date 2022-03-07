import styled from 'styled-components'
import tw from 'twin.macro'

export const WinLoseCard = styled.div`
   ${tw`flex flex-col justify-between bg-[#ffffff33] w-[85%]  border-[3px] border-[#ffffff30] rounded-[24px] m-auto p-16`}
   @media screen and (min-w: 768px) {
      ${tw`w-[80%] p-32`}
   }
   @media screen and (min-w: 992px) {
      ${tw`flex w-[70%]`}
   }
   @media screen and (min-w: 1200px) {
      ${tw`flex w-[60%]`}
   }
`
export const DetailsSection = styled.div`
   ${tw`flex flex-col justify-center items-center order-2`}
   @media screen and (min-w: 992px) {
      ${tw`order-1`}
   }
`

export const GameStatus = styled.h1`
   ${tw`text-white text-[32px] font-bold`}
   @media screen and (min-w: 992px) {
      ${tw`text-[64px]`}
   }
`

export const CurrentScoreLabel = styled.p`
   ${tw`text-center text-white text-[18px] font-bold m-0`}
   @media screen and (min-w: 992px) {
      ${tw`text-[36px]`}
   }
`

export const CurrentScoreValue = styled.p`
   ${tw`text-center text-[#6a59ff] text-[32px] font-bold m-0`}
   @media screen and (min-w: 768px) {
      ${tw`text-[48px]`}
   }
`
export const PlayAgainButton = styled.button`
   ${tw`outline-none text-gray-800 bg-yellow-500 text-[16px] font-bold m-4 p-4 pr-6 pl-6 cursor-pointer border-none`}
`

export const ImageSection = styled.div`
   ${tw`flex justify-center order-1`}
   @media screen and (min-w: 992px) {
      ${tw`order-2`}
   }
`
export const WinOrLoseImage = styled.img`
   ${tw`w-[150px] h-[200px]`}
   @media screen and (min-w: 992px) {
      ${tw`w-[350px] h-[450px]`}
   }
`
