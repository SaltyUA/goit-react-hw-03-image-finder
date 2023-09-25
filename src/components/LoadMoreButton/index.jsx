import React from 'react';
import { Button } from './LoadMoreButton.styled';

const LoadMoreButton = ({ loadMore }) => {
  return <Button onClick={loadMore}>Load More</Button>;
};

export default LoadMoreButton;
