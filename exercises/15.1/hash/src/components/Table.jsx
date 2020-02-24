import React from 'react';
import '../App.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab11: false,
      tab12: false,
      tab13: false,
      tab21: false,
      tab22: false,
      tab23: false,
      tab31: false,
      tab32: false,
      tab33: false,
      index: 0,
      hashValues: ['X', 'O'],
    }
  }

  changeStateValue(index, ...tabValue) {
    if (!tabValue) {
      this.setState({
        index: index ? 0 : 1,
        tabValue: true,
      });
      return this.state.hashValues[this.state.index];
    }
  }

  printClick = (tabvalue) => {
    if (tabvalue) {
      return this.state.hashValues[this.state.index];
    };
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab11)}>
              <p className="Table_value_x-Or-o">{this.printClick(this.state.tab11)}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab12)}>
              <p className="Table_value_x-Or-o">{this.printClick(this.state.tab12)}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab13)}>
              <p className="Table_value_x-Or-o">{this.printClick(this.state.tab13)}</p>
            </td>
          </tr>
          <tr>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab21)}>
              <p className="Table_value_x-Or-o">{this.printClick(this.state.tab21)}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab22)}>
              <p className="Table_value_x-Or-o">{this.printClick(this.state.tab22)}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab23)}>
              <p className="Table_value_x-Or-o">{this.printClick(this.state.tab23)}</p>
            </td>
          </tr>
          <tr>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab31)}>
              <p className="Table_value_x-Or-o">{this.printClick(this.state.tab31)}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab32)}>
              <p className="Table_value_x-Or-o">{this.printClick(this.state.tab32)}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, this.state.tab33)}>
              <p className="Table_value_x-Or-o">{this.printClick(this.state.tab33)}</p>
            </td>
          </tr>
        </tbody>
      </table >
    );
  }
}

export default Table;
