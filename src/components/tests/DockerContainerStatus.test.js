import { render, screen } from '@testing-library/react';
import DockerContainerStatus from '../DockerContainerStatus';

test('renders container header status.', () => {
  const dom = render(<DockerContainerStatus />);
  const linkElement =  dom.queryAllByTestId("container-header");
  expect(linkElement[0]).toBeInTheDocument();
});
