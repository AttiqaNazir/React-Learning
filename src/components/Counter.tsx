
type Props = {
    counter: number;
    handleOnClick: () => void
}

const Counter = (props: Props) => {
   
    return (
        <button onClick={props.handleOnClick}  >
            clicked {props.counter} times!
        </button>
    )
}

export default Counter