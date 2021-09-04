import { Component } from 'react';

class BuyClassComponent extends Component {
  constructor(props) {
    super(props);

    this._handleShowAlert = this._handleShowAlert.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }
  _handleShowAlert() {
    alert(this.props.message);
  }

  _handleClick() {
    setTimeout(this._handleShowAlert, 2000);
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <button className="btn btn-success" onClick={this._handleClick}>
          Buy
        </button>

        <p className="text-secondary fw-bold mt-3 mb-0">Class Component</p>
      </div>
    );
  }
}

export default BuyClassComponent;
