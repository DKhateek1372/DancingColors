/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Empty } from 'antd';
import Searchbar from '../components/UiSearch/index';
import utils from '../utils/index';
import '../styles/index.css';
import 'antd/dist/antd.css'

const colorCombo = (props) => {

  const [search, setSearchState] = React.useState({
    searchText: "",
  });

  const [color, setColor ] = React.useState(null);
  const [colorBucket, setColorBucket] = React.useState([]);

  let { searchText } = search;

  const bookSearchHandler = (e) => {
    setSearchState(e.target.value);
  }

  const generateColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    let colorList = [];
    for (var i = 0; i < searchText.length; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      colorList.push(color);
      setColorBucket(colorList);
    }
  };

  useEffect(() => {
    generateColor();
  }, []);

  const selectedColor = (color) =>{
    setColor(color);
  }

  const clearAll = () =>{
    setColorBucket([]);
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Col className="text-hn-orange items-center justify-between">
            <h1 className="text-3xl">Cogknit Task</h1>{' '}
            <hr className="border mtl-6"></hr>
          </Col>
          <Col lg={12} md={12} className="p-4 inFlex parent marginBooks" >
            <Col lg={6} md={6} className="width50">
              <h1 className="text-3xl">Palette</h1>{' '}
              <div className="parent">
                {
                  colorBucket.length> 0 ? 
                  colorBucket.map((color, index) =>(
                    <div className="colorList" onClick={()=> selectedColor(color)}>
                      {color}
                    </div>
                  )):
                  (
                    <Col lg={12} md={12} className="p-4 inFlex parent marginAuto" >
                      <Empty />
                    </Col>
                  )
                }
              </div>
            </Col>
            <Col lg={6} md={6} className="width50">
              <Col lg={12} md={12}>
                <Searchbar bookSearchHandler={bookSearchHandler} searchBar={searchText} />
                <button className="btn_Button btnPreview" onClick={() => generateColor()}>Preview</button>{' '}
                <button className="btn_Button btnBorrow" onClick={() => clearAll()}>Borrow</button>{' '}
              </Col>
              <Col lg={12} md={12}>
                <h1 className="text-3xl">Selected Color</h1>{' '}
                <div className="colorPreview">
                  {color}
                </div>
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};


export default colorCombo;
