import { MouseEvent } from "react";
function Form() {

    let items = ["item1", "item2", "item3"];
    const handleClick = (event: MouseEvent) => console.log(items);
    return (
        <>
            <h1>My Form</h1>
            <ul className="new">
                {items.length === 0 && <p>No items found</p>}
                {items.map((item, index) => (
                    <li key={item}
                        onClick={handleClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Form;