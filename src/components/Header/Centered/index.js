import React from 'react'
import { Link, IndexLink } from 'react-router'
import radium from 'radium'
import styles from './styles'
import Fa from 'react-fontawesome'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const line = {
      height: '3px',
      width: '30px',
      backgroundColor: '#444'
    }
    window.console.log(this.props)
    return (
      <header style={styles.header}>
        <div style={styles.navSide}>
          <Link to="/" style={styles.logo}>7 Design Studios</Link>
        </div>
        <nav style={styles.nav}>
          <IndexLink style={styles.link} to="/">Home</IndexLink>
          <Link style={styles.link} to="/portfolio">Portfolio</Link>
          <Link style={styles.link} to="/about">About</Link>
          <Link style={styles.link} to="/contact">Contact</Link>
        </nav>
        <div style={[styles.navSide, {justifyContent: 'flex-end'}]}>
          <div style={{ height: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'space-around', alignSelf: 'flex-end' }}>
            <div style={line}>

            </div>
            <div style={line}>

            </div>
            <div style={line}>

            </div>
          </div>
        </div>
      </header>
    )
    }
  }

Header.propTypes = {
}

export default radium(Header)
