import React, { Component } from 'react';
import { Grid, Container, Image, Header, Button } from 'semantic-ui-react'
import { images } from '../assets'

class Works extends Component {

  state = {
    items: [
      {
        title: 'Universidad de Lima',
        descripcion: 'Portal movil oficial que facilita el acceso a noticias de la universidad, mapas, servicios de intranet y aula virtual.',
        androidUrl: 'https://play.google.com/store/apps/details?id=pe.edu.ulima',
        iosUrl: 'https://itunes.apple.com/pe/app/ulima-app/id879120306',
        image: 'combo',
        bg: 'bg-color-2'
      },
      {
        title: 'Aprils',
        descripcion: 'Sistema de rastreo de buses en tiempo real con notificaciones creado para la asociación de propietarios de Asia.',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.aprils.aprils',
        iosUrl: 'https://itunes.apple.com/pe/app/aprils-bus/id797833461',
        image: 'combo',
        bg: 'bg-color-4'
      }
    ]
  }

  handleBadgeClick = (e) => {
    const url = e.currentTarget.getAttribute('data-url')
    var win = window.open(url, '_blank');
    win.focus();
  }

  renderItem = (item, index) => {
    const style = 'item-container ' + item.bg;
    const reversed = index % 2 === 0 ? 'computer' : 'mobile';
    return (
      <div className={style} key={index}>
        <Container fluid>
          <Grid className='full-height' verticalAlign='middle' reversed={reversed}>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                  <Header size='huge' inverted className='item-header'>
                      {item.title}
                      <Header.Subheader className='item-description'>
                        {item.descripcion}
                      </Header.Subheader>
                  </Header>
                  <div>
                    <Button 
                      content='Android' 
                      icon='android' 
                      labelPosition='left' 
                      className='badge-button' 
                      data-url={item.androidUrl} 
                      onClick={this.handleBadgeClick} />
                    <Button 
                      content='iOS' 
                      icon='apple' 
                      labelPosition='left' 
                      className='badge-button' 
                      data-url={item.iosUrl} 
                      onClick={this.handleBadgeClick} />
                  </div>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={8} computer={8}>
                  <Image src={images[item.image]} centered size='huge'/>
              </Grid.Column>
          </Grid>
        </Container>
      </div> 
    )
  };

  render() {

    const { items } = this.state; 

    return (
        <div>
          {items.map((item, index) => this.renderItem(item, index) )}
        </div>
    );
  }
}

export default Works;
