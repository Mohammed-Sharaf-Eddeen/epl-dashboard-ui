import { PieChart } from "react-minimal-pie-chart";

const MyPieChart = ({wins, draws, losses}) => {
  return (
    <PieChart
      data={[
        { title: "Wins", value: wins, color: "#36AE7C" },
        { title: "Draws", value: draws, color: "#187498" },
        { title: "Losses", value: losses, color: "#EB5353" },
      ]}
      animate={true}
      animationDuration={1500}
      // label={({ dataEntry }) => dataEntry.value}
      />
  );
};

export default MyPieChart;
