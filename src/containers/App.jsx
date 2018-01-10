import React, { Component } from 'react';
import { Responsive, Menu, Image, Sticky } from 'semantic-ui-react'
import { Element, scroller } from 'react-scroll'
import { images } from '../assets'

import Main from './Main'
import Works from './Works'
import Team from './Team'
import Footer from './Footer'

export const Mobile = props => <Responsive {...props} maxWidth={767} />;
export const Default = props => <Responsive {...props} minWidth={768} />;

class App extends Component {

  state = {
    items : [
      {
        key: 'home', 
        name: 'Inicio' 
      }, {
        key: 'works', 
        name: 'Portafolio' 
      }, {
        key: 'team', 
        name: 'Equipo' 
      }, {
        key: 'contacts', 
        name: 'Contáctanos' 
      }
    ]
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleItemClick = (e, { name })  => {
    scroller.scrollTo(name, {
      duration: 1000,
      smooth: true,
      offset: -50
    })
  }

  renderItem = (item) => {
    return (
      <Menu.Item
          key={item.key}
          name={item.key}
          onClick={this.handleItemClick}>
          {item.name}
      </Menu.Item>
    );
  }

  renderMenu = (active) => {

    const { items, contextRef } = this.state

    return (
      <Sticky context={contextRef} className='app-sticky' active={active}>
        <Menu stackable secondary fluid borderless className='app-menu'>
          <Menu.Item>
            <Image src={images['logo-side']} size='small'/>
          </Menu.Item>
          <Menu.Menu position='right'>
            {items.map(item => this.renderItem(item))}
          </Menu.Menu>
        </Menu>
      </Sticky>
    );

  }

  render() {
    
    const { contextRef } = this.state

    return (
      <div className='app-wrapper' ref={this.handleContextRef}>
        <Default>{this.renderMenu(true)}</Default>
        <Mobile>{this.renderMenu(false)}</Mobile>
        <div>
          <Element name="home"><Main contextRef={contextRef}/></Element>
          <Element name="works"><Works /></Element>
          <Element name="team"><Team /></Element>
          <Element name="contacts"><Footer /></Element>
        </div>
      </div>
    );
    
  }
}

export default App;
