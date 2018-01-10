import React, { Component } from 'react';
import { Grid, Container, Header, Image, Sticky, Transition } from 'semantic-ui-react'
import { Default, Mobile } from './App'
import { images } from '../assets'

class Main extends Component {

  state = {
      pages: [
        {
            title: 'Una idea',
            description: 'Construimos y convertimos tu idea en producto',
            image: 'combo'
        }, {
            title: 'Otra idea',
            description: 'Construimos y convertimos tu idea en producto',
            image: 'combo'
        }
      ],
      visible: true,
      current: 0
  }

  componentDidMount() {
    setTimeout(() => { this.changePage(1) }, 5000);
  }

  changePage(index) {
    this.setState({ visible: false })
    setTimeout(() => {
        this.setState({ current: index, visible: true  })
        setTimeout(() => {
            this.changePage(index === this.state.pages.length - 1 ? 0 : index + 1)
        }, 5000)
    }, 500);
  }

  renderPage = (item) => {
      return (
        <Grid verticalAlign='middle'>
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <Header size='huge' textAlign='center'>
                    {item.title}
                    <Header.Subheader>
                    {item.description}
                    </Header.Subheader>
                </Header>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
                <Image src={images[item.image]} size='huge' centered/>
            </Grid.Column>
        </Grid>
      );
  }

  renderDecoration = (active) => {
    return (
        <Sticky context={this.props.contextRef} offset={72} active={active} className='main-decoration'>
            <Grid>
                <Grid.Row columns={6}>
                    <Grid.Column className='item bg-color-1 dark' />
                    <Grid.Column className='item bg-color-2 dark' />
                    <Grid.Column className='item bg-color-3 dark' />
                    <Grid.Column className='item bg-color-4 dark' />
                    <Grid.Column className='item bg-color-5 dark' />
                    <Grid.Column className='item bg-color-6 dark' />
                </Grid.Row>
            </Grid>
        </Sticky>
    );
  }

  render() {

    const { pages, current, visible } = this.state;

    return (
        <Container fluid className="main-container">
            <div className='slides-container'>
                <Transition visible={visible} animation='scale' duration={500}>
                    {this.renderPage(pages[current])}
                </Transition>
            </div>
            <Default>{this.renderDecoration(true)}</Default>
            <Mobile>{this.renderDecoration(false)}</Mobile>
        </Container>
    );
  }
}

export default Main;
