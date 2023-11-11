const Props = (props) => {
  return (
    <header>
      <div >Logo</div>
      <input type="text"
        onChange={props.keywords} />
    </header>
  );
};



export default Props;
