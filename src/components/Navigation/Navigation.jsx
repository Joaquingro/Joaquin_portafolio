import React, { useState } from 'react';
import { IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import style from "./Navigation.module.css";
import CloseIcon from '@mui/icons-material/Close';
import 'animate.css';

export function Navigation() {
    const [open, setOpen] = useState(false);
    console.log(open);
    const [animateClass, setAnimateClass] = useState('');
    console.log(animateClass);
    const toggleDrawer = () => {
        setTimeout(() => {
            setOpen(!open);
            
        }, 200);
        setAnimateClass(open ? 'animate__rotateOutUpRight' : 'animate__rotateInDownRight');
    };

    const handleLinkClick = () => {
        setAnimateClass('animate__rotateOutUpRight');
        setTimeout(() => {
            setOpen(false);
            setAnimateClass('');
        }, 500);
    };
    return (
        <div className={style.container}>
            <IconButton 
                onClick={toggleDrawer} 
                color="inherit" 
                aria-label="menu"
               
               
            >
                  {open ? <CloseIcon 
                  sx={{
                    fontSize: "3rem",
                    color: "white",
                  }}
                  
                   /> : 
                  <MenuIcon
                  sx={{
                    fontSize: "3rem", 
                    color: "white"

                  }}
                   />}
            </IconButton>

            <Drawer anchor="left" 
            open={open}
            onClose={toggleDrawer}
            
            >
            <div className={`animate__animated ${animateClass} ${style.circularMenu}`}>
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
