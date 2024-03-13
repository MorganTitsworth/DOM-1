export default function Button2({ count, handleClick, handleChange }) {
    return (
        <>
            <div>
                <h1>{`You have clicked this button ${count} times!`}</h1>
            </div>
            <button onClick={handleClick}>Button</button>
            <button onClick={handleChange}>Show other button</button>
        </>
    );
}
