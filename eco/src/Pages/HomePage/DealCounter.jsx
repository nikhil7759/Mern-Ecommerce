
import MyTime from "../../component/Timer"
import Button from '@mui/material/Button';
import "./DealCounter.css"


const DealCounter = () => {
  return (
    <>
    
    <section className="categoriess spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="categories__text">
                        <h2><span>Men Fashion</span></h2>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="categories__hot__deal">
                        <img src="https://i.postimg.cc/d3QNWDjz/codifyformatter-3-1.png" alt=""/>
                        <div className="hot__deal__sticker">
                            <span>Upto Off</span>
                            <h5>60%</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1">
                    <div className="categories__deal__countdown">
                        <span>Deal Of The Week</span>
                        <h2>Multi-pocket Chest Bag Black</h2>
                        <MyTime />
                       
                    </div>
                    <div className="button__timer">
                    <Button variant="contained" className="shopno"><span className="letter">Shop now</span> </Button>
                    </div>
                </div>
            </div>
        </div>
  
    </section> </>
  )
}

export default DealCounter