import React from 'react'
import { Link, IndexLink } from 'react-router'
import styles from './styles'
import Fa from 'react-fontawesome'
import Login from '../common/Login'
import Search from '../common/Search'
class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    window.console.log(this.props)
    return (
      <div style={styles.root}>
        <div style={styles.container}>
          <div style={styles.headerItem}>
            <Login />
          </div>
          <div style={styles.headerSeparator}>
          </div>
          <div style={styles.headerItem}>
test
          </div>
          <div style={styles.headerSeparator}>
          </div>
          <div style={styles.headerItem}>
            <Search />
          </div>
        </div>
        <div style={styles.nav}>
          <IndexLink style={styles.link} to="/"><Fa style={styles.icon} name="home" />Home</IndexLink>
          <Link style={styles.link} to="/portfolio"><Fa style={styles.icon} name="briefcase" />Portfolio</Link>
          <Link style={styles.link} to="/work"><Fa style={styles.icon} name="coffee" />Work</Link>
          <Link style={styles.link} to="/about"><Fa style={styles.icon} name="info-circle" />About</Link>
          <Link style={styles.link} to="/contact"><Fa style={styles.icon} name="pencil-square-o" />Contact</Link>
        </div>
      </div>
    )
    }
  }

Header.propTypes = {
}

export default Header
