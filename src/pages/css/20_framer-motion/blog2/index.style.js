import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: lightcoral;
`

export const Header = styled.header`
  background: lightgreen;
  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 2;
`;

export const Nav = styled(motion.nav)`
  background-color: lightblue;
  height: 40vh;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link = styled(motion.li)`
  color: white;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
`;

export const SvgBox = styled(motion.div)``;
