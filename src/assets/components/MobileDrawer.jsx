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

{/*import { useTheme } from '@mui/material/styles';*/}

export default function MobileDrawer() {
  const [open, setOpen] = React.useState(false);
  {/*const theme = useTheme();*/}
  const isMobile = useMediaQuery('(max-width:1024px)'); // Customizado para até 1024px

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
        {['Home', 'Sobre', 'Skils', 'Servicos', 'Projetos', 'FAQ', 'Contatos'].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component="a" href={`#${text.toLowerCase()}`}>
                
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
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
            <MenuIcon sx={{fontSize: '2rem'}} />
          </IconButton>
          <Drawer  className= 'MuiDrawer-paper'
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)} 
          PaperProps={{
            sx: {
            bgcolor: '#73ff00 ', // Altere para a cor desejada
            color: '#191919', // Cor do texto, se quiser
            fontSize: 'large', // Tamanho da fonte
         }
         }}>
            {list}
          </Drawer>
        </>
      )}
    </>
  );
}
