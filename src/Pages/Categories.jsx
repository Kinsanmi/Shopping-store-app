
import { Link } from "react-router-dom";
// category imported
import { category } from "../Data/Products/Product";

// sales imported
import { Sales } from "../Data/Products/Product";

// Naira currency icon
/* import { FaNairaSign } from "react-icons/fa6"; */

import '../Styles/Category.css';


export const Categories = () => {
  return (
    <>
    {/* category section */}
      <section>
        <div className="category">
            <div className="cat-type">  
                <div className="cat-detail">
                    {category.map((categories, index)=>{
                        return (
                            <Link to={categories.link} className="cat-image" key={index}>
                                <img src={categories.image} alt="Categories" />
                                <p>{categories.text}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>

        {/* sales section */}
      <section>
        <div className="sales">
            <div className="sale-type"> 
            <h3 className="sale-text">Top selling items</h3> 
                <div className="sale-detail">
                    {Sales.map((sale, index)=>{
                        return (
                            <Link to={sale.link} className="sale-image" key={index}>
                                <img src={sale.image} alt={sale.alt} />
                                <div className="name">
                                  {sale.text}
                                </div>
                                <div className="price">
                                  {sale.price}
                                </div>
                                <div className="dst">
                                  {sale.discount}
                                </div>
                                <div className="percent">
                                  {sale.percentage}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
      </section>
    </>
  )
}


