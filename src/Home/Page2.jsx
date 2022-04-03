import React from 'react';
import { Row, Col, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { FormattedMessage } from 'react-intl';

import svgBgToParallax from './util';

const page2Data = [
 
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/EPaPtDVGnJhyqyBAUZMl.svg',
    name: 'Ant Design Pro',
    slogan: (<FormattedMessage id="app.home.product-pro-slogan" />),
  },

 ];

const svgBgChild = [
  (
    <svg width="100%" height="100%" viewBox="0 0 1401 1109" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" preserveAspectRatio="xMidYMid slice" >
      <g transform="translate(-79.000000, -21.000000)">
        <circle id="Oval-13" stroke="none" fill="#EBEDF0" fillRule="evenodd" cx="98.5" cy="98.5" r="98.5" />
        <rect id="Rectangle-33" stroke="none" fill="#EBEDF0" fillRule="evenodd" transform="translate(1261.132034, 1217.132034) rotate(45.000000) translate(-1261.132034, -1217.132034) " x="1111.13203" y="1007.13203" width="300" height="300" rx="1" />
        <circle id="Oval-13" stroke="#EBEDF0" strokeWidth="16" fill="none" cx="1402" cy="151" r="70" />
        <path d="M385.032144,960.394832 L394.316344,976.475539 C394.868629,977.432124 394.540879,978.655305 393.584293,979.20759 C393.280255,979.383126 392.935367,979.475539 392.584293,979.475539 L374.015893,979.475539 C372.911323,979.475539 372.015893,978.580108 372.015893,977.475539 C372.015893,977.124466 372.108305,976.779577 372.283842,976.475539 L381.568042,960.394832 C382.120327,959.438247 383.343508,959.110497 384.300093,959.662781 C384.604131,959.838318 384.856607,960.090794 385.032144,960.394832 Z" id="Polygon-2" stroke="none" fill="#A3B1BF" fillRule="evenodd" transform="translate(383.300093, 970.709623) rotate(70.000000) translate(-383.300093, -970.709623) " />
        <path d="M545.537489,211.431472 L552.545207,223.569196 C553.097492,224.525781 552.769741,225.748962 551.813156,226.301246 C551.509118,226.476783 551.164229,226.569196 550.813156,226.569196 L536.79772,226.569196 C535.693151,226.569196 534.79772,225.673765 534.79772,224.569196 C534.79772,224.218122 534.890133,223.873234 535.06567,223.569196 L542.073387,211.431472 C542.625672,210.474887 543.848853,210.147137 544.805438,210.699421 C545.109477,210.874958 545.361952,211.127434 545.537489,211.431472 Z" id="Polygon-2" stroke="none" fill="#A3B1BF" fillRule="evenodd" transform="translate(543.805605, 218.500167) rotate(90.000000) translate(-543.805605, -218.500167) " />
        <g id="Group-26" transform="translate(146.000000, 338.000000)" fill="#FADB14">
          <image xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/UtBesTOkoZsBUxPqfDlZ.svg" />
        </g>
      </g>
    </svg>
  ),
  (
    <svg width="1311px" height="920px" viewBox="0 0 1311 920" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group-29" transform="translate(283.000000, 920.000000)" fill="#2F54EB">
        <image xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/VrADJaRPMnFjmtmIhObV.svg" />
      </g>
      <circle id="Oval-8" stroke="#13C2C2" strokeWidth="4" opacity="0.95" cx="1096" cy="11" r="11" />
      <circle id="Oval-8" stroke="#13C2C2" strokeWidth="4" cx="11" cy="667" r="11" />
      <g id="Group-11" transform="translate(1207.000000, 419.000000)" fill="#13C2C2">
        <image xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/MnLEmwjipfhzPUmBJnJE.svg" />
      </g>
      <g id="Group-28" transform="translate(884.000000, 821.000000)" fill="#2F54EB">
        <image xlinkHref="https://gw.alipayobjects.com/zos/rmsportal/dyNuxLOZtvjoHSVisbhQ.svg" />
      </g>
    </svg>
  ),
];

