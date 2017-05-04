const React = require('react');
const ReactNative = require('react-native');
const {Component, PropTypes} = React;
const {View, StyleSheet, } = ReactNative;


class StaticContainer extends React.Component {
  static propTypes = {
    shouldUpdate: PropTypes.bool,
  };

  shouldComponentUpdate(nextProps: Object): boolean {
    return !!nextProps.shouldUpdate;
  }

  render() {
    let { children } = this.props;
    return children ? React.Children.only(children) : null;
  }
}

const SceneComponent = (Props) => {
  const {shouldUpdated, ...props, } = Props;
  return <View {...props}>
      <StaticContainer shouldUpdate={shouldUpdated}>
        {props.children}
      </StaticContainer>
  </View>;
};

module.exports = SceneComponent;
