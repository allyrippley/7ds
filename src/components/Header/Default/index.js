import React from 'react'
import { Link, IndexLink } from 'react-router'
import radium from 'radium'
import styles from './styles'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // const line = {
    //   height: '3px',
    //   width: '30px',
    //   backgroundColor: '#444'
    // }
    // window.console.log(this.props)
    return (
      <header id="header" style={styles.header}>
        <div style={styles.navSide}>
          <Link to="/" style={styles.logo}><img src={require('../../../img/bg-logo-sm.png')} height="30" width="auto" /></Link>
        </div>
        <nav style={styles.nav}>
          <IndexLink style={styles.link} to="/"><span key="1" style={styles.linkText}>Home</span></IndexLink>
          <Link style={styles.link} to="/portfolio"><span key="2" style={styles.linkText}>Portfolio</span></Link>
          <Link style={styles.link} to="/contact"><span key="3" style={styles.linkText}>Contact</span></Link>
        </nav>
    <div style={[styles.navSide, {justifyContent: 'flex-end'}]}>
    {/*          <div style={{ height: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'space-around', alignSelf: 'flex-end' }}>
            <div style={line}>

            </div>
            <div style={line}>

            </div>
            <div style={line}>

            </div>
          </div>*/}
        </div>
      </header>
    )
    }
  }

Header.propTypes = {
}

export default radium(Header)