const svgBgChildArray = svgBgChild.map((item, i) => {
  const { props } = item;
  return React.cloneElement(item, { children: svgBgToParallax(props.children, i) });
});
export default function Page2({ isMobile }) {
  const componentButton = (
    <div key="b" className="components-button-wrapper">
      {/* <a>Ant Design of React <Icon type="right" /></a>
      <a>Ant Design of Angular <Icon type="right" /></a> */}
    </div>
  );
  const children = page2Data.map((item, i) => {
    if (!isMobile && !i) {
      return null;
    }
    const content = isMobile && !i ? componentButton : [
      <p key="p">{item.slogan}</p>,
      <a key="a">learn more <Icon type="right" /></a>,
    ];
    return (
      <Row className="product-block" key={i.toString()}>
        <Col
          xs={8}
          md={i === 2 ? 6 : 8}
          className={`block-image-wrapper${i % 2 ? ' right' : ''}`}
        >
          <img src={item.img} style={isMobile && i === 2 ? { marginLeft: 16 } : {}} />
        </Col>
        <Col xs={16} md={i === 2 ? 18 : 16} className="block-text-wrapper">
          <h4>{item.name}</h4>
          {content}
        </Col>
      </Row>
    );
  });
  return (
    <div className="home-page-wrapper page2" id="page2">
      <div className="page" >
        <h2>About Us</h2>
        <ScrollOverPack component={Row} className="page2-content" playScale="0.4">
          <QueueAnim
            component={Col}
            componentProps={{ xs: 24, md: 12 }}
            className="page2-components"
            key="left"
            type="bottom"
            leaveReverse
          >
            <h3 key="h1">The company</h3>
            <p key="p">Awap Investors Limited is a global investment platform from Eastern Nigeria founded by Okorie Caleb Ezechima (Ability) in the year 2021 with her Headquarters at Ebonyi State, Nigeria. Its registered under cooperate affairs commission and licensed by Nigerian export promotion council. 
Awap investors limited is a universal investment platform born out of the passion for trade and commerce, minimization of frauds and scams, profitizing our social life and mostly using technology to maximize our incomes and live our dream life.
Awap investors limited is a cooperate company that base on the following business sectors below:
<ul>
<li>Agriculture</li>
<li>Real estate investment</li>	
<li>Forex Trading</li>	
<li>Financial Service</li>	
</ul>
Awap investors limited invest her capital into the above four (4) main business sectors to make a good profit and as well promote trade and commerce around the globe. Awap investors is been structured to have and accommodate others investors who will invest in her business concept and partake in the decision making and profit sharing.

Awap as a company with her expertise in trade and commerce are in a journey to change lives of her investors using technology and giving the market a digital approach
</p>
            {componentButton}
          </QueueAnim>
          <QueueAnim
            component={Col}
            componentProps={{ xs: 24, md: 12 }}
            className="page2-product"
            key="right"
            type="bottom"
            leaveReverse
          >
             <h3 key="h1">Our Business</h3>
            <p key="p">Awap Investors Limited is pan African company which aims at using the necessary available businesses and digital strategies to boast the continental and global economy. We venture our resources and strategies into the business sectors below;
            <ul>
<li>Agriculture</li>
<li>Real estate investment</li>	
<li>Forex Trading</li>	
<li>Financial Service</li>	
</ul>
<h3>AGRICULTURE</h3>
<p>Agriculture is one of the basic sources of income to Awap investors. To this end, the company invests a higher percentage of her capital into agricultural products in both raw materials and finished goods.
We use our capital and move into agricultural dominated areas like; Benue, Ebonyi, Cross River, Nasarawa and many other Northern part of the country and purchase the agricultural products such as rice, yam, oil, garri, egusi and beans etc and transport it to non-agricultural area and highly populated towns like Bayelsa, Port-Harcourt, Owerri, Lagos and Abuja etc. for sales and maximization of profit.
Awap propose to generate about $50,000  monthly in trade and businesses, as the company will mainly engage in building of farms, construction of agro-base industries and companies, This is to be actualized through the use of the regional staff and agents in the execution of the sales and other farming operations.</p>
<h3>REAL ESTATE INVESTMENT</h3>
<p>Landed property as one of the most basic asset of human with huge profits as it has been set to always appreciate in value and never to depreciate. 
Awap investors invest her capital into real estate through the buying and selling of lands and properties at different locations and cities. Developing and managing of estates and building of structures. 
How Do We Make Profit? With the help of the company digital media, agents and connections with buyers and sellers to buy lands and properties at a cheaper rate and sell at higher rate immediately or after some periods through our real estate management and make profits from our investments</p>

<h3>FOREX TRADING</h3>
<p>Forex Trading has been discovered long ago as one of the most lucrative ventures of human at all times, 
Awap investors using some quota of her capital, invest in the foreign exchange market using her company team of expertise on Forex trade and with the use of analytical tools and technology to make a reasonable profit and returns to the company.
The foreign exchange market have become a very good source of income to many financial institute which sustains many companies and boast the economy and financial status of many companies</p>
<h3>FINANCIAL SERVICES</h3>
<p>It's important to know that favourable financial services ensure the proper growth and promotion of domestic as well as foreign trade. 
AWAP INVESTORS LTD in a mission to provide a transparent and beneficial financial services to her members renders services such as SAVINGS, LOANING, INVESTMENTS. 
The above financial services will in many ways promote the business growth of her members with huge passive and active income and as well solve the financial fraud and crises in the digital space and build reliable system to embrace financial possibilities.</p>
</p>
            {componentButton}
          </QueueAnim>
        </ScrollOverPack>
      </div>
      <div className="parallax-bg bottom" >
        {svgBgChildArray[0]}
      </div>
      <div className="parallax-bg top" >
        {svgBgChildArray[1]}
      </div>
    </div>
  );
}
