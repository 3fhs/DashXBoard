import React from 'react'
import Pie from './Pie'
import Title from '../../componentes/title/Title'

export default function PieDash() {
  return (
    <div>
      <Title tit="Pie <> Board" des="This Page is Show All Data" />

      <Pie/>
    </div>
  )
}
