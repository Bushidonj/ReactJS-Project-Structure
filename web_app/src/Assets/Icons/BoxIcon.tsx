import React from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

export const BoxIcon = (props: IconProps) => {
  return (
    <Icon width='17' height='15' viewBox='0 0 17 15' xmlns='http://www.w3.org/2000/svg' fill='none' {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7.63268 0.237687C8.28737 -0.0792291 9.08081 -0.0792291 9.7355 0.237688L15.5537 3.054C15.7605 3.15412 15.9444 3.28144 16.1005 3.42931C16.4698 3.77911 16.6841 4.24403 16.6841 4.73652V10.2635C16.6841 10.9638 16.2509 11.6085 15.5537 11.946L9.7355 14.7623C9.08081 15.0792 8.28737 15.0792 7.63268 14.7623L1.81444 11.946C1.11724 11.6085 0.684082 10.9638 0.684082 10.2635V4.73653C0.684082 4.24398 0.898394 3.77903 1.26776 3.42923C1.42387 3.28139 1.60766 3.1541 1.81444 3.054L7.63268 0.237687ZM9.03456 1.35937C8.81631 1.25373 8.55187 1.25373 8.33362 1.35937L3.18692 3.85063L8.68409 6.75358L14.1813 3.85067L9.03456 1.35937ZM15.2296 4.79003L9.41136 7.86237V13.4582L14.8528 10.8243C15.0852 10.7118 15.2296 10.4969 15.2296 10.2635V4.79003ZM7.95682 13.4582V7.86237L2.13861 4.78994V10.2635C2.13861 10.4969 2.283 10.7118 2.5154 10.8243L7.95682 13.4582Z" fill="#A19D9D"/>
    </Icon>
  )
}
