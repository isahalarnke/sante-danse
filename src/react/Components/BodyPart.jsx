import React from 'react'
import PropTypes from 'prop-types'

// Generische Komponente für die Körperteteile // TODO: in WholeBody anpassen
const BodyPart = ({ onClick, style, children }) => (
  <div onClick={onClick} style={style}>
    {children}
  </div>
)

BodyPart.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default BodyPart
