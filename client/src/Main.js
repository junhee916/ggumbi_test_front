// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://43.201.34.41:3002/api/setOrderInfo",
          {
            withCredentials: true,
          }
        );

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Order Number",
      selector: (row) => row.order_num,
      sortable: true,
    },
    {
      name: "Product Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Delivery Status",
      selector: (row) => row.delivery_status,
      sortable: true,
    },
  ];

  return (
    <div className="App">
      <DataTable
        title="Order Information"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
      />
    </div>
  );
};

export default Main;
