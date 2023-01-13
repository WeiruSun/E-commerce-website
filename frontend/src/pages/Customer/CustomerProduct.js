import { Menu } from 'antd'
import React, { useState } from 'react'
import { AppstoreOutlined } from '@ant-design/icons'
import { Input, Row, Col } from 'antd'
const { Search } = Input
function CustomerProduct () {
  const startSearch = () => {
    console.log('search')
  }
  const toComputer = () => {
    console.log('toComputer')
  }

  const toVideogame = () => {
    console.log('toVideo')
  }
  const toCellphone = () => {
    console.log('toCell')
  }


  function getItem (label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    }
  }
  const rootSubmenuKeys = ['sub1']
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  const items = [
    getItem('Product Type', 'sub1', <AppstoreOutlined />, [
      getItem('Cellphone', '1', <AppstoreOutlined onClick={toCellphone} />),
      getItem('Computer', '2', <AppstoreOutlined onClick={toComputer} />),
      getItem('Videogame', '3', <AppstoreOutlined onClick={toVideogame} />)
    ])
  ]
  return (
    <>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}
        items={items}
      />
      <Row className="offsetMerSearch">
        <Col>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={startSearch}
          />
        </Col>
      </Row>

    </>
  )
};

export default CustomerProduct