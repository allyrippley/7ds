import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../../actions/heroActions'
import Fa from 'react-fontawesome'
import data from '../dataFile'
import FullPageImage from '../../../components/blocks/FullPageImage'
class PortfolioPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullScreenImageVisible: false
    }
  }
  showFullScreenImage() {
  }
  hideFullScreenImage() {
  }
  render() {
    window.console.log('PortfolioPageProps: ', this.props)
    const index = this.props.params.id - 1
    const itemLength = data.length
    const item = data[index]
    window.console.log('item: ', item, '\nitem length: ', itemLength)

    const container = {
      position: 'absolute',
      zIndex: -1,
      top: '0px',
      left: '0px',
      bottom: '0px',
      right: '0px',
      overflow: 'hidden',
      WebkitBackgroundSize: 'cover',
      backgroundImage:  `url('${item.src}')`,
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    const tag = {
      backgroundColor: 'orange',
      padding: 3,
      borderRadius: 5,
      margin: 5,
      fontSize: '.9em'
    }
    return (
      <div style={container}>
        {this.state.fullScreenImageVisible && <FullPageImage hideHandler={this.hideFullScreenImage} src={item.src} />}
        <div style={{width: '80%', height: '80%', background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 33%, rgba(255,255,255,1) 60%)', borderRadius: '15px'}}>
          <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-around', height: '100%', width: '100%'}}>
            {item.id > 1 &&
              <div style={{flex: 0.1, fontSize: '3em', margin: 15, textAlign: 'left'}}>
                <Link to={`/portfolio/page/${Number.parseInt(this.props.params.id)-1}`}><Fa name="angle-left" size="3x" /></Link>
              </div>
            }
            <img onClick={this.showFullScreenImage} style={{flex: 0.4, height: 'auto', maxHeight: '80%', width: 'auto', maxWidth: '50%', margin: 20}} src={item.src} />
            <div style={{flex: 0.4, display: 'flex', height: '50%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
              <div style={{fontSize: '1.2em', fontWeight: 'bold'}}>{item.title}</div>
              <div>{item.description}</div>
              <div style={{margin: '20px 0'}}>
                {item.tags.map((r, i) => (<span key={i} style={tag}>{r}</span>))}
              </div>
            </div>
            {item.id < itemLength &&
              <div style={{flex: 0.1, fontSize: '3em', margin: 15, textAlign: 'right'}}>
                <Link to={`/portfolio/page/${Number.parseInt(this.props.params.id)+1}`}><Fa name="angle-right" size="3x" /></Link>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  window.console.log('MainPortfolioState: ', state)
  return {
    fullPageHandler: state.fullPageHandler
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
PortfolioPage.propTypes = {
  params: PropTypes.object
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PortfolioPage)
