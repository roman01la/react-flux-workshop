function reactComponent() {

  return {

    restrict: 'E',
    replace: true,
    link(scope, elem, attrs) {

      const reactComponent = window[attrs.component];

      function render() {

        ReactDOM.render(
          React.createElement(reactComponent, getProps(scope, attrs, getPropNames(attrs))),
          elem[0]);
      }

      getPropNames(attrs).forEach((propName) => scope.$watch(attrs[propName], render));

      scope.$on('$destroy', () => ReactDOM.unmountComponentAtNode(elem[0]));

      render();
    }
  };
}

angular.module('react', [])
  .directive('reactComponent', [reactComponent]);

////////////

function getProps(scope, attrs, propNames) {

  return propNames.reduce((props, propName) => {
    const evaled = scope.$eval(attrs[propName]);
    const prop = evaled !== undefined ? evaled : attrs[propName];
    props[propName] = angular.isFunction(prop) ? apply(prop, scope) : prop;
    return props;
  }, {});
}

function getPropNames(attrs) {

  return Object.keys(attrs)
    .filter((attr) => attr !== 'component' && !attr.startsWith('$'));
}

function apply(fn, scope) {
  if (fn.wrappedInApply) {
    return fn;
  }
  var wrapped = function() {
    var args = arguments;
    var phase = scope.$root.$$phase;
      if (phase === "$apply" || phase === "$digest") {
        return fn.apply(null, args);
      } else {
        return scope.$apply(function() {
          return fn.apply( null, args );
        });
      }
  };
  wrapped.wrappedInApply = true;
  return wrapped;
}
