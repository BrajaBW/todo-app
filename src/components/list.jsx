'use client';
const List =({items})=>{
    
    return(
        <ul className="list-disc ml-4">
            {items.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};
export {List}