import { Icon, IconProps } from '@chakra-ui/react'

export default function PlayIcon({
  width = 30,
  height = 30,
  ...props
}: IconProps) {
  return (
    <Icon
      {...props}
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z"
        fill="currentColor"
      />
    </Icon>
  )
}
