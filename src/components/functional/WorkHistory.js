export const WorkHistory = (props) => {
    return ( 
        <div className={"w-full md:w-10/12 my-14 py-6 px-4 rounded-lg relative shadow-2xl "+props.className }>
            <h3 className="font-bold text-blue-900"> 
                { props.iconRight  && <img src={props.icon} className="h-6 inline mx-3" /> }
                { props.item } <span className="text-gray-800 font-light"> - { props.role }</span>
                { props.iconLeft  && <img src={props.icon} className="h-6 inline mx-3" /> }
            </h3> 
            <div className="text-gray-800 mb-3">{ props.years }</div>
            { props.content }
        </div>
    );
}
