import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../../actions/heroActions'

const Contact = (props) => {
  window.console.log('MainContactProps: ', props)
  return (
    <div style={{width: '100%', paddingTop: 55}}>
      <div>
        <form name="myform" action="process.php" method="POST">
            <input type="hidden" name="check_submit" value="1" />
            Name: <input type="text" name="Name" /><br />
          Password: <input type="password" name="Password" maxLength="10" /><br />
            Select something from the list: <select name="Seasons">
              <option value="Spring" selected="selected">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Autumn">Autumn</option>
              <option value="Winter">Winter</option>
            </select><br /><br />
            Choose one:
              <input type="radio" name="Country" value="USA" /> USA
              <input type="radio" name="Country" value="Canada" /> Canada
              <input type="radio" name="Country" value="Other" /> Other
            <br />
            Choose the colors:
              <input type="checkbox" name="Colors[]" value="green" checked="checked" /> Green
              <input type="checkbox" name="Colors[]" value="yellow" /> Yellow
              <input type="checkbox" name="Colors[]" value="red" /> Red
              <input type="checkbox" name="Colors[]" value="gray" /> Gray
            <br /><br />
            Comments:<br />
            <textarea name="Comments" rows="10" cols="60">Enter your comments here</textarea><br />
            <input type="submit" />
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
