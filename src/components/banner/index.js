import React from 'react';
import { useTheme } from "@mui/material/styles";
import { useMediaQuery,Typography } from "@mui/material";
import { BannerContainer, BannerContent,BannerTitle,BannerDescription,BannerShopButton, BannerImage} from '../../styles/banner';

function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <BannerContainer>
        <BannerImage src='/images/banner/banner.png'/>
<BannerContent>
<Typography variant="h6">Black Friday Sale</Typography>
<BannerTitle variant="h2">
          New Pets
        </BannerTitle>
        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>

        {/* <BannerShopButton color="primary">Shop Now</BannerShopButton> */}
</BannerContent>
    </BannerContainer>
  
  )
}

export default Banner