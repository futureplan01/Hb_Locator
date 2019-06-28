import Button from './Button'
import {compose, withState, withHandlers,withStateHandlers, withProps} from 'recompose';

// Oh defaulted here... 
export default compose(
    withState('count','setCounter',0),
    withState('test', 'setTest',0),
    withHandlers({
        increment: ({setCounter}) => () => setCounter((x)=>{
            return x+1;
        }),
    }),
    withStateHandlers(
        ({ initialValue = 0 }) => ({
            test: initialValue,
          }),{
            updateValue: ({test}) => (value)=> ({
                test: value,
            })
          }
    ),
    withProps({
        name: 'JJ is the best',
    }),
)(Button);
 