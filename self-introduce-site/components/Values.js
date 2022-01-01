import React, {Component} from 'react';

class Values extends Component {
    constructor(props) {
        super(props);
        this.src = props.src;
        this.title = props.title;
        this.content = props.content;
        this.border_flg = props.border_flg;

        if (this.border_flg == true) {
            this.style = {'borderRight': '1px solid #6bc2c3'}
        } else {
            this.style = {}
        }
    }

    render() {
        return (<>
            <div className="w-1/3 h-full">
                <div style={this.style}>
                    <div className="inline-block">
                        <img src={this.src} className="w-40" />
                    </div>
                    <div>
                        <span className="inline-block mt-3 font-bold">{this.title}</span>
                    </div>
                    <div className="w-10/12 inline-block h-40 mt-3 break-words text-left">
                        {this.content}
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Values;