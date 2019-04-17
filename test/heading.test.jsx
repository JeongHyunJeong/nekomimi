import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../src/js/heading';

describe('<Header>', () => {
    test('renders correctly', () => {
        const name = 'snapshot';
        const props = { name };
        const tree = renderer.create(<Header {...props}/>).toJSON();
        
        expect(tree).toMatchSnapshot();
    });
});