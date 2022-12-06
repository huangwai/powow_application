import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const pages = ['Home', 'Chat', 'About'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      {/* <Container maxWidth="xl"> */}
        <Toolbar sx={{ bgcolor: '#10131F'}} disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '30px'
            }}
          >
            POWOW
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '30px'
            }}
          >
            POWOW
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'flex-end' }} >
            <Button
                href="/"
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '20px', paddingInlineStart: 2 }}
              >
                Home
              </Button>
              <Button
                href="/about"
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '20px', paddingInlineStart: 2 }}
              >
                About
              </Button>
              <Button
                href="/chatOptions"
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '20px', paddingInlineStart: 2 }}
              >
                Chat
              </Button>
              <Button
                href="/contact"
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '20px', paddingInlineStart: 2 }}
              >
                Contact
              </Button>
          </Box>
          
        </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
