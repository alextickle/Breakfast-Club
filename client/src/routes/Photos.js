import React from "react";
import Coverflow from "reactjs-coverflow";
import SideBar from "../components/SideBar";
import SideBarMini from "../components/SideBarMini";
import Header from "../components/Header";

const Photos = (props) => {
  const prev = (e) => {
    e.preventDefault();
    refs.coverflow.previous();
  }

  const next = (e) {
    e.preventDefault();
    refs.coverflow.next();
  }

    return (
      <div className="wrapper">
        {/* //this is the flex container */}
        <SideBar />
        {/* //this is a flex item  with a nested flex container */}
        <div className="slideshow-page">
          {/* //this is a flex item */}
          <div className="nested">
            {/* //this is a nested flex container */}
            <Header />
            <SideBarMini />
            <div className="page-title">Photos</div>
            <form>
              <button
                className="entry-button wobble"
                onClick={prev.bind(this)}
                type="button"
              >
                &#8592;
              </button>
              <Coverflow
                ref="coverflow"
                style={{ width: "1100px", height: "600px" }}
                startPosition={4}
                enableScroll={true}
                animationSpeed={0.8}
              >
                <img src="../Images/1.jpg" alt="breakfast club" />
                <img src="../Images/2.jpg" alt="breakfast club" />
                <img src="../Images/3.jpg" alt="breakfast club" />
                <img src="../Images/4.jpg" alt="breakfast club" />
                <img src="../Images/5.jpg" alt="breakfast club" />
                <img src="../Images/6.jpg" alt="breakfast club" />
                <img src="../Images/7.jpg" alt="breakfast club" />
                <img src="../Images/8.jpg" alt="breakfast club" />
                <img src="../Images/9.jpg" alt="breakfast club" />
                <img src="../Images/10.jpg" alt="breakfast club" />
                <img src="../Images/11.jpg" alt="breakfast club" />
                <img src="../Images/12.jpg" alt="breakfast club" />
                <img src="../Images/13.jpg" alt="breakfast club" />
              </Coverflow>
              <button
                className="entry-button wobble"
                onClick={next.bind(this)}
                type="button"
              >
                &#8594;
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}
export default Photos;
