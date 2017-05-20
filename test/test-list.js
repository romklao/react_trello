import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';
import Card from '../js/components/card';


describe('List component', function() {
    it('Renders the list', function() {
        const text = "hello";
        const cards = [text];

        const renderer = TestUtils.createRenderer();
        renderer.render(<List cards={cards}/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('card-list');

        const divName = result.props.children[0];
        divName.props.className.should.equal('card-list-name');

        const cardsArray = result.props.children[1];
        console.log('cardsArray', cardsArray);
        cardsArray[0].props.text.should.equal(text);
        cardsArray[0].type.should.equal(Card);

        const form = result.props.children[2];
        form.type.should.equal('form');

    });
});
