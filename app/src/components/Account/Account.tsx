import { Avatar } from '@chakra-ui/react'
import profile from 'public/images/profile.jpg'

// TODO: Flesh out this component once auth implemented
export default function Account() {
  return (
    <Avatar
      name="Aden Herold"
      src={profile.src}
      borderWidth="1px"
      borderColor="white"
    />
  )
}
