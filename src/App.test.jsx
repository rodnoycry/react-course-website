import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from "@cfaester/enzyme-adapter-react-18"
import { App } from "./App"

Enzyme.configure({ adapter: new Adapter() })

it("Shows 'Hello Alex!'", () => {
    const app = shallow(<App name="Alex" />)
    expect(app.text()).toBe("Hello Alex!")
})
