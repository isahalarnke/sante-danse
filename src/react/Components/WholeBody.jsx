import React from 'react'
import PropTypes from 'prop-types'

import BodyShape from './BodyShape'
import BodyShapeBack from './BodyShapeBack'
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

        <BodyPart
          onClick={() => handleClick('Untere Bauchmuskel')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(0px, 240px)'
          }}
        >
          <svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill={clickedBodyPart === 'Untere Bauchmuskel' ? 'orange' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M23 0.5H11C5.20101 0.5 0.5 5.20101 0.5 11V11.6738C0.5 16.8205 1.6983 21.8966 4 26.5L10 35.5L16 42.5L20.3694 46.5573C22.0603 48.1274 24.2824 49 26.5898 49C28.7893 49 30.9149 48.2071 32.577 46.7666L35.9693 43.8266C36.9874 42.9442 37.9191 41.9667 38.7515 40.9072L41.0903 37.9305C42.3612 36.313 43.4951 34.5923 44.4801 32.7864C47.4459 27.3491 49 21.2546 49 15.0611V11C49 5.20101 44.299 0.5 38.5 0.5H37.5H23Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

        <BodyPart
          onClick={() => handleClick('Rechte Brust')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(-25px, 105px)'
          }}
        >
          <svg
            width={50}
            height={50}
            viewBox="0 0 46 50"
            fill={clickedBodyPart === 'Rechte Brust' ? 'blue' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M8.64805 2.85397L7.78522 3.38125C5.02283 5.06938 2.96768 7.70344 2.00205 10.7934C1.34426 12.8984 1.21796 15.1334 1.63443 17.299L3.14684 25.1635C3.38175 26.3851 3.5 27.6262 3.5 28.8701C3.5 34.0756 5.56787 39.0679 9.2487 42.7487L9.71618 43.2162C11.552 45.052 13.7495 46.4859 16.1692 47.4269C19.6438 48.7782 23.4427 49.0613 27.0792 48.2402L31.7589 47.1835C35.1753 46.412 38.3075 44.6156 40.7123 42.0693C43.7679 38.8339 45.5 34.5208 45.5 30.0706C45.5 28.0392 45.1449 26.0234 44.4507 24.1143L39.968 11.787C39.6565 10.9303 39.2776 10.0997 38.8349 9.30288L38.8098 9.25764C37.6174 7.11129 35.9748 5.24822 33.9948 3.79622C31.0745 1.65466 27.5475 0.5 23.9261 0.5H21.5H17.0143C14.0621 0.5 11.1671 1.31454 8.64805 2.85397Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

        <BodyPart
          onClick={() => handleClick('Linke Brust')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(25px, 105px)'
          }}
        >
          <svg
            width={46}
            height={50}
            viewBox="0 0 46 50"
            fill={clickedBodyPart === 'Linke Brust' ? 'blue' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M37.852 3.35397L38.7148 3.88125C41.4772 5.56938 43.5323 8.20344 44.498 11.2934C45.1557 13.3984 45.282 15.6334 44.8656 17.799L43.3532 25.6635C43.1183 26.8851 43 28.1262 43 29.3701C43 34.5756 40.9321 39.5679 37.2513 43.2487L36.7838 43.7162C34.948 45.552 32.7505 46.9859 30.3308 47.9269C26.8562 49.2782 23.0573 49.5613 19.4208 48.7402L14.7411 47.6835C11.3247 46.912 8.19253 45.1156 5.78767 42.5693C2.73206 39.3339 1 35.0208 1 30.5706C1 28.5392 1.35513 26.5234 2.04935 24.6143L6.532 12.287C6.84351 11.4303 7.22239 10.5997 7.66507 9.80288L7.6902 9.75764C8.88262 7.61129 10.5252 5.74822 12.5052 4.29622C15.4255 2.15466 18.9525 1 22.5739 1H25H29.4857C32.4379 1 35.3329 1.81454 37.852 3.35397Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

        <BodyPart
          onClick={() => handleClick('Oberschenkel rechts')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(-25px, 270px)'
          }}
        >
          <svg
            width={42}
            height={135}
            viewBox="0 0 42 135"
            fill={clickedBodyPart === 'Oberschenkel rechts' ? 'red' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M22.3414 3.83838L20.9889 2.99305C18.4627 1.41419 15.3636 1.04546 12.5375 1.98749C11.5192 2.32694 10.5622 2.82835 9.70345 3.47241L9.30258 3.77306C7.78569 4.91074 6.53438 6.36472 5.63543 8.03419L4.65369 9.85743C3.8868 11.2816 3.27586 12.7845 2.83148 14.3398L2.1922 16.5773C1.06954 20.5066 0.5 24.5732 0.5 28.6597V32.5V42V53L1.5 64.5L3.5 76.5L5 88.5L7 100L7.58716 104.306C8.19389 108.755 9.28687 113.125 10.8465 117.336L12.7192 122.392C13.2377 123.792 13.9278 125.122 14.7736 126.353L16.1668 128.379C17.9813 131.018 20.7673 132.831 23.9153 133.422C25.9384 133.801 28.0247 133.658 29.9774 133.008L32.9813 132.006C34.958 131.347 36.7233 130.173 38.0954 128.605C39.0242 127.544 39.7549 126.32 40.2502 125C40.7452 123.679 41 122.278 41 120.868V114.5V107V83V70V65.5V53C41 48.3541 40.3806 43.7289 39.1582 39.2467L39.0702 38.924C38.3577 36.3116 37.4525 33.7556 36.3619 31.2771L32.5 22.5L29.7964 14.3893C29.2672 12.8017 28.5571 11.2803 27.68 9.85505L26.6431 8.17007C25.5624 6.41383 24.0901 4.93131 22.3414 3.83838Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

        <BodyPart
          onClick={() => handleClick('Oberschenkel links')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(28px, 270px)'
          }}
        >
          <svg
            width={43}
            height={131}
            viewBox="0 0 43 131"
            fill={clickedBodyPart === 'Oberschenkel links' ? 'red' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M9 17.5L4.50002 27L4.39962 27.251C1.82355 33.6912 0.500015 40.5637 0.500015 47.5V57.5V67.5V77V91.5C0.500015 99.1447 1.319 106.767 2.94296 114.238L3.00002 114.5L3.84061 120.945C4.25876 124.15 6.06909 127.009 8.78859 128.757C10.5588 129.895 12.6189 130.5 14.7234 130.5H17.981C20.2919 130.5 22.5677 129.935 24.6101 128.853C28.0508 127.032 30.5903 123.875 31.6323 120.124L32.5 117L35.5 104L38 96.5L38.144 95.9779C40.703 86.7016 42 77.1228 42 67.5V57.5V51V47.1119C42 40.38 41.4986 33.6574 40.5 27L38.3657 16.7554C38.1226 15.5882 38 14.3991 38 13.2069V9.88909C38 7.39895 37.0108 5.01079 35.25 3.25C33.4892 1.48921 31.1011 0.5 28.6109 0.5H28.0961C26.074 0.5 24.0925 1.07182 22.4066 2.18831C20.6347 3.36179 18.3681 4.90551 17 6C14.5 8 9 17.5 9 17.5Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

        <BodyPart
          onClick={() => handleClick('Knie links')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(22px, 400px)'
          }}
        >
          <svg
            width={31}
            height={30}
            viewBox="0 0 31 30"
            fill={clickedBodyPart === 'Knie links' ? 'purple' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M18 1H14.9119C13.316 1 11.7321 1.27596 10.2302 1.81568C6.29039 3.23148 3.20289 6.35409 1.83174 10.3097L1.78132 10.4551C1.26408 11.9473 1 13.5154 1 15.0946V17.681C1 19.4254 1.46708 21.1381 2.35273 22.641C3.42219 24.4558 5.0496 25.8764 6.99229 26.6909L10.0344 27.9663C11.6618 28.6486 13.4088 29 15.1735 29C17.037 29 18.8797 28.6081 20.5819 27.8499L23.5316 26.5359C25.1527 25.8138 26.5731 24.707 27.6695 23.3115C29.1793 21.39 30 19.0171 30 16.5734V15.0767C30 13.5077 29.7576 11.9481 29.2814 10.4532L29.1801 10.1351C28.7286 8.71756 28.0969 7.36387 27.3007 6.10721L26.4629 4.78512C26.1552 4.29944 25.7969 3.84771 25.394 3.43749C23.8626 1.87832 21.7689 1 19.5835 1H18Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

        <BodyPart
          onClick={() => handleClick('Knie rechts')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(-22px, 403px)'
          }}
        >
          <svg
            width={27}
            height={30}
            viewBox="0 0 27 30"
            fill={clickedBodyPart === 'Knie rechts' ? 'purple' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M9.5 1H5.23992C4.11662 1 3.02982 1.39894 2.1733 2.12569C1.11188 3.02628 0.5 4.34791 0.5 5.73992V9.27273V16.2727V17.7027C0.5 22.237 3.21097 26.3319 7.38514 28.1028C8.78077 28.6949 10.2813 29 11.7973 29H12.162C14.3523 29 16.5076 28.4504 18.4304 27.4016L18.517 27.3544C21.1011 25.9449 23.1527 23.7281 24.3583 21.0429L25.3387 18.8592C26.1042 17.1542 26.5 15.3065 26.5 13.4375C26.5 10.7265 25.6676 8.08086 24.1153 5.85825L22.8393 4.03131C22.6135 3.70797 22.3611 3.40403 22.0847 3.12265C20.7512 1.76487 18.9279 1 17.0248 1H15.5H9.5Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

        <BodyPart
          onClick={() => handleClick('Schienbein rechts')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(-22px, 432px)'
          }}
        >
          <svg
            width={27}
            height={92}
            viewBox="0 0 27 92"
            fill={clickedBodyPart === 'Schienbein rechts' ? 'pink' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M13.5 0.5H11.9471C7.70659 0.5 3.84754 2.94898 2.04196 6.78584C1.35579 8.24395 1 9.83558 1 11.4471V17V27.5L2.5 40C3.49861 46.3245 4.96809 52.5656 6.89619 58.6713L7 59L9.5 68L12.5 77L14.8224 84.8963C14.9406 85.298 15.0942 85.6884 15.2814 86.0628L16.2801 88.0601C17.8894 91.2788 22.1391 92.0494 24.7761 89.6007C25.8754 88.58 26.5 87.1476 26.5 85.6475V77V65.5V49.5V38V27.5V17V11.1132C26.5 9.71724 26.2336 8.33406 25.7152 7.03791L25.6019 6.75463C24.8829 4.95731 23.6553 3.40873 22.0695 2.29863C20.3971 1.12794 18.405 0.5 16.3636 0.5H13.5Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

        <BodyPart
          onClick={() => handleClick('Schienbein links')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(22px, 432px)'
          }}
        >
          <svg
            width={29}
            height={87}
            viewBox="0 0 29 87"
            fill={clickedBodyPart === 'Schienbein links' ? 'pink' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M8 0.5L5 2L2.5 5L1 9.5V14.5V21V27V32.5V35V39V43.5V47.5V51.5V56V60V64V68V72L2.5 77L5 80.5L8 84.5L12 86L16 81.5L17.5 77L19 72L20 65.5L21 60L23 53L24.5 45L26 39L27.5 35L28.5 27V21V14.5L27.5 7.5L26 3.5L24.5 2L22 0.5H17.5H14H12H8Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

        <BodyPart
          onClick={() => handleClick('Fuß rechts')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(-12px, 525px)'
          }}
        >
          <svg
            width={25}
            height={39}
            viewBox="0 0 25 39"
            fill={clickedBodyPart === 'Fuß rechts' ? 'orange' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M8 1L4.5 2L3.5 5.5V12V18V22L2.5 27V30L1.5 34.5L3.5 37.5L6 38.5H12.5H18L23.5 33.5L24 28.5L22.5 23L21 19.5L20 15V10L19 5.5L17 2L15 1H11H8Z"
              stroke="black"
            />
          </svg>
        </BodyPart>

        <BodyPart
          onClick={() => handleClick('Fuß links')}
          clickedBodyPart={clickedBodyPart}
          style={{
            position: 'absolute',
            transform: 'translate(18px, 525px)'
          }}
        >
          <svg
            width={29}
            height={38}
            viewBox="0 0 29 38"
            fill={clickedBodyPart === 'Fuß links' ? 'orange' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M9.5 1H5L1 7V9.5V15.5V21.5L4 28.5L7 33L9.5 37.5H15.5H22L28 35V31L24 25.5L19 19.5L15.5 13V7L13 3.5L9.5 1Z"
              stroke="black"
            />
          </svg>
        </BodyPart>
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
            d="M23 1H17.5H14H11L8.75 1.75L7.5 2.5L6.5 3.5L5.75 4.75L5 6L3 10L1.5 13.25L0.5 17.5V22V26.5V31V39.5V43.25V47L1 50L2 53L3.5 57L5 59.5L8 62L13.5 63.5H17.5H23H29L32 61L33 57V50.5V45.5V39.5V31V24.5V17.5V14.25V11L32.5 8.5L31 6L30 4.5L29 3L27.5 2L26 1H23Z"
            stroke="black"
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
