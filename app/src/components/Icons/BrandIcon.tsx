import { Icon, IconProps } from '@chakra-ui/react'

export default function BrandIcon({
  width = '33px',
  height = '27px',
  ...props
}: IconProps) {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 33 27"
      fill="none"
      {...props}
    >
      <path
        d="M26.463 0.408386L29.663 6.80839H24.863L21.663 0.408386H18.463L21.663 6.80839H16.863L13.663 0.408386H10.463L13.663 6.80839H8.86304L5.66304 0.408386H4.06304C2.29504 0.408386 0.879037 1.84039 0.879037 3.60839L0.863037 22.8084C0.863037 24.5764 2.29504 26.0084 4.06304 26.0084H29.663C31.431 26.0084 32.863 24.5764 32.863 22.8084V0.408386H26.463Z"
        fill="currentColor"
      />
    </Icon>
  )
}
