const Page = ({ content = "content", footer = "footer", ...rest }) => {
  return (
    <>
      <header>Header</header>
      <content>{content}</content>
      <footer>{footer}</footer>
    </>
  );
};

export default Page;
