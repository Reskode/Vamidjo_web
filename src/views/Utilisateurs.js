/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import * as Icon from 'react-bootstrap-icons';


function Utilisateurs() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Liste des utilisateurs</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>N°</th>
                      <th>Nom prénom du client </th>
                      <th>Lieu de départ</th>
                      <th>Destination</th>
                      <th>Heure de départ</th>
                      <th className="text-right">Montant</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    
                      <td>1</td>
                      <td>Bill Gates</td>
                      <td>Agoè</td>
                      <td>Segbé</td>
                      <td>7h30min</td>
                      <td className="text-right">250 FCFA</td>
                    </tr>
                    <tr>
                    
                      <td>1</td>
                      <td>Bill Gates</td>
                      <td>Agoè</td>
                      <td>Segbé</td>
                      <td>7h30min</td>
                      <td className="text-right">250 FCFA</td>
                    </tr>
                    <tr>
                     
                      <td>1</td>
                      <td>Bill Gates</td>
                      <td>Agoè</td>
                      <td>Segbé</td>
                      <td>7h30min</td>
                      <td className="text-right">250 FCFA</td>
                    </tr>
                   
                   
                   
                   
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
         
        </Row>
      </div>
    </>
  );
}

export default Utilisateurs;
