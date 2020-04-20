import React from 'react';
import Player from '../../components/Player';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Player', () => {
    let props = {
      winner: 'X',
      player: 'X'
    };

    let wrapper;

    it('should render the Player', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Player handleForm={(e) => { this.setPlayer(e) }}/>);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('form');
    });

})
