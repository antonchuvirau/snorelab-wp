//import React from 'react';
const { createElement, render } = wp.element
import { LazyLoadImage } from 'react-lazy-load-image-component'
import squareLogo from '../images/icons/sl-logo-icon.png'
import squareLogo_2x from '../images/icons/sl-logo-icon@2x.png'
import phone_1 from '../images/phone1.png'
import phone_1_2x from '../images/phone1@2x.png'
import phone_2 from '../images/phone2.png'
import phone_2_2x from '../images/phone2@2x.png'
import star2 from '../images/star-2.svg'

export const HomeMain = () => {
  return (
    <section className="home-main">
      <div className="home-main__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="home-main__info">
                <LazyLoadImage
                  className="home-main__info-icon"
                  src={squareLogo}
                  srcSet={`${squareLogo} 1x, ${squareLogo_2x} 2x`}
                  alt=""
                />
                <h1 className="title title_fade title_size-l home-main__title">
                  SnoreLab: Record&nbsp;Your Snoring
                </h1>
                <p>
                  SnoreLab is the No.1 iOS and Android app for&nbsp;recording
                  and tracking snoring and discovering solutions.
                </p>
                <div className="home-main__info-apps">
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.snorelab.app"
                    className="link home-main__info-app google-play-btn"
                  >
                    <svg
                      width="28"
                      height="32"
                      viewBox="0 0 28 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_ii_658_1975)">
                        <path
                          d="M0.561464 0.49402C0.208579 0.877212 -5.18105e-07 1.47191 -5.18105e-07 2.24203V29.7572C-5.18105e-07 30.5286 0.208579 31.122 0.561464 31.5052L0.6512 31.5948L15.6749 16.1813V15.9996V15.818L0.6512 0.403198L0.561464 0.49402Z"
                          fill="url(#paint0_linear_658_1975)"
                        />
                        <path
                          d="M20.6819 21.3207L15.6748 16.1812V15.9996V15.818L20.6831 10.6797L20.7958 10.7456L26.7294 14.2043C28.4235 15.1922 28.4235 16.8083 26.7294 17.7974L20.7958 21.2561L20.6819 21.3207Z"
                          fill="url(#paint1_linear_658_1975)"
                        />
                        <g filter="url(#filter1_i_658_1975)">
                          <path
                            d="M20.7958 21.2548L15.6736 15.9996L0.561372 31.5052C1.1192 32.1124 2.04203 32.187 3.08128 31.5824L20.7958 21.2548Z"
                            fill="url(#paint2_linear_658_1975)"
                          />
                        </g>
                        <path
                          d="M20.7958 10.7444L3.08128 0.418122C2.04203 -0.18777 1.1192 -0.111878 0.561372 0.495258L15.6748 16.0009L20.7958 10.7444Z"
                          fill="url(#paint3_linear_658_1975)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_ii_658_1975"
                          x="0"
                          y="0"
                          width="28"
                          height="32"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="-0.159375" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_658_1975"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="0.159375" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="effect1_innerShadow_658_1975"
                            result="effect2_innerShadow_658_1975"
                          />
                        </filter>
                        <filter
                          id="filter1_i_658_1975"
                          x="0.561371"
                          y="15.9996"
                          width="20.2345"
                          height="16.0004"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="-0.159375" />
                          <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_658_1975"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_658_1975"
                          x1="14.3431"
                          y1="1.9509"
                          x2="-6.52904"
                          y2="22.2951"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00A0FF" />
                          <stop offset="0.0066" stopColor="#00A1FF" />
                          <stop offset="0.2601" stopColor="#00BEFF" />
                          <stop offset="0.5122" stopColor="#00D2FF" />
                          <stop offset="0.7604" stopColor="#00DFFF" />
                          <stop offset="1" stopColor="#00E3FF" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_658_1975"
                          x1="28.9346"
                          y1="15.9996"
                          x2="-0.40682"
                          y2="15.9996"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFE000" />
                          <stop offset="0.4087" stopColor="#FFBD00" />
                          <stop offset="0.7754" stopColor="#FFA500" />
                          <stop offset="1" stopColor="#FF9C00" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_658_1975"
                          x1="18.0141"
                          y1="18.8535"
                          x2="-10.2912"
                          y2="46.4429"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF3A44" />
                          <stop offset="1" stopColor="#C31162" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_658_1975"
                          x1="-3.24469"
                          y1="-8.66429"
                          x2="9.3944"
                          y2="3.65511"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#32A071" />
                          <stop offset="0.0685" stopColor="#2DA771" />
                          <stop offset="0.4762" stopColor="#15CF74" />
                          <stop offset="0.8009" stopColor="#06E775" />
                          <stop offset="1" stopColor="#00F076" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      width="107"
                      height="34"
                      viewBox="0 0 107 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.6562 4.21167C7.6562 5.25649 7.34319 6.08812 6.7159 6.70903C6.00405 7.44714 5.07511 7.8162 3.93412 7.8162C2.8411 7.8162 1.9109 7.44215 1.14729 6.69407C0.382432 5.94473 0 5.01711 0 3.90994C0 2.80152 0.382432 1.8739 1.14729 1.12581C1.9109 0.376478 2.8411 0.00243618 3.93412 0.00243618C4.47685 0.00243618 4.99559 0.107168 5.48783 0.315385C5.98133 0.524849 6.37638 0.802888 6.67172 1.15075L6.00657 1.80906C5.5055 1.21683 4.8151 0.921335 3.93286 0.921335C3.13518 0.921335 2.44604 1.19813 1.86419 1.75171C1.28234 2.30529 0.992049 3.0247 0.992049 3.90869C0.992049 4.79268 1.28234 5.51209 1.86419 6.06567C2.44604 6.61926 3.13518 6.89605 3.93286 6.89605C4.7785 6.89605 5.48404 6.61801 6.04822 6.06069C6.41425 5.69786 6.62629 5.19291 6.68308 4.54581H3.93286V3.64686H7.60193C7.63979 3.84261 7.6562 4.03088 7.6562 4.21167Z"
                        fill="white"
                      />
                      <path
                        d="M13.4748 1.08723H10.0266V3.45866H13.1366V4.35762H10.0266V6.72905H13.4748V7.64919H9.05352V0.168332H13.4748V1.08723Z"
                        fill="white"
                      />
                      <path
                        d="M17.5779 7.64919H16.6048V1.08723H14.4895V0.168332H19.6933V1.08723H17.5779V7.64919Z"
                        fill="white"
                      />
                      <path
                        d="M23.4582 7.64919V0.168332H24.4314V7.64919H23.4582Z"
                        fill="white"
                      />
                      <path
                        d="M28.7469 7.64919H27.7737V1.08723H25.6584V0.168332H30.8622V1.08723H28.7469V7.64919Z"
                        fill="white"
                      />
                      <path
                        d="M40.713 6.6829C39.9683 7.43847 39.0432 7.81625 37.9363 7.81625C36.8294 7.81625 35.9042 7.43847 35.1608 6.6829C34.4161 5.92734 34.0451 5.0022 34.0451 3.90875C34.0451 2.8153 34.4161 1.89016 35.1608 1.1346C35.9042 0.37903 36.8294 0 37.9363 0C39.0369 0 39.9608 0.380277 40.708 1.13958C41.4552 1.89889 41.8288 2.82153 41.8288 3.90875C41.8288 5.0022 41.4564 5.92734 40.713 6.6829ZM35.879 6.05576C36.4394 6.61682 37.1247 6.89611 37.9363 6.89611C38.7478 6.89611 39.4345 6.61558 39.9936 6.05576C40.554 5.49469 40.8354 4.77902 40.8354 3.90875C40.8354 3.03848 40.554 2.32281 39.9936 1.76174C39.4345 1.20068 38.7478 0.921393 37.9363 0.921393C37.1247 0.921393 36.4394 1.20193 35.879 1.76174C35.3198 2.32281 35.0384 3.03848 35.0384 3.90875C35.0384 4.77902 35.3198 5.49469 35.879 6.05576Z"
                        fill="white"
                      />
                      <path
                        d="M43.1944 7.64919V0.168332H44.3783L48.0588 5.9872H48.1004L48.0588 4.54588V0.168332H49.0319V7.64919H48.0158L44.165 1.54731H44.1234L44.165 2.98862V7.64919H43.1944Z"
                        fill="white"
                      />
                      <path
                        d="M34.1967 18.6318C31.2281 18.6318 28.8086 20.8624 28.8086 23.9345C28.8086 26.9879 31.2281 29.2372 34.1967 29.2372C37.1665 29.2372 39.5861 26.9879 39.5861 23.9345C39.5848 20.8624 37.1653 18.6318 34.1967 18.6318ZM34.1967 27.15C32.5698 27.15 31.1675 25.8247 31.1675 23.9358C31.1675 22.0269 32.571 20.7215 34.1967 20.7215C35.8236 20.7215 37.2258 22.0269 37.2258 23.9358C37.2258 25.8234 35.8236 27.15 34.1967 27.15ZM22.441 18.6318C19.4724 18.6318 17.0529 20.8624 17.0529 23.9345C17.0529 26.9879 19.4724 29.2372 22.441 29.2372C25.4109 29.2372 27.8304 26.9879 27.8304 23.9345C27.8304 20.8624 25.4109 18.6318 22.441 18.6318ZM22.441 27.15C20.8141 27.15 19.4119 25.8247 19.4119 23.9358C19.4119 22.0269 20.8154 20.7215 22.441 20.7215C24.0679 20.7215 25.4702 22.0269 25.4702 23.9358C25.4714 25.8234 24.0679 27.15 22.441 27.15ZM8.45893 22.5094H13.9089C13.7461 23.7749 13.3195 24.6988 12.6682 25.3409C11.8756 26.1239 10.6349 26.9879 8.45893 26.9879C5.10413 26.9879 2.48139 24.316 2.48139 21.002C2.48139 17.688 5.10413 15.0161 8.45893 15.0161C10.2689 15.0161 11.5903 15.7193 12.566 16.6232L14.1727 15.036C12.8096 13.7506 11.0009 12.7668 8.45893 12.7668C3.86344 12.7668 0 16.4624 0 21.002C0 25.5416 3.86344 29.2372 8.45893 29.2372C10.9391 29.2372 12.8108 28.433 14.2737 26.9268C15.7781 25.4406 16.2464 23.351 16.2464 21.6641C16.2464 21.1429 16.206 20.6604 16.124 20.2589H8.45893V22.5094ZM65.6444 22.0069C65.1976 20.8225 63.8345 18.6318 61.0489 18.6318C58.2836 18.6318 55.9852 20.7813 55.9852 23.9345C55.9852 26.9069 58.2634 29.2372 61.3127 29.2372C63.7726 29.2372 65.1963 27.751 65.787 26.887L63.9569 25.6813C63.3473 26.5653 62.513 27.1475 61.3127 27.1475C60.1137 27.1475 59.2592 26.6052 58.7102 25.5404L65.888 22.6079L65.6444 22.0069ZM58.3239 23.7749C58.2634 21.7252 59.9307 20.6816 61.131 20.6816C62.0662 20.6816 62.8588 21.1441 63.1239 21.8062L58.3239 23.7749ZM52.489 28.9168H54.8467V13.3304H52.489V28.9168ZM48.5435 19.8175C48.0147 19.1941 46.9974 18.6318 45.7176 18.6318C43.033 18.6318 40.5731 20.9621 40.5731 23.9557C40.5731 26.9281 43.033 29.2384 45.7176 29.2384C46.9987 29.2384 48.0147 28.6761 48.5435 28.034H48.6243V28.7971C48.6243 30.8256 47.5262 31.9104 45.758 31.9104C44.3141 31.9104 43.4192 30.8867 43.0532 30.0227L40.9997 30.8668C41.5891 32.2719 43.1542 34 45.758 34C48.5233 34 50.8621 32.3929 50.8621 28.4754V18.9547H48.6256V19.8175H48.5435ZM45.9208 27.15C44.2939 27.15 42.932 25.8035 42.932 23.9557C42.932 22.0867 44.2939 20.7215 45.9208 20.7215C47.5262 20.7215 48.7871 22.0867 48.7871 23.9557C48.7871 25.8035 47.5262 27.15 45.9208 27.15ZM76.6933 13.3304H71.0502V28.9168H73.4041V23.0119H76.692C79.3021 23.0119 81.8693 21.1454 81.8693 18.1717C81.8693 15.1981 79.3034 13.3304 76.6933 13.3304ZM76.7538 20.8424H73.4041V15.4998H76.7538C78.5145 15.4998 79.5142 16.9399 79.5142 18.1717C79.5142 19.3787 78.5145 20.8424 76.7538 20.8424ZM91.309 18.6044C89.6038 18.6044 87.8381 19.3462 87.1073 20.9908L89.1974 21.8523C89.6442 20.9908 90.4772 20.709 91.3493 20.709C92.5673 20.709 93.8055 21.4309 93.8257 22.7139V22.8747C93.3991 22.6341 92.4853 22.2738 91.3695 22.2738C89.1166 22.2738 86.822 23.4969 86.822 25.7823C86.822 27.8682 88.6698 29.211 90.7397 29.211C92.3225 29.211 93.1959 28.5091 93.7437 27.6862H93.8244V28.8893H96.0988V22.9134C96.1001 20.1479 94.0074 18.6044 91.309 18.6044ZM91.0237 27.1463C90.2538 27.1463 89.1772 26.7648 89.1772 25.8222C89.1772 24.619 90.5176 24.1577 91.675 24.1577C92.7087 24.1577 93.1971 24.3784 93.8257 24.6789C93.6427 26.1239 92.3843 27.1463 91.0237 27.1463ZM104.381 18.9448L101.681 25.7025H101.601L98.7986 18.9448H96.2616L100.463 28.3894L98.0678 33.6434H100.524L107 18.9448H104.381ZM83.1693 28.9168H85.5233V13.3304H83.1693V28.9168Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://itunes.apple.com/app/id529443604"
                    className="link home-main__info-app app-store-btn"
                  >
                    <svg
                      width="26"
                      height="32"
                      viewBox="0 0 26 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7159 17.0175C21.7476 14.5472 23.0725 12.2098 25.1742 10.916C23.8483 9.01984 21.6275 7.81763 19.317 7.74524C16.8526 7.48623 14.4635 9.22186 13.2077 9.22186C11.9276 9.22186 9.9941 7.77096 7.91204 7.81386C5.19816 7.90165 2.66815 9.44668 1.34779 11.8225C-1.49046 16.743 0.626619 23.9746 3.34542 27.952C4.7057 29.8996 6.29547 32.0752 8.37566 31.998C10.4112 31.9135 11.1715 30.6982 13.6286 30.6982C16.0629 30.6982 16.7762 31.998 18.8986 31.949C21.0829 31.9135 22.4591 29.9927 23.7716 28.0266C24.749 26.6389 25.5011 25.1051 26 23.4821C23.4331 22.395 21.7189 19.8083 21.7159 17.0175Z"
                        fill="white"
                      />
                      <path
                        d="M17.707 5.12951C18.898 3.6979 19.4847 1.85781 19.3426 0C17.5231 0.191361 15.8424 1.06213 14.6353 2.43882C13.455 3.78391 12.8407 5.59163 12.9569 7.37843C14.777 7.39719 16.5664 6.55002 17.707 5.12951Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      width="106"
                      height="34"
                      viewBox="0 0 106 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0.402125V8.57489H3.05302C5.57278 8.57489 7.0319 7.074 7.0319 4.46302C7.0319 1.89169 5.56106 0.402125 3.05302 0.402125H0ZM1.31262 1.55753H2.90652C4.65864 1.55753 5.69584 2.63363 5.69584 4.48001C5.69584 6.3547 4.67622 7.41948 2.90652 7.41948H1.31262V1.55753Z"
                        fill="white"
                      />
                      <path
                        d="M11.5007 8.69382C13.3641 8.69382 14.5068 7.48745 14.5068 5.48815C14.5068 3.50018 13.3583 2.28815 11.5007 2.28815C9.63722 2.28815 8.48868 3.50018 8.48868 5.48815C8.48868 7.48745 9.63136 8.69382 11.5007 8.69382ZM11.5007 7.61205C10.4049 7.61205 9.78958 6.83612 9.78958 5.48815C9.78958 4.15151 10.4049 3.36992 11.5007 3.36992C12.5906 3.36992 13.2118 4.15151 13.2118 5.48815C13.2118 6.83046 12.5906 7.61205 11.5007 7.61205Z"
                        fill="white"
                      />
                      <path
                        d="M24.2378 2.40708H22.9779L21.8411 7.11364H21.7415L20.4288 2.40708H19.2217L17.9091 7.11364H17.8153L16.6726 2.40708H15.3952L17.1532 8.57489H18.4482L19.7608 4.03258H19.8604L21.1789 8.57489H22.4857L24.2378 2.40708Z"
                        fill="white"
                      />
                      <path
                        d="M25.6887 8.57489H26.9486V4.96709C26.9486 4.00426 27.5404 3.4039 28.4722 3.4039C29.4039 3.4039 29.8493 3.89665 29.8493 4.8878V8.57489H31.1091V4.58196C31.1091 3.11505 30.3239 2.28815 28.8999 2.28815C27.9389 2.28815 27.306 2.7016 26.9955 3.38691H26.9017V2.40708H25.6887V8.57489Z"
                        fill="white"
                      />
                      <path
                        d="M33.0933 8.57489H34.3532V0H33.0933V8.57489Z"
                        fill="white"
                      />
                      <path
                        d="M39.0915 8.69382C40.955 8.69382 42.0977 7.48745 42.0977 5.48815C42.0977 3.50018 40.9491 2.28815 39.0915 2.28815C37.2281 2.28815 36.0795 3.50018 36.0795 5.48815C36.0795 7.48745 37.2222 8.69382 39.0915 8.69382ZM39.0915 7.61205C37.9957 7.61205 37.3804 6.83612 37.3804 5.48815C37.3804 4.15151 37.9957 3.36992 39.0915 3.36992C40.1815 3.36992 40.8026 4.15151 40.8026 5.48815C40.8026 6.83046 40.1815 7.61205 39.0915 7.61205Z"
                        fill="white"
                      />
                      <path
                        d="M45.8515 7.6517C45.1659 7.6517 44.6678 7.32887 44.6678 6.77382C44.6678 6.2301 45.0663 5.94125 45.9453 5.88461L47.504 5.78833V6.30373C47.504 7.06833 46.8008 7.6517 45.8515 7.6517ZM45.5292 8.67683C46.3672 8.67683 47.0645 8.32568 47.4454 7.70833H47.545V8.57489H48.758V4.36107C48.758 3.05841 47.8556 2.28815 46.2558 2.28815C44.8084 2.28815 43.7771 2.96779 43.6482 4.02691H44.8671C45.0077 3.5908 45.4941 3.3416 46.1973 3.3416C47.0587 3.3416 47.504 3.70974 47.504 4.36107V4.89346L45.7753 4.98975C44.2576 5.08036 43.4021 5.72037 43.4021 6.83046C43.4021 7.95754 44.2986 8.67683 45.5292 8.67683Z"
                        fill="white"
                      />
                      <path
                        d="M53.0334 8.67683C53.9124 8.67683 54.6566 8.27471 55.0375 7.60072H55.1371V8.57489H56.3443V0H55.0844V3.38691H54.9906C54.6449 2.70726 53.9066 2.30514 53.0334 2.30514C51.422 2.30514 50.3847 3.53983 50.3847 5.48815C50.3847 7.44214 51.4102 8.67683 53.0334 8.67683ZM53.3909 3.39824C54.4457 3.39824 55.1078 4.20815 55.1078 5.49382C55.1078 6.78515 54.4515 7.58373 53.3909 7.58373C52.3244 7.58373 51.6856 6.79647 51.6856 5.48815C51.6856 4.19116 52.3302 3.39824 53.3909 3.39824Z"
                        fill="white"
                      />
                      <path
                        d="M64.5142 8.69382C66.3776 8.69382 67.5203 7.48745 67.5203 5.48815C67.5203 3.50018 66.3718 2.28815 64.5142 2.28815C62.6507 2.28815 61.5022 3.50018 61.5022 5.48815C61.5022 7.48745 62.6449 8.69382 64.5142 8.69382ZM64.5142 7.61205C63.4184 7.61205 62.8031 6.83612 62.8031 5.48815C62.8031 4.15151 63.4184 3.36992 64.5142 3.36992C65.6041 3.36992 66.2253 4.15151 66.2253 5.48815C66.2253 6.83046 65.6041 7.61205 64.5142 7.61205Z"
                        fill="white"
                      />
                      <path
                        d="M69.1881 8.57489H70.4479V4.96709C70.4479 4.00426 71.0398 3.4039 71.9715 3.4039C72.9033 3.4039 73.3486 3.89665 73.3486 4.8878V8.57489H74.6085V4.58196C74.6085 3.11505 73.8232 2.28815 72.3993 2.28815C71.4383 2.28815 70.8054 2.7016 70.4948 3.38691H70.4011V2.40708H69.1881V8.57489Z"
                        fill="white"
                      />
                      <path
                        d="M80.411 0.872214V2.4354H79.3972V3.46054H80.411V6.94373C80.411 8.13311 80.9677 8.60887 82.3682 8.60887C82.6143 8.60887 82.8487 8.58055 83.0538 8.54657V7.53276C82.878 7.54975 82.7667 7.56108 82.5733 7.56108C81.9463 7.56108 81.6709 7.27789 81.6709 6.63223V3.46054H83.0538V2.4354H81.6709V0.872214H80.411Z"
                        fill="white"
                      />
                      <path
                        d="M84.745 8.57489H86.0049V4.97275C86.0049 4.03824 86.5791 3.40956 87.6105 3.40956C88.5012 3.40956 88.9758 3.90797 88.9758 4.89346V8.57489H90.2357V4.59328C90.2357 3.12638 89.3977 2.29381 88.0382 2.29381C87.0772 2.29381 86.4033 2.70726 86.0928 3.39824H85.9931V0H84.745V8.57489Z"
                        fill="white"
                      />
                      <path
                        d="M94.7807 3.32461C95.7124 3.32461 96.3218 3.95328 96.3511 4.92178H93.1282C93.1985 3.95895 93.8489 3.32461 94.7807 3.32461ZM96.3453 6.90975C96.1109 7.39117 95.5893 7.65736 94.8275 7.65736C93.8196 7.65736 93.1692 6.97205 93.1282 5.89028V5.82231H97.6344V5.39753C97.6344 3.46054 96.5621 2.28815 94.7865 2.28815C92.9875 2.28815 91.8448 3.53983 91.8448 5.51081C91.8448 7.48179 92.9641 8.69382 94.7924 8.69382C96.2515 8.69382 97.2711 8.01418 97.5583 6.90975H96.3453Z"
                        fill="white"
                      />
                      <path
                        d="M66.4629 14.4941V17.6205H64.4354V19.6708H66.4629V26.6372C66.4629 29.0159 67.5763 29.9674 70.3773 29.9674C70.8696 29.9674 71.3384 29.9108 71.7486 29.8428V27.8152C71.397 27.8492 71.1743 27.8718 70.7875 27.8718C69.5335 27.8718 68.9827 27.3055 68.9827 26.0141V19.6708H71.7486V17.6205H68.9827V14.4941H66.4629Z"
                        fill="white"
                      />
                      <path
                        d="M78.8841 30.1373C82.611 30.1373 84.8963 27.7246 84.8963 23.726C84.8963 19.7501 82.5992 17.326 78.8841 17.326C75.1572 17.326 72.8601 19.7501 72.8601 23.726C72.8601 27.7246 75.1454 30.1373 78.8841 30.1373ZM78.8841 27.9738C76.6925 27.9738 75.4619 26.4219 75.4619 23.726C75.4619 21.0527 76.6925 19.4895 78.8841 19.4895C81.0639 19.4895 82.3063 21.0527 82.3063 23.726C82.3063 26.4106 81.0639 27.9738 78.8841 27.9738Z"
                        fill="white"
                      />
                      <path
                        d="M86.8517 29.8995H89.3714V22.6159C89.3714 20.8828 90.7192 19.7161 92.6295 19.7161C93.0749 19.7161 93.825 19.7954 94.0359 19.8633V17.4619C93.7664 17.3939 93.2859 17.36 92.9108 17.36C91.2466 17.36 89.8285 18.2435 89.4652 19.4555H89.2777V17.5639H86.8517V29.8995Z"
                        fill="white"
                      />
                      <path
                        d="M100.292 19.3989C102.156 19.3989 103.375 20.6563 103.433 22.5932H96.9874C97.1281 20.6676 98.429 19.3989 100.292 19.3989ZM103.422 26.5692C102.953 27.532 101.91 28.0644 100.386 28.0644C98.3704 28.0644 97.0695 26.6938 96.9874 24.5302V24.3943H106V23.5448C106 19.6708 103.855 17.326 100.304 17.326C96.7062 17.326 94.4208 19.8293 94.4208 23.7713C94.4208 27.7133 96.6593 30.1373 100.316 30.1373C103.234 30.1373 105.273 28.778 105.848 26.5692H103.422Z"
                        fill="white"
                      />
                      <path
                        d="M49.9387 25.3441C50.133 28.3732 52.7447 30.3104 56.6318 30.3104C60.7862 30.3104 63.3857 28.2793 63.3857 25.0389C63.3857 22.4912 61.9037 21.0823 58.3081 20.2722L56.3767 19.8143C54.093 19.2977 53.1698 18.605 53.1698 17.3957C53.1698 15.8695 54.6032 14.8715 56.7533 14.8715C58.794 14.8715 60.2031 15.846 60.4582 17.4075H63.1063C62.9484 14.5545 60.3489 12.5469 56.7897 12.5469C52.9633 12.5469 50.4124 14.5545 50.4124 17.5719C50.4124 20.0609 51.8579 21.5402 55.0284 22.2563L57.2878 22.7847C59.6079 23.313 60.6283 24.0879 60.6283 25.3793C60.6283 26.8821 59.0248 27.974 56.8383 27.974C54.4939 27.974 52.8662 26.9526 52.6354 25.3441H49.9387Z"
                        fill="white"
                      />
                      <path
                        d="M23.8365 17.36C22.102 17.36 20.6018 18.1982 19.8283 19.6028H19.6408V17.5639H17.2148V34H19.7345V28.0304H19.9338C20.6018 29.3331 22.0434 30.1034 23.8599 30.1034C27.0829 30.1034 29.1339 27.6453 29.1339 23.726C29.1339 19.8067 27.0829 17.36 23.8365 17.36ZM23.1216 27.9172C21.012 27.9172 19.6877 26.3087 19.6877 23.7373C19.6877 21.1547 21.012 19.5462 23.1333 19.5462C25.2663 19.5462 26.5438 21.1207 26.5438 23.726C26.5438 26.3426 25.2663 27.9172 23.1216 27.9172Z"
                        fill="white"
                      />
                      <path
                        d="M37.9509 17.36C36.2164 17.36 34.7162 18.1982 33.9427 19.6028H33.7552V17.5639H31.3292V34H33.849V28.0304H34.0482C34.7162 29.3331 36.1578 30.1034 37.9744 30.1034C41.1973 30.1034 43.2483 27.6453 43.2483 23.726C43.2483 19.8067 41.1973 17.36 37.9509 17.36ZM37.236 27.9172C35.1264 27.9172 33.8021 26.3087 33.8021 23.7373C33.8021 21.1547 35.1264 19.5462 37.2477 19.5462C39.3807 19.5462 40.6582 21.1207 40.6582 23.726C40.6582 26.3426 39.3807 27.9172 37.236 27.9172Z"
                        fill="white"
                      />
                      <path
                        d="M12.6939 29.8995H15.5849L9.25622 12.9578H6.32872L0 29.8995H2.79387L4.40946 25.4028H11.0905L12.6939 29.8995ZM7.65278 16.0338H7.85928L10.3981 23.1956H5.10185L7.65278 16.0338Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="home-main__phones">
                <LazyLoadImage
                  src={phone_1}
                  srcSet={`${phone_1} 1x, ${phone_1_2x} 2x`}
                  alt=""
                />
                <LazyLoadImage
                  src={phone_2}
                  srcSet={`${phone_2} 1x, ${phone_2_2x} 2x`}
                  alt=""
                />
                <LazyLoadImage className="bg-light-4" alt="" src={star2} />
                {/*<svg
									width="1371"
									height="1309"
									viewBox="0 0 1371 1309"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g filter="url(#filter0_f_96_961)">
										<path
											d="M883.561 32.8094L986.333 349.108L1318.91 349.108L1049.85 544.591L1152.62 860.89L883.561 665.406L614.501 860.89L717.273 544.591L448.213 349.108L780.789 349.108L883.561 32.8094Z"
											fill="url(#paint0_linear_96_961)"
										/>
									</g>
									<defs>
										<filter
											id="filter0_f_96_961"
											x="0.213348"
											y="-415.191"
											width="1766.7"
											height="1724.08"
											filterUnits="userSpaceOnUse"
											colorInterpolationFilters="sRGB"
										>
											<feFlood floodOpacity="0" result="BackgroundImageFix" />
											<feBlend
												mode="normal"
												in="SourceGraphic"
												in2="BackgroundImageFix"
												result="shape"
											/>
										</filter>
										<linearGradient
											id="paint0_linear_96_961"
											x1="897.002"
											y1="450.383"
											x2="523.568"
											y2="289.443"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#1F12D3" />
											<stop offset="1" stopColor="#3FAFDE" />
										</linearGradient>
									</defs>
								</svg>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
