import React, { Component } from "react";
import { APP_NAME } from "../../constants.js";
import { Helmet } from "react-helmet";
import SiteWrapper from "../../SiteWrapper";

import { Card } from "tabler-react";
import { FAQ, REVIEW } from "../Json-ld";

class Faq extends Component {
  render() {
    return (
      <SiteWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{APP_NAME} - Često postavljana pitanja (FAQ)</title>
          <script type="application/ld+json">{FAQ}</script>
          <script type="application/ld+json">{REVIEW}</script>
        </Helmet>
        <h1>Često postavljana pitanja (FAQ)</h1>
        <Card>
          <Card.Body>
            <Card>
              <Card.Status color="blue" />
              <Card.Header>
                <Card.Title>
                  Koje alate mogu koristiti za izvlačenje nagrada?
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <b>
                  <a href="http://luckydraw.me/">Lucky Draw Simulator</a>
                </b>{" "}
                je izvrstan alat kojemu mnoge tvrtke i pojedinci vjeruju i
                koriste kako bi osigurali pošten i transparentan proces
                izvlačenja. Besplatan je i jednostavan za korištenje, te zahtijeva samo nekoliko konfiguracija da biste odmah započeli.
              </Card.Body>
            </Card>
            <Card>
              <Card.Status color="blue" />
              <Card.Header>
                <Card.Title>Kako radi izvlačenje nagrada?</Card.Title>
              </Card.Header>
              <Card.Body>
                Izvlačenje nagrada je natjecanje u kojem ljudi nasumično dobivaju numerirane listiće i svaki listić ima priliku osvojiti nagradu. Numerirani listić se nasumično odabire i izabrani pobjednik osvaja nagradu.
              </Card.Body>
            </Card>
            <Card>
              <Card.Status color="blue" />
              <Card.Header>
                <Card.Title>Kako održati izvlačenje nagrada?</Card.Title>
              </Card.Header>
              <Card.Body>
                Bilo koja tvrtka ili pojedinac može jednostavno održati izvlačenje nagrada online jednostavnim postavljanjem određenih zahtjeva i pripremom nagrada za pobjednike. Alati poput{" "}
                <b>
                  <a href="http://luckydraw.me/">Lucky Draw Simulator</a>
                </b>{" "}
                se zatim koriste za odabir pobjednika, osiguravajući pošten i transparentan proces izvlačenja.
              </Card.Body>
            </Card>
            <Card>
              <Card.Status color="blue" />
              <Card.Header>
                <Card.Title>Što je dobra nagrada za izvlačenje?</Card.Title>
              </Card.Header>
              <Card.Body>
                Nagrade poput Elektroničkih uređaja, Poklon košara, Sezonskih proizvoda, Televizora, Poklon bonova i Putnih vaučera su popularne ideje za nagrade na izvlačenju.
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </SiteWrapper>
    );
  }
}
export default Faq;
