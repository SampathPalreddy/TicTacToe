import React from 'react';
import Status from '../../components/Status';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('Status', () => {
    let props = {
      winner: 'X',
      player: 'X'
    };

    let wrapper;

    it('should render the Status', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Status setPlayer={(e) => { this.setPlayer(e) }}/>);
        const result = renderer.getRenderOutput();
        expect(result.type).toBe('span');
    });

})
