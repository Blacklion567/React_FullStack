import User from "./ContextAPI/user";
import { MyProvider } from './ContextAPI/index';


const ReactUseRef = () => {

  return (
    <>
      <MyProvider>
        <User />
      </MyProvider>
    </>
  );
};


export default ReactUseRef;
