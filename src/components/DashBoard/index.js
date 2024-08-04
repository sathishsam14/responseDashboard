import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import './index.css';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer'

const Dashboard = () => {
  const [change, setChange] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://66ada09db18f3614e3b58765.mockapi.io/dashboard')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

 

  const salesData = data.map(item => ({
    name: item.vehicleName,
    model: item.model,
    sales: item.sales,
    color:item.color,
    createdAt: new Date(item.createdAt).toLocaleDateString(),
    weeks: item.weeks,
  }));

  const colorData = data.reduce((acc, curr) => {
    const color = curr.color;
    if (!acc[color]) {
      acc[color] = 0;
    }
    acc[color] += 1;
    return acc;
  }, {});

  const colorChartData = Object.keys(colorData).map(key => ({
    name: key,
    value: colorData[key],
  }));

  const COLORS = {
    "blue": "#0000FF",
    "lavender": "#E6E6FA",
    "cyan": "#00FFFF",
    "violet": "#8A2BE2",
    "black": "#000000",
    "turquoise": "#40E0D0",
    "indigo": "#4B0082",
    "green": "#008000",
    "yellow": "#FFFF00",
    "olive": "#808000",
    "pink":"#ee40eb", 
    "salmon":"#FA8072",
    "mint green":"#3EB489",
"ivory":"#FFFFF0",
"grey":"#898989",
  };
  

  return (
   
    <div className={change ? 'dark-mode' : ' light-mode'}>
      <div className="main-con">
        <Sidebar change={change} />
        <div>
          <Header change={change} changeColor={() => setChange(!change)} />
          <div className="content">
            <div>
            <div className="chart-con">
              <h2 className="chart-name">Sales Data</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={salesData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="createdAt" />
                  <YAxis dataKey="sales"  tick={{ stroke: "orange", strokeWidth: 1 }}/>
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
              </div>
              <div className="chart-con">
              <h2 className="chart-name">Stock Data</h2>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart
                  data={data}
                  margin={{ top: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="vehicleName"
                    tick={{ stroke: "blue", strokeWidth: 1 }}
                  />
                  <YAxis 
                   
                    tick={{ stroke: "orange", strokeWidth: 1 }}
                  />
                  <Tooltip />
                  <Legend wrapperStyle={{ padding: 30 }} />
                  <Bar dataKey="stock" name="Stock" fill="#1f77b4" barSize="20%" />
                </BarChart>
              </ResponsiveContainer>
              </div>
              <div className="chart-con">
              <h2 className="chart-name">Colors Aailable</h2>
              <ResponsiveContainer width="100%" height={500} className="pie-con">
                <PieChart>
                  <Pie
                    data={colorChartData}
                    cx="50%"
                    cy="50%"
                    startAngle={0}
                    endAngle={360}
                    
                    innerRadius="40%"
                    outerRadius="70%"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {colorChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[entry.name]}/>
                      
                    ))}
                </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
     < Footer change={change} />
    </div>
  );
};

export default Dashboard;


