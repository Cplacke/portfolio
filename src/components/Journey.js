import React, { Component } from "react";
import { WorkHistory, WaveBorder } from "./functional"
import workHistory from "../content/work-history"

class Journey extends Component {
    render() { 
        return (
            <div className="relative">
                <div className="text-left m-auto mb-20 px-4 md:p-0 w-full md:w-3/4 lg:w-3/5 block">
                    <h2 className="text-3xl text-center text-blue-900 mt-6"> My Journey </h2>  
                    { 
                        workHistory.map((workHistory, i) => (
                            <WorkHistory className={i%2 == 0 ? "text-right ml-auto mr-0" : ""}
                                item={workHistory.item}
                                role={workHistory.role}
                                years={workHistory.years}
                                icon={workHistory.icon}
                                iconRight={i%2 == 0} iconLeft={i%2 != 0}
                                content={workHistory.content}
                            />
                        ))
                    }
                </div>

                <WaveBorder className="-bottom-6 sm:-bottom-10 lg:-bottom-16" rotate />

            </div>
        );
    }
}

export default Journey;