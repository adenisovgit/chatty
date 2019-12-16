import React from 'react';

export default class Chat extends React.PureComponent {
  static defaultProps = {
    count: 0,
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <button type="button">{count}</button>
      </div>
    );
  }
}
