import { SetStateAction } from "react";
import RadioInput from "./RadioInput/RadioInput";
import { useGetMenuItem } from "./useGetMenuItem";

import "./styles.scss";
import { useAppContext } from "../../context";

const SideMenu = () => {
  const [tags] = useGetMenuItem();
  const { selectedTag, setSelectedTag } = useAppContext();

  const onChange = (value: SetStateAction<string>) => {
    setSelectedTag(value);
  }

  return (
    <div className="side-menu">
      <RadioInput 
        options={tags}
        selectedOption={selectedTag}
        onChange={onChange}
      />
    </div>
  );
};

export default SideMenu;
