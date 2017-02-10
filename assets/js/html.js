import React, { PropTypes, Component } from 'react'

export default class IndexPage extends Component {

  static get propTypes () {
    return {
      children: PropTypes.any,
      state: PropTypes.obj
    }
  }

  render () {
    return (
      <html>
        <head>
          <title>Trails | Modern Web Framework for Node.js</title>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
          <link rel="stylesheet" href="dist/style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.1.1/normalize.min.css" />
					<script dangerouslySetInnerHTML={{__html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-75758860-3', 'auto');
              ga('send', 'pageview');
            `}} />
        </head>
        <body>
          <div id="app-mount"
              dangerouslySetInnerHTML={{ __html: this.props.children }}>
          </div>
          <script id="app-state"
              dangerouslySetInnerHTML={{ __html: this.props.state }}>
          </script>
          <script src="dist/client.js"></script>
        </body>
      </html>
    )
  }
}