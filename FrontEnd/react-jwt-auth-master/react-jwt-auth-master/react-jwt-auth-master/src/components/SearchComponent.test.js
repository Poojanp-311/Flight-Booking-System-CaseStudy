import React from "react"
import Enzyme,{shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import SearchComponent from "./SearchComponent"

Enzyme.configure({adapter: new Adapter() });
describe("Searching", () =>{
    it("should have button", () => {
        console.log("kaiaii")
        const wrapper=shallow(<SearchComponent />)
        const button=wrapper.find("button")
        button.simulate("click")
        //const text=wrapper.find("div div")
        expect(button.length).toBe(1)
    })
});