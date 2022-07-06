import React from "react";
import './dropdown.styles.scss';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      selectedKey: ""
    }
  }

  switchView() {
    this.setState({hide: !this.state.hide})
  }

  render() {
    return (
      <div className="dropdown">
        <div className="title" onClick={() => this.switchView()}>
          {this.props.unicode
            ? String.fromCodePoint(this.props.unicode)
            : this.state.selected
          }
        </div>
        <div className="items">
          {
            this.state.hide ? null :
              this.props.items.map((item) =>
                <div key={item.key} className="item" onClick={
                  () => {
                    this.switchView();
                    this.props.action && this.props.action(item.key);
                  }
                }>
                  {item.value}
                </div>
              )
          }
        </div>
      </div>
    )
  }
}

export default Dropdown;