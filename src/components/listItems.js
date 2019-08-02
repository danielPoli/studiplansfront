import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import Link from '@material-ui/core/Link';
import { Link as routerLink, Route } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';



export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
      <PeopleIcon />
      </ListItemIcon>
      <Link component={routerLink} to="/docentes">
        <ListItemText primary="Docentes" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link component={routerLink} to='/administracion'>
        <ListItemText primary="Administracion" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link component={routerLink} to='/modulos'>
      <ListItemText primary="Modulos" />
      </Link>
    </ListItem>
  </div>
);
