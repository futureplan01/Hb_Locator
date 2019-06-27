import Button from './Button'
import {compose, withState, withHandlers, withProps} from 'recompose';

// Oh defaulted here... 
export default compose(
    withState('count','setCounter',0),
    withState('test', 'setTest',0),
    withHandlers({
        increment: ({setCounter}) => () => setCounter((x)=>{
            return x+1;
        }),
        withTest: ({setTest}) => () => setTest((test)=>{
            console.log(test);
        })
    }),
    withProps({
        name: 'JJ is the best',
    }),
)(Button);
 