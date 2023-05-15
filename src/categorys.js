import React from "react"

const Categories = ({filterItem , cate}) => {
    return(
       <div className="btn-container">

            {cate.map((categories , index ) => {
                return(
                <button type="button" key={index} className="filter-btn" onClick={()=> filterItem(categories)}>
                    {categories}
                </button>
                )
            })}

           
       </div>
    )
}

export default Categories ;