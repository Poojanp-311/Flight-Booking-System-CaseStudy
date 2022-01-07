import React from "react"
import Enzyme,{shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import CheckIn from "./CheckIn"

Enzyme.configure({adapter: new Adapter() });
describe("CheckIn", () =>{
    it("should have form", () => {
        console.log("kaiaii")
        const wrapper=shallow(<CheckIn />)
        const form=wrapper.find("form")
        expect(form.length).toBe(1)
    })
});