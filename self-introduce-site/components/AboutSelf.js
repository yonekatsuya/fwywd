import React, {Component} from 'react';

class AboutSelf extends Component {
    constructor(props) {
        super(props)
        this.img = props.img
        this.title = props.title
        this.content = props.content
        this.width = props.width
    }

    render() {
        return(<>
            <div className='w-2/6'>
                <div className="text-center">
                    <img src={this.img} className="inline-block" style={{'width': this.width}} />
                </div>
                <div className='text-center pt-5 text-xl tracking-widest font-bold' style={{'color': '#008c8d'}}>{this.title}</div>
                <div className="flex justify-center">
                    <div className='pt-4 pl-2 w-11/12'>
                        {this.content}
                    </div>
                </div>
            </div>
        </>)
    }
}

export default AboutSelf;