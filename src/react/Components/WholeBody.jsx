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
    localStorage.setItem('clickedBodyPart', bodyPartName)
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
          transform: 'translate(-24px, 110px)'
        }}
      >
        <svg
          width={45}
          height={57}
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

      <BodyPart
        onClick={() => handleClick('Schulterblatt rechts')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(24px, 110px)'
        }}
      >
        <svg
          width={45}
          height={57}
          viewBox="0 0 40 53"
          fill={clickedBodyPart === 'Schulterblatt rechts' ? 'green' : 'none'}
        >
          <path
            // eslint-disable-next-line max-len
            d="M20 1H11.5L7 2.75L3 5.5L1.5 9.5L1 12.25L0.5 15V17.875V20.75V27V32.75V38.5L2.5 43L5.5 46L8.5 48.5L13.75 50.75L20 52.5H25.5L30.5 51L34.25 47.75L37.5 42L39 33.5V20L37.5 11.5L34.25 8L29.5 4.5L20 1Z"
            stroke="black"
          />
        </svg>
      </BodyPart>

      <BodyPart
        onClick={() => handleClick('Unterer Rücken rechts')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(20px, 200px)'
        }}
      >
        <svg
          width={34}
          height={64}
          viewBox="0 0 34 64"
          fill={clickedBodyPart === 'Unterer Rücken rechts' ? 'pink' : 'none'}
        >
          <path
            // eslint-disable-next-line max-len
            d="M23 1H17.5H14H11L8.75 1.75L7.5 2.5L6.5 3.5L5.75 4.75L5 6L3 10L1.5 13.25L0.5 17.5V22V26.5V31V39.5V43.25V47L1 50L2 53L3.5 57L5 59.5L8 62L13.5 63.5H17.5H23H29L32 61L33 57V50.5V45.5V39.5V31V24.5V17.5V14.25V11L32.5 8.5L31 6L30 4.5L29 3L27.5 2L26 1H23Z"             stroke="black"
          />
        </svg>
      </BodyPart>

      <BodyPart
        onClick={() => handleClick('Unterer Rücken links')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(-20px, 200px)'
        }}
      >
        <svg
          width={34}
          height={65}
          viewBox="0 0 34 65"
          fill={clickedBodyPart === 'Unterer Rücken links' ? 'pink' : 'none'}
        >
          <path
            // eslint-disable-next-line max-len
            d="M16 1H11.5L6.75 2L4.5 3.5L3 5.25L1.5 7.5L1 11V14.75V18.5V22.5L1.25 27L1.5 31.5V36.25V41V44.75V46.625V48.5V50L2 52.5L2.5 55L3.5 57.5L5 59.5L6.5 61L12.5 64H23.5L27.5 62L29.5 59.5L32 54.5L33 50L33.4688 43V37.5L33 30.5V24L32 16L30.5 9.5L29.5 6.25L28 3.5L26 2L23.5 1.5L19.75 1H16Z"
            stroke="black"
          />
        </svg>
      </BodyPart>

      <BodyPart
        onClick={() => handleClick('Po links')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(-23px, 270px)'
        }}
      >
        <svg
          width={46}
          height={55}
          viewBox="0 0 46 55"
          fill={clickedBodyPart === 'Po links' ? 'magenta' : 'none'}
        >
          <path
            // eslint-disable-next-line max-len
            d="M2.5013 13.1655L4.5 8.99999L8.25 5.49999L11.5 2.99999L17 1L24 0.5L29.5 1L35 2.24999L39 5.49999L42 8.99999L43.5 14.75L44.5 20.5L45 27.25V34L43.5 38.75L41 43.5L38 47.25L35 50.5L30.75 52.5L26.5 54H19L14.25 51.25L9.5 48.5L6.00065 45.25L3.5 42L1.50065 36.5L0.5 30.25V25.5L1.50065 19.3327L2.5013 13.1655Z"
            stroke="black"
          />
        </svg>
      </BodyPart>

      <BodyPart
        onClick={() => handleClick('Po rechts')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(23px, 270px)'
        }}
      >
        <svg
          width={44}
          height={55}
          viewBox="0 0 44 56"
          fill={clickedBodyPart === 'Po rechts' ? 'magenta' : 'none'}
        >
          <path
            // eslint-disable-next-line max-len
            d="M39.5 9L36.5 5L32.5 2.25L29.5 1.25L25.25 0.5H22.5L20 1.25L18 2L15.25 3.125L12.5 4.5L9.5 6.5L8 8L6.5 10L5.25 12L4 14.5L2.5 21L1.5 26.5L1 32.5V36.75V38.875L1.5 41.5L2.5 44.75L5 48.5L8.5 51.5L13 54L20 55.5L25.75 55L31 54.5L36.5 51.5L40 48L42 44.5L43.5 39.5V33.25V28.5L42.5 20L41.5 14.5L39.5 9Z"
            stroke="black"
          />
        </svg>
      </BodyPart>

      <BodyPart
        onClick={() => handleClick('Hamstring rechts')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(25px, 327px)'
        }}
      >
        <svg
          width={38}
          height={99}
          viewBox="0 0 41 102"
          fill={clickedBodyPart === 'Hamstring rechts' ? 'purple' : 'none'}
        >
          <path
            // eslint-disable-next-line max-len
            d="M9 1L5.5 2.5L2 5.5L1 10.5V14V20V24.5V29V33.5V38L1.5 44L2 50V58.5L2.5 66V72V77.5L3 82L3.75 85.5L4.5 89.5L5.5 92.5L6.40909 95L8.5 98L11.25 100L13.5 101.5H19H26L30.5 96L32.5 90.5L33.5 85.5V78V72V67.5L34.5 61.5L35.5 55L37 48.5L38.5 43L39.5 36.5L40 30.5V24.5V20V16L38.5 10.5L36.5 6L32.5 2.5L26 1H19H13.5H9Z"
            stroke="black"
          />
        </svg>
      </BodyPart>

      <BodyPart
        onClick={() => handleClick('Hamstring links')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(-25px, 327px)'
        }}
      >
        <svg
          width={38}
          height={99}
          viewBox="0 0 41 102"
          fill={clickedBodyPart === 'Hamstring links' ? 'purple' : 'none'}
        >
          <path
            // eslint-disable-next-line max-len
            d="M32 1L35.5 2.5L39 5.5L40 10.5V14V20V24.5V29V33.5V38L39.5 44L39 50V58.5L38.5 66V72V77.5L38 82L37.25 85.5L36.5 89.5L35.5 92.5L34.5909 95L32.5 98L29.75 100L27.5 101.5H22H15L10.5 96L8.5 90.5L7.5 85.5V78V72V67.5L6.5 61.5L5.5 55L4 48.5L2.5 43L1.5 36.5L1 30.5V24.5V20V16L2.5 10.5L4.5 6L8.5 2.5L15 1H22H27.5H32Z"
            stroke="black"
          />
        </svg>
      </BodyPart>

      <BodyPart
        onClick={() => handleClick('Wade rechts')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(23px, 430px)'
        }}
      >
        <svg
          width={30}
          height={92}
          viewBox="0 0 30 92"
          fill={clickedBodyPart === 'Wade rechts' ? 'orange' : 'none'}
        >
          <path
            // eslint-disable-next-line max-len
            d="M2.5 19L3.5 11.5L5 6L7 2.5L10 1L15 0.5L20 1L23.5 4.5L26 9.5L27.25 13.25L28.5 17L28.75 21.5V27.5L28.625 30.5L28.4222 33.875L28 37.5L27.25 42L24.375 53.875L23 60L20 70.5L18.75 74.75L17.5 79L15.5 84L13.5 88L9.5 91L6 89.25L3.5 86.5L2.5 82.75V78V73.625V69.25V64.875V60.5L2.125 56.75L1.75 53L1 46V40V34.5V29L1.75 24L2.5 19Z"
            stroke="black"
          />
        </svg>
      </BodyPart>

      <BodyPart
        onClick={() => handleClick('Wade links')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(-19px, 430px)'
        }}
      >
        <svg
          width={33}
          height={95}
          viewBox="0 0 33 95"
          fill={clickedBodyPart === 'Wade links' ? 'orange' : 'none'}
        >
          <path
            // eslint-disable-next-line max-len
            d="M13.5 1.5L9 3L6 4.75L4.75 6.375L3.5 8.5L2 11.5L1 15.5L0.5 18.625V22.25V25.875L1 30L1.375 33.625L2.25 37.75L3 43L4 48.5L6 58L8.78947 66L10.25 72L11.5 77.5L12.5 82.5L14 87L16.5 91L19 93.5L22.5 94L26 93.5L27.5 92L28.5 90L29.5 87.5L30 85.5V81.75V78V70.5V63L30.5 58L31.5 52.5L32 48.25V43.5V37.75V32V28L31.5 23.5L31 19.5L30 15L29.25 12L28.5 9L27 6.375L25.5 4.5L23.5 2.75L21 1.5L17.25 1.25L13.5 1.5Z"
            stroke="black"
          />
        </svg>
      </BodyPart>

      <BodyPart
        onClick={() => handleClick('Achillessehne rechts')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(15px, 522px)'
        }}
      >
        <svg
          width={11}
          height={29}
          viewBox="0 0 11 29"
          fill={clickedBodyPart === 'Achillessehne rechts' ? '#1bebee' : 'none'}
        >
          <path
            d="M8.75 3L9.5 6.5L10 9.5V13V16.5L9.5 20L8.75 23.25L8 25.5L6.5 27L5 27.5L3.5 27L2 26L1.5 23.5L1 20.5V17V13.5L1.5 10L2 6.5L3 4.25L4 2L5.5 1.25L7 1L8.75 3Z"
            stroke="black"
          />
        </svg>
      </BodyPart>

      <BodyPart
        onClick={() => handleClick('Achillessehne links')}
        clickedBodyPart={clickedBodyPart}
        style={{
          position: 'absolute',
          transform: 'translate(-13px, 525px)'
        }}
      >
        <svg
          width={12}
          height={29}
          viewBox="0 0 12 29"
          fill={clickedBodyPart === 'Achillessehne links' ? '#1bebee' : 'none'}
        >
          <path
            d="M6.5 1L8 3L9 5.75L10 8.5L10.6875 11L11.375 13.5V17.125V20.75L10.6875 24.5L9.5 26.5L6 27.5L3 26.5L1.625 23.875L0.75 20.75L0.625 17.625L0.5 14.5L0.75 9L1.5 4.5L2.25 2L4 1H6.5Z"
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
