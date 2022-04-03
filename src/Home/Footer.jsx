import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'bisheng/router';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col md={12} sm={24} xs={24}>
            <div className="footer-center">
              <h2>AWAP</h2>
              <div>
                <a target="_blank " href="#">
                  Privacy
                </a>
              </div>

            </div>
          </Col>
          <Col md={12} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Contact info</h2>
              <div>
                <span>email</span>
                <span> - </span>
                <a href='mailto:info@awapinvestors.com'>info@awapinvestors.com</a>
              </div>


            </div>
          </Col>
          {/* <Col md={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2><FormattedMessage id="app.footer.community" /></h2>
              <div>
                <a href="/changelog">
                  <FormattedMessage id="app.footer.change-log" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ant-design/ant-design/wiki/FAQ">
                  <FormattedMessage id="app.footer.faq" />
                </a>
              </div>
             
              
            </div>
          </Col> */}

        </Row>
      </div>
      <Row className="bottom-bar">
        <Col md={4} sm={24} />
        <Col md={20} sm={24}>
          <span
            style={{
              lineHeight: '16px', paddingRight: 12, marginRight: 11, borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Link>privacy</Link>
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span style={{ marginRight: 12 }}>RC-1886106</span>
            </a>
          </span>

          <span style={{ marginRight: 12 }}>Copyright © AWAP</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
