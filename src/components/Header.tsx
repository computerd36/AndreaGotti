import * as React from 'react';
import { Squeeze as Hamburger } from 'hamburger-react'
import { NavMenu } from './NavMenu';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import '../Animations.css';


export interface HeaderProps {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export function Header(props: HeaderProps) {

    return (
        <div className='headerContainer'>
            <div className="headerMain">
                <Link to={"/"}><h1>ANDREA GOTTI</h1></Link>
                <Hamburger toggled={props.isOpen} toggle={props.setOpen} color="#000000" size={25} label='Open Menu'/>
            </div>
            <div className="headerMenu">
                <CSSTransition
                    in={props.isOpen}
                    timeout={200}
                    classNames="menu-animation"
                    unmountOnExit
                >
                    <NavMenu NavMenuitems={[ ["Works", "/works"], ["Publications", "/publications"], ["News", "/news"], ["Vita", "/vita"]]} />
                </CSSTransition>
            </div>

        </div>
    );
}
