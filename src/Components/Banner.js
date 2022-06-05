import React from 'react';
import styled from 'styled-components';
import bannerImg from '../image/banner.png';

const BannerImage = styled.img`
  width: 100%;
`;

const BannerWrapper = styled.div`
  width: 100%;
`;

export const Banner = () => (
  <BannerWrapper>
    <BannerImage src={bannerImg} />
  </BannerWrapper>
);
