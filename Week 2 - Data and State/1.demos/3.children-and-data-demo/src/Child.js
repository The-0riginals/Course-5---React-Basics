function Child(props) {
    return (
        <h1>this is message from child</h1>,
        <h1>{props.message}</h1>
    );
}

export default Child;