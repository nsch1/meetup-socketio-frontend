import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class TopicsList extends PureComponent {
  static propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
      topic: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })).isRequired
  }

  renderTopic = ({ topic, count }) => {
    return <li>{topic} ({count})</li>
  }

  render() {
    return (
      <div className="top-topics">
      <h2>Topics Top 10</h2>
        <ol>
          {this.props.topics.map(this.renderTopic)}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = ({ topics }) => ({ topics })

export default connect(mapStateToProps)(TopicsList)