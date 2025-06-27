import React from 'react'
import PropTypes from 'prop-types'

import Abs from './Abs'
import BodyShape from './BodyShape'
import BreastLeft from './BreastLeft'
import BreastRight from './BreastRight'
import FootLeft from './FootLeft'
import FootRight from './FootRight'
import KneeLeft from './KneeLeft'
import KneeRight from './KneeRight'
import LowerAbs from './LowerAbs'
import ShinLeft from './ShinLeft'
import ShinRight from './ShinRight'
import UpperLegLeft from './UpperLegLeft'
import UpperLegRight from './UpperLegRight'

const WholeBody = ({ clickedBodyPart, setClickedBodyPart, onClick }) => {
  const handleClick = (bodyPartName) => {
    setClickedBodyPart(bodyPartName)
    onClick(bodyPartName) // Hier soll das Popup im Parent BodyClick ebenfalls geöffnet werden
  }

  return (
    <div
      style={{
        position: 'relative',
        width: 300,
        height: 600,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <BodyShape width={224} height={568} />

      <Abs
        width={52}
        height={72}
        onClick={() => handleClick('Bauchmuskel')}
        isClicked={clickedBodyPart === 'Bauchmuskel'}
        style={{
          position: 'absolute',
          transform: 'translate(0px, 165px)'
        }}
      />

      <LowerAbs
        width={50}
        height={50}
        onClick={() => handleClick('Untere Bauchmuskel')}
        isClicked={clickedBodyPart === 'Untere Bauchmuskel'}
        style={{
          position: 'absolute',
          transform: 'translate(0px, 240px)'
        }}
      />

      <BreastLeft
        width={46}
        height={50}
        onClick={() => handleClick('Linke Brust')}
        isClicked={clickedBodyPart === 'Linke Brust'}
        style={{
          position: 'absolute',
          transform: 'translate(-25px, 105px)'
        }}
      />

      <BreastRight
        width={46}
        height={50}
        onClick={() => handleClick('Rechte Brust')}
        isClicked={clickedBodyPart === 'Rechte Brust'}
        style={{
          position: 'absolute',
          transform: 'translate(25px, 105px)'
        }}
      />

      <UpperLegLeft
        width={42}
        height={135}
        onClick={() => handleClick('Oberschenkel links')}
        isClicked={clickedBodyPart === 'Oberschenkel links'}
        style={{
          position: 'absolute',
          transform: 'translate(-25px, 270px)'
        }}
      />

      <UpperLegRight
        width={43}
        height={131}
        onClick={() => handleClick('Oberschenkel rechts')}
        isClicked={clickedBodyPart === 'Oberschenkel rechts'}
        style={{
          position: 'absolute',
          transform: 'translate(28px, 270px)'
        }}
      />

      <KneeLeft
        width={31}
        height={30}
        onClick={() => handleClick('Knie links')}
        isClicked={clickedBodyPart === 'Knie links'}
        style={{
          position: 'absolute',
          transform: 'translate(22px, 400px)'
        }}
      />

      <KneeRight
        width={27}
        height={30}
        onClick={() => handleClick('Knie rechts')}
        isClicked={clickedBodyPart === 'Knie rechts'}
        style={{
          position: 'absolute',
          transform: 'translate(-22px, 403px)'
        }}
      />

      <ShinLeft
        width={27}
        height={92}
        onClick={() => handleClick('Schienbein links')}
        isClicked={clickedBodyPart === 'Schienbein links'}
        style={{
          position: 'absolute',
          transform: 'translate(-22px, 432px)'
        }}
      />

      <ShinRight
        width={29}
        height={87}
        onClick={() => handleClick('Schienbein rechts')}
        isClicked={clickedBodyPart === 'Schienbein rechts'}
        style={{
          position: 'absolute',
          transform: 'translate(22px, 432px)'
        }}
      />

      <FootLeft
        width={25}
        height={39}
        onClick={() => handleClick('Fuß links')}
        isClicked={clickedBodyPart === 'Fuß links'}
        style={{
          position: 'absolute',
          transform: 'translate(-12px, 525px)'
        }}
      />

      <FootRight
        width={29}
        height={38}
        onClick={() => handleClick('Fuß rechts')}
        isClicked={clickedBodyPart === 'Fuß rechts'}
        style={{
          position: 'absolute',
          transform: 'translate(18px, 525px)'
        }}
      />
    </div>
  )
}
WholeBody.propTypes = {
  clickedBodyPart: PropTypes.string,
  setClickedBodyPart: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
}
export default WholeBody
