export default function Button1({ count, handleClick, handleChange }) {
    return (
        <>
            <div>
                <h1>{`You have clicked this button ${count} times!`}</h1>
            </div>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={handleChange}>Show other button</button>
        </>
    );
}
