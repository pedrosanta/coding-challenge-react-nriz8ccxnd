import {
  forwardRef,
  useState
} from "react";

import { NavLink as NavLinkBase } from "react-router-dom";

import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography
} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';

import { styled } from "@mui/material/styles";

const drawerWidth = 240;
const navItems = [
  { label: 'Tasks', to: ''},
  { label: 'Users', to: 'users'},
];

const NavLink = forwardRef((props, ref) => (
  <NavLinkBase
    ref={ref}
    {...props}
    className={props.activeClassName}
  />
));

const NavItem = styled(Typography)(({theme}) => ({
  color: "#fff",
  textDecoration: 'none',
  marginRight: theme.spacing(3),
  opacity: '0.5',
  'a.active > &': {
    fontWeight: 'bold',
    opacity: '1'
  }
}));



function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <AppBar>
        <Container>
          <Toolbar disableGutters>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{
                marginRight: 4
              }}
            >
              React Coding Challenge
            </Typography>

            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex'
                }
              }}
            >
              {navItems.map((item, index) => (
                <NavLink key={index} to={item.to} style={{ textDecoration: 'none'}}>
                  <NavItem>{item.label}</NavItem>
                </NavLink>
              ))}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Typography onClick={handleDrawerToggle} variant="h6" sx={{ my: 2, ml: 2 }}>
          Menu
        </Typography>
        <Divider />
        <List onClick={handleDrawerToggle}>
          {navItems.map((item, index) => (
            <ListItem
              key={index}
              component={NavLink}
              to={item.to}
              style={{ textDecoration: 'none'}}
            >
              <ListItemButton>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      color: 'initial',
                      '.active &': {
                        fontWeight: 'bold'
                      }
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default NavBar;
