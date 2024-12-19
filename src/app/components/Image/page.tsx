import React from 'react'
import Image from 'next/image'

export default function image() {
  return (
    <div>
      <Image src={"/Header-Image.png"} alt="" width={1920} height={320} />
    </div>
  )
}
