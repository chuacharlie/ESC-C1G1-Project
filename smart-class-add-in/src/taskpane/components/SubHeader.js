import * as React from "react";

export default class SubHeader extends React.Component {
  render() {
    const { title, logo, message } = this.props;

    return (
      <section className="ms-welcom__main">
        <h3 className="ms-fontWeight-bold">{message}</h3>
      </section>
    );
  }
}