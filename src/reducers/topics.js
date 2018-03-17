import {UPDATE_TOPICS} from '../actions/types'

const testTopics = [
  { topic: "Test", count: 4 },
  { topic: "Tester", count: 2 }
]

export default (state = testTopics, { type, payload }) => {
  switch(type) {
    case UPDATE_TOPICS:
      return payload
    default:
      return state
  }
}