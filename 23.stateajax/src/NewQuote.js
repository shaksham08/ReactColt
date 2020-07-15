import React from "react";
import axios from "axios";
import "./NewQuote.css";

class NewQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      isloading: true,
    };
  }
  componentDidMount() {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        setInterval(() => {
          this.setState({
            quote: response.data.data[0].employee_name,
            isloading: false,
          });
        }, 3000);
      });
  }
  render() {
    const result = this.state.isloading ? (
      <div className="page">
        <span className="loader" data-text="Loading...">
          Loading...
        </span>
      </div>
    ) : (
      <div>
        <h1>You should follow this </h1>
        <p>{this.state.quote}</p>
      </div>
    );

    return <div>{result}</div>;
  }
}

export default NewQuote;
