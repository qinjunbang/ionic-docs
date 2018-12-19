/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';


export namespace Components {

  interface DocsCode {
    'language': string;
  }
  interface DocsCodeAttributes extends StencilHTMLAttributes {
    'language'?: string;
  }

  interface DocsDocument {
    'path': string;
  }
  interface DocsDocumentAttributes extends StencilHTMLAttributes {
    'path'?: string;
  }

  interface DocsMenu {}
  interface DocsMenuAttributes extends StencilHTMLAttributes {}

  interface DocsRoot {}
  interface DocsRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'DocsCode': Components.DocsCode;
    'DocsDocument': Components.DocsDocument;
    'DocsMenu': Components.DocsMenu;
    'DocsRoot': Components.DocsRoot;
  }

  interface StencilIntrinsicElements {
    'docs-code': Components.DocsCodeAttributes;
    'docs-document': Components.DocsDocumentAttributes;
    'docs-menu': Components.DocsMenuAttributes;
    'docs-root': Components.DocsRootAttributes;
  }


  interface HTMLDocsCodeElement extends Components.DocsCode, HTMLStencilElement {}
  var HTMLDocsCodeElement: {
    prototype: HTMLDocsCodeElement;
    new (): HTMLDocsCodeElement;
  };

  interface HTMLDocsDocumentElement extends Components.DocsDocument, HTMLStencilElement {}
  var HTMLDocsDocumentElement: {
    prototype: HTMLDocsDocumentElement;
    new (): HTMLDocsDocumentElement;
  };

  interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {}
  var HTMLDocsMenuElement: {
    prototype: HTMLDocsMenuElement;
    new (): HTMLDocsMenuElement;
  };

  interface HTMLDocsRootElement extends Components.DocsRoot, HTMLStencilElement {}
  var HTMLDocsRootElement: {
    prototype: HTMLDocsRootElement;
    new (): HTMLDocsRootElement;
  };

  interface HTMLElementTagNameMap {
    'docs-code': HTMLDocsCodeElement
    'docs-document': HTMLDocsDocumentElement
    'docs-menu': HTMLDocsMenuElement
    'docs-root': HTMLDocsRootElement
  }

  interface ElementTagNameMap {
    'docs-code': HTMLDocsCodeElement;
    'docs-document': HTMLDocsDocumentElement;
    'docs-menu': HTMLDocsMenuElement;
    'docs-root': HTMLDocsRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
