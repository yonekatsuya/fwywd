import React, {Component} from 'react';

class MenuList extends Component {
    constructor(props) {
        super(props)
        this.text = props.text
    }

    text_style = {
        color: '#008c8d'
    }

    render() {
        return (<>
            <div className='text-lg h-full w-28 relative'><div className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2' style={this.text_style}>{this.text}</div></div>
        </>)
    }
}

export default MenuList;