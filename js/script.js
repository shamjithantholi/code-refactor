window.onload = () => {
  const usernameInput = document.querySelector("#username");
  const downloadButton = document.querySelector("#download");
  const chartTab = document.querySelector("#chart-tab");
  const canvas = document.querySelector("#myChart");
  const ctx = canvas.getContext("2d");

  usernameInput.addEventListener("input", () => {
    const username = usernameInput.value;
    const regex = /^(?=.*[A-Z])(?=.*[!@#$&*~])(?=.*[0-9]).{8,}$/;
    usernameInput.style.borderColor = regex.test(username) ? "green" : "red";
  });

  downloadButton.addEventListener("click", () => {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "chart.png";
    link.click();
  });

  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Income",
          data: [],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Expenses",
          data: [],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  chartTab.addEventListener("click", () => {
    const incomeData = [];
    const expensesData = [];
    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];

    months.forEach((month) => {
      incomeData.push(Number(document.querySelector(`#${month}-income`).value));
      expensesData.push(
        Number(document.querySelector(`#${month}-expenses`).value)
      );
    });

    myChart.data.datasets[0].data = incomeData;
    myChart.data.datasets[1].data = expensesData;
    myChart.update();
  });
};
