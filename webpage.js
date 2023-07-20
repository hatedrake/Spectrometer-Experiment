var layout = {
  title: {
    text:'Color vs % Reflectance',
    font: {
      family: 'Pangolin, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  paper_bgcolor: "white",
  xaxis: {
    title: {
      text: 'Color(wavelength)',
      font: {
        family: 'Pangolin, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: '% Reflectance',
      font: {
        family: 'Pangolin, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  [
    {
      x: [
        "Blue",
        "Cyan",
        "Green",
        "Yellow",
        "Orange",
        "Red",
        "Deep Red",
        "IR1",
        "IR2",
        "IR3",
        "IR4"
      ],
      y: [
        13.75404531,
        20.76813656,
        30.05865103,
        70.49689441,
        89.48194662,
        102.9950083,
        107.6923077,
        109.7744361,
        111.6013072,
        112.312812,
        112.2047244
      ]
    }
  ], layout
);
