import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import './home.css'

export default function Home(){
    
    const products = useSelector((state) => state.products.products);
    console.log(products);
    const navigate = useNavigate();

    const clickHandler = (idx) =>{
        navigate(`/detail/${idx}`);
    }

    return(
        <div className="container">
            <div className="content">
                <div className="products-grid">
                    {products.map((ele, idx) => {
                        return(
                            <div key={idx} className="product-item" onClick={()=>clickHandler(ele.id)}>
                                <button className="img-btn">
                                    <img src={ele.src} alt={ele.productName} className="product-img"/>
                                    <h2 className="product-name">{ele.productName}</h2>
                                </button>
                                <p className="product-price">가격 : {ele.price.toLocaleString()} 원 </p>
                            </div>
                        )
                    })}
                </div>

             



            </div>

        </div>
    )
}