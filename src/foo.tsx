import * as React from "react"
import FooInner from "./foo-inner"


export default class Foo extends React.Component<void, void> {
  render() {
    return (
      <div className="foo">
        <span>Foo</span>
        <FooInner />
      </div>
    )
  }
}
