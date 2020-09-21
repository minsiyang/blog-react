import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Blog from './Blog';

test('it renders the heading', () => {
  const { getByText } = render(<Blog />)
  const heading = getByText(/a place to share your thoughts/i);
  const titleBox = screen.getByLabelText(/add title/i)
  const contentBox = screen.getByLabelText(/your thoughts/i)
  const button = screen.getByText(/publish/i)
  expect(heading).toBeInTheDocument();
  expect(titleBox).toBeInTheDocument();
  expect(contentBox).toBeInTheDocument();
  expect(button).toBeInTheDocument();
})

test('it renders the title and the content of the blog', () => {
  render(<Blog />)
  const titleBox = screen.getByLabelText(/add title/i)
  userEvent.type(titleBox, "A test title")
  const contentBox = screen.getByLabelText(/your thoughts/i)
  userEvent.type(contentBox, "The weather is nice today!")
  const button = screen.getByText(/publish/i)
  userEvent.click(button)
  const title = screen.getByText(/a test title/i)
  const content = screen.getByText("The weather is nice today!")
  expect(title).toBeInTheDocument();
  expect(content).toBeInTheDocument();
})