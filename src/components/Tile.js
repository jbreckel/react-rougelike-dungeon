import React, { PropTypes } from 'react'
import { compose, mapProps } from 'recompose'

const Tile = ({ style, row, col }) => (
  <div style={style}>
    { row }{' '}/{' '}{ col }
  </div>
)

Tile.propTypes = {
  style: PropTypes.shape({}),
}

export const types = {
  wall: {
    color: 'darkgrey',
  },
  floor: {
    color: 'beige',
  },
  enemy: {
    color: 'red',
  },
  portal: {
    color: 'purple',
  },
  player: {
    color: 'blue',
  },
  health: {
    color: 'green',
  },
}

const size = 30

const calculateStyle = mapProps(({ type, ...rest }) => ({
  ...rest,
  style: {
    height: size,
    width: size,
    backgroundColor: types[type].color,
  },
}))

export default compose(
  calculateStyle,
)(Tile)
