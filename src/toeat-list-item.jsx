import React from 'react';

export default class ToeatListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {eaten: props.eaten};
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox() {
    this.setState({
      eaten: !this.state.eaten
    });
  }

  render(){
    const {name, onRemove} = this.props;
    const {eaten} = this.state;

    return(
      <li style={{backgroundColor: eaten ? 'red' : 'green', color: 'white', padding: '5px 15px',
                  marginBottom: 10, display: 'flex', justifyContent: 'space-between' }}>
        <span>{name}</span>
        <div>
          <label>eaten:</label>
          <input type='checkbox' checked={eaten} onClick={this.toggleCheckbox} />
          <button onClick={onRemove}>Remove</button>
        </div>
      </li>
    );
  }
}
