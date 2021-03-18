import React from "react";
import { Line } from "react-chartjs-2";
import { Segment, Grid, Header, Input } from "semantic-ui-react";

class Weight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [],
          },
        ],
      },
      newWeight: "",
      rerender: false,
    };
  }
  addNewWeight = () => {
    let data = this.state.data;
    let weights = this.state.data.datasets[0].data;
    weights.push(parseInt(this.state.newWeight));
    data.datasets[0].data = weights;
    this.setState({ data, rerender: true }, () => {
      this.setState({ rerender: false });
    });
  };
  postToDatabase = () => {
    let newWeight = this.state.newWeight;
    let newDate = "?????";
    let weight = { weight: newWeight, date: newDate };
    //post request with weight as the body
  };
  handleInput = (event) => {
    this.setState({ newWeight: event.target.value });
  };
  render() {
    return (
      <Segment floated="right" style={{ width: "50%", height: "100" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div>
                <Header>Weight</Header>
                {!this.state.rerender ? (
                  <Line
                    data={this.state.data}
                    options={{
                      responsive: true,
                      width: 400,
                      height: 100,
                    }}
                  />
                ) : (
                  <div></div>
                )}
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Input
              value={this.state.newWeight}
              variant="outlined"
              onChange={this.handleInput}
            />
            <button onClick={this.addNewWeight}>Add Weight</button>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
export default Weight;
