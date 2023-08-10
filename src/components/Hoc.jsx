import React from "react";

function withHoc(Component) {
  const Wrapper = React.forwardRef((props, ref) => {
    return <Component {...props} toggle={() => {}} ref={ref} />;
  });
  return Wrapper;
}

function Hoc() {
  return <div>Hoc</div>;
}

export default withHoc(Hoc);
