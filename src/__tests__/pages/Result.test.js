import React from 'react';
import { render } from '@testing-library/react';
import useSearchUser from '../../hooks/useSearchUser';
import useSearchUserMock from '../../__mocks__/useSearchUser';

import Result from '../../pages/Result';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    history: {
      push: jest.fn(),
    },
  }),
  useParams: () => ({ user: 'userSearch' }),
}));

jest.mock('../../hooks/useSearchUser');
useSearchUser.mockImplementation(() => useSearchUserMock);

describe('Result page', () => {
  it('should render PageHeader and getSearch have been called', () => {
    const { container, getByTestId } = render(<Result />);

    expect(container).toContainElement(getByTestId('main-header'));
    expect(container).toContainElement(getByTestId('search-input'));
    expect(useSearchUserMock.getSearch).toBeCalled();
  });

  it('should render PageHeader and user-info and repository list', () => {
    useSearchUser.mockImplementation(() => ({
      ...useSearchUserMock,
      loading: false,
    }));
    const { container, getByTestId } = render(<Result />);
    expect(container).toContainElement(getByTestId('user-info'));
    expect(container).toContainElement(getByTestId('repository-list'));
  });

  it('should render error message', () => {
    useSearchUser.mockImplementation(() => ({
      ...useSearchUserMock,
      loading: false,
      error: {
        isError: true,
        message: 'Error test',
      },
    }));
    const { container, getByText } = render(<Result />);
    expect(container).toContainElement(getByText('Error test'));
  });
});
