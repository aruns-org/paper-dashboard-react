import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
/*  CardFooter, */
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import { thead, tbody } from "variables/general";
// react plugin used to create charts
// import { Line, Pie } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

// import Stats from "components/Stats/Stats.jsx";

import {
  //dashboard24HoursPerformanceChart,
  //dashboardEmailStatisticsChart,
  //dashboardNASDAQChart
} from "variables/charts.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col xs={12}>
          <Card>
              <CardHeader>
                <CardTitle tag="h4">Keys</CardTitle>
                <p> Please store these securely</p>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-right">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tbody.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.data.map((prop, key) => {
                            if (key === thead.length - 1)
                              return (
                                <td key={key} className="text-right">
                                  {prop}
                                </td>
                              );
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>  
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
