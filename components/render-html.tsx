import RenderHtml, { HTMLSource } from "react-native-render-html";

interface Props {
  width: number;
  source: HTMLSource;
}

export default function RenderedHtml({ width, source }: Props) {
  return <RenderHtml contentWidth={width} source={source} />;
}
