/* Mixins */

const PureRenderMixin = {

  shouldComponentUpdate(nextProps, nextState) {

    return nextProps.label !== this.props.label;
  }
};

const ChildComponent = React.createClass({

  mixins: [PureRenderMixin],

  _onUpdate() {

    if (this.props.onUpdate) {

      this.props.onUpdate('Message from child');
    }
  },
  render() {

    console.log('Render!');

    return <button onClick={this._onUpdate}>{this.props.label}</button>;
  }
});

window.ChildComponent = ChildComponent;

/* HOC */

// const PureRenderer = (Component) => {
//
//   return React.createClass({
//
//     shouldComponentUpdate(nextProps, nextState) {
//
//       return nextProps.label !== this.props.label;
//     },
//     render() {
//
//       return <Component {...this.props} />;
//     }
//   });
// };
//
// const ChildComponent = ({ label, onUpdate }) => (
//
//   <button onClick={() => onUpdate('Message from child')}>{label}</button>
// );

// window.ChildComponent = PureRenderer(ChildComponent);
