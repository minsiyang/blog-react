import React from 'react';
import { render, screen } from "@testing-library/react";
import Blog from './Blog';

test('it renders the heading', () => {
  const { getByText } = render(<Blog />)
  const heading = getByText(/a place to share your thoughts/i);
  const titleBox = screen.getByLabelText(/add title/i)
  const contentBox = screen.getByLabelText(/your thoughts/i)
  expect(heading).toBeInTheDocument();
  expect(titleBox).toBeInTheDocument();
  expect(contentBox).toBeInTheDocument();
})