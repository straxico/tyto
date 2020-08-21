const shouldUseFlex: StackShouldUseFlex = props =>
  props.flex ||
  Object.keys(props)
    .map(
      item =>
        !(
          item === 'children' ||
          item === 'spaceAfter' ||
          item === 'spacing' ||
          item === 'dataTest'
        ),
    )
    .indexOf(true) !== -1;

export default shouldUseFlex;
