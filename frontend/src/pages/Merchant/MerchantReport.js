import { useState, useEffect } from "react"
import { Table } from "antd"
import { useParams } from "react-router-dom"
import axios from "axios"
function MerchantReport () {
  const columns1 = [
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
    },
    {
      title: 'Selling_Quantity',
      dataIndex: 'Selling_Quantity',
      key: 'Selling_Quantity',
    },
  ]

  const columns2 = [
    {
      title: 'Customer_ID',
      dataIndex: 'Customer_ID',
      key: 'Customer_ID',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
      title: 'Contact_number',
      dataIndex: 'Contact_number',
      key: 'Contact_number',
    },
    {
      title: 'buyNum',
      key: 'buyNum',
      dataIndex: 'buyNum',

    },

  ]
  const [data1, setData1] = useState()
  const [data2, setData2] = useState()




  //开始时请求shopid 

  //从url中获取merchant id 再获取shop id
  const routeParams = useParams()
  const curId = routeParams.id
  //console.log(curId)
  const [shopId, setShopId] = useState()

  //存入data1 代表sales

  useEffect(() => {
    async function getProduct1 () {
      if (typeof (shopId) !== "undefined") {
        const res1 = await axios.get(`http://127.0.0.1:8000/merchant/shop/${shopId}/sales/`)
        console.log('sales', res1.data, shopId)
        setData1(res1.data)
      }

    }
    getProduct1()
  }, [shopId])
  //存入data2 代表VIP
  useEffect(() => {
    async function getProduct2 () {
      if (typeof (shopId) !== "undefined") {
        const res2 = await axios.get(`http://127.0.0.1:8000//merchant/shop/${shopId}/vip/15`)
        console.log('vip', res2.data, shopId)
        setData2(res2.data)
      }

    }
    getProduct2()
  }, [shopId])

  useEffect(() => {
    async function getShopId () {
      const res = await axios.get(`http://127.0.0.1:8000/merchant/${curId}/shop/`)
      //console.log(res, curId)
      //console.log(res.data[0].shop_id)
      setShopId(res.data.Shop_ID)
    }
    getShopId()
  }, [curId])




  return (
    <>
      <div>
        This is Sales report
      </div>
      <Table dataSource={data1} columns={columns1} />
      <div>
        This is VIP info
      </div>
      <Table dataSource={data2} columns={columns2} />
    </>
  )
};

export default MerchantReport