const Control = (props) => {
  const { boolean, number, range, object, file, radio, inlineRadio, check, inlineCheck, select, text, color, date, ...rest } = props;
  return (
    <div>
      <p>boolean： {String(boolean)}</p>
      <p>number： {number}</p>
      <p>range： {range}</p>
      <p>object： {JSON.stringify(object)}</p>
      <p>file： {file}</p>
      <p>radio： {radio}</p>
      <p>inlineRadio： {inlineRadio}</p>
      <p>check： {check}</p>
      <p>inlineCheck： {inlineCheck}</p>
      <p>select： {select}</p>
      <p>text： {text}</p>
      <p>color： {color}</p>
      <p>date： {date}</p>
    </div>
  );
};

export default Control;
