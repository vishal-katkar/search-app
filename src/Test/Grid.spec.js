import { shallow } from 'enzyme';

import Grid from '../components/grid';
 
describe('<Grid />', () =>{
	it('render 1 <Grid /> component' () =>{
		const wrapper = shallow(< Grid/>);
		expect(component).toHaveLenght(1);
	})
})