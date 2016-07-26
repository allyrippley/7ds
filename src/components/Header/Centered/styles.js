export default {
  root: {
    height: '100%'
  },
  header: {
    alignSelf: 'stretch',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100000,
    paddingLeft: 10,
    paddingRight: 10,
    height: 55,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255,255,255,.7)'
  },
  nav: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: '0.6',
    flexShrink: '0.4',
    alignItems: 'center',
    fontSize: '3vmin',
    color: '#222',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  navSide: {
    display: 'flex',
    flex: '0.2',
    flexGrow: '0.3',
    flexWrap: 'nowrap'
  },
  logo: {
    color: 'rgb(158, 3, 3)',
    fontWeight: 'bold',
    fontSize: '3vmin'
  },
  logoIcon: {
    padding: 10
  },
  link: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: 10
  },
  icon: {
    display: 'none'
  }
}
