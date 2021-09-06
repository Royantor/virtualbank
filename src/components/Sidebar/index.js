import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SidebarMenu
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='project' onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>service</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>SignUp</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='signin'>SignUp</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
