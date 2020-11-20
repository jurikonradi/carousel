       // const prevMoveValue = usePrevious(moveValue);
    // function usePrevious(value) {
    //     const ref = useRef();
    //     useEffect(() => {
    //         ref.current = value;
    //     });
    //     return ref.current;
    // };
    
    
    // Mobile (touch screen):

    // let swipeableElement = window;
    // how to use e.target.addEventListener('mousemove', move) ??
    // let swipeableElement = document.getElementById('carousel1');
    // let swipeableElement = document.querySelector('#carousel1');
    // let swipeableElement = document.querySelector('.carousel');

    // useEffect(() => {
    //     swipeableElement.addEventListener('touchstart', onSwipeStart);
    //     swipeableElement.addEventListener('touchmove', onSwipeMove);
    //     swipeableElement.addEventListener('touchend', onSwipeEnd);
    //     swipeableElement.addEventListener('touchcancel', onSwipeEnd);

    //     // clean-up this component
    //     return () => {
    //         swipeableElement.removeEventListener('touchstart', onSwipeStart);
    //         swipeableElement.removeEventListener('touchmove', onSwipeMove);
    //         swipeableElement.removeEventListener('touchend', onSwipeEnd);
    //         swipeableElement.removeEventListener('touchcancel', onSwipeEnd);
    //     }
    // }, []);

    // how to use e.target.addEventListener('mousemove', move) (Drag-Ball-01.js)??