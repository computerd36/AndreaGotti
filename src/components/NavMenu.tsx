import * as React from 'react';

import { NavLink } from 'react-router-dom';

export interface INavMenuProps {
    NavMenuitems: string[][]; // [name, link]
}

export function NavMenu(props: INavMenuProps) {
    return (
        <div className='navMenuContainer'>
            <ul>
                {props.NavMenuitems.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink
                                to={item[1]}
                                className={({ isActive }) => isActive ? 'isActiveNav' : 'isNotActiveNav'}
                            >
                                {item[0]}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>


        </div>
    );
}
