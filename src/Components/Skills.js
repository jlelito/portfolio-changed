import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import BootstrapCard from './Cards/CardUISkills.jsx';
import blockImg from './../Assets/blockchainImg.png';
import webImg from './../Assets/front-end-web-development.jpg';
import programImg from './../Assets/program.jpg';


class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <div className="row">
            
            <BootstrapCard
              title="Web Development"
              imgsrc={webImg}
              cardtext={this.skills.webdev.map((data, index) => (
                <li >
                  {data}
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </li>
              ))
            }
            />

            <BootstrapCard
              title="Blockchain"
              imgsrc={blockImg}
              cardtext={this.skills.blockchain.map((data, index) => (
                <li>
                  {data}
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </li>
              ))
            }
            />

              <BootstrapCard
              title="Programming"
              imgsrc={programImg}
              cardtext={this.skills.program.map((data, index) => (
                <li>
                  {data}
                  <FontAwesomeIcon icon={faCheckCircle} color="green" />
                </li>
              ))
            }
            />
          
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
