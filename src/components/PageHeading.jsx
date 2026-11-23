export default function PageHeading({ title, description }) {
  return (
    <div className="page-heading">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}