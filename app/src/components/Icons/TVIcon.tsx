import { Icon, IconProps } from '@chakra-ui/react'

export default function TVIcon({
  width = '20px',
  height = '20px',
  ...props
}: IconProps) {
  return (
    <Icon
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.08 4.48109H20V20H0V4.48109H4.92L2.22 1.20272L3.78 0.029098L7 3.90883L10.22 0L11.78 1.20272L9.08 4.48109ZM2 6.42095V18.0601H12V6.42095H2ZM17 14.1804H15V12.2405H17V14.1804ZM15 10.3007H17V8.36082H15V10.3007Z"
        fill="currentColor"
      />
    </Icon>
  )
}
