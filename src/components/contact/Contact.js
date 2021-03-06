import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
  root: {
    width: '100%',
    bottom:0,
    height:'70px',
    position:'relative',
    top:'-50px',
    backgroundColor:'black',
    height:'100px'
  },
});

export default function Contact() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation  id='contact'
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Instagram"  href='https://www.instagram.com/deepan_vikram'
       target='_blank' style={{color:'red'}}
      icon={<InstagramIcon />}/>  
      <BottomNavigationAction label="Mail" href='mailto:rajendrand218@gmail.com' 
      target='_blank' style={{color:'red'}}
       icon={<MailIcon />}  />
      <BottomNavigationAction label="LinkedIn" href='https://www.linkedin.com/in/deepan-k-r-449648201'
       target='_blank' style={{color:'red'}} 
       icon={<LinkedInIcon />} />
      <BottomNavigationAction label="FaceBook" href='https://www.facebook.com/profile.php?id=100004609249136'
       target='_blank' style={{color:'red',tabSize:'20px'}}
       icon={<FacebookIcon />}  />
    </BottomNavigation>
  );
}