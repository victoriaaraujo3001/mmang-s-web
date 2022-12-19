export default function RenderConditional({ children, isTrue }) {
  return isTrue ? children : null;
}
