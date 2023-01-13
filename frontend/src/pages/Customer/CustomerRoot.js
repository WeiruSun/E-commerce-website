import { Col, Row, Button } from 'antd'
import { useParams, useNavigate } from 'react-router-dom'
import './index.scss'

function CustomerRoot () {
  const routeParams = useParams()
  const curId = routeParams.id
  console.log(curId)


  const navigate = useNavigate()
  const toOrder = () => {
    navigate(`/${curId}/customerHome/order`)
  }
  const toProduct = () => {
    navigate(`/${curId}/customerHome/product`)
  }


  return (
    <>
      <Row className="offsetCusSearch" gutter={[16, 24]}>
        <Col className="gutter-row" span={12}>
          <Button type="primary" onClick={toOrder}>View Orders</Button>
        </Col>
        <Col className="gutter-row" span={12}>
          <Button type="primary" onClick={toProduct}>View Products</Button>
        </Col>
      </Row>
    </>
  )
};

export default CustomerRoot