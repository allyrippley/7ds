export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '10px',
    position: 'fixed',
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    zIndex: 100000,
    height: 105,
    top: 0,
    left: 0,
    right: 0
  },
  container: {
    display: 'flex',
  },
  headerItem: {
    flex: '.33',
    textAlign: 'center'
  },
  headerSeparator: {
    width: 1,
    backgroundColor: '#444',
    minHeight: '100%'
  },
  nav: {
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    marginTop: 'auto'
  },
  link: {
    flex: '.2',
    textAlign: 'center'

  },
  icon: {
    padding: 5
  }
}
