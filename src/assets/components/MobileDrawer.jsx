import * as React from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';

export default function MobileDrawer() {
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:1024px)');

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Sobre', 'Skils', 'Servicos', 'Projetos', 'FAQ', 'Contatos'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ScrollLink
                to={text.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                style={{
                  textDecoration: 'none',
                  width: '100%',
                  display: 'block',
                  color: 'inherit',
                  padding: '0.5rem 1rem'
                }}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={text} />
              </ScrollLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ display: 'block', color: '#73ff00' }}
          >
            <MenuIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                bgcolor: '#73ff00',
                color: '#191919',
                fontSize: 'large',
              }
            }}
          >
            {list}
          </Drawer>
        </>
      )}
    </>
  );
}
