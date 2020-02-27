import React from 'react';
import '../App.css';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashValues: ['X', 'O'],
      index: 1,
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
      [tabValue]: this.state.hashValues[index],
    });
    this.validateWinnerHash();
  }

  validateWinnerHash() {
    const accessState = this.state;
    const stateValues = [
      [
        accessState.tab11,
        accessState.tab12,
        accessState.tab13,
      ],
      [
        accessState.tab21,
        accessState.tab22,
        accessState.tab23,
      ],
      [
        accessState.tab31,
        accessState.tab32,
        accessState.tab33,
      ],
      [
        accessState.tab11,
        accessState.tab21,
        accessState.tab31,
      ],
      [
        accessState.tab12,
        accessState.tab22,
        accessState.tab32,
      ],
      [
        accessState.tab13,
        accessState.tab23,
        accessState.tab33
      ],
      [
        accessState.tab11,
        accessState.tab22,
        accessState.tab33,
      ],
      [
        accessState.tab13,
        accessState.tab22,
        accessState.tab31
      ],
    ];
    console.log(stateValues[0][0])
  }

  render() {
    console.log(this.state)
    return (
      <table>
        <tbody>
          <tr>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, 'tab11')}>
              <p className="Table_value_x-Or-o">{this.state.tab11}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, 'tab12')}>
              <p className="Table_value_x-Or-o">{this.state.tab12}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, 'tab13')}>
              <p className="Table_value_x-Or-o">{this.state.tab13}</p>
            </td>
          </tr>
          <tr>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, 'tab21')}>
              <p className="Table_value_x-Or-o">{this.state.tab21}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, 'tab22')}>
              <p className="Table_value_x-Or-o">{this.state.tab22}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, 'tab23')}>
              <p className="Table_value_x-Or-o">{this.state.tab23}</p>
            </td>
          </tr>
          <tr>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, 'tab31')}>
              <p className="Table_value_x-Or-o">{this.state.tab31}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, 'tab32')}>
              <p className="Table_value_x-Or-o">{this.state.tab32}</p>
            </td>
            <td className="Table_cell" onClick={() => this.changeStateValue(this.state.index, 'tab33')}>
              <p className="Table_value_x-Or-o">{this.state.tab33}</p>
            </td>
          </tr>
        </tbody>
      </table >
    );
  }
}

export default Table;
