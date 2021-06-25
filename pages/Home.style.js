import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  background: #0e141b;
  min-height: 100vh;
  padding: 0 100px;
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid #21262d;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderHeading = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #7e8c9a;
`;

export const Icon = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const SpanText = styled.span`
  color: #7e8c9a;
  font-size: 40px;
`;

export const TrendingRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-top: 50px;
  border-bottom: 1px solid #21262d;
  padding-bottom: 30px;
`;

export const TrendColumn = styled.div`
  height: 100%;
  width: 30%;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const TrendHeading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #f2f5f7;
`;

export const TrendSubHeading = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #7e8c9a;
  margin-left: 50px;
`;

export const NumberText = styled.span`
  font-size: 30px;
  font-weight: 400;
  color: #7e8c9a;
  margin-right: 5px;
  margin-top: -16px;
  line-height: 0;
`;

export const Container = styled.div`
  width: 100%;
  background: #0e141b;
  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Column = styled.div`
  height: 100%;
  &:nth-child(1) {
    border-right: 1px solid #21262d;
    width: 100%;
  }

  &:nth-child(2) {
    width: 50%;
    padding-left: 60px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 740px;
  border: 1px solid #21262d;
  width: 100%;
  border-radius: 5px;
  padding: 10px 20px;
  align-items: flex-start;
  height: fit-content;
  margin-bottom: 20px;

  &:hover {
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid #30363d;
  }
`;

export const CardColumn = styled.div`
  height: 100%;

  &:nth-child(2) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  color: #f2f5f7;
`;

export const SubHeading = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #7e8c9a;
`;

export const ImgWrapper = styled.div`
  width: 250px;
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

export const Text = styled.h4`
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
