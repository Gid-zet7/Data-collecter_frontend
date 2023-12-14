// import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const DataChart = () => {
  const ques = document.querySelectorAll(
    ".table--migrants tbody tr td:nth-child(2)"
  );

  const res = document.querySelectorAll(
    ".table--migrants tbody tr td:nth-child(3)"
  );

  const value = document.querySelectorAll(
    ".table--migrants tbody tr td:nth-child(4)"
  );

  //   console.log(ques.forEach((que) => console.log(que.innerText)));
  const quesArr = [];
  ques.forEach((que) => quesArr.push(que.innerText));
  console.log(quesArr);

  const resArr = [];
  res.forEach((re) => resArr.push(re.innerText));
  console.log(resArr);

  const valArr = [];
  value.forEach((val) => valArr.push(val.innerText));
  console.log(valArr);

  // console.log(quesArr);
  // console.log(valArr);
  return (
    <>
      <div
        style={{
          maxWidth: "50rem",
          marginTop: "5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Bar
          data={{
            labels: quesArr,
            datasets: [
              {
                label: resArr,
                data: valArr,
                backgroundColor: [
                  "rgba(43, 63, 229,0.8",
                  "rgba(250, 192, 19, 0.8",
                  "rgba(253, 135, 135, 0.8",
                  "rgba(253, 90, 125, 0.8",
                ],
                borderRadius: 5,
              },
              // {
              //   label: "Irregular Migrants",
              //   data: [90, 80, 60, 50, 60],
              // },
            ],
          }}
        />
      </div>
    </>
  );
};

export default DataChart;
