import React from 'react'

import PropTypes from 'prop-types'

const GaleriaHome = (props) => {
  return (
    <>
      <div className={`galeria-home-container1 ${props.rootClassName} `}>
        <div className="galeria-home-div-galerry">
          <div className="galeria-home-element-galerry">
            <div className="galeria-home-blog-post-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&amp;ixlib=rb-1.2.1&amp;h=500"
                className="galeria-home-image"
              />
            </div>
            <div className="galeria-home-container2">
              <span className="galeria-home-text1">E-commerce</span>
              <span className="galeria-home-text2">NFTs marketplace</span>
              <div className="galeria-home-container3">
                <button className="galeria-home-button button">
                  {props.button35}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .galeria-home-container1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .galeria-home-div-galerry {
            width: 100%;
            cursor: grab;
            height: 442px;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
          }
          .galeria-home-element-galerry {
            color: var(--dl-color-gray-white);
            width: 278px;
            height: 433px;
            display: flex;
            max-width: 450px;
            align-self: center;
            box-sizing: border-box;
            transition: 0.3s;
            align-items: flex-start;
            margin-left: var(--dl-space-space-halfunit);
            padding-top: 0px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: 0px;
            border-radius: 10px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
            background-color: var(--dl-color-gray-black);
          }
          .galeria-home-element-galerry:hover {
            transform: scale(1.02);
          }
          .galeria-home-blog-post-card {
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            max-width: auto;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            transition: 0.3s;
            flex-direction: column;
          }
          .galeria-home-blog-post-card:hover {
            transform: scale(1.02);
          }
          .galeria-home-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-color: var(--dl-color-gray-500);
            border-width: 2px;
            border-radius: 10px;
          }
          .galeria-home-container2 {
            height: 242px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-self: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .galeria-home-text1 {
            color: var(--dl-color-gray-500);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
          }
          .galeria-home-text2 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .galeria-home-container3 {
            width: auto;
            height: 78px;
            display: flex;
            align-self: stretch;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: column;
            padding-bottom: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .galeria-home-button {
            color: var(--dl-color-gray-white);
            align-self: center;
            text-align: center;
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-primary-500);
            border-width: 2px;
            padding-left: var(--dl-space-space-unit);
            border-radius: 10px;
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .galeria-home-button:hover {
            transform: scale(1.02);
          }

          .galeria-homeroot-class-name1 {
            width: 100%;
            height: 100%;
          }
          @media (max-width: 991px) {
            .galeria-home-image {
              height: 350px;
            }
            .galeria-homeroot-class-name {
              align-self: stretch;
            }
          }
          @media (max-width: 767px) {
            .galeria-home-element-galerry {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

GaleriaHome.defaultProps = {
  rootClassName: '',
  button35: 'Escolher Template',
}

GaleriaHome.propTypes = {
  rootClassName: PropTypes.string,
  button35: PropTypes.string,
}

export default GaleriaHome
