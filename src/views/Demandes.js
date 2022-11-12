import React from "react";

// reactstrap components
import {

  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  CardFooter
} from "reactstrap";
import * as Icon from 'react-bootstrap-icons';
import cin from "../assets/img/CIN.png"
import { Button} from "react-bootstrap";

function Demandes() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="7">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Demande de completion de compte</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th> <input type="checkbox" id="" name=""/></th>
                     
                      <th>Nom prénom </th>
                      <th>Prof</th>
                      <th>Email</th>
                      <th>Carte</th>
                      <th>Status</th>
                      <th >Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="checkbox" id="" name=""/></td>
                 
                      <td>Bill Gates</td>
                      <td>Etudiant</td>
                      <td>moises@gmail.com</td>
                      <td>CNI</td>
                      <td>NV</td>
                      <td >
                      
                      <Icon.PencilSquare color="blue"   size="25"/>
                 &nbsp;
                    <Icon.Trash3 color="red" size="25"/>
                    &nbsp;
                    <Icon.ThreeDotsVertical color="black" size="15"/>&nbsp;
                    <Icon.CaretDownFill color="black" size="15"/>

                      </td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" id="" name=""/></td>
                     
                      <td>Bill Gates</td>
                      <td>Etudiant</td>
                      <td>moises@gmail.com</td>
                      <td>CNI</td>
                      <td>NV</td>
                      <td ></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" id="" name=""/></td>
                   
                      <td>Bill Gates</td>
                      <td>Etudiant</td>
                      <td>moises@gmail.com</td>
                      <td>CNI</td>
                      <td>NV</td>
                      <td className="text-right"></td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" id="" name=""/></td>
                     
                      <td>Bill Gates</td>
                      <td>Etudiant</td>
                      <td>moises@gmail.com</td>
                      <td>CNI</td>
                      <td>NV</td>
                      <td className="text-right"></td>
                    </tr>
                   
                   
                   
                   
                  </tbody>
                </Table>
              </CardBody>
            </Card>

          </Col>
          <Col md="5">
            <Card className="card-user">
              <div className="image">
                <img alt="..." src={require("assets/img/logo.png")} />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg")}
                    />
                    <h5 className="title">Kumavi Moise</h5>
                  </a>
                  <p className="description">A Propos</p>
                </div>
                <p className="description text-center">
                  Demande de completion de  <br />
                  compte <br />
                </p>
                <ul className="list-unstyled team-members">
                <li><hr />
                    <Row>
                      <Col md="6" xs="6">
                      Nom et prénoms <br />
                        <span className="text-muted">
                          <small></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="6" xs="6">
                      <p>Kumavi moise</p>
                      </Col>
                    </Row>
                  </li>
                  <li><hr />
                    <Row>
                      <Col md="6" xs="6">
                      Profession<br />
                        <span className="text-muted">
                          <small></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="6" xs="6">
                      <p>Etudiant</p>
                      </Col>
                    </Row>
                  </li>
                  <li><hr />
                    <Row>
                      <Col md="4" xs="4">
                      Email<br />
                        <span className="text-muted">
                          <small></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="8" xs="8">
                      <p>monmail@gmail.com</p>
                      </Col>
                    </Row>
                  </li>
                  <li><hr />
                    <Row>
                      <Col md="6" xs="6">
                      Numéro<br />
                        <span className="text-muted">
                          <small></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="6" xs="6">
                      <p>+228 90870167</p>
                      </Col>
                    </Row>
                  </li>
                   <li><hr />
                    <Row>
                      <Col md="6" xs="6">
                      S 
                        <span className="text-muted">
                          <small></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="6" xs="6">
                      <p>M</p>
                      </Col>
                    </Row>
                  </li>
                 
                  
                  
                 
                
                  
                 
                 
                
                <li><br />
                    <Row>
                      <Col md="6" xs="6">
                      Type de carte<br />
                        <span className="text-muted">
                          <small></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="6" xs="6">
                      <p>Carte d’Identité</p>
                      </Col>
                    </Row>
                  </li>
                   
                  <li><hr />
                    <Row>
                      <Col md="6" xs="6">
                      Status<br />
                        <span className="text-muted">
                          <small></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="6" xs="6">
                      <p>Validé</p>
                      </Col>
                    </Row>
                  </li>
                  <li>
                 
                    <Row>
                      <Col md="8" xs="8">
                      Details profil <br />
                        <span className="text-muted">
                          <small>Voir les details de la carte &nbsp;<Icon.CaretDownFill color="black" size="15"/></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="7" xs="7">
                      <p> </p>
                      </Col>
                    </Row>
                  </li>
                  <hr />
                  <div className="logo-img">
            <img src={cin} alt="react-logo" width ={250} height ={100} />
          </div>
          <li><hr />
                 
                 <Row>
                   <Col md="8" xs="8">
                   Details du véhicule &nbsp; <Icon.CaretDownFill color="black" size="15"/><br />
                     <span className="text-muted">
                       <small></small>
                     </span>
                   </Col>
                   <Col className="text-right" md="7" xs="7">
                   <p> </p>
                   </Col>
                 </Row>
               </li>
                  <li><hr />
                    <Row>
                      <Col md="6" xs="6">
                      <Icon.Circle color="#03A9F5" size="10"/> &nbsp;  Marque  <br />
                        <span className="text-muted">
                          <small></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="6" xs="6">
                      <p>Apsonic</p>
                      </Col>
                    </Row>
                  </li>
                  
                  <li><hr />
                    <Row>
                      <Col md="6" xs="6">
                      <Icon.Circle color="#03A9F5" size="10"/> &nbsp;   Serie <br />
                        <span className="text-muted">
                          <small></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="6" xs="6">
                      <p>DE</p>
                      </Col>
                    </Row>
                  </li>
                  <li><hr />
                    <Row>
                      <Col md="6" xs="6">
                      <Icon.Circle color="#03A9F5" size="10"/> &nbsp; Immatriculation <br />
                        <span className="text-muted">
                          <small></small>
                        </span>
                      </Col>
                      <Col className="text-right" md="6" xs="6">
                      <p>BB 0000</p>
                      </Col>
                    </Row>
                  </li>
                  <hr />
                  
                  </ul>
              </CardBody>
              <CardFooter>
                
                <div className="button-container">
                  <Row>
                    
                  </Row>
                </div>
              </CardFooter>
            </Card>

          </Col>
        </Row>
      </div>
    </>
  );
}

export default Demandes;
