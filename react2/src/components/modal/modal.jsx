export default function Modal(props){
    console.log(props);
    return(
        <div className="modal">
            <h4>{props.title[props.curIdx]}</h4>
            <p>{props.dateTime[props.curIdx]}</p>
        </div>
    ) 
}