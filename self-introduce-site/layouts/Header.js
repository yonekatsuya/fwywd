import React, {Component} from 'react';
import MenuList from '../components/Header/MenuList';

class Header extends Component {
    header_menu = [
        'ABOUT',
        'SKILLS',
        'VALUES',
        'FUTURE'
    ]

    render () {
        return (<>
            <div className= 'h-20 flex justify-between'>
                <div className='w-full'>
                    <img src="logo.png" className='w-40'/>
                </div>
                <div className='w-full flex justify-end'>
                    {this.header_menu.map((value) => (
                        <MenuList text={value} />
                    ))}
                </div>
            </div>
        </>);
    }
}

export default Header;