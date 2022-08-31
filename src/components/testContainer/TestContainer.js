import { useInView } from "react-intersection-observer";
import "./TestContainer.scss";

function TestContainer() {
  const [ref, inView] = useInView();

  return (
    <div className="test-container">
      <div className="test-box">이 영역이 보이는 동안은 inView가 false인 것을 확인할 수 있습니다.</div>
      <div className="test-inview" ref={ref}>
        이 영역이 보이면 콘솔에서 inView가 true되는 것을 확인할 수 있습니다.
        {console.log("inView: ", inView.toString())}
      </div>
    </div>
  );
}

export default TestContainer;
