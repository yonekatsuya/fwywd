import React, {Component} from 'react';

class Footer extends Component {

    render () {
        return (<>
            <div className="h-96 text-white" style={{'backgroundColor': '#262c3a'}}>
                <div className="pt-11 text-center">
                    <div className='inline-block'>
                        <span className="text-xs table-cell align-middle pr-3">CREATED BY</span>
                        <span className="text-lg table-cell align-middle">米 勝矢</span>
                    </div>
                </div>
                <div className="h-32 mt-11 text-center">
                    <img src='image/logo_white.png' className="w-24 inline-block" />
                </div>
                <div className="mt-10 text-center">
                    <img src="image/twitter.png" className="w-5 inline-block mr-4" />
                    <img src="image/facebook.png" className="w-5 inline-block" />
                </div>
                <div className="mt-7 text-center text-xs">
                    © 2022 KIKAGAKU
                </div>
            </div>
        </>);
    }
}

export default Footer;