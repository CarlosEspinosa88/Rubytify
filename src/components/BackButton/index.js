import React from "react";
import { withRouter } from 'react-router-dom';
import { Button } from './styles'

function BackButton(props) {
  return (
    <Button onClick={props.history.goBack}>Atrás</Button>
  )
}

export default withRouter(BackButton)
