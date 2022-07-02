import { render } from '@testing-library/react';

import { StoreGameDetail } from './StoreGameDetail';

describe('StoreGameDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoreGameDetail />);
    expect(baseElement).toBeTruthy();
  });
});
