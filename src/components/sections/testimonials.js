import React, { useState } from 'react';
import { MaxWidthWrapper } from "../layout/maxWidthWrapper"
import { Box, IconButton, Typography, Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useTheme } from "@emotion/react";

const CarouselWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
});

const CarouselCard = styled(Card)(({ theme }) => ({
  width: '75%',
  maxWidth: '500px',
  padding: '50px 30px',
  textAlign: 'center',
  position: 'relative',
  minHeight: '300px',
  border: '1px solid #7BAFD4',
  borderRadius: '16px',
  [theme.breakpoints.down('md')]: { 
    padding: '30px 30px',
  }
}));

const QuoteMark = styled(Typography)(({ theme }) => ({
  fontSize: '4rem',
  fontWeight: 'bold',
  color: '#e0e0e0',
  position: 'absolute',
  top: '20px',
  left: '30px',
  userSelect: 'none',
  [theme.breakpoints.down('md')]: { 
    top: '10px',
    left: '20px',
  }
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-10px',
  left: '-10px',
  width: '150px',
  height: '150px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: { 
    width: '120px',
    height: '120px', }
  }));

const Headshot = styled('img')({
  width: '100%',
  height: '100%',
})

const NavigationButton = styled(IconButton)({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
});

export const TestimonialSection = ({ items }) => {
  const theme = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <MaxWidthWrapper sx={{my: 8}}>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Open Sans, sans-serif",
          color: "#382C56",
          lineHeight: "1.3",
          textAlign: "center",
        }}
      >
        Testimonials
      </Typography>
      <CarouselWrapper aria-roledescription="carousel">
        <NavigationButton
          onClick={handlePrev}
          aria-label="Previous slide"
          sx={{ left: '10px' }}
        >
          <ArrowBack />
        </NavigationButton>
        {items.map((item, index) => {
          return (
            <CarouselCard
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${items.length}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <QuoteMark>“</QuoteMark>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  {item.quote}
                </Typography>
              </CardContent>
              <ImageWrapper>
                <Headshot src={item.image} alt={item.name} />
              </ImageWrapper>
              <Typography variant="subtitle1" >
                - {item.name}
              </Typography>
            </CarouselCard>
          );
        })}
        <NavigationButton
          onClick={handleNext}
          aria-label="Next slide"
          sx={{ right: '10px' }}
        >
          <ArrowForward />
        </NavigationButton>
      </CarouselWrapper>

    </MaxWidthWrapper>
  )
}