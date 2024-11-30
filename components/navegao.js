import React from 'react'

import PropTypes from 'prop-types'

const Navegao = (props) => {
  return (
    <>
      <nav className={`navegao-nav ${props.rootClassName} `}>
        <span className="navegao-text1">{props.text1}</span>
        <a href="#nav-galeria" className="navegao-link">
          {props.text2}
        </a>
        <span className="navegao-text2">{props.text4}</span>
        <span className="navegao-text3">{props.text41}</span>
      </nav>
      <style jsx>
        {`
          .navegao-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navegao-text1 {
            color: #ffffff;
          }
          .navegao-link {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .navegao-text2 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }
          .navegao-text3 {
            color: #ffffff;
            margin-left: var(--dl-space-space-twounits);
          }

          .navegaoroot-class-name8 {
            flex: 0 0 auto;
            align-self: center;
          }

          .navegaoroot-class-name17 {
            flex: 0 0 auto;
            align-self: center;
          }
          @media (max-width: 767px) {
            .navegao-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navegao-text1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navegao-link {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navegao-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navegao-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navegao.defaultProps = {
  text2: 'Templates',
  rootClassName: '',
  text41: 'Contato',
  text1: 'Home',
  text4: 'Orçamento',
}

Navegao.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text41: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
}

export default Navegao
