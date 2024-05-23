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

  const deliveryStatusText = (status) => {
    switch (status) {
      case "0":
        return "배송전";
      case "1":
        return "입고";
      case "2":
        return "배송중";
      case "3":
        return "배송완료";
      default:
        return "알 수 없음";
    }
  };

  const handleStatusChange = (id, orderNum, newStatus) => {
    // 여기에 상태 변경 로직을 추가하세요. 예를 들어, API 호출 등.
    console.log(`Change status for ID ${id} to ${orderNum} to ${newStatus}`);
  };

  const renderButtons = (row) => (
    <div>
      <button onClick={() => handleStatusChange(row.id, row.order_num, 0)}>
        배송전
      </button>
      <button onClick={() => handleStatusChange(row.id, row.order_num, 1)}>
        입고
      </button>
      <button onClick={() => handleStatusChange(row.id, row.order_num, 2)}>
        배송중
      </button>
      <button onClick={() => handleStatusChange(row.id, row.order_num, 3)}>
        배송완료
      </button>
    </div>
  );

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "이름",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "주문번호",
      selector: (row) => row.order_num,
      sortable: true,
    },
    {
      name: "상품명",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "가격",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "배송 상태",
      selector: (row) => deliveryStatusText(row.delivery_status),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => renderButtons(row),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "500px", // 너비를 200px로 설정
    },
  ];

  return (
    <div className="App">
      <DataTable
        title="꿈비 배송상태 컨트롤러"
        columns={columns}
        data={data}
        progressPending={loading}
        pagination
      />
    </div>
  );
};

export default Main;
