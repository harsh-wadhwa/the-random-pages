import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} style={{width: '200px'}} />
         <h6 style={{fontSize: '20px', margin: '0'}}>{title}</h6>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'32px'}
              alignItems={'center'} fontSize={'20px'} py={'20px'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;