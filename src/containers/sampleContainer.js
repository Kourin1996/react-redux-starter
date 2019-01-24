import * as reactRedux from 'react-redux'
import * as sampleActions from '../actions/sampleActions'
import Sample from '../components/Sample'

const mapStateToProps = (state, ownProps) => {
    return {
        sample: state.sample.sample
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        sample: () => {
            dispatch(sampleActions.sample());
        }
    }
}

const SampleContainer = reactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(Sample)

export default SampleContainer
