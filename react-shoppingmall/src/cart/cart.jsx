import { useDispatch, useSelector } from 'react-redux';
import styles from './cart.module.css';
import { getAllByPlaceholderText } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { decreaseCount, delToCart, increaseCount } from '../store/cartslice';

export default function Cart(){

    const cart = useSelector((state) => state.cart.cartItems) || [];
    const [allChecked, setAllChecked] = useState(true);
    const [checkedItems, setCheckdItems] = useState([]);
    const dispatch = useDispatch();

    //장바구니가 바뀔 때마다 컴포넌트를 불러옴
    useEffect(()=>{

    },[cart])
    
    const hadleAllCheckChange = () => {

    }

    const handleItemCheckedChange = (e, idx) =>{

    }

    const handleCountChange = (e, idx) => {


    }

    const productPrice = (item) => {
        let tempPrice = item.price * item.count;
        return fommat(tempPrice);
    }

    const fommat = (price) =>{
        return new Intl.NumberFormat('ko-KR', {style:'currency', currency:'KRW'}).format(price).replace('₩', '') + '원';
    }

    const handleRemove = (idx) =>{

    }

    return(
        
        <div className={styles.contaimer}>
            <div className={styles.inner}>
                <div className={styles.title}>
                    <p className={styles.titleContent}>장바구니</p>
                </div>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <colgroup>
                            <col style={{width:"27px"}} />
                            <col style={{width:"98px"}} />
                            <col style={{width:"auto"}} />
                            <col style={{width:"98px"}} />
                            <col style={{width:"120px"}} />
                            <col style={{width:"98px"}} />
                            <col style={{width:"120px"}} />
                        </colgroup>

                        <thead className={styles.thead}>
                            <tr>
                                <th>
                                    <input type='checkbox' checked={allChecked} onChange={hadleAllCheckChange} />
                                </th>
                                <th>이미지</th>
                                <th>상품정보</th>
                                <th>수량</th>
                                <th>구매 금액</th>
                                <th>배송비</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                            {
                                cart.map((item, idx) => (
                                    <tr className={styles.items} key={idx}>
                                        <td>
                                            <input type="checkbox" checked={checkedItems.includes(idx)} onChange={(e)=> handleItemCheckedChange(e, idx)} />
                                        </td>
                                        <td>
                                            <img src={item.src} alt={item.productName} style={{width:"50px", height:"auto"}} />
                                        </td>
                                        <td>
                                            <p className={styles.productName}>{item.productName}</p>
                                            <p className={styles.selectOption}>{item.color}, {item.size}</p>
                                        </td>
                                        <td className={styles.count}>
                                            <input type="text"
                                                    value={item.count}
                                                    size={1}
                                                    className={styles.countInput}
                                                    onChange={(e) => handleCountChange(e, idx)}
                                            />
                                            <div className={styles.countBtnContainer}>
                                                <img  className={styles.countBtn} src="/img/btn_count_up.gif" onClick={()=>{dispatch(increaseCount(item))}}/>
                                                <img  className={styles.countBtn} src="/img/btn_count_down.gif" onClick={()=>{dispatch(decreaseCount(item))}}/>
                                            </div>
                                        </td>
                                        <td className={styles.price}>{productPrice(item)}</td>
                                        <td>무료</td>
                                        <td>
                                            <input type='button' onClick={()=> dispatch(delToCart(item.id))} value={"삭제"} />
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}