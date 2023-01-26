import { SpinnerDotted } from "spinners-react";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <SpinnerDotted size={130} thickness={150} speed={100} color="#060f56" />
    </div>
  );
};

export default Loader;
