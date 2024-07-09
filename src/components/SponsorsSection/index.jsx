import React from "react";
import { Button, Grid } from 'tabler-react';

import { SPONSORS } from '../../constants';

const SponsorsSection = () => {
  return (
    <>
      <Grid.Row>
        <Grid.Col xs={12} md={8}>
          <h2>Sponzori</h2>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        {SPONSORS.map(function (sponsor, i) {
          return (
            <Grid.Col key={i} xs={12} md={3}>
              <a className="margin-auto" href={sponsor.url}>
                <img src={sponsor.img} alt={sponsor.name} />
                <h3>{sponsor.name}</h3>
              </a>
            </Grid.Col>
          );
        })}
      </Grid.Row>
    </>
  );
};

export default SponsorsSection;
