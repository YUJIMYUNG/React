import { useParams } from 'react-router-dom'
import './detail.css'
import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Detail(){
    //param으로 가져오면 String으로 들어옴 
    let { id } = useParams();
    id = parseInt(id);
    let [selectedColor, setSelectedColor] = useState('');
    let [checkedColor, setCheckedColor] = useState(false);
    let [selectedSize, setSelectedSize] = useState('');

    const products = useSelector((state) => state.products.products);
    const product = products.find(p => p.id === id);
    console.log(product);

    let selectColor = (color) =>{
        if(selectedColor === color){
            setSelectedColor('');
            setCheckedColor(false);
        }else{
            setSelectedColor(color);
            setCheckedColor(true);
        }
    }

    let selectSize = (size) =>{
        setSelectedSize(selectedSize === size? '' : size);
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


            </div>
        </div>
    )


}