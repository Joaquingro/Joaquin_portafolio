import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import style from "./Navigation.module.css";
import CloseIcon from '@mui/icons-material/Close';

export function Navigation() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <div className={style.container}>
            {/* Icono de menú hamburguesa */}
            <IconButton 
                onClick={toggleDrawer} 
                color="inherit" 
                aria-label="menu"
               
            >
                  {open ? <CloseIcon 
                  sx={{
                    fontSize: "3rem",
                    color: "white",
                  }} /> : 
                  <MenuIcon
                  sx={{
                    fontSize: "3rem", 
                    color: "white"

                  }}
                   />}
            </IconButton>

            {/* Menú lateral */}
            <Drawer anchor="left" 
            open={open}
            onClose={toggleDrawer}
            
            >
            <div className={`${style.circularMenu} ${!open ? style.slideOut : ''}`}>
            <div className={style.containerList} >
                <div className={style.son} onClick={handleLinkClick} >
                    <AnchorLink href="#home">Inicio</AnchorLink>
                </div>
                <div className={style.son} onClick={handleLinkClick} >
                    <AnchorLink href="#school">Acerca de mi</AnchorLink>
                </div>
                <div className={style.son} onClick={handleLinkClick}>
                    <AnchorLink href="#skills">Skills</AnchorLink>
                </div>
                <div className={style.son} onClick={handleLinkClick}>
                    <AnchorLink href="#projects">Proyectos</AnchorLink>
                </div>
                <div className={style.son} onClick={handleLinkClick}>
                    <AnchorLink href="#contact">Contáctame</AnchorLink>
                </div>
                
        
            </div>
                </div>
            </Drawer>
        </div>
    );
}
