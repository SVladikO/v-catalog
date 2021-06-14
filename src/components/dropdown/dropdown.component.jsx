import React from "react";

import './dropdown.styles.scss';

// supported data format [{ key: "", value: ""}]
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

    selectItem(value) {
        this.setState({selectedKey: value});
        this.switchView();
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
                                        console.log(2)
                                        console.log(this.props.func)
                                        console.log(item.key)
                                        this.selectItem(item.key);
                                        this.props.func && this.props.func(item.key);
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