export default function getHTMLStructure(html: string) {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
