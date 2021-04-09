import React, { Component } from 'react';
import BootstrapCard from './Cards/CardUI.jsx';
import housetoken from './../Assets/house-tokens.jpg';
import gofundme from '../Assets/gofundme.jpg';
import lotto from '../Assets/lottery.jpg';
import { Button, Collapse } from 'react-bootstrap';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;

    this.state = {
      open: false
    }
  }

  render() {


    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-2">Current Projects</h2>
            <>
              <a
                onClick={() => this.setState({open: !this.state.open})}
                aria-controls="example-collapse-text"
                aria-expanded={this.state.open}
              >
                click
              </a>
              <Collapse in={this.state.open}>
                <div id="example-collapse-text">
                  COLLAPSE ME!!!!!!!!!!!!!!!!!!!!!!!!!!!
                </div>
              </Collapse>
            </>
          <div className="row justify-content-center">
            <div id="carouselExampleIndicators" className="carousel slide w-75" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src={housetoken} style={{height:'500px'}} alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={gofundme} style={{height:'500px'}} alt="Second slide"/>
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Go Fund Me!</h5>
                        <p>...</p>
                      </div>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src={lotto} style={{height:'500px'}} alt="Third slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>



          <div className="row justify-content-center">
            <div className="card mb-3">
              <div className="card-header">Featured Project</div>
            <img className="card-img-top h-50" src={gofundme} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row justify-content-center">
            
          {
            this.projects.map((data, index) => (
              
              <BootstrapCard 
                imgsrc={require(`../Assets/${data.image}.jpg`)} 
                title={data.projectName} 
                cardtext={data.projectDetail}
                link={data.link}
                applink={data.applink}
              />
              
            ))
          }
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}



export default Projects;
