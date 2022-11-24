import Chart from "../../components/chart/Chart"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import List from "../../components/list/List"
import "./single.scss"

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="itemImg" />
                <div className="details">
                  <h1 className="itemTitle">Leo</h1>
                  <div className="detailedItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">dt.duytan1999@gmail.com</span>
                  </div>
                  <div className="detailedItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+0977056177</span>
                  </div>
                  <div className="detailedItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">119 Dht 02, HCM</span>
                  </div>
                  <div className="detailedItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Viet Nam</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={3 / 1} title="User Spending ( Last 6 Month )"/>
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transaction</h1>
            <List />
          </div>
      </div>
    </div>
  )
}

export default Single