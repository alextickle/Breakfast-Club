import React, { Component } from 'react';
import Coverflow from 'reactjs-coverflow';
import SideBarContainer from '../containers/SideBarContainer';
import SideBarMiniContainer from '../containers/SideBarMiniContainer';
import Header from '../components/Header';

class Photos extends Component {
	prev(e) {
		e.preventDefault();
		this.refs.coverflow.previous();
	}

	next(e) {
		e.preventDefault();
		this.refs.coverflow.next();
	}

	render() {
		return (
			<div className="wrapper">
				<SideBarContainer />
				<div className="slideshow-page">
					<div className="nested">
						<Header />
						<SideBarMiniContainer />
						<div className="page-title">Photos</div>
						<form>
							<button
								className="entry-button wobble"
								onClick={this.prev.bind(this)}
								type="button"
							>
								&#8592;
							</button>
							<Coverflow
								ref="coverflow"
								style={{ width: '1100px', height: '600px' }}
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
								onClick={this.next.bind(this)}
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
}
export default Photos;
