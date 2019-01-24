import Types from '../actions/sampleActions'

// initial state and schema
const initialState = {
  sample: 'sample'
}

const chat = (state = initialState, action) => {
  switch (action.type) {
    case Types.SAMPLE: {
      return {...state, sample: action.sample}
    }
    default:
      return state
  }
}

export default chat
