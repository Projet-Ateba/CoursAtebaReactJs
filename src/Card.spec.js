import {expect} from 'chai'
import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
import Sinon from 'sinon';


describe('<card />', () => {
    it('Vérifier que les `onClick` fonctionne dans nos prop quand on clique', () =>{
        const onClick = Sinon.spy()
        const wrapper = shallow(<Card card="🌍" feedback="hidden" index={0} onClick={onClick} />)
        wrapper.simulate('click')
        expect(onClick).to.have.been.calledWith(0)
    })

    it('doit correspondre au referent snapshot', ()=> {
        const onClick = Sinon.spy()
        const wrapper = shallow(<Card card="🌍" feedback="hidden" index={0} onClick={onClick} />)
        expect(wrapper).to.matchSnapshot()
    })
})