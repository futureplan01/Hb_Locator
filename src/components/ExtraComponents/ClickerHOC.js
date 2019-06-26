import Button from './Button'
import {compose, withState, withHandlers, withProps} from 'recompose';

// Oh defaulted here... 
export default compose(
    withState('count','setCounter',0),
    withHandlers({
        increment: ({setCounter}) => () => setCounter(x => x+1)
    }),
    withProps({
        name: 'JJ is the best',
    }),
)(Button);
