import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function() {
    it('Renders the card', function() {
        const text = "hello";
        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text}/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('card');
    });
});
