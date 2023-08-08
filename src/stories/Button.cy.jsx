import React from 'react'
import { Button } from './Button'

describe('<Button />', () => {
  beforeEach(() => {
    cy.mount(<Button label={"Button"} size={"large"} primary={true} />)
  })
  it('renders', () => {
    cy.get('[data-cy=button]')
        .should('exist')
        .invoke('css', 'background')
        .should('include', 'rgb(30, 167, 253)')
  })
})