import React from "react";
import { Line } from "react-chartjs-2";
import { Segment, Grid, Form, Header } from "semantic-ui-react";
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [56, 55, 40],
    },
  ],
};

class Weight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment floated="right" style={{ width: "50%", height: "100" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div>
                <Form.Input
                  name="enterweight"
                  iconPosition="left"
                  label="Enter Weight"
                  placeholder="(lbs)"
                />
                <Header>Weight</Header>
                <Line
                  data={data}
                  options={{
                    responsive: false,
                    width: 400,
                    height: 100,
                  }}
                />
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Weight;
