import { Triangle } from "react-loader-spinner";
import"./LoaderMain.css"


const LoaderMain = () => {
  return (
    <div className="loader__main">
        <Triangle
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
  )
}

export default LoaderMain