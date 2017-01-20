import test from "ava"
import * as React from "react"
import {shallow, mount} from "enzyme"

import Foo from "./foo"

test("shallow", t => {
  const wrapper = shallow(<Foo />)
  t.is(wrapper.contains(<span>Foo</span>), true)
})

test("mount", t => {
  const wrapper = mount(<Foo />)
  const fooInner = wrapper.find(".foo-inner")
  t.is(fooInner.is(".foo-inner"), true)
})
