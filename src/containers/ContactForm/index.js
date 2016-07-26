import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/heroActions'

const Contact = (props) => {
  window.console.log('MainContactProps: ', props)
  const formStyle = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    margin: '0 auto',
    width: '75%',
    paddingRight: '10vmax',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    height: '100%',
    fontSize: '4vmin'
  }
  return (
    <div style={{width: '100%', height: '100%', paddingTop: 55}}>
      <div style={{minHeight: '70%', height: '85%', maxHeight: '90%', width: '100%', paddingTop: '4vmin'}}>
        <form style={formStyle} name="myform" action="process.php" method="POST">
          <input type="hidden" name="check_submit" value="1" />
          <div style={{alignSelf: 'stretch', height: '5vmin', minHeight: '5vmin', fontSize: '4vmin'}}>Name: <input type="text" name="Name" style={{height: '4vmin', margin: 5, fontSize: '3vmin', verticalAlign: 'top'}}/></div>
          <div style={{alignSelf: 'stretch', minHeight: '5vmin', fontSize: '4vmin'}}>
            Budget:
            <select name="Budget" style={{fontSize: '2.5vmin', margin: 5, lineHeight: '4vmin', verticalAlign: 'middle'}}>
              <option value="Undefined" selected="selected">Please select...</option>
              <option value="<1000">Less than $1,000</option>
              <option value="1-3000">$1,000-$3,000</option>
              <option value="3-5000">$3,000-$5,000</option>
              <option value=">10000">Greater than $10,000</option>
            </select>
          </div>
          <div style={{display: 'flex', alignItems: 'center', alignSelf: 'stretch', minHeight: '5vmin'}}>
              <div style={{fontSize: '4vmin', marginRight: 5}}>Choose one:</div>
              <div style={{fontSize: '2.5vmin', margin: 3, lineHeight: '5vmin', verticalAlign: 'middle'}}><input type="radio" name="Country" value="USA" style={{verticalAlign: 'middle'}} />USA</div>
              <div style={{fontSize: '2.5vmin', margin: 3}}><input type="radio" name="Country" value="Canada" style={{verticalAlign: 'middle'}} />Canada</div>
              <div style={{fontSize: '2.5vmin', margin: 3}}><input type="radio" name="Country" value="Other" style={{verticalAlign: 'middle'}} /> Other</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch', minHeight: '18.8vmin', fontSize: '4vmin'}}>
            What are you looking for:
            <div style={{display: 'flex', alignItems: 'center', fontSize: '2.5vmin', minHeight: '3vmin'}}><input type="checkbox" name="ServicesRequested[]" value="Design" style={{verticalAlign: 'middle'}} checked="checked" /> Design</div>
              <div style={{display: 'flex', alignItems: 'center', fontSize: '2.5vmin', minHeight: '3vmin'}}><input type="checkbox" name="ServicesRequested[]" value="Development" style={{verticalAlign: 'middle'}} /> Development</div>
              <div style={{display: 'flex', alignItems: 'center', fontSize: '2.5vmin', minHeight: '3vmin'}}><input type="checkbox" name="ServicesRequested[]" value="Consulting" style={{verticalAlign: 'middle'}} /> Consulting</div>
              <div style={{display: 'flex', alignItems: 'center', fontSize: '2.5vmin', minHeight: '3vmin'}}><input type="checkbox" name="ServicesRequested[]" value="Debugging/Testing/QA" style={{verticalAlign: 'middle'}} /> Debugging/Testing/QA</div>
          </div>
          <div style={{alignSelf: 'stretch', display: 'flex', flexDirection: 'column'}}>
            <div style={{fontSize: '4vmin'}}>Additional Info:</div>
            <textarea placeholder="Enter your comments here" name="Comments" rows="10" cols="80" style={{maxWidth: '100%', fontSize: '2.5vmin'}}></textarea><br />
            <div style={{alignSelf: 'flex-end'}}>
              <input style={{padding: 13, margin: 10, borderRadius: 5, backgroundColor: 'darkred', border: 'none', fontSize: '4vmin', color: 'white'}} type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}


function mapStateToProps(state) {
  window.console.log('MainContactState: ', state)
  return {
  //  fuelSavings: state.fuelSavings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)
