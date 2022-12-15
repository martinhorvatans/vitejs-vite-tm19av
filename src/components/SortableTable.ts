import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import 'carbon-web-components/es/components/data-table/index.js';

@customElement('ans-sortable-table')
export class SortableTable extends LitElement {
  @property()
  sortable: boolean;
  

  render() {
    return html`
    <bx-table size="short" sort=${this.sortable}>
  <bx-table-head>
    <bx-table-header-row>
      <bx-table-header-cell-skeleton>Name</bx-table-header-cell-skeleton>
      <bx-table-header-cell-skeleton>Tags</bx-table-header-cell-skeleton>
      <bx-table-header-cell-skeleton>LinkIcon</bx-table-header-cell-skeleton>
      <bx-table-header-cell-skeleton>External ID</bx-table-header-cell-skeleton>
      <bx-table-header-cell-skeleton>In Use</bx-table-header-cell-skeleton>
      <bx-table-header-cell-skeleton>Status</bx-table-header-cell-skeleton>
      <bx-table-header-cell-skeleton>Actions</bx-table-header-cell-skeleton>
    </bx-table-header-row>
  </bx-table-head>
  <bx-table-body color-scheme="zebra">
    <bx-table-row>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
    </bx-table-row>
    <bx-table-row>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
      <bx-table-cell></bx-table-cell>
    </bx-table-row>
  </bx-table-body>
</bx-table>
  `;
  }

  static styles = css``;
}