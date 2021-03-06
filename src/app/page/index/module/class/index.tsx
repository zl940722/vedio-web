import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {store} from './store'
import * as style from "./style.pcss";
import {Button} from 'antd';
import {Footer} from 'component/footer'

@observer
export default class Business extends Component<any, any> {

    constructor() {
        super();
        store.load()
    }

    public render() {
        return (
            <div style={{background: '#fff'}}>
                111
                <Product {...this.props} />
                <Footer/>
            </div>
        )
    }
}

@observer
export class Product extends Component<any, any> {

    // 查看详细
    public clickDetail = (id) => {
        return () => {
            this.props.history.push(`/class/detail/${id}`);
        }
    }

    // 立即购买
    public onClick = (id) => {
        return () => {
            // const redirectUrl = process.env.REDIRECT_URL;
            store.isUserInfo().subscribe(data => {
                this.props.history.push(`/login/${id}`);
                // if (data.success) {
                //     // window.location.href = redirectUrl + "pay.html#/?id=" + id;
                //     this.props.history.push(`/login/${id}`);
                // } else {
                //     this.props.history.push(`/login/${id}`);
                // }
            });
        }
    }

    public render() {
        return (
            <div style={{width: '60%', margin: '100px auto'}}>
                <div>
                    {
                        store.list.map((item) => (
                            <div className={style.pricingBoxItem}>
                                <div onClick={this.clickDetail(item.item_id)} className={style.pricingHeading}>
                                    <img src={item.img}/>
                                </div>
                                <div className={style.pricingContainer}>
                                    <h1>{item.title}</h1>
                                    <p>学院:骑牛摆渡</p>
                                    <p>讲师:骑牛摆渡</p>
                                    <p>课时:5 频次:5 周期:1</p>
                                    <p>类型:精品课程</p>
                                    <p className={style.context}>课程介绍:{item.biz_custom_desc}</p>
                                </div>
                                <div className={style.pricingTerms}>
                                    <p>{item.price / 100}元/季度</p>
                                    <Button type={'primary'} onClick={this.onClick(item.item_id)}>立即购买</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

@observer
export class Bottom extends Component<any, any> {
    public render() {
        return (
            <div>
                <div className={style.container}>
                    <div className={style.titleText}>
                        战略咨询
                    </div>
                    <div className={style.descText}>
                        为客户提供战略分析、战略选择、盈利模式设计、战略规划、战略保障体系设计、战略执行、战略评估、战略管理培训、细分的战略专题研究、战略突破行动、年度行动计划等服务，并致力于把战略管理的理念、知识、方法和工具传递给客户，促使客户内生相应的知识和能力。
                    </div>

                </div>

                <div className={style.container}>
                    <div className={style.titleText}>
                        流程体系建设
                    </div>
                    <div className={style.descText}>
                        通过价值链分解、行业对标，建立分层分类的流程框架，采用明德商务扫描工具进行流程评审，基于战略对流程提出改善与再造方案，完成流程图、书、表、数四位一体配套文件，协助企业实现流程的信息化。
                    </div>

                </div>

                <div className={style.container}>
                    <div className={style.titleText}>
                        流程改善
                    </div>
                    <div className={style.descText}>
                        一、当前企业可能面临的流程问题
                        1、企业原有流程体系，与经营环境或业务结构的变化不匹配、效率低下、成本与风险之没有形成有效的平衡；
                        2、企业内部部分核心流程缺失，流程不完整，流程层次不清晰；
                        3、企业对部分流程风险缺乏控制，或者管控不当；
                        4、流程制度一大堆，但缺乏执行落地，精细化和量化管理只是口号，没法落实
                        5、企业战略的调整、业务的重新组合，如何通过价值链的优化来支撑？
                    </div>
                    <div className={style.descText}>
                        二、广锦商务的解决思路
                        1、对企业当前的组织流程进行调研及诊断；
                        2、对企业的责权体系进行梳理；
                        3、运用价值链分析法、职责细分法、参照法对企业流程制度框架的搭设；
                        4、流程、制度评审、对标及优化；
                        5、配套文件编制及发布，推进流程体系建设及优化的落地实施。
                    </div>
                </div>

                <div className={style.container}>
                    <div className={style.titleText}>
                        培训服务
                    </div>
                    <div className={style.descText}>
                        广锦商务咨询有限公司本质上是帮助企业设计赢得竞争的蓝本，成功的关键在于深入行业理解和全视角市场研判基础上竞争模式与竞争格局的设计，导航企业跨越式发展的最优路径。
                        广锦商务建立了丰富的行业数据库、典型企业数据库和标杆样本，与全球行业领袖企业、资本市场研究机构和政策研究机构、学术研究机构分享数据。四川明德商务强化战略规划与市场体系的融合，强调战略规划的实施落地，通过督导机制和战略成熟度评价体系关注客户业务和竞争力的进步。
                    </div>

                </div>
            </div>
        )
    }

}
