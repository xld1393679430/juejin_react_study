import { Alert } from 'antd'
import Code from '@/components/Code'

const Index = () => {

  const code = `
    <img src="https://pic4.zhimg.com/80/v2-89fb06b887fd44c11560c031d6b85437_720w.jpg" fetchpriority={"high"} />
  `
  return (
    <>
      <Alert message="图片添加fetchpriority='high' 提升LCP " type="success"></Alert>
			<Code tab={true}>{code}</Code>

      <img src="https://pic4.zhimg.com/80/v2-89fb06b887fd44c11560c031d6b85437_720w.jpg" fetchpriority={"high"} />
    </>
  );
};

export default Index;
