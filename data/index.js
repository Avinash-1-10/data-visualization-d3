const url = "https://gist.githubusercontent.com/Avinash-1-10/59d6701ae0b72ad2addeb980661a10ea/raw/4ec2890e4b30682c4240f89388210ef3393bb789/cssNamedColors.csv";

// fetch(url)
//   .then(response => response.text())
//   .then(csvText => {
//     // const rows = csvText.split('\n');
//     // const headers = rows[0].split(',');
//     // const data = [];

//     // for (let i = 1; i < rows.length; i++) {
//     //   const row = rows[i].split(',');
//     //   const rowData = {};
//     //   for (let j = 0; j < headers.length; j++) {
//     //     rowData[headers[j]] = row[j];
//     //   }
//     //   data.push(rowData);
//     // }

//     console.log(csvText);
//   })
//   .catch(error => console.error('Error fetching CSV:', error));

const fetchText = async()=>{
    const response = await fetch(url);
    const text = await response.text();
    console.log(text);
}

fetchText()