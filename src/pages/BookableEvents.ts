import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '../components/AnsButton';
import '../components/SortableTable';

@customElement('bookable-events')
export class BookableEventsPage extends LitElement {
  render() {
    return html`
    <div id="header"></div>
    <div id="content"></div>
    
    <ans-button kind="primary">Event</ans-button>
    <ans-sortable-table sortable=true></ans-sortable-table>
    <p>This is the bookable events page</p>`;
  }

  static styles = css`
  #header {
    width: 100%;
    height: 200px;
    background-color: gray;
  }
  `;
}
