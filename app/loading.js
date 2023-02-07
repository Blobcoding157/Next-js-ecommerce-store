import './loading.scss';

export default function RootLoading() {
  return (
    <div className="container">
      <div className="potion-top">
        <div className="potion-top-line" />
      </div>
      <div className="potion-neck" />
      <div className="potion-body">
        <div className="potion-content">
          <div className="blob-container">
            <div className="blob-one" />
            <div className="blob-two" />
            <div className="blob-three" />
          </div>
        </div>
      </div>
    </div>
  );
}
