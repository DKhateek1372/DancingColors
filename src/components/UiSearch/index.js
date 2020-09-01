import * as React from 'react'
//eslint-disable-next-line
import '../../styles/index.css';

const Searchbar = (props) => {
    const { serachBar, bookSearchHandler , generateColor, clearAll } = props;
    return (
        <div>
             <input
                    placeholder="Please Search Here (Book Number, Title)"
                    margin="normal"
                    value={serachBar}
                    onChange={bookSearchHandler} 
                    className="searchBooks"
                />
                <button className="btn_Button btnPreview marginBtn" onClick={generateColor}>Generate Color</button>{' '}
                <button className="btn_Button btnBorrow " onClick={clearAll}>Clear All</button>{' '}
        </div>
    )
}
export default Searchbar;