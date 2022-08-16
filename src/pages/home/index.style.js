import styled from "styled-components";

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Red = styled.div`
  color: red;
`;

export const MultyLineClamp = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(porps) => porps.lines || 2};
  line-clamp: ${(porps) => porps.lines || 2};
  word-break: break-word;
  white-space: normal;
`;

export const Ttile = styled(MultyLineClamp)`
  width: 200px;
`;
