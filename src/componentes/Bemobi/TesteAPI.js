import React from 'react';
import instancia from '../request';
import constante from '../../constantes/constantes';

// Style
import './TesteAPI.css';

// Componentes Visuais
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class TesteAPI extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      originalURL: '',
      alias: '',
      url: ''
    }
  }

  shortner(data) {
    instancia.put('/shortner/', data)
      .then(res => {
        let url = res.data.url.substring(20);
        url = `${constante.URL_API}${url}`;
        this.setState({
          originalURL: '',
          alias: '',
          url: ''
        })
        this.setState({...this.state, url});
      });
  }
  
  changes(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  
  render() {
    return (
      <Grid container direction="column" justify="center" alignItems="center" className="rootLogin">
        <Card className="cardLogin" >
          <CardContent>
            <Grid container justify="center" alignItems="center">
              <Grid container direction="column" justify="center" alignItems="center">
                <TextField 
                  name="originalURL" 
                  onChange={(e) => this.changes(e)} 
                  value={this.state.originalURL} 
                  item="true" 
                  xs={12} 
                  label="URL Original" />
                <TextField 
                  name="alias" 
                  onChange={(e) => this.changes(e)} 
                  value={this.state.alias} 
                  item="true" 
                  xs={12} 
                  label="Alias" />
                <Grid className="button">
                  <Button 
                    onClick={() => this.shortner({originalURL: this.state.originalURL, alias: this.state.alias})} 
                    item="true" 
                    xs={12} 
                    color="primary" >
                    Encurtar
                  </Button>
                </Grid>
              </Grid>
              <Typography variant="h4" >{this.state.url}</Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    )
  }
}

export default TesteAPI;