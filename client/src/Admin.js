// DataTableComponent.js
import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

const Admin = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://43.201.34.41:3000/setOrderInfo"
        ); // 백엔드 API 엔드포인트
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
    <DataTable
      title="Order Information"
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
    />
  );
};

export default Admin;
