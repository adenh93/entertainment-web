import React, { Children, PropsWithChildren } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Carousel({ children }: PropsWithChildren) {
  return (
    <Swiper slidesPerView="auto" spaceBetween={40}>
      {Children.map(children, (child) => (
        <SwiperSlide style={{ width: 'auto' }}>{child}</SwiperSlide>
      ))}
    </Swiper>
  )
}
