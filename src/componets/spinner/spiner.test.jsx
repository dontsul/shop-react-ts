import { render } from '@testing-library/react';
import Spinner from './Spinner';

test('spiner', () => {
    const { asFragment } = render(<Spinner />);

    expect(asFragment(<Spinner />)).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="wrap-spinner"
  >
    <span
      class="loader"
    />
  </div>
</DocumentFragment>
`);
});
