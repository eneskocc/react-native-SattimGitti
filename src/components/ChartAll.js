import React, { Component } from 'react'
import { Text, StyleSheet, View ,Dimensions,ScrollView} from 'react-native'
const screenWidth = Dimensions.get("window").width;
import {
      LineChart,
      BarChart,
      PieChart,
      ProgressChart,
      ContributionGraph,
      StackedBarChart
    } from "react-native-chart-kit";
const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false, // optional,
      
};
const data = {
      labels: ["Swim", "Bike", "Run"], // optional
      data: [0.4, 0.46, 0.8]
};
const data1 = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43]
        }
      ]
};
const data2 = {
      labels: ["Test1", "Test2"],
      legend: ["L1", "L2", "L3"],
      data: [
        [60, 10, 60],
        [60, 10, 60],
        [60, 10, 60],
        [30, 30, 60]
      ],
      barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
};
export default class ChartAll extends Component {
      render() {
            return (
                  <ScrollView>
                       <Text>Bezier Line Chart</Text>
                        <LineChart
                        data={{
                              labels: ["January", "February", "March", "April", "May", "June"],
                              datasets: [
                              {
                              data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                              ]
                              }
                              ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                              backgroundColor: "#e26a00",
                              backgroundGradientFrom: "#fb8c00",
                              backgroundGradientTo: "#ffa726",
                              decimalPlaces: 2, // optional, defaults to 2dp
                              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                              style: {
                              borderRadius: 16,
                              
                              },
                              propsForDots: {
                              r: "6",
                              strokeWidth: "2",
                              stroke: "#ffa726"
                              }
                        }}
                        bezier
                        style={{
                              marginVertical: 8,
                              borderRadius: 16,
                              marginVertical:10,
                        }}
                        />
                        <ProgressChart
                              data={data}
                              width={screenWidth}
                              height={220}
                              strokeWidth={16}
                              radius={32}
                              chartConfig={chartConfig}
                              hideLegend={false}
                        />
                        <BarChart
                              
                              data={data1}
                              width={screenWidth}
                              height={220}
                              yAxisLabel="$"
                              chartConfig={chartConfig}
                              verticalLabelRotation={30}
                        />
                        <StackedBarChart
                              
                              data={data2}
                              width={screenWidth}
                              height={220}
                              chartConfig={chartConfig}
                        />
                  </ScrollView>
            )
      }
}

const styles = StyleSheet.create({

});
