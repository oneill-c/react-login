
import { renderComponent } from '../shared/test-helpers';
import { InternalAppComponent } from '..';

/* eslint-disable no-undef */
describe('App tests', () => {

  const props = {
    children: {},
    isLoggedIn: false
  };

  let app;

  beforeEach(() => {
    app = renderComponent(InternalAppComponent, props);
  });

  it('renders without crashing', () => {
    expect(app).toBeDefined();
  });
});
/* eslint-enable no-undef */
