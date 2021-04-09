import * as React from "react";

export default class Header extends React.Component {
  render() {
    const { title, logo, message } = this.props;

    return (
      <section className="ms-welcome__header ms-bgColor-neutralLighter">
        <h2 className="s-font-l ms-fontWeight-bold">{message}</h2>
      </section>
    );
  }
}
{/*<img width="90" height="90" src={logo} alt={title} title={title} />*/}