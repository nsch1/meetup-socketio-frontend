import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'
import {connect} from 'react-redux'

class RsvpList extends PureComponent {
  static propTypes = {
    rsvps: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ).isRequired
  }

  renderRsvp = (rsvp) => {
    return <RsvpItem rsvp={rsvp} />
  }

  render() {
    return (
      <div className="RsvpList container">
        <h2>RSVP List</h2>
        {this.props.rsvps.map(this.renderRsvp)}
      </div>
    )
  }
}

const mapStateToProps = ({ rsvps }) => ({ rsvps })

export default connect(mapStateToProps)(RsvpList)