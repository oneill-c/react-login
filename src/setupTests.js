/**
 * This is an enzyme-mandated set up file which initialised the adapter for React 16.
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

