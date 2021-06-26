import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  background: #0e141b;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 50px 200px;
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: 500;
  color: #f2f5f7;
  width: 80%;
  text-align: center;
`;

export const SubHeading = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #7e8c9a;
  line-height: 0;
  text-align: center;
  width: 70%;
  margin-bottom: 60px;
`;

export const ImgWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Topic = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  line-height: 0;
  white-space: 0;
  flex-wrap: wrap;
  border-bottom: 1px solid #21262d;
  padding-top: 10px;
  padding-bottom: 25px;
`;

export const Tag = styled.div`
  background: #21262d;
  padding: 0px 20px;
  border-radius: 50px;
  margin-right: 10px;
  margin-bottom: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export const StoryDesc = styled.h4`
  font-size: 15px;
  font-weight: 400;
  color: #7e8c9a;
`;

export const Button = styled.button`
  font-size: 15px;
  font-weight: 400;
  color: #7e8c9a;
  outline: none;
  border: none;
  background: transparent;
  &:hover {
    transition: all 0.1s ease-in;
    cursor: pointer;
    color: #f5f2f7;
  }
`;
