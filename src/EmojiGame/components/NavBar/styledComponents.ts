import styled from 'styled-components'
import tw from 'twin.macro'

export const NavBarContainer = styled.nav`
   ${tw`flex justify-center bg-[#ffffff33] p-8`}
`
export const TitleWithScoreContainer = styled.div`
   ${tw`flex justify-between max-w-[1000px]`}
   flex-basis: 80%;
`
//why isnt basis-4/5 working

export const LogoAndTitleContainer = styled.div`
   ${tw`flex items-center`}
`
export const EmojiLogo = styled.img`
   ${tw`w-[24px]`}
   @media screen and (min-width: 768px) {
      ${tw`w-[48px]`}
   }
`
export const Title = styled.h1`
   ${tw`text-white text-[16px] font-bold`}
   @media screen and (min-width: 768px) {
      ${tw`text-[24px]`}
   }
`

export const ScoresContainer = styled(Title)`
   ${tw`flex`}
`

export const Score = styled(Title)`
   ${tw`ml-[16px]`}
   @media screen and (min-width: 768px) {
      ${tw`text-[24px] ml-[32px]`}
   }
`
// font-['Roboto'],font-[500]
