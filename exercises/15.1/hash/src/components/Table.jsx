import React from 'react';
import '../App.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      hashValues: ['X', 'O'],
      tab11: '',
      tab12: '',
      tab13: '',
      tab21: '',
      tab22: '',
      tab23: '',
      tab31: '',
      tab32: '',
      tab33: '',
    }
  }

  changeStateValue(index, tabValue) {
    this.setState({
      index: index ? 0 : 1,
      tabValue: this.state.hashValues[index],
    });
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td
              className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab11)}>
              <p className="Table_value_x-Or-o">{this.state.tab11}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab12)}>
              <p className="Table_value_x-Or-o">{this.state.tab12}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab13)}>
              <p className="Table_value_x-Or-o">{this.state.tab13}</p>
            </td>
          </tr>
          <tr>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab21)}>
              <p className="Table_value_x-Or-o">{this.state.tab21}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab22)}>
              <p className="Table_value_x-Or-o">{this.state.tab22}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab23)}>
              <p className="Table_value_x-Or-o">{this.state.tab23}</p>
            </td>
          </tr>
          <tr>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab31)}>
              <p className="Table_value_x-Or-o">{this.state.tab31}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab32)}>
              <p className="Table_value_x-Or-o">{this.state.tab32}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab33)}>
              <p className="Table_value_x-Or-o">{this.state.tab33}</p>
            </td>
          </tr>
        </tbody>
      </table >
    );
  }
}

export default Table;
