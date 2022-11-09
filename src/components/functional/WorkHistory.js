export const WorkHistory = (props) => {
    return ( 
        <div className={"w-10/12 my-8 "+props.className }>
            <h3 className="font-bold text-blue-900"> 
                { props.iconRight  && <img src={props.icon} className="h-6 inline mx-3" /> }
                { props.item } <span className="text-gray-600 font-light"> - { props.role }</span>
                { props.iconLeft  && <img src={props.icon} className="h-6 inline mx-3" /> }
            </h3> 
            <div className="text-gray-600 mb-3">{ props.years }</div>
            { props.content }
        </div>
    );
}
