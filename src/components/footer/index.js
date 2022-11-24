import React from 'react';
import { Box } from "@mui/system";
import {
    Grid,
    List,
    ListItemText,
    Typography,
    Button,
    Stack,
    Container,
  } from "@mui/material";
  import { FooterTitle } from "../../styles/footer";
  import { Colors } from "../../styles/theme";

function Footer() {
    return (
        <Box
        sx={{
            background: Colors.shaft,
            color: Colors.white,
            p: { xs: 4, md: 10 },
            pt: 12,
            pb: 12,
            fontSize: { xs: '12px', md: '14px' }
          }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                <FooterTitle variant="body1">About us</FooterTitle>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer