import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class RsvpItem extends PureComponent {
  static propTypes = {
    rsvp: PropTypes.object.isRequired
  }

  render() {
    const { member, event } = this.props.rsvp
    return (
      <div className="RsvpItem row">
          {
            member.photo &&
            <div className="thumbnail col-sm-2">
              <img src={member.photo} alt="Rsvp thumbnail" />
            </div>
          }
        <div className="col rsvptext">
          <h3>{event.event_name}</h3>
          <p>{member.member_name} is joining this event!</p>
        </div>
      </div>
    )
  }
}

export default RsvpItem