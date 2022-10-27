import classNames from "classnames";

const Button = (props) => {
  const { children, className, btnType, backgroundColor, style, ...rest } = props
  const classes = classNames("btn-default", className, {
    [`btn-${btnType}`]: btnType,
  });

  const styles = {
    ...style,
    backgroundColor,
  }

  return (
    <button {...rest} className={classes} style={styles}>
      {children}
    </button>
  );
};

export default Button;
