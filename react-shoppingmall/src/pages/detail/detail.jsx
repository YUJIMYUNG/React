import { useParams } from 'react-router-dom'
import './detail.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addToCart } from '../../store/cartslice';

export default function Detail(){
    //param으로 가져오면 String으로 들어옴 
    let { id } = useParams();
    id = parseInt(id);

    const products = useSelector((state) => state.products.products);
    const product = products.find(p => p.id === id);
    console.log(product);

    let [selectedColor, setSelectedColor] = useState('');
    let [checkedColor, setCheckedColor] = useState(false);
    let [selectedSize, setSelectedSize] = useState('');
    let [selectedCount, setSelectedCount] = useState(0);
    let [totalPrice, setTotalPrice] = useState(0);
    let dispatch = useDispatch();
    

    useEffect(() => {
        setTotalPrice(product.price * selectedCount);
    }, [selectedCount, product.price, selectedSize, selectedColor])

 
    let selectColor = (color) =>{
        if(selectedColor === color){
            setSelectedColor('');
            setSelectedSize('');
            setCheckedColor(false);
            setTotalPrice(0);
        }else{
            setSelectedColor(color);
            setCheckedColor(true);
        }
    }

    let selectSize = (size) =>{
        setSelectedSize(selectedSize === size? '' : size);
        setTotalPrice(0);
    }

    let handlerCountChange = (count) =>{
        setSelectedCount(count);
    }

    let handlerAddToCart = () => {
        //newProduct.color(selectedColor)
        //newProduct.size(selectedSize)
        //newProduct.count(selectedCount)
        const newProduct = {...product, color:selectedColor, size:selectedSize, count:selectedCount}
       console.log(newProduct)
       dispatch(addToCart(newProduct));
    }




    return(
        <div className='container'>
            <div className='detail-img'>
                <img src={product.src} alt={product.productName}/>
            </div>

            <div className='info'>
                <h2>{product.productName}</h2>
                <h3>{product.price.toLocaleString()}원</h3>

                <div className='color'>
                    {product.color.map((ele, idx)=>{
                        return(
                            <div key={idx}
                                className={`color-button ${selectedColor === ele ? 'selected' : ''}`}
                                onClick={()=>selectColor(ele)}
                                >
                                {ele}
                            </div>
                        )
                    })}
                </div>
                
                <div className='size'>
                    {product.size.map((ele, idx)=>{
                        return(
                            <div key={idx}
                                className={`size-btn ${selectedSize === ele ? 'selected' : ''} ${checkedColor ? '' : 'disabled'}`}
                                onClick={()=>{selectSize(ele)}}
                            >
                                {ele}
                                
                            </div>
                        )
                    })}
                </div>
                <div className='count'>
                    {/* 색상, 사이즈가 선택 됐을 때 활성화 되게 함 */}
                    {selectedColor && selectedSize &&(
                        <div className='select'>
                            <select onChange={(e) => {handlerCountChange(e.target.value)}}>
                                {[0, 1, 2, 3, 4, 5].map((ele, idx)=>{
                                    return(
                                        <option ket={ele} value={ele}>{ele}개</option>
                                    )
                                })}
                            </select>
                        </div>
                    )}
                </div>

                <div className='price'>
                {selectedColor && selectedSize &&(
                    <div>
                        <div>총 결제 금액 : </div>
                        <div>{totalPrice.toLocaleString()}원</div>
                    </div>
                )}
                </div>

                <div>
                    <button className="cartbtn" onClick={handlerAddToCart}>장바구니</button>
                </div>

            </div>
        </div>
    )


}