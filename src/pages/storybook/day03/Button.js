import classNames from "classnames";
import PropTypes from "prop-types";

const Button = (props) => {
  const { children, className, btnType, backgroundColor, style, disabled, ...rest } = props;
  const classes = classNames("btn-default", className, {
    [`btn-${btnType}`]: btnType,
  });

  const styles = {
    ...style,
    backgroundColor,
  };

  return (
    <button {...rest} className={classes} style={styles} disabled={disabled}>
      {children}
    </button>
  );
};

Button.prototype = {
  disabled: PropTypes.bool,
  btnType: PropTypes.oneOf(["primary", "default"]),
  children: PropTypes.string
};

export default Button;
