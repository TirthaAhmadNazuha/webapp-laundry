function LoadingPlaceholder(props) {
  return (
    <div className="loading-placeholder" style={{
      'width': props?.width,
      'height': props?.height,
    }}></div>
  );
}

export default LoadingPlaceholder;
