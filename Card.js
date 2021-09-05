const Card =(props)=>{

   return (
        <div className="ui card">
            <div className ="content"> {props.children}</div>
        
        <div className ="extra content">
            <div className="ui two buttons">
                <div className="ui basic green button"><h3>Yes</h3></div>
                <div className="ui basic red button"><h3>No</h3></div>
            </div>
        </div>
        </div>

    )
};

export default Card;