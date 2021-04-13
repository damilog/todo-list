import React, { useState, useRef } from "react";
import TitleInput from "../../atoms/TitleInput";
import ContentInput from "../../atoms/ContentInput";
import SmallButton from "../../atoms/Buttons/SmallButton";
import Image from "../../atoms/Image";
import closeButton from "../../../images/closeButton.svg";
import ButtonList from "../../atoms/Buttons/ButtonList";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
  position: relative; 
  width: 308px; 
  padding: 16px;
  margin: 16px;
  background: #fff; 
  border-radius: 5px;
`;

const TodoListInput = ({ columnId, id, title, content, toggleActions2, toggleActions }) => {
  const [titleValue, setTitle] = useState(title);
  const [contentValue, setContent] = useState(content);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const onChange = (setState, { target }) => {
    setState(target.value);
  };

  const patchClickHandler = async () => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const a = await axios.patch(
      `/todos?columnId=${columnId}&id=${id}&title=${title}&content=${content}`
    );
    console.log(a);
  };

  return (
    <Div>
      <SmallButton _position="absolute" _right="3px">
        <Image src={closeButton} _width="10px" />
      </SmallButton>
      <TitleInput
        placeholder="제목을 적어주세요"
        onChange={e => onChange(setTitle, e)}
        value={titleValue}
        titleRef={titleRef}
      />
      <ContentInput
        placeholder="내용을 적어주세요"
        onChange={e => onChange(setContent, e)}
        value={contentValue}
        contentRef={contentRef}
      />

      <ButtonList {...{ toggleActions2, patchClickHandler, toggleActions }} />
    </Div>
  );
};

export default TodoListInput;