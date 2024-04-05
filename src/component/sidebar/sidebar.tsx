import "./sidebar.css"
export const Sidebar=()=>{


    return(
        <>
         <div className="sidebar">
    <div className="search">
        <b>Search</b>
        <input className="search-product" type="text" placeholder="Please enter product name..."/>
    </div>
    <div className="size">
        <b>Size</b>
        <ul className="list-size">
            <li>XS</li>
            <li>S</li>
            <li>M</li>
            <li>ML</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
        </ul>

    </div>
    <div className="price-search">
        <b>Price</b>
        <select className="select-price">
            <option value="" disabled selected hidden>Please select price</option>
            <option>0-10</option>
            <option>11-25</option>
            <option>over 25</option>
        </select>
    </div>
    <div className="freeship-check">
    <b>Free ship</b>
    <input type="checkbox" className="check-freeship"/>
    
    </div>

    </div>
        
        
        </>
    )
}