import React from "react";

const errorCodes = [
  100,
  200,
  201,
  202,
  204,
  206,
  300,
  301,
  302,
  303,
  304,
  305,
  307,
  400,
  401,
  402,
  403,
  404,
  405,
  406,
  408,
  409,
  410,
  411,
  412,
  413,
  414,
  416,
  417,
  500,
  501,
  502,
  503,
  504
];
class App extends React.Component {
  state = {
    errorCodesIndex: null,
    errorCodeToDisplay: null
  };

  getStatusCode = (factor, times) => {
    var internalCallback = ((tick, counter) => {
      return () => {
        if (--tick >= 0) {
          window.setTimeout(internalCallback, ++counter * factor);
          this.setState({
            errorCodesIndex: Math.floor(Math.random() * errorCodes.length)
          });
        }
      };
    })(times, 0);

    window.setTimeout(internalCallback, factor);
  };

  render() {
    const dogImage =
      this.state.errorCodesIndex &&
      require(`./images/${errorCodes[this.state.errorCodesIndex]}.jpg`);

    return (
      <div
        style={{
          height: "100vh",
          width: "100%"
        }}
        className={`d-flex align-items-center ${
          this.state.errorCodesIndex ? "" : "justify-content-center"
        } flex-column`}
      >
        <div className="d-flex align-items-center my-3">
          <h1 className="mr-2">
            Status Cats <span className="font-weight-light">vs</span> Status
            Dogs
          </h1>
          <button
            onClick={() => this.getStatusCode(5, 40)}
            className="btn btn-primary"
          >
            GO
          </button>
        </div>
        {this.state.errorCodesIndex && (
          <div className="d-flex">
            <img
              src={`https://http.cat/${errorCodes[this.state.errorCodesIndex]}`}
            />
            <img src={dogImage} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
