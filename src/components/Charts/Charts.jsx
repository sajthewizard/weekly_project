import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = () => {
   const Data=[   {
    "name": "Alice",
    "subject1_score": 85,
    "subject2_score": 90
},
{
    "name": "Bob",
    "subject1_score": 78,
    "subject2_score": 82
},
{
    "name": "Charlie",
    "subject1_score": 92,
    "subject2_score": 88
},
{
    "name": "David",
    "subject1_score": 74,
    "subject2_score": 80
},
{
    "name": "Eva",
    "subject1_score": 88,
    "subject2_score": 94
}
    ];
    return (
        <div className="">
            Here Comes Charts
            <LineChart
            width={500}
            height={300}
            data={Data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip></Tooltip>
                          <Line type="monotone" dataKey="subject1_score" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="subject2_score" stroke="#82ca9d" activeDot={{ r: 8 }}/>



            </LineChart>
        </div>
    );
};

export default Charts;