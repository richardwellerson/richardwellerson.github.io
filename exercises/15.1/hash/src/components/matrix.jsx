import React from 'react';

class Matrix extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      backgroundImageX: 'white',
      backgroundImageO: '',
    }
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td className="1.1"></td>
            <td className="1.2"></td>
            <td className="1.3"></td>
          </tr>
          <tr>
            <td className="2.1"></td>
            <td className="2.2"></td>
            <td className="2.3"></td>
          </tr>
          <tr>
            <td className="3.1"></td>
            <td className="3.2"></td>
            <td className="3.3"></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Matrix;
