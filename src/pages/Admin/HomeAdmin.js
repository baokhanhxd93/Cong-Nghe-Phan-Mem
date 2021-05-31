import React from "react";
import { Statistic, Row, Col, Button, Card} from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';


export default class HomeAdmin extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Card>
                                <Statistic title="Employees" value={10} />
                            </Card>
                        </Col>

                        <Col span={8}>
                                <Card>
                                    <Statistic
                                    title="New"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                    title="Resign"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                    </Row>
                </div>

                <div>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Card>
                                <Statistic title="Dish" value={10} />
                            </Card>
                        </Col>

                        <Col span={8}>
                                <Card>
                                    <Statistic
                                    title="Add new"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                    title="Delete"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                    </Row>
                </div>

                <div>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Card>
                                <Statistic title="Total order per day" value={10} />
                            </Card>
                        </Col>

                        <Col span={8}>
                                <Card>
                                    <Statistic
                                    title="growth"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                    title="decrease"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                    </Row>
                </div>

                <div>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Card>
                                <Statistic title="Total order per week" value={10} />
                            </Card>
                        </Col>

                        <Col span={8}>
                                <Card>
                                    <Statistic
                                    title="growth"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                    title="decrease"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                    </Row>
                </div>

                <div>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <Card>
                                <Statistic title="Total order per month" value={10} />
                            </Card>
                        </Col>

                        <Col span={8}>
                                <Card>
                                    <Statistic
                                    title="growth"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card>
                                    <Statistic
                                    title="decrease"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<ArrowDownOutlined />}
                                    suffix="%"
                                    />
                                </Card>
                            </Col>
                    </Row>
                </div>
            </div>
        )
    }
}