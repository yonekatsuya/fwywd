import React, {Component} from 'react';

class Progress extends Component {
    constructor(props) {
        super(props)
        this.skill = props.skill
        this.status = props.status
    }

    render() {
        return (<>
            <div style={{'color': '#008c8d'}}>{this.skill}</div>
            <div className="relative pt-1 flex">
                <div className="inline-block w-full">
                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded" style={{'backgroundColor': '#c5eaea'}}>
                        <div style={{width: this.status, backgroundColor: '#2bb9ba'}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
                    </div>
                </div>
                <div className="h-4 flex justify-center items-center text-lg ml-4" style={{'color': '#008c8d'}}>{this.status}</div>
            </div>
        </>)
    }
}

export default Progress;