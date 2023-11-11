import { useContext } from "react";
import { MyContext } from "./index";

const UserItem = () => {
  const context = useContext(MyContext);

  return (
    <>
      {context.active
        ? context.users.map((item, index) => (
          <div key={index}>
            <div>Name: {item.name}</div>
          </div>
        )) : null}

      <hr />

      <button onClick={context.toggleActive}>
        Click To Toggle
      </button>
    </>
  );
};

export default UserItem;
