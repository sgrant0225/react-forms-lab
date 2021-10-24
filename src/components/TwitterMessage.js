import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" onChange={event => this.handleMessageChange(event)} value={this.state.message} id="message" />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
