import React from 'react';
import xBackground from './images/x.gif';
import oBackground from './images/o.gif';

class Matrix extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xSelection: true,
      oSelection: false,
      imgs: {
        xImg: `url(${xBackground})`,
        oImg: `url(${oBackground})`,
      }
    };
  }

  table = () => {
    return(
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
      </table >
    )
  }

  showSelection = () => {
    return(
      <section>
        <h4>Make your choice:</h4>
        <div><img src={this.state.imgs.oImg}></img></div>
        <div><img src={this.state.imgs.xImg}></img></div>
      </section>
    )
  }

  render() {
    return (
      
    )
  }
}

export default Matrix;
