import React from 'react'
import PropTypes from 'prop-types'

import BodyShape from './BodyShape'
import BodyShapeBack from './BodyShapeBack'
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

// Hier der Ansatz für das genererische Körperteile, in denen die SVGs als Props übergeben werden
import BodyPart from './BodyPart'

const WholeBody = ({ clickedBodyPart, setClickedBodyPart, onClick, isBack }) => {
  const handleClick = (bodyPartName) => {
    setClickedBodyPart(bodyPartName)
    onClick(bodyPartName) // Hier soll das Popup im Parent BodyClick ebenfalls geöffnet werden
  }

  if (!isBack) {
    return (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <BodyShape width={224} height={568} />

        <BodyPart
          onClick={() => handleClick('Bauchmuskel')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(0px, 165px)'
          }}
        >
          <svg
            width={52}
            height={72}
            viewBox="0 0 52 74"
            fill={clickedBodyPart === 'Bauchmuskel' ? 'green' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M1 18.5V13.374C1 11.177 1.66996 9.03228 2.9205 7.22594C4.5705 4.84262 7.10923 3.22255 9.96583 2.73003L17.5436 1.42352C19.1782 1.14169 20.8339 1 22.4927 1H29.5H41.5592C42.5142 1 43.4637 1.1449 44.3752 1.42974L44.7959 1.56121C48.4869 2.71465 51 6.13297 51 10V13V26V31V36.4379C51 39.7421 50.028 43.0021 48.233 45.7762C46.46 48.5163 45.5 51.7363 45.5 55V57.7118C45.5 59.9007 45.3328 62.0865 45 64.25L44.5594 67.1138C44.5199 67.3709 44.5 67.6306 44.5 67.8907C44.5 70.7125 42.2125 73 39.3907 73H34.5H25H10C7.25201 73 4.74999 71.4166 3.57361 68.9332L2.17978 65.9907C1.40296 64.3507 1 62.5587 1 60.744V55V41.5V31V26V18.5Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

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
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <BodyShapeBack width={225} height={565} />

      <BodyPart
        onClick={() => handleClick('Schulterblatt links')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(-22px, 110px)'
        }}
      >
        <svg
          width={43}
          height={52}
          viewBox="0 0 43 52"
          fill={clickedBodyPart === 'Schulterblatt links' ? 'green' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
              // eslint-disable-next-line max-len
            d="M16.5 3.5L8 8L4 13.75L1.5 19L0.5 26L1.5 32.5L3 39L4.5 44.5L7.5 48L12.5 51H28.5L39 46L42 34.5V19V8.5L39 4.75L35 2L28.5 1L16.5 3.5Z"
            stroke="black"
          />
        </svg>
      </BodyPart>
    </div>
  )
}
WholeBody.propTypes = {
  clickedBodyPart: PropTypes.string,
  setClickedBodyPart: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isBack: PropTypes.bool
}
export default WholeBody
