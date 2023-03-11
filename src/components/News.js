export default function news({article}) {
  const url = article.url;
  const title = article.title;
  const source = article.source.name;
  const imgSrc = article.urlToImage;

  // console.log(title);

  return (
    <a href={url} target="_blank">
      <div className="space-y-0.5">
        <h6 className="text-sm font-bold">{title}</h6>
        <p className="text-xs font-medium text-gray-500">{source}</p>
        <img className="rounded-xl " width="80" src={imgSrc} alt="" />
      </div>
    </a>
  )
}
