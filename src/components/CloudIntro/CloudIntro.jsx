// CloudIntro removed per request
// This file intentionally exports null so it's harmless if imported elsewhere.

const CloudIntro = ({onFinish}) => {
  const containerRef = useRef();
  const animTimeoutRef = useRef();

  useEffect(() => {
    // Auto finish after 2.1s + animation
    animTimeoutRef.current = setTimeout(() => {
      if (typeof onFinish === 'function') onFinish();
    }, 2200);
    // Add a quick fade out after the animation to avoid abrupt cut
    setTimeout(()=>{
      if (containerRef.current) containerRef.current.style.pointerEvents = 'auto';
    }, 250);

    return () => clearTimeout(animTimeoutRef.current);
  }, [onFinish]);
  // CloudIntro removed per request - the cloud intro animation was deleted. If you want to restore it later,
  // re-add an implementation in this file or restore from git history.

  export default null;