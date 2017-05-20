import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';
import List from '../js/components/list';
import Board from '../js/components/board';
import ListContainer from '../js/components/list-container';

describe('Board component', function() {
    it('Renders the board', function() {

        const renderer = TestUtils.createRenderer();
        renderer.render(<Board />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('board-list');
    });
});
