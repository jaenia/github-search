import React from 'react';
import { render } from '@testing-library/react';

import RepositoryResume from '../../components/RepositoryResume';

const props = {
  name: 'Death Star',
  description: 'The most powerful weapon in the Universe.',
  stars: 10,
};

describe('RepositoryResume component', () => {
  it('should render a resume with props data', () => {
    const { container, getByText } = render(<RepositoryResume {...props} />);

    expect(container).toContainElement(getByText(props.name));
    expect(container).toContainElement(getByText(props.description));
    expect(container).toContainElement(getByText(props.stars.toString()));
  });
});
