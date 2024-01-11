import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import style from "./barProgress.module.css";

export function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress 
        variant="determinate" 
        sx={{ height: 15, borderRadius: 10, backgroundColor: 'lightgrey', '& .MuiLinearProgress-bar': { backgroundColor: '#FFA500' } }}  // Ajusta el grosor de la barra
        {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress1, setProgress1] = React.useState(80);
  const [progress2, setProgress2] = React.useState(80);
  const [progress3, setProgress3] = React.useState(70);
  const [progress4, setProgress4] = React.useState(60);
  const [progress5, setProgress5] = React.useState(85);
  const [progress6, setProgress6] = React.useState(90);


  return (
    <div className={style.container}>
      <Box sx={{ width: '90%' }}>
        <p>HTML/CSS</p>
        <LinearProgressWithLabel value={progress1} />
      </Box>
      <Box sx={{ width: '90%' }}>
        <p>Librerías Front-End</p>
        <LinearProgressWithLabel value={progress2} />
      </Box>
      <Box sx={{ width: '90%' }}>
        <p>Javascript</p>
        <LinearProgressWithLabel value={progress3} />
      </Box>
      <Box sx={{ width: '90%'}}>
        <p>Back-end y Servidores</p>
        <LinearProgressWithLabel value={progress4} />
      </Box>
      <Box sx={{ width: '90%'}}>
        <p>Desarrollo Responsivo</p>
        <LinearProgressWithLabel value={progress5} />
      </Box>
      <Box sx={{ width: '90%'}}>
        <p>Trabajo en equipo</p>
        <LinearProgressWithLabel value={progress6} />
      </Box>
    </div>

  );
}
