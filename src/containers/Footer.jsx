import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react'

class Footer extends Component {

  state = {
    social : [
      {
        icon: 'facebook f',
        url: 'https://www.facebook.com/startapps.pe'
      },
      {
        icon: 'twitter',
        url: 'https://www.facebook.com/startapps.pe'
      },
      {
        icon: 'github',
        url: 'https://github.com/startappspe'
      }
    ]
  }

  renderItem = (item, index) => {
    return (
      <li key={'social-' + index}>
        <a href={item.url} rel="noopener noreferrer" target="_blank" className="icon alt">
          <Icon  size='large' name={item.icon} className='social'/>
        </a>
      </li>    
    )
  }

  render() {

    const { social } = this.state;

    return (
      <div className='footer-container'>
        <Container fluid textAlign='center'>
          <h1 className='footer-logo'>StartApps</h1>
          <p>
            Diseñamos apps para startups y empresas de todo tamaño.<br />Comienza tu proyecto con <b>StartApps</b> hoy! <br /> <br />
            <span>Escribenos a:</span> <br />
            <a href="mailto:hola@startapps.pe">hola@startapps.pe</a>
          </p>
          <ul className="footer-icons">
            {social.map((item, index) => this.renderItem(item, index))}
          </ul>
          <p className="footer-copyright">&copy; Copyright 2017 - StartApps</p>
        </Container>
      </div>
    );
  }
}

export default Footer;
