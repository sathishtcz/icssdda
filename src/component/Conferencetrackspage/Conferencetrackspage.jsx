import React from 'react'
import Conferencetracks from '../../shared/components/Conferencetracks/Conferencetracks'
import Helmetcomponent from '../../component/Helmetcomponent'

export default function Conferencetrackspage() {
  return (
    <>
      <Helmetcomponent title="Conference Tracks - International Conference on Software Systems Development and Data Analysis" canonical="https://icssdda.com/conferenceTracks" />
      <Conferencetracks />
    </>
  )
}
