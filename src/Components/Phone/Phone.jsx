import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phone = () => {
    const [phone, setPhone] = useState([])
useEffect(()=>{
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhone(data.data))
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
        const realData = data.data.data;
        const fakeData = realData.map(phones => {
            const obj = {
                name : phones.phone_name,
                price : parseInt(phones.slug.split('-')[1])
            }
            return obj
        })
        setPhone(fakeData)
        console.log(fakeData)
    })
},[])
    return (
        <div>
             <h1 className="text-2xl lg:text-4xl font-semibold text-center my-10">
        {" "}
        {phone.length}{" "}
      </h1>
            <h1 className="text-2xl lg:text-4xl font-semibold text-center my-10">
        {" "}
        Bar Chart of FakeData{" "}
      </h1>
      <div>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={500}
          height={300}
          data={phone}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" />
        
        </BarChart>
      </ResponsiveContainer>
      </div>

        </div>
    );
};

export default Phone;