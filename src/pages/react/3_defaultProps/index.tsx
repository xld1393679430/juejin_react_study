import React, { FC, ReactNode, memo, ChangeEventHandler, useCallback, ChangeEvent } from "react";
import Test from './Test'

interface IProps {
  title?: string;
  children: ReactNode
}

const Index: FC<IProps> = ({ title, children }) => {

  const handleChange1 = useCallback<ChangeEventHandler<HTMLInputElement>>((event) => {
    console.log(event.target.value, 11)
  }, [])

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, 22)
  }

  const handleImgError = (event) => {
    console.log(event, 33444)
  }

  return (
    <div>
      <p>DefaultProps1</p>
      <p>title: {title}</p>
      <input type="text" onChange={handleChange1} />
      <input type="text" onChange={handleChange2} />
      <hr />
      <Test />
      <hr />
      <img style={{ width: 50, height: 50, backgroundColor: '#ccc' }} src="https://dimg.uat.qa.nt.ctripcorp.com/images/0104512000004sbumE6E7_C_880_350_R5.png?proc=source%2ftrip" onError={handleImgError} alt="" />
    </div>
  );
};

Index.displayName = "DefaultProps";
Index.defaultProps = {
  title: "哈哈哈",
};

export default memo(Index);
