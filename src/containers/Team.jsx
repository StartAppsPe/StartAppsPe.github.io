import React, { Component } from 'react';
import { Grid, Container, Card, Icon, Image } from 'semantic-ui-react'
import { images } from '../assets'

class Team extends Component {

  state = {
    team : [
      {
        name: 'Gabriel Lanata',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'steve'
      },
      {
        name: 'Kevin Salazar',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: 'elliot'
      }      
    ]
  }

  renderPerson = (person) => {
    return (
      <Card centered>
        <Image src={images[person.image]} />
        <Card.Content>
          <Card.Header>
            {person.name}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Joined in 2017
            </span>
          </Card.Meta>
          <Card.Description>
            {person.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    )
  }

  render() {

    const { team } = this.state;

    return (
        <Container fluid className='team-container'>
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              {this.renderPerson(team[0])}
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
            {this.renderPerson(team[1])}
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default Team;
