import React, {PropTypes} from 'react'
import { Link, IndexLink } from 'react-router'
import styles from './styles'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    window.console.log(this.props)
    return (
      <div style={styles.nav}>
        <IndexLink to="/">Home</IndexLink>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
      </div>
    )
    }
  }

Header.propTypes = {
}

export default Header
